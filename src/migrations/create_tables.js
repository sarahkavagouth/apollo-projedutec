const db = require("../config/db");

async function createTables() {
  try {
    await db.query(`
            CREATE TABLE IF NOT EXISTS admins (
                id INT AUTO_INCREMENT PRIMARY KEY,
                email VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                permission_level INT DEFAULT 1
            )
        `);

    console.log('💼 Tabela "admins" criada com sucesso.');

    await db.query(`
            CREATE TABLE IF NOT EXISTS players (
                id INT AUTO_INCREMENT PRIMARY KEY,
                full_name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                birth_date DATE,
                username VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                score INT DEFAULT 0
            )
        `);

    console.log('👥 Tabela "players" criada com sucesso.');

    await db.query(`
      CREATE TABLE IF NOT EXISTS quizzes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT
      )
    `);
    console.log('🔡 Tabela "quizzes" criada com sucesso.');

    await db.query(`
      CREATE TABLE IF NOT EXISTS questions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        quiz_id INT,
        question_text TEXT NOT NULL,
        FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
      )
    `);
    console.log('✏️  Tabela "questions" criada com sucesso.');

    await db.query(`
      CREATE TABLE IF NOT EXISTS answers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        question_id INT,
        answer_text TEXT NOT NULL,
        is_correct BOOLEAN NOT NULL DEFAULT FALSE,
        FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
      )
    `);
    console.log('📝 Tabela "answers" criada com sucesso.');

    db.end();
  } catch (error) {
    console.error("Erro ao criar tabelas:", error);
    db.end();
  }
}

createTables();
