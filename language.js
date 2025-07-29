
//Auflistung aller RTL sprachen
const rtlLangs = ['ar', 'he', 'fa', 'ur', 'ps', 'sd', 'dv', 'ckb', 'rhg', 'ug', 'ayh'];

//Ermittlung der vom User bevorzugten Sprache des Browsers
const userLang = navigator.language.split('-')[0];

//Festlegung der Schriftkultur anhnand der ermittelten Sprache
if (rtlLangs.includes(userLang)) {
  document.documentElement.setAttribute('dir', 'rtl');
  document.documentElement.setAttribute('lang', userLang);
} else {
  document.documentElement.setAttribute('dir', 'ltr');
  document.documentElement.setAttribute('lang', userLang);
}