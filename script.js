gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    //markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  
  
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in",{
  y:90,
  opacity:0,
  duration:0.5,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:1
  }
})

// gsap.from(".card",{
//   scale:0.8,
//   opacity:0,
//   duration:0.5,
//   stagger:0.1,
//   scrollTrigger:{
//     trigger:".card",
//     scroller:"body",
//     markers:false,
//     start:"top 70%",
//     end:"top 65%",
//     scrub:1
//   }
// })

// gsap.from("#colon1",{
//   x:-70,
//   y:-70,
//    scrollTrigger:{
//      trigger:"#colon1",
//      scroller:"body",
//      // markers:true,
//      start:"top 55%",
//      end:"top 45%",
//      scrub:2
//    }
//  })
 
//  gsap.from("#colon2",{
//    x:80,
//    y:80,
//     scrollTrigger:{
//       trigger:"#colon1",
//       scroller:"body",
//       // markers:true,
//       start:"top 55%",
//       end:"top 45%",
//       scrub:2
//     }
//   })

gsap.from("#page4 h1",{
  
  y:50,
   scrollTrigger:{
     trigger:"#page4 h1",
     scroller:"body",
     // markers:true,
     start:"top 75%",
     end:"top 70%",
     scrub:3
   }
 })