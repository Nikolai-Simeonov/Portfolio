// Nav Scroll
window.addEventListener("scroll", function(){
  var nav = document.querySelector("nav");
  nav.classList.toggle("fixed-top", window.scrollY > 20);
})


var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: "2",
    coverflowEffect: {
      rotate: 5,
      stretch: 0,
      depth: 200,
      modifier: 1,
    },
    //autoplay: {
    //    delay: 2500,
    //    disableOnInteraction: false,
    //  },
  });


const modal = document.querySelector(".modal-img");
const previews = document.querySelectorAll(".swiper-container img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        // Img pick-up
        const originalSrc = preview.getAttribute("data-original");
        original.src = originalSrc;
        // Caption pick-up
        const captionText = preview.alt;
        caption.textContent = captionText;
    });
});

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-img")) {
        modal.classList.remove("open");
    }
})



const tl = gsap.timeline({defaults: {ease:'power1.out'} });

// Landing Page
tl.fromTo( ".intro-title", { opacity:0, y: '100%'}, { opacity:1, y: "0%", duration: 1, stagger:0.3} );
tl.fromTo( ".intro-button", { opacity:0, y: '100%'}, { opacity:1, y: "0%", duration: 0.8}, "-=0.4" );
tl.fromTo( ".intro-img", { opacity:0, y: '5%'}, { opacity:1, y: "0%", duration: 0.5}, "-=0.5" );

// Nav
tl.fromTo( ".nav-item", { opacity:0}, { opacity:1, duration: 0.5}, "-=0.1" );
tl.fromTo( ".navbar-brand", { opacity:0, x: "-60%"}, { opacity:1, x: "0%", duration: 0.5}, "-=0.4" );
// tl.fromTo( ".resume", { opacity:0, x: "60%"}, { opacity:1, x: "0%", duration: 0.5} );


gsap.registerPlugin(ScrollTrigger);

// Headings
const headingTitle = gsap.utils.toArray('.heading ');
headingTitle.forEach(headingTitle => {
  gsap.from(headingTitle, { 
    scrollTrigger: {
      trigger: headingTitle,
      start: "0 85%",
    },
      opacity:0,
      y:"20%",
      duration:0.5
  })
});

// Subheadings
const subheadingTitle = gsap.utils.toArray('.subheading');
subheadingTitle.forEach(subheadingTitle => {
  gsap.from(subheadingTitle, { 
    scrollTrigger: {
      trigger: subheadingTitle,
      start: "0 85%",
    },
      opacity:0,
      y:"60%",
      duration:0.8
  })
});


// About me text
gsap.from( ".about-me-text",{
  scrollTrigger: {
    trigger: ".about-me-text",
    start: "0 85%",
  },
  opacity:0,
  y:"60%",
  duration:0.8,
});
// About me img
gsap.from( ".about-me-img",{
  scrollTrigger: {
    trigger: ".about-me-img",
    start: "0 85%",
  },
  opacity:0,
  y:"30%",
  ease: "elastic.out(1.2, 1)",
  duration:3.5,
});


// Project Titles
const projectTitle = gsap.utils.toArray('.project-title');
projectTitle.forEach(projectTitle => {
  gsap.from(projectTitle, { 
    scrollTrigger: {
      trigger: projectTitle,
      start: "0 85%",
    },
      opacity:0,
      x:"-30%",
      duration:0.8
  })
});
// Project about
const projectAbout = gsap.utils.toArray('.project-about');
projectAbout.forEach(projectAbout => {
  gsap.from(projectAbout, { 
    scrollTrigger: {
      trigger: projectAbout,
      start: "0 85%",
    },
      opacity:0,
      delay:4,
      x:"-30%",
      duration:0.8
  })
});
// Project links
const projectLinks = gsap.utils.toArray('.project-links');
projectLinks.forEach(projectLinks => {
  gsap.from(projectLinks, { 
    scrollTrigger: {
      trigger: projectLinks,
      start: "0 85%",
    },
      opacity:0,
      y:"150%",
      duration:0.5
  })
});


// Project Squares
const square1 = gsap.utils.toArray('.project-square1');
square1.forEach(square1 => {
  gsap.from(square1, { 
    scrollTrigger: {
      trigger: square1,
      start: "0 50%",
      ease: "power3.out"
    },
      opacity:0,
      y:"-30%",
      duration:1
  })
});
const square2 = gsap.utils.toArray('.project-square2');
square2.forEach(square2 => {
  gsap.from(square2, { 
    scrollTrigger: {
      trigger: square2,
      start: "0 74.5%",
      ease: "power3.out"
    },
      opacity:0,
      y:"30%",
      duration:1
  })
});


// Hots Img
gsap.from( ".hots-background",{
  scrollTrigger: {
    trigger: ".hots-background",
    start: "0 55%",
  },
  opacity:0,
  y:"10%",
  ease: "elastic.out(1.5, 1)",
  duration:2
});
// Hots Img
gsap.from( ".hots-img",{
  scrollTrigger: {
    trigger: ".hots-img",
    start: "0 50%",
  },
  opacity:0,
  y:"15%",
  duration:0.5
});

