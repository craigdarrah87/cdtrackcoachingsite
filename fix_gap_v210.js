(function(){
  const mq = window.matchMedia('(max-width: 480px)');
  function adjustETC(){
    if(!mq.matches) return;

    // Find the "European Track Coaching" heading
    const heads = Array.from(document.querySelectorAll('h1,h2,h3'));
    const etc = heads.find(h => /European\s+Track\s+Coaching/i.test(h.textContent || ''));
    if(!etc) return;

    const section = etc.closest('section') || etc.parentElement;
    if(section){
      section.style.marginTop = '-8px';
      section.style.paddingTop = '0px';
      section.style.borderTop = '0';
    }

    const prev = section ? section.previousElementSibling : null;
    if(prev){
      prev.style.marginBottom = '0px';
      prev.style.paddingBottom = '0px';
      const media = prev.querySelector && prev.querySelector('.card-photo, figure, .media, img');
      if(media){
        media.style.marginBottom = '0px';
        media.style.paddingBottom = '0px';
      }
    }

    // Move the CTA row to sit under the image on mobile
    const cta = section && section.querySelector('.cta-row');
    const mediaWraps = section && section.querySelectorAll('.media-wrap');
    const lastMedia = mediaWraps && mediaWraps[mediaWraps.length - 1];

    if(cta && lastMedia && !cta.dataset.moved){
      lastMedia.insertAdjacentElement('afterend', cta);
      cta.style.display = 'flex';
      cta.style.justifyContent = 'center';
      cta.style.marginTop = '12px';
      cta.dataset.moved = 'true';
    }
  }
  window.addEventListener('DOMContentLoaded', adjustETC);
  window.addEventListener('resize', adjustETC);
})();

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 600) {
    const safetySection = document.querySelectorAll(".section")[0];
    if (safetySection){
      safetySection.style.marginBottom="0px";
      safetySection.style.paddingBottom="0px";
    }
  }
});


document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('contact-form');
  if(!form) return;
  form.addEventListener('submit', async function(e){
    e.preventDefault();
    var data = new FormData(form);
    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn ? submitBtn.textContent : '';
    if(submitBtn) submitBtn.textContent = 'Sending...';

    try{
      var resp = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if(resp.ok){
        form.reset();
        if(submitBtn) submitBtn.textContent = 'Sent ✓';
      } else {
        if(submitBtn) submitBtn.textContent = 'Try again';
      }
    }catch(err){
      if(submitBtn) submitBtn.textContent = 'Try again';
    }
    setTimeout(function(){
      if(submitBtn) submitBtn.textContent = originalText || 'Send enquiry';
    }, 4000);
  });
});


document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('contact-form');
  var successBox = document.getElementById('form-success');
  if(!form) return;

  form.addEventListener('submit', async function(e){
    e.preventDefault();
    var data = new FormData(form);
    var btn = form.querySelector('button[type="submit"]');
    var original = btn.textContent;
    btn.textContent = 'Sending...';

    try{
      var resp = await fetch(form.action, { method:'POST', body:data, headers:{'Accept':'application/json'} });
      if(resp.ok){
        form.reset();
        btn.textContent = 'Sent ✓';
        if(successBox){
          successBox.style.display='block';
        }
      } else {
        btn.textContent='Try again';
      }
    }catch(err){
      btn.textContent='Try again';
    }

    setTimeout(function(){
      btn.textContent = original;
      if(successBox){
        successBox.style.display='none';
      }
    }, 5000);
  });
});
