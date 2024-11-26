document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  function checkHeaderColor() {
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= 100) {
      header.classList.add("black-bg");
    } else {
      header.classList.remove("black-bg");
    }
  }

  window.addEventListener("scroll", checkHeaderColor);
  checkHeaderColor();
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {
      fullName: formData.get("Nome Completo"),
      email: formData.get("Email"),
      birthDate: formData.get("Data de nascimento"),
      username: formData.get("username"),
      password: formData.get("password"),
      score: 0,
    };

    try {
      const response = await fetch("http://localhost:3000/api/player", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Resposta da API:", result);
        alert("Cadastro realizado com sucesso!");
      } else {
        const error = await response.json();
        console.error("Erro ao cadastrar:", error);
        alert("Erro ao cadastrar. Tente novamente.");
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
      alert("Erro inesperado. Verifique sua conexão.");
    }
  });
});