// React Edition Img
gsap.from( ".react-edition-background",{
  scrollTrigger: {
    trigger: ".react-edition-background",
    start: "0 50%",
  },
  opacity:0,
  y:"15%",
  duration:0.5
});


// Twitter Img
gsap.from( ".twitter-trio",{
  scrollTrigger: {
    trigger: ".twitter-trio",
    start: "0 50%",
  },
  opacity:0,
  y:"15%",
  duration:0.3
});


// Mobile Img
gsap.from( ".mobile-back",{
  scrollTrigger: {
    trigger: ".mobile-back",
    start: "0 50%",
  },
  opacity:0,
  duration:2
});
// Mobile Img
gsap.from( ".mobile",{
  scrollTrigger: {
    trigger: ".mobile",
    start: "0 50%",
  },
  opacity:0,
  y:"15%",
  duration:1
});


// Math Img
gsap.from( ".math-background",{
  scrollTrigger: {
    trigger: ".math-background",
    start: "0 50%",
  },
  opacity:0,
  duration:5
});
// Calculator Img
gsap.from( ".calculator",{
  scrollTrigger: {
    trigger: ".calculator",
    start: "0 50%",
  },
  opacity:0,
  y:"15%",
  duration:1
});


// More Projects 
const projectsLayout = gsap.utils.toArray('.projects-layout');
projectsLayout.forEach(projectsLayout => {
  gsap.from(projectsLayout, { 
    scrollTrigger: {
      trigger: projectsLayout,
      start: "0 74.5%",
      ease: "power3.out"
    },
      opacity:0,
      y:"30%",
      duration:0.8
  })
});


// Designs 
const designs = gsap.utils.toArray('.swiper-wrapper');
designs.forEach(designs => {
  gsap.from(designs, { 
    scrollTrigger: {
      trigger: designs,
      start: "0 60%",
      ease: "power3.out"
    },
      x:"100%",
      duration:1
  })
});


// Skills // Overall Skills
gsap.from( ".overall-skills span",{
  scrollTrigger: {
    trigger: ".overall-skills span",
    start: "0% 80%",
  },
  opacity:0,
  x:"-40%",
  stagger:0.1
});
// Skills // Coding
gsap.from( ".coding span",{
  scrollTrigger: {
    trigger: ".coding span",
    start: "0% 80%",
  },
  opacity:0,
  x:"40%",
  stagger:0.1
});
// Skills // Coding-heading
gsap.from( ".coding-heading",{
  scrollTrigger: {
    trigger: ".coding-heading",
    start: "0% 80%",
  },
  opacity:0,
  duration:2
});
// Skills // Laptop
gsap.from( "#laptop",{
  scrollTrigger: {
    trigger: "#laptop",
    start: "0% 80%",
  },
  y: "30%",
  opacity:0,
});
// Skills // Clock
gsap.from( "#Clock",{
  scrollTrigger: {
    trigger: "#Clock",
    start: "0% 80%",
  },
  y: "30%",
  opacity:0,
});
// Skills // Clock Color
gsap.from( "#clock-color",{
  scrollTrigger: {
    trigger: "#clock-color",
    start: "0% 80%",
  },
  opacity:0,
});
// Skills // Character
gsap.from( "#character",{
  scrollTrigger: {
    trigger: "#character",
    start: "0% 45%",
  },
  opacity:0,
  y:"15%",
  scale:0.5,
  duration: 1
});


// Name 
gsap.from( ".label-name",{
  scrollTrigger: {
    trigger: ".label-name",
    start: "0 70%",
  },
  opacity:0,
  x:"-20%",
  duration:0.8
});
// Email 
gsap.from( ".label-email",{
  scrollTrigger: {
    trigger: ".label-email",
    start: "0 70%",
  },
  opacity:0,
  x:"20%",
  duration:0.8
});
// Message 
gsap.from( ".message-container",{
  scrollTrigger: {
    trigger: ".message-container",
    start: "0 70%",
  },
  opacity:0,
  y:"40%",
  duration:0.8
});
// Submit 
gsap.from( ".submit",{
  scrollTrigger: {
    trigger: ".submit",
    start: "0 80%",
    ease: "power1.out",
  },
  opacity:0,
  duration:0.5
});


// Contact-img1 
gsap.from( ".contact-img1",{
  scrollTrigger: {
    trigger: ".contact-img1",
    start: "0 70%",
  },
  opacity:0,
  x:"-20%",
  duration:0.8
});
// Contact img2 
gsap.from( ".contact-img2",{
  scrollTrigger: {
    trigger: ".contact-img2",
    start: "0 70%",
  },
  opacity:0,
  x:"20%",
  duration:0.8
});


// Social Links
gsap.from( ".socials",{
  scrollTrigger: {
    trigger: ".socials",
    start: "0 95%",
  },
  opacity:0,
  y:"40%",
  duration:0.8
});
// Copyright
gsap.from( ".copyright-container",{
  scrollTrigger: {
    trigger: ".copyright-container",
    start: "0 100%",
  },
  opacity:0,
  duration:1
});