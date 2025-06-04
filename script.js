const content = {
  bg: {
    navAbout: "За мен",
    navProjects: "Проекти",
    navContact: "Контакт",
    greeting: "Здравейте, аз съм Ангел Илиев",
    aboutHeading: "За мен",
    aboutText: `
      <p>Казвам се Ангел Илиев и съм софтуерен разработчик с интереси в автоматизацията, уеб технологиите и разработването на практични софтуерни решения. Знанията и уменията ми, особено в областта на Python програмирането, са придобити чрез обучението ми в SoftUni, където продължавам да се развивам и усъвършенствам.</p>

      <p>Работя с Python, HTML, CSS и JavaScript и създавам:</p>
      <ul>
        <li>Скриптове за автоматизация на задачи и процеси</li>
        <li>Уеб инструменти за scrape-ване, обработка и визуализация на данни</li>
        <li>Малки и функционални уеб приложения</li>
        <li>Софтуерни решения, подпомагащи офис дейности и бизнес процеси</li>

      <p>Стремя се към изграждане на практични, стабилни и лесни за използване решения, като винаги поставям фокус върху качеството на кода и нуждите на крайния потребител.</p>
    `
  },
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    greeting: "Hello, I’m Angel Iliev",
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

function updateLanguage(lang) {
  document.getElementById("greeting").textContent = content[lang].greeting;
  document.getElementById("about-heading").textContent = content[lang].aboutHeading;
  document.getElementById("about-text").innerHTML = content[lang].aboutText;
  document.getElementById("lang-toggle").textContent = lang === "bg" ? "EN" : "BG";

  document.getElementById("nav-about").textContent = content[lang].navAbout;
  document.getElementById("nav-projects").textContent = content[lang].navProjects;
  document.getElementById("nav-contact").textContent = content[lang].navContact;

  document.getElementById("nav-about").href = `index.html?lang=${lang}#about-section`;
  document.getElementById("nav-projects").href = `projects.html?lang=${lang}`;
  document.getElementById("nav-contact").href = `index.html?lang=${lang}#contact-section`;
  document.getElementById("nav-contact").href = `contacts.html?lang=${lang}#contact-section`;

}

const currentLang = getLang();
updateLanguage(currentLang);

document.getElementById("lang-toggle").addEventListener("click", () => {
  const newLang = currentLang === "bg" ? "en" : "bg";
  setLang(newLang);
});
