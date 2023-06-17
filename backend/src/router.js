const express = require("express");

const router = express.Router();

const tilesControllers = require("./controllers/tilesControllers");
const boatsControllers = require("./controllers/boatsControllers");
const gamesControllers = require("./controllers/gamesControllers");

const { isTileExists } = require("./services/tileExists");

router.get("/tiles", tilesControllers.findAllTiles);

router.get("/boats", boatsControllers.findBoatsByNameOrAll);
router.get("/boats/:id", boatsControllers.findBoatById);

router.put("/boats/:id", isTileExists, boatsControllers.updateBoat);

router.post("/games", gamesControllers.resetBoat);

module.exports = router;
