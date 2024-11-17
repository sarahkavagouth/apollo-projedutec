const Admin = require("../models/Admin");

exports.createAdmin = async (req, res) => {
  const { email, password, permissionLevel } = req.body;
  try {
    const adminId = await Admin.create(email, password, permissionLevel);
    res.status(201).json({ adminId });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar admin" });
  }
};
