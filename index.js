
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
var counter = 1;
      setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 4){
          counter = 1;
        }
      }, 5000);
      var firstIndex=0;
      function automaticSlide(){
        setTimeout(automaticSlide,1000)
        var pics;
        const final=document.querySelectorAll(".final");
        for(pics=0;pics<final.length;pics++){
          final[pics].style.display="none";
        }
        firstIndex++;
        if(firstIndex>final.length){
          firstIndex=1;
        }
        final[firstIndex -1].style.display="block";
      }
      automaticSlide();