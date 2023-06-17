const models = require("../models");

const resetBoat = (req, res) => {
  const boat = req.body;
  boat.id = parseInt(req.params.id, 10);
  models.boat
    .reset(boat)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  resetBoat,
};
