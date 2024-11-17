const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  const chalk = (await import("chalk")).default;

  console.log(
    chalk.bgBlue(`   ✅ Servidor rodando com sucesso na porta ${PORT} 🚀  `)
  );
});
