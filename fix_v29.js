/* fix_v29.js — minimal: nav duplicate guard only */
document.addEventListener('DOMContentLoaded', () => {
  try {
    const isMobile = window.matchMedia('(max-width: 420px)').matches;
    const navs = Array.from(document.querySelectorAll('nav'));
    if (navs.length > 1 && isMobile) {
      navs.slice(1).forEach(n => { n.style.display = 'none'; });
    }
  } catch (e) {
    console && console.debug && console.debug('fix_v29.js error', e);
  }
});
