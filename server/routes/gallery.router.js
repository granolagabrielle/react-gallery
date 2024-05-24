const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM gallery;`;
  pool
    .query(sqlText)
    .then((result) => {
      console.log(`got photos from the server:`, result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`error grabbing photos ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
