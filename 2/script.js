// ----------Scramble------------
$(document).ready(function () {
  // ELEMENTS
  var $scramble = $(".scramble");

  $scramble.scramble(3000, 20, "alphabet", true);
});

// ----------scrambleEnd--------------

var tl = gsap.timeline();
tl.to(".Loading", {
  opacity: 0,
  delay: 2.5,
})
  .to(".loader", {
    // y: "-100%",
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut",
  })
  .to(
    ".loader",
    {
      y: "-100%",
      // opacity:0,
      duration: 1,
      // ease: "Expo.easeInOut"
    },
    "up"
  )
  .to(
    ".svgwaala",
    {
      opacity: 1,
      delay: -1.7,
      ease: "Expo.easeInOut",
    },
    "donut"
  )
  .to(
    "#dotted",
    {
      opacity: 1,
      delay: -1.8,
      ease: "Expo.easeInOut",
    },
    "donut"
  )
  .to(
    "#donut",
    {
      opacity: 1,
      scale: 2,
      delay: -1.4,
      ease: "Expo.easeInOut",
      rotationY: "+=15",
      duration: 3,
      rotationX: "+=15",
      rotationZ: "+=15",
    },
    "up"
  )

  

var tl2 = gsap.timeline();

document.querySelectorAll("#explore").forEach(function (elem) {
  elem.addEventListener("click", function (event) {
    tl2
      
      .to("#donut", {
        width: "80vw",
        top: "-12%",
        rotate: "360deg",
        ease: "ease.out",
        duration: 1,
        opacity: 0,
        delay: "-1",
      })
      .to(
        "#dotted",
        {
          opacity: 0,
        },
        "sw"
      )
      .to(".svgwaala", {
        opacity: 0,
      });
      event.preventDefault(); // Prevent the default redirect behavior
      setTimeout(function() {
        window.location.href = 'http://127.0.0.1:3002/2/transitions/index.html';
    }, 9000)
      
  });


});
