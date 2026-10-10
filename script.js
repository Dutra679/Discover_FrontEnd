const page = document.documentElement;
const themeButton = document.querySelector("#theme-toggle");
const profileImage = document.querySelector("#profile img");

function applyTheme(isLight) {
  page.classList.toggle("light", isLight);
  themeButton.setAttribute("aria-pressed", String(isLight));
  themeButton.setAttribute("title", isLight ? "Ativar tema escuro" : "Ativar tema claro");
  profileImage.setAttribute("src", isLight ? "./assets/avatar-light.svg" : "./assets/avatar-dark.svg");
  profileImage.setAttribute(
    "alt",
    `Avatar ilustrado de Dutra com as iniciais DU, em tema ${isLight ? "claro" : "escuro"}`,
  );
}

function toggleMode() {
  const isLight = !page.classList.contains("light");
  applyTheme(isLight);

  try {
    localStorage.setItem("devlinks-theme", isLight ? "light" : "dark");
  } catch {
    // O botão continua funcionando quando o navegador bloqueia o armazenamento.
  }
}

try {
  applyTheme(localStorage.getItem("devlinks-theme") === "light");
} catch {
  applyTheme(false);
}

themeButton.addEventListener("click", toggleMode);
