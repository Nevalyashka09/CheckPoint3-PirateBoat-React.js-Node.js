const models = require("../models");

const findAllTiles = (req, res) => {
  models.tile
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  findAllTiles,
};
