const content = {
  bg: {
    navAbout: "За мен",
    navProjects: "Проекти",
    navContact: "Контакт",
    projectsHeading: "Проекти",
  },
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    projectsHeading: "Projects",
  }
};

const projects = [
  {
    title_bg: "Container Calculator",
    title_en: "Container Calculator",
    description_bg: `
      Сред моите проекти е <strong>„Container Calculator“</strong> — уеб приложение, което изчислява колко от обема на стандартен контейнер ще бъде запълнен с продукти.
      Поддържа 20-футов, 40-футов и High Cube контейнери. Използвани технологии: Python и HTML.
    `,
    description_en: `
      One of my projects is <strong>“Container Calculator”</strong> — a web app that calculates the volume occupied in standard shipping containers.
      Supports 20ft, 40ft, and High Cube containers. Built with Python and HTML.
    `,
    images: [
      "images/container-calculator-1.png",
      "images/container-calculator-2.png",
      "images/container-calculator-3.png"
    ]
  },
  {
    title_bg: "Social Media Scraper",
    title_en: "Social Media Scraper",
    description_bg: `
      <strong>Social Media Scraper</strong> е уеб приложение, създадено с JavaScript, HTML, CSS и Python, което извлича неактивни последователи от TikTok и Instagram. 
      Улеснява анализа на аудиторията и оптимизацията на маркетинг стратегии.
    `,
    description_en: `
      <strong>Social Media Scraper</strong> is a web app built with JavaScript, HTML, CSS, and Python that extracts inactive followers from TikTok and Instagram.
      It facilitates audience analysis and marketing optimization.
    `,
    images: [
      "images/insta.png",
      "images/tiktok.png"
    ]
  }
];

function getLang() {
  const params = new URLSearchParams(window.location.search);
  return params.get("lang") || "bg";
}

function setLang(newLang) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", newLang);
  window.location.href = url.toString();
}

function updateLanguage(lang) {
  document.getElementById("projects-heading").textContent = content[lang].projectsHeading;
  document.getElementById("lang-toggle").textContent = lang === "bg" ? "EN" : "BG";

  document.getElementById("nav-about").textContent = content[lang].navAbout;
  document.getElementById("nav-projects").textContent = content[lang].navProjects;
  document.getElementById("nav-contact").textContent = content[lang].navContact;

  document.getElementById("nav-about").href = `index.html?lang=${lang}#about-section`;
  document.getElementById("nav-projects").href = `projects.html?lang=${lang}#projects-section`;
  document.getElementById("nav-contact").href = `index.html?lang=${lang}#contact-section`;
  document.getElementById("nav-contact").href = `contacts.html?lang=${lang}#contact-section`;

}

function renderProjects(lang = "bg") {
  const container = document.getElementById("projects-list");
  container.innerHTML = "";

  projects.forEach((project, index) => {
    const title = lang === "en" ? project.title_en : project.title_bg;
    const desc = lang === "en" ? project.description_en : project.description_bg;

    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <h2>${title}</h2>
      <p>${desc}</p>
      <div class="slideshow-container" data-project-index="${index}">
        <img src="${project.images[0]}" alt="${title}" class="slide-image" />
        <button class="prev-btn" aria-label="Previous image">Prev</button>
        <button class="next-btn" aria-label="Next image">Next</button>
      </div>
    `;

    container.appendChild(card);
  });

  projects.forEach((project, index) => {
    let currentSlide = 0;
    const slideshow = document.querySelector(`.slideshow-container[data-project-index="${index}"]`);
    const img = slideshow.querySelector(".slide-image");
    const prevBtn = slideshow.querySelector(".prev-btn");
    const nextBtn = slideshow.querySelector(".next-btn");

    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + project.images.length) % project.images.length;
      img.src = project.images[currentSlide];
    });

    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % project.images.length;
      img.src = project.images[currentSlide];
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();
  updateLanguage(lang);
  renderProjects(lang);

  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const newLang = getLang() === "bg" ? "en" : "bg";
      setLang(newLang);
    });
  }
});
