const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");

router.post("/player", playerController.createPlayer);
router.get("/players", playerController.listPlayers);

router.put("/players/:playerId/score", playerController.incrementScore);

module.exports = router;
