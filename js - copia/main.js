//Swiper1

var swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var loginForm = document.getElementById("loginForm")
  var registerForm = document.getElementById("registerForm")
  var indicator = document.getElementById("indicator")
  function register(){
      registerForm.style.transform = "translateX(0px)"
      loginForm.style.transform = "translateX(0px)"
      indicator.style.transform = "translateX(100px)"
  }
  function login(){
      registerForm.style.transform = "translateX(300px)"
      loginForm.style.transform = "translateX(300px)"
      indicator.style.transform = "translateX(0px)"
  }