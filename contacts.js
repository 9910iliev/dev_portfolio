const contentContacts = {
  bg: {
    navAbout: "За мен",
    navProjects: "Проекти",
    navContact: "Контакт",
    contactsHeading: "Контакти",
    contactIntro: "Свържете се с мен чрез социалните мрежи:",
    socialProfiles: [
      { name: "Email", url: "mailto:iliev201299@gmail.com" },
      { name: "GitHub", url: "https://github.com/9910iliev" },
      { name: "Instagram", url: "https://www.instagram.com/iliev.angel10/" },
      { name: "Guru", url: "https://www.guru.com/pro/dashboard.aspx" }
    ]
  },
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    contactsHeading: "Contacts",
    contactIntro: "Reach out to me via social media:",
    socialProfiles: [
      { name: "Email", url: "mailto:iliev201299@gmail.com" },
      { name: "GitHub", url: "https://github.com/9910iliev" },
      { name: "Instagram", url: "https://www.instagram.com/iliev.angel10/" },
      { name: "Guru", url: "https://www.guru.com/pro/dashboard.aspx" }
    ]
  }
};

function getLang() {
  return localStorage.getItem("lang") || "bg";
}

function setLang(newLang) {
  localStorage.setItem("lang", newLang);
}

function updateLanguageContacts(lang) {
  const content = contentContacts[lang];

  document.getElementById("contacts-heading").textContent = content.contactsHeading;
  document.getElementById("contact-intro").textContent = content.contactIntro;

  const navAbout = document.getElementById("nav-about");
  const navProjects = document.getElementById("nav-projects");
  const navContact = document.getElementById("nav-contact");

  if (navAbout) {
    navAbout.textContent = content.navAbout;
    navAbout.href = `index.html?lang=${lang}#about-section`;
  }

  if (navProjects) {
    navProjects.textContent = content.navProjects;
    navProjects.href = `projects.html?lang=${lang}#projects-section`;
  }

  if (navContact) {
    navContact.textContent = content.navContact;
    navContact.href = `contacts.html?lang=${lang}#contact-section`;
  }

  const socialList = document.getElementById("social-links");
  if (socialList) {
    socialList.innerHTML = "";
    content.socialProfiles.forEach(profile => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${profile.url}" target="_blank" rel="noopener noreferrer">${profile.name}</a>`;
      socialList.appendChild(li);
    });
  }

  const langText = document.getElementById("lang-text");
  const langFlag = document.getElementById("lang-flag");
  if (langText) langText.textContent = lang.toUpperCase();
  if (langFlag) {
    langFlag.src = lang === "bg" ? "images/bg-flag.png" : "images/en-flag.png";
    langFlag.alt = lang === "bg" ? "Български флаг" : "English flag";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();
  updateLanguageContacts(lang);

  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const newLang = getLang() === "bg" ? "en" : "bg";
      setLang(newLang);
      updateLanguageContacts(newLang); 
  }}}
