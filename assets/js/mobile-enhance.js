(function(){
  const isMobile = () => window.matchMedia('(max-width: 600px)').matches;
  function oneLineHeader(){
    if(!isMobile()) return;
    const header = document.querySelector('.header') || document.querySelector('header');
    if(!header) return;
    const container = header.querySelector('.container') || header;
    const nav = header.querySelector('nav, .main-nav, .nav, .links');
    if(!nav) return;
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = '10px';
    const brand = header.querySelector('.brand, .logo, a[href*="index.html"]');
    if(brand){ brand.style.flex = '0 0 auto'; }
    nav.style.flex = '1 1 auto';
    nav.style.whiteSpace = 'nowrap';
    nav.style.overflowX = 'auto';
    nav.style.webkitOverflowScrolling = 'touch';
    const book = header.querySelector('.book-btn');
    if(book){ book.style.flex = '0 0 auto'; }
  }
  function pairThumbs(sel){
    const wrap = document.querySelector(sel);
    if(!wrap) return false;
    const imgs = Array.from(wrap.querySelectorAll('img'));
    const cards = Array.from(document.querySelectorAll('.grid.cards .card'));
    if(cards.length === 0 || imgs.length === 0) return false;
    for(let i=0;i<Math.min(cards.length, imgs.length); i++){
      const src = imgs[i].getAttribute('src');
      const ph = document.createElement('img');
      ph.className = 'card-photo';
      ph.src = src;
      ph.alt = imgs[i].alt || 'Photo';
      ph.loading = 'lazy';
      ph.style.display = 'block';
      ph.style.width = '100%';
      ph.style.height = '190px';
      ph.style.objectFit = 'cover';
      ph.style.borderRadius = '12px';
      ph.style.marginTop = '6px';
      ph.style.filter = 'grayscale(1) contrast(1.04)';
      ph.style.boxShadow = '0 8px 22px rgba(0,0,0,.26)';
      cards[i].appendChild(ph);
    }
    if(isMobile()) wrap.style.display = 'none';
    return true;
  }
  function injectCardImages(){
    if(!isMobile()) return;
    if (pairThumbs('.thumbs-3')) return;
    if (pairThumbs('.approach-thumbs')) return;
    pairThumbs('.thumbs-grid');
  }
  function tightenGaps(){
    if(!isMobile()) return;
    const hero = document.querySelector('.hero');
    const next = hero && hero.nextElementSibling;
    if(next && next.classList.contains('section')){
      next.style.marginTop = '0';
      next.style.paddingTop = '8px';
    }
  }
  function stackSplits(){
    if(!isMobile()) return;
    const grids = document.querySelectorAll('.section .container.grid, .grid.split, .grid.two');
    grids.forEach(g => {
      g.style.display = 'grid';
      g.style.gridTemplateColumns = '1fr';
      g.style.gap = '12px';
      const media = g.querySelector('.media, figure, .media-portrait-full');
      if(media){ media.style.order = '2'; }
    });
  }
  window.addEventListener('DOMContentLoaded', function(){
    oneLineHeader();
    injectCardImages();
    tightenGaps();
    stackSplits();
  });
})();
/* v2.2 tighten */
(function(){
  const isMobile = () => window.matchMedia('(max-width: 600px)').matches;
  function tightenHandoff(){
    if(!isMobile()) return;
    const cards = document.querySelector('.grid.cards');
    if(cards){
      cards.style.marginBottom = '8px';
    }
    const hero = document.querySelector('.hero');
    const next = hero && hero.nextElementSibling;
    if(next && next.classList.contains('section')){
      next.style.marginTop = '0';
      next.style.paddingTop = '6px';
    }
  }
  window.addEventListener('DOMContentLoaded', tightenHandoff);
})();

