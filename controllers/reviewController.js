const db = require('../libs/db');

exports.getAllReviews = (req, res) => {
  const sql = 'SELECT * FROM reviews';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ data: rows });
  });
};

exports.createReview = (req, res) => {
  const { customer_name, customer_job, text } = req.body;

  if (!customer_name || !customer_job || !text) {
    return res.status(400).json({ error: 'Campi obbligatori mancanti.' });
  }

  const query = `
    INSERT INTO reviews (customer_name, customer_job, text)
    VALUES (?, ?, ?)
  `;

  db.run(query, [customer_name, customer_job, text], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to create review.' });
    }

    res.status(201).json({
      id: this.lastID,
      customer_name,
      customer_job,
      text
    });
  });
};
