// script.js

const content = {
  bg: {
    navAbout: "За мен",
    navProjects: "Проекти",
    navContact: "Контакт",
    aboutHeading: "За мен",
    aboutText: `
      <p>Казвам се Ангел Илиев и съм софтуерен разработчик с интереси в автоматизацията, уеб технологиите и разработването на практични софтуерни решения. Знанията и уменията ми, особено в областта на Python програмирането, са придобити чрез обучението ми в SoftUni, където продължавам да се развивам и усъвършенствам.</p>

      <p>Работя с Python, HTML, CSS и JavaScript и създавам:</p>
      <ul>
        <li>Скриптове за автоматизация на задачи и процеси</li>
        <li>Уеб инструменти за scrape-ване, обработка и визуализация на данни</li>
        <li>Малки и функционални уеб приложения</li>
        <li>Софтуерни решения, подпомагащи офис дейности и бизнес процеси</li>
      </ul>

      <p>Стремя се към изграждане на практични, стабилни и лесни за използване решения, като винаги поставям фокус върху качеството на кода и нуждите на крайния потребител.</p>
    `
  },
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    aboutHeading: "About Me",
    aboutText: `
      <p>My name is Angel Iliev, and I’m a software developer passionate about automation, web technologies, and building practical software solutions. My skills, especially in Python development, come from my training at SoftUni, where I continue to grow and improve.</p>

      <p>I work with Python, HTML, CSS, and JavaScript to build:</p>
      <ul>
        <li>Automation scripts for tasks and workflows</li>
        <li>Web tools for scraping, processing, and visualizing data</li>
        <li>Small and functional web applications</li>
        <li>Software solutions that support office and business processes</li>
      </ul>

      <p>I aim to create practical, stable, and user-friendly solutions, always focusing on code quality and real user needs.</p>
    `
  }
};

function getLang() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  const savedLang = localStorage.getItem("lang");
  const lang = urlLang || savedLang || "bg";

  if (urlLang && urlLang !== savedLang) {
    localStorage.setItem("lang", urlLang);
  }
  return lang;
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  // Опционално: може да обновиш URL с параметър lang, ако искаш
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, '', url);
}

function updateLanguage(lang) {
  const aboutHeading = document.getElementById("about-heading");
  if (aboutHeading) aboutHeading.textContent = content[lang].aboutHeading;

  const aboutText = document.getElementById("about-text");
  if (aboutText) aboutText.innerHTML = content[lang].aboutText;

  const navAbout = document.getElementById("nav-about");
  if (navAbout) {
    navAbout.textContent = content[lang].navAbout;
    navAbout.href = `index.html?lang=${lang}#about-section`;
  }

  const navProjects = document.getElementById("nav-projects");
  if (navProjects) {
    navProjects.textContent = content[lang].navProjects;
    navProjects.href = `projects.html?lang=${lang}`;
  }

  const navContact = document.getElementById("nav-contact");
  if (navContact) {
    navContact.textContent = content[lang].navContact;
    navContact.href = `contacts.html?lang=${lang}#contact-section`;
  }

  const toggle = document.getElementById("language-toggle");
  if (toggle) {
    toggle.checked = (lang === "en");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const currentLang = getLang();
  updateLanguage(currentLang);

  const toggle = document.getElementById("language-toggle");
  if (toggle) {
    toggle.addEventListener("change", () => {
      const newLang = toggle.checked ? "en" : "bg";
      setLang(newLang);
      updateLanguage(newLang);
    });
  }
});