/* v2.3 header and handoff */
(function(){
  const isMobile = () => window.matchMedia('(max-width: 600px)').matches;
  function forceHeaderInline(){
    if(!isMobile()) return;
    const header = document.querySelector('.header') || document.querySelector('header');
    if(!header) return;
    const container = header.querySelector('.container') || header;
    const nav = header.querySelector('nav, .main-nav, .nav, .links');
    if(!nav) return;
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = '10px';
    container.style.flexWrap = 'nowrap';
    container.style.justifyContent = 'space-between';
    nav.style.flex = '1 1 auto';
    nav.style.minWidth = '0';
    nav.style.display = 'flex';
    nav.style.whiteSpace = 'nowrap';
    nav.style.overflowX = 'auto';
  }
  function tightenIndexHandoff(){
    if(!isMobile()) return;
    const cards = document.querySelector('.grid.cards');
    if(cards){
      const next = cards.parentElement && cards.parentElement.nextElementSibling;
      if(next && next.classList.contains('section')){
        next.style.marginTop = '6px';
        next.style.paddingTop = '6px';
      }
    }
  }
  window.addEventListener('DOMContentLoaded', function(){
    forceHeaderInline();
    tightenIndexHandoff();
  });
})();


/* v2.4: force single-line header by building a scroll row and moving pieces into it;
   also tighten spacing before 'European Track Coaching' explicitly. */
(function(){
  const mq = '(max-width: 600px)';
  const isMobile = ()=> window.matchMedia(mq).matches;
  function ensureSingleLineHeader(){
    if(!isMobile()) return;
    const header = document.querySelector('.header') || document.querySelector('header');
    if(!header) return;
    if(header.querySelector('.mobile-one-line')) return;
    const logo = header.querySelector('.logo, .brand, a[href*="index"], a[href="/"]') || header.querySelector('img');
    const book = header.querySelector('.book-btn, a[href*="book"]');
    const navLinks = Array.from(header.querySelectorAll('nav a, .main-nav a, .nav a, header a'))
      .filter(a => a !== book && a !== logo && a.textContent.trim().length>0);
    const row = document.createElement('div');
    row.className = 'mobile-one-line';
    Object.assign(row.style, {
      display:'flex', alignItems:'center', gap:'12px',
      whiteSpace:'nowrap', overflowX:'auto', WebkitOverflowScrolling:'touch',
      padding:'8px 8px'
    });
    if(logo){
      const wrapLogo = document.createElement('div');
      wrapLogo.style.flex = '0 0 auto';
      wrapLogo.style.display = 'flex';
      wrapLogo.style.alignItems = 'center';
      const clone = logo.cloneNode(true);
      const img = clone.querySelector('img');
      if(img){ img.style.height = '22px'; img.style.maxHeight='22px'; }
      wrapLogo.appendChild(clone);
      row.appendChild(wrapLogo);
    }
    const linksWrap = document.createElement('div');
    Object.assign(linksWrap.style, {flex:'1 1 auto', display:'flex', gap:'12px'});
    navLinks.forEach(a=>{
      const c = a.cloneNode(true);
      c.style.display='inline-block';
      linksWrap.appendChild(c);
    });
    row.appendChild(linksWrap);
    if(book){
      const bookClone = book.cloneNode(true);
      bookClone.style.flex='0 0 auto';
      row.appendChild(bookClone);
    }
    header.insertBefore(row, header.firstChild);
  }

  function tightenEuropeanTrackCoaching(){
    if(!isMobile()) return;
    const headings = Array.from(document.querySelectorAll('h1,h2,h3'));
    const target = headings.find(h => /European\s+Track\s+Coaching/i.test(h.textContent || ''));
    if(target){
      const section = target.closest('.section') || target.parentElement;
      if(section){
        section.style.marginTop = '6px';
        section.style.paddingTop = '6px';
      }
    }
    const imgs = Array.from(document.querySelectorAll('.card-photo'));
    if(imgs.length){
      const last = imgs[imgs.length-1];
      last.style.marginBottom = '4px';
    }
  }

  window.addEventListener('DOMContentLoaded', function(){
    ensureSingleLineHeader();
    tightenEuropeanTrackCoaching();
  });
})();


