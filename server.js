const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('RunFlow Database API is running');
});

app.get('/runners', (req, res) => {
  const query = 'SELECT * FROM runners';

  db.all(query, [], (error, rows) => {
    if (error) {
      return res.status(500).json({
        message: 'Error fetching runners',
      });
    }

    res.status(200).json(rows);
  });
});

app.get('/runners/:id', (req, res) => {
  const id = req.params.id;

  const query = 'SELECT * FROM runners WHERE id = ?';

  db.get(query, [id], (error, row) => {
    if (error) {
      return res.status(500).json({
        message: 'Error fetching runner',
      });
    }

    if (!row) {
      return res.status(404).json({
        message: 'Runner not found',
      });
    }

    res.status(200).json(row);
  });
});

app.post('/runners', (req, res) => {
  const { name, goal } = req.body;

  if (!name || !goal) {
    return res.status(400).json({
      message: 'Name and goal are required',
    });
  }

  const query = 'INSERT INTO runners (name, goal) VALUES (?, ?)';

  db.run(query, [name, goal], function (error) {
    if (error) {
      return res.status(500).json({
        message: 'Error creating runner',
      });
    }

    res.status(201).json({
      message: 'Runner created sucessfully',
      runner: {
        id: this.lastID,
        name,
        goal,
      },
    });
  });
});

app.put('/runners/:id', (req, res) => {
  const id = req.params.id;
  const { name, goal } = req.body;

  if (!name || !goal) {
    return res.status(400).json({
      message: 'Name and goal are required',
    });
  }

  const query = 'UPDATE runners SET name = ?, goal = ? WHERE id = ?';

  db.run(query, [name, goal, id], function (error) {
    if (error) {
      return res.status(500).json({
        message: 'Error updating runner',
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({
        message: 'Runner not found',
      });
    }

    res.status(200).json({
      message: 'Runner update successfully',
    });
  });
});

app.delete('/runners/:id', (req, res) => {
  const id = req.params.id;

  const query = 'DELETE FROM runners WHERE id = ?';

  db.run(query, [id], function (error) {
    if (error) {
      return res.status(500).json({
        message: 'Error deleting runner',
      });
    }

    if (this.changes === 0) {
      return res.status(404).json({
        message: 'Runner not found',
      });
    }

    res.status(200).json({
      message: 'Runner deleted successfully',
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
