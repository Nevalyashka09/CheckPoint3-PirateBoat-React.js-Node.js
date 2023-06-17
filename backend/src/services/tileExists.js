const models = require("../models");

const isTileExists = async (req, res, next) => {
  const tiles = req.body;

  models.tile
    .isTileExist(tiles)
    .then((tile) => {
      if (tile[0].length > 0) {
        console.error(tile[0]);
        next();
      } else {
        console.error(tile[0]);
        res.status(404).send("Not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  isTileExists,
};
