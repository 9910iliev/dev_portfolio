// lang.js

function getLang() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  const savedLang = localStorage.getItem("lang");
  const lang = urlLang || savedLang || "bg";

  if (urlLang) {
    localStorage.setItem("lang", urlLang);
  }

  return lang;
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  const hash = window.location.hash;
  window.location.href = url.toString() + hash;
}

document.addEventListener("DOMContentLoaded", () => {
  const langToggleBtn = document.getElementById("lang-toggle");
  const langFlagImg = document.getElementById("lang-flag");
  const langTextSpan = document.getElementById("lang-text");

  const currentLang = getLang();

  if (langFlagImg && langTextSpan) {
    if (currentLang === "bg") {
      langFlagImg.src = "images/bg-flag.png";
      langFlagImg.alt = "Български флаг";
      langTextSpan.textContent = "BG";
    } else {
      langFlagImg.src = "images/uk-flag.png";
      langFlagImg.alt = "British flag";
      langTextSpan.textContent = "EN";
    }
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const newLang = currentLang === "bg" ? "en" : "bg";
      setLang(newLang);
    });
  }
});
