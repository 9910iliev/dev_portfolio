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
  const params = new URLSearchParams(window.location.search);
  return params.get("lang") || "bg";
}

function setLang(newLang) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", newLang);
  window.location.href = url.toString();
}

function updateLanguageContacts(lang) {
  document.getElementById("contacts-heading").textContent = contentContacts[lang].contactsHeading;
  document.getElementById("contact-intro").textContent = contentContacts[lang].contactIntro;

  document.getElementById("nav-about").textContent = contentContacts[lang].navAbout;
  document.getElementById("nav-projects").textContent = contentContacts[lang].navProjects;
  document.getElementById("nav-contact").textContent = contentContacts[lang].navContact;

  document.getElementById("nav-about").href = `index.html?lang=${lang}#about-section`;
  document.getElementById("nav-projects").href = `projects.html?lang=${lang}#projects-section`;
  document.getElementById("nav-contact").href = `contacts.html?lang=${lang}#contact-section`;

  const socialList = document.getElementById("social-links");
  socialList.innerHTML = "";
  contentContacts[lang].socialProfiles.forEach(profile => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${profile.url}" target="_blank" rel="noopener noreferrer">${profile.name}</a>`;
    socialList.appendChild(li);
  });

  document.getElementById("lang-toggle").textContent = lang === "bg" ? "EN" : "BG";
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();
  updateLanguageContacts(lang);

  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const newLang = getLang() === "bg" ? "en" : "bg";
      setLang(newLang);
    });
  }
});
