const db = require("../config/db");

const Admin = {
  create: async (email, password, permissionLevel = 1) => {
    const [result] = await db.query(
      "INSERT INTO admins (email, password, permission_level) VALUES (?, ?, ?)",
      [email, password, permissionLevel]
    );
    return result.insertId;
  },
  findByEmail: async (email) => {
    const [rows] = await db.query("SELECT * FROM admins WHERE email = ?", [
      email,
    ]);
    return rows[0];
  },
};

module.exports = Admin;