/* MOBILE POLISH — v2.5: ensure only one mobile header row and clamp ETC spacing to 2px */
(function(){
  const mq = '(max-width: 600px)';
  const isMobile = ()=> window.matchMedia(mq).matches;

  function dedupeHeader(){
    if(!isMobile()) return;
    const header = document.querySelector('.header') || document.querySelector('header');
    if(!header) return;
    // Remove extra mobile rows if any; keep the first
    const rows = header.querySelectorAll('.mobile-one-line');
    if(rows.length > 1){
      rows.forEach((r,i)=>{ if(i>0) r.remove(); });
    }
  }

  function clampETCSpacing(){
    if(!isMobile()) return;
    const headings = Array.from(document.querySelectorAll('h1,h2,h3'));
    const target = headings.find(h => /European\s+Track\s+Coaching/i.test(h.textContent || ''));
    if(target){
      const section = target.closest('.section') || target.parentElement;
      if(section){
        section.style.marginTop = '2px';
        section.style.paddingTop = '2px';
      }
    }
  }

  window.addEventListener('DOMContentLoaded', function(){
    dedupeHeader();
    clampETCSpacing();
  });
})();



/* v2.6: robust zero-gap for 'European Track Coaching' block + confirm header font application */
(function(){
  const mq = '(max-width: 600px)';
  const isMobile = ()=> window.matchMedia(mq).matches;

  function zeroGapETC(){
    if(!isMobile()) return;
    const headings = Array.from(document.querySelectorAll('h1,h2,h3'));
    const target = headings.find(h => /European\s+Track\s+Coaching/i.test(h.textContent || ''));
    if(!target) return;
    // Collapse spacing on heading container
    const container = target.closest('.section, .content, .content-wrap, .section-inner, .container, main, article, div');
    if(container){
      container.style.marginTop = '0px';
      container.style.paddingTop = '0px';
    }
    // Pull up the heading itself
    target.style.marginTop = '0px';
    target.style.paddingTop = '0px';

    // Collapse previous sibling spacing (image/card/media)
    let prev = null;
    // Walk up to find a previous sibling that is visible
    let node = target;
    while(node && !prev){
      prev = node.previousElementSibling;
      node = node.parentElement;
    }
    if(prev){
      prev.style.marginBottom = '0px';
      prev.style.paddingBottom = '0px';
    }
  }

  window.addEventListener('DOMContentLoaded', function(){
    zeroGapETC();
  });
})();



/* v2.7: aggressive zero-gap between last media card and 'European Track Coaching' heading */
(function(){
  const mq = '(max-width: 600px)';
  const isMobile = ()=> window.matchMedia(mq).matches;

  function closestPrev(el){
    let node = el;
    while(node){
      if(node.previousElementSibling) return node.previousElementSibling;
      node = node.parentElement;
    }
    return null;
  }

  function zeroGapETC_v27(){
    if(!isMobile()) return;
    const headings = Array.from(document.querySelectorAll('h1,h2,h3')).filter(h=>/European\s+Track\s+Coaching/i.test(h.textContent||''));
    if(!headings.length) return;
    const h = headings[0];

    // Trim the heading and its containers
    [h, h.parentElement, h.closest('.section, .content, .content-wrap, .section-inner, .container, main, article')].forEach(n=>{
      if(!n) return;
      n.style.marginTop='0px';
      n.style.paddingTop='0px';
    });

    // Find preceding block (image/card/media) and kill bottom spacing up its chain
    const prev = closestPrev(h);
    if(prev){
      [prev, prev.parentElement, prev.closest('.card, .media, figure, .section-inner, .content, .container, div')].forEach(n=>{
        if(!n) return;
        n.style.marginBottom='0px';
        n.style.paddingBottom='0px';
      });
    }
  }

  window.addEventListener('DOMContentLoaded', zeroGapETC_v27);
  window.addEventListener('resize', zeroGapETC_v27);
})();

