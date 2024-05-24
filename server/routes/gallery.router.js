const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const photoID = req.params.id;
  console.log('checking photoID', photoID);
  const sqlText = `UPDATE gallery SET "likes" = likes+1 WHERE id=$1;`;
  pool
    .query(sqlText, [photoID])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.sendStatus(500);
      console.log(`error liking post`, error);
    });
});

// PUT to toggle image
// router.put('/toggle/:id', (req, res) => {
//   const photoID = req.params.id;

// })

// GET /gallery
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM gallery ORDER BY title ASC;`;
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
