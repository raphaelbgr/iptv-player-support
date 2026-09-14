(() => {
  const preferredLanguage = navigator.languages?.[0] || navigator.language || 'en';
  const language = /^pt(?:-|$)/i.test(preferredLanguage) ? 'pt' : 'en';
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('title');
    if (title?.dataset[language]) document.title = title.dataset[language];
  });
})();
