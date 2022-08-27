/* ==================== JS File =================== */

/* ==================== Make mobile navigation work =================== */
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function(){
  headerEl.classList.toggle("nav-open");
});

/* ==================== Sticky Navigation =================== */
const sectionHeroEl = document.querySelector(".hero");

const obs = new IntersectionObserver(
  function(entries){
    const ent = entries[0];
    console.log(ent);

    if(ent.isIntersecting === false){
      document.body.classList.add("sticky");
    }
    if(ent.isIntersecting === true){
      document.body.classList.remove("sticky")
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

/* ==================== Scroll Reveal =================== */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})
sr.reveal('.heading-primary,.heading-secondary, .heading-tertiary, .hero__textbox, .hero__photo, .testimonials__text--para, .testimonials__text--icon')
sr.reveal('.products__content--item, .servies__right--item, .footer__item', {interval:100})
sr.reveal('.services__left--text, .about__photo--img, .hero__textbox--flex-left-para, .hero__textbox--flex-right-para, .taste__text--para, .form__content--input, .form__content--icon-arrow', {origin: 'left'})
sr.reveal('.about__textbox, .reliable__content--2, .about__text, .taste__photo, .testimonials__photo', {origin:'right'})

/* ==================== Smooth Scroll =================== */
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 900
});