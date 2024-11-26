const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "sql10.freesqldatabase.com",
  user: "sql10747463",
  password: "Es4Qvf9bb4",
  database: "sql10747463",
  port: 3306,
});

(async () => {
  try {
    const connection = await pool.getConnection();
    const chalk = (await import("chalk")).default;

    console.log(
      chalk.bgBlueBright(
        "   ✅ Conectado ao banco de dados com sucesso! 🚀    "
      )
    );
    connection.release();
  } catch (error) {
    const chalk = (await import("chalk")).default;

    console.error(
      chalk.bgRed("❌ Erro ao conectar ao banco de dados:", error.message)
    );
  }
})();

module.exports = pool;
