document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
// Placeholder for image-related scripts (future enhancements)
console.log("Images script loaded successfully");
// Lightbox functionality
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.innerHTML = `
    <span id="lightbox-close">&times;</span>
    <img src="" alt="Expanded Image">
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector("img");
  const closeBtn = document.getElementById("lightbox-close");

  document.querySelectorAll(".lightbox-img").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
(function() {
  const images = Array.from(document.querySelectorAll('.lightbox-img'));
  if (!images.length) return;

  const backdrop = document.getElementById('lightbox');
  const imgEl = document.getElementById('lightboxImg');
  const btnClose = backdrop.querySelector('.lightbox-close');
  const btnPrev = backdrop.querySelector('.lightbox-prev');
  const btnNext = backdrop.querySelector('.lightbox-next');
  let index = 0;

  function open(idx) {
    index = idx;
    const src = images[index].getAttribute('src');
    const alt = images[index].getAttribute('alt') || 'Product image';
    imgEl.src = src;
    imgEl.alt = alt;
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  function prev() { open((index - 1 + images.length) % images.length); }
  function next() { open((index + 1) % images.length); }

  images.forEach((img, i) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => open(i));
  });

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);
  backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });

  document.addEventListener('keydown', (e) => {
    if (!backdrop.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
})();
