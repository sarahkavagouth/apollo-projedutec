const Player = require("../models/Players");

exports.createPlayer = async (req, res) => {
  const { fullName, email, birthDate, username, password, score } = req.body;
  try {
    const playerId = await Player.create(
      fullName,
      email,
      birthDate,
      username,
      password,
      score
    );
    res.status(201).json({ playerId });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar jogador" });
  }
};

exports.listPlayers = async (req, res) => {
  try {
    const players = await Player.getAll();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar jogadores" });
  }
};

exports.incrementScore = async (req, res) => {
  const { playerId } = req.params;
  try {
    const result = await Player.incrementScore(playerId);
    if (result) {
      res.status(200).json({ message: "Score incrementado com sucesso!" });
    } else {
      res.status(404).json({ error: "Jogador não encontrado!" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao incrementar o score" });
  }
};
