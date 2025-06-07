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
  window.history.pushState({}, "", url.toString());
}
