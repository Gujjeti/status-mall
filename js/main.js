var swiper3 = new Swiper(".mySwiper3", {
    grabCursor: true,
    effect: "creative",
    speed:1500,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });



  let tl1 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: '.section-2',
        start: 'top 40%',
       
    
    }
});

tl1.addLabel('start')
    .from(['.section-2 .heading-1, .section-2 small, .section-2 li'], { x:-500, autoAlpha: 0, duration:0.6})
    .from('.section-2 img', { y:100, stagger:0.1, autoAlpha: 0 })


    let tl2 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '.section-3',
            start: 'top 40%',
           
        
        }
    });
    
    tl2.addLabel('start')
    .from('.section-3 img', { y:100, stagger:0.1, autoAlpha: 0 })
        .from(['.section-3 .heading-1'], { x:500, autoAlpha: 0, duration:0.6})
        .from(['.section-3 li'], { x:100, autoAlpha: 0, duration:0.6, stagger:0.1})


  let tl4 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: '.section-4',
        start: 'top 40%',
       
    
    }
});

tl4.addLabel('start')
    .from('.box-icon span, .box-icon span svg', { scale: 0.3, autoAlpha: 0 })
    .from('.box-icon p', { y:50, stagger:0.1, autoAlpha: 0 })



    let tl5 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '.section-5',
            start: 'top 40%',
           
        
        }
    });
    
    tl5.addLabel('start')
    .from('.section-5 .envelope', { x:-200, autoAlpha: 0 })


    document.querySelector('.close-env').addEventListener('click', function() {
      console.log('as')
      this.classList.toggle('opened');
    });


  document.querySelector('.envelope').addEventListener('click', function() {
    this.classList.toggle('opened');
});

// Prevent the envelope from closing when clicking on the form
document.querySelector('.letter').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.querySelector('.letter').addEventListener('submit', function(event) {
    event.preventDefault();
    this.reset();
    document.querySelector('.envelope').classList.remove('opened'); // Optional: close envelope after submission
});



