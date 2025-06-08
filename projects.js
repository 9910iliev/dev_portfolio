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
  title_bg: "AI чатбот с Flask и DialoGPT",
  title_en: "AI Chatbot with Flask and DialoGPT",
  description_bg: `
    <strong>AI чатбот с Flask и Hugging Face DialoGPT</strong> е леко уеб приложение за водене на разговор, създадено с Python (Flask) и модела DialoGPT-medium на Hugging Face. Приема потребителски вход и генерира интелигентни отговори според контекста.

    Проектът демонстрира как може да се внедри разговорен AI модел като уеб услуга с изчистен потребителски интерфейс.

    Чатботът използва модела DialoGPT-medium на Microsoft — трансформър модел, дообучен върху милиони Reddit разговори. Той поддържа логика в диалога и следи контекста.

    Фоновата логика е изградена с Flask за обслужване на потребителски заявки и API, а интерфейсът използва HTML и JavaScript за интеракция в реално време. Макар че отговорите обикновено са адекватни и интересни, поради генеративния характер на модела е възможно понякога да се появят неочаквани или неуместни отговори.
  `,
  description_en: `
    <strong>AI Chatbot with Flask and Hugging Face DialoGPT</strong> is a lightweight conversational web application built with Python (Flask) and the DialoGPT-medium model by Hugging Face. It accepts user input and generates intelligent responses based on context.

    This project showcases the deployment of a conversational AI model as a responsive web service with a simple interface.

    The chatbot is powered by Microsoft’s DialoGPT-medium — a transformer-based model fine-tuned on millions of Reddit conversations. It handles dialogue flow and can maintain conversational context.

    The backend uses Flask to serve the chatbot and manage API requests, while the frontend consists of HTML and JavaScript that allow real-time user interaction. Although the model generally produces relevant and engaging responses, occasional nonsensical outputs are possible due to its generative nature.
  `,
  images: [
    "images/chatbot-1.png",
    "images/chatbot-2.png",
    "images/chatbot-3.png"
  ]
},

{
  title_bg: "YouTube Downloader Flask приложение",
  title_en: "YouTube Downloader Flask Application",
  description_bg: `
    Леко и ефективно уеб приложение, базирано на Flask, което позволява на потребителите да свалят видеоклипове и аудиофайлове от YouTube в MP4 (видео) и MP3 (аудио) формати чрез използването на <strong>yt-dlp</strong> и <strong>ffmpeg</strong>.

    <br><br><strong>Характеристики:</strong>
    <ul>
      <li>Въвеждане на YouTube URL за изтегляне на съдържание</li>
      <li>Избор на формат за сваляне: MP4 (видео) или MP3 (аудио)</li>
      <li>Показва статус съобщения и индикатор за напредъка (симулиран)</li>
      <li>Автоматично стартира изтеглянето на файла след приключване</li>
    </ul>

    <br><strong>Изисквания:</strong>
    <ul>
      <li>Python 3.7 или по-нова версия</li>
      <li><strong>ffmpeg</strong> - мултимедийна рамка за обработка на аудио и видео</li>
      <li><strong>yt-dlp</strong> - команден инструмент за сваляне на видеоклипове</li>
    </ul>
  `,
  description_en: `
    A lightweight and efficient Flask-based web application that enables users to download YouTube videos and audio files in MP4 (video) and MP3 (audio) formats using <strong>yt-dlp</strong> and <strong>ffmpeg</strong>.

    <br><br><strong>Features:</strong>
    <ul>
      <li>Enter a YouTube URL to download content</li>
      <li>Select download format: MP4 (video) or MP3 (audio)</li>
      <li>Displays status messages and a progress bar (simulated)</li>
      <li>Automatically triggers file download upon completion</li>
    </ul>

    <br><strong>Requirements:</strong>
    <ul>
      <li>Python 3.7 or higher</li>
      <li><strong>ffmpeg</strong> - multimedia framework for audio and video processing</li>
      <li><strong>yt-dlp</strong> - command-line tool for downloading videos</li>
    </ul>
  `,
  images: [
    "images/youtube-downloader-1.png",
    "images/youtube-downloader-2.png",
    "images/youtube-downloader-3.png"
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
  },

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
  
];

function getLang() {
  return localStorage.getItem("lang") || "bg";
}

function updateLanguage(lang) {

  document.getElementById("nav-about").textContent = content[lang].navAbout;
  document.getElementById("nav-projects").textContent = content[lang].navProjects;
  document.getElementById("nav-contact").textContent = content[lang].navContact;


  document.getElementById("projects-heading").textContent = content[lang].projectsHeading;


  const toggleBtn = document.getElementById("language-toggle");
  if (toggleBtn) {
    toggleBtn.checked = (lang === "en");
  }


  document.getElementById("nav-about").href = `index.html?lang=${lang}#about-section`;
  document.getElementById("nav-projects").href = `projects.html?lang=${lang}#projects-section`;
  document.getElementById("nav-contact").href = `contacts.html?lang=${lang}#contact-section`;

  renderProjects(lang);
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
    if (!slideshow) return;

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


  const toggleBtn = document.getElementById("language-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("change", (e) => {
      const newLang = e.target.checked ? "en" : "bg";
      localStorage.setItem("lang", newLang);
      updateLanguage(newLang);
    });
  }
});
