/*===== MENU SHOW =====*/

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
/*const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: false,
}); */

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".home__title-occupation", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 400 });
sr.reveal(".about__text", { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", {});
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 600 });

/*SCROLL PROJECTS*/
sr.reveal(".projects__img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact__container", { interval: 200 });

function confirmDownloadResume() {
  if (confirm("Download the Resume in PDF format?")) {
    location.href = "/assets/resume/sami_arar_cv_en.pdf";
  }

  return false;
}

function confirmDownloadResumeFrench() {
  if (confirm("Télécharger le CV en fichier PDF?")) {
    location.href = "/assets/resume/sami_arar_cv_fr.pdf";
  }

  return false;
}
