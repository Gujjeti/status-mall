
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

  

if(window.innerWidth > 1080){

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
    .from('.section-4 .box-icon span, .section-4 .box-icon span svg', { scale: 0.3, autoAlpha: 0 })
    .from('.section-4 .box-icon p', { y:50, stagger:0.1, autoAlpha: 0 })



    let tl5 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '.section-5',
            start: 'top 40%',
           
        
        }
    });
    
    tl5.addLabel('start')
    .from('.section-5 .envelope', { x:-200, autoAlpha: 0 })



    let tl6 = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
          trigger: '.section-6',
          pin: true, // pin the trigger element while active
          start: 'top top', // when the top of the trigger hits the top of the viewport
          end: '+=500', // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        
      }
  });
  
  // add animations and labels to the timeline
  tl6.addLabel('start')
      .from('.section-6 .heading-1', { y:window.innerHeight, autoAlpha: 0 })
 



          let tl8 = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
          trigger: '.section-8',
          pin: true, // pin the trigger element while active
          start: 'top top', // when the top of the trigger hits the top of the viewport
          end: '+=500', // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      }
  });
  
  // add animations and labels to the timeline
  tl8.addLabel('start')
      .from('.section-8 .heading-1', { y:window.innerHeight, autoAlpha: 0 })
    


      let tl9 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: '.section-9',
            start: 'top 40%',
           
        
        }
    });
    
    tl9.addLabel('start')
        .from('.section-9 .box-icon span, .section-9 .box-icon span svg', { scale: 0.3, autoAlpha: 0 })
        .from('.section-9 .box-icon p', { y:50, stagger:0.1, autoAlpha: 0 })

      
      let tl10 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-10',
            start: 'top top',
            end: '+=700',
       
        }
    });
    
    tl10.addLabel('start')
    .from(['.section-10 .heading-1, .section-10 small, .section-10 p'], { y:100, stagger:0.2, autoAlpha: 0 })
    .from(['.section-10 img'], { scale:0,  autoAlpha: 0 })


    let tl11 = gsap.timeline({
      scrollTrigger: {
          trigger: '#gallery',
          start: 'top 80%',
    
      }
  });
  
  tl11.addLabel('start')
  .from('#gallery .parent-container a', { x:200, stagger:0.2, autoAlpha: 0 })

}
      document.querySelector('.envelope').addEventListener('click', function() {
        this.classList.toggle('opened');
    });
    
    // Prevent the envelope from closing when clicking on the form
    document.querySelector('.letter').addEventListener('click', function(event) {
        event.stopPropagation();
    });
    

    
    
  
    

    function showDiv(id, element) {
      // Remove 'show' class from all elements with 'floorDetails' class
      document.querySelectorAll('.floorAvailList').forEach(div => {
        div.classList.remove('show');
      });
      
      // Add 'show' class to the specific div with the provided id
      const targetDiv = document.getElementById(id);
      if (targetDiv) {
        targetDiv.classList.add('show');
      }

   document.querySelectorAll('#floors li').forEach(li => {
    li.classList.remove('active');
  });
  
  // Add 'active' class to the clicked <li> element
  element.classList.add('active');


    }
    

    $(document).ready(function(){
      $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
          enabled:true
        }
        // other options
      });


      $('#menuBtn').click(function(){
        $('.menu-list').addClass('show');
      })

      $('#menuClose, .menu-list a').click(function(){
        $('.menu-list').removeClass('show');
      })

    });
    

