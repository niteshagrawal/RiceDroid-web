/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('nav_bar').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
        document.getElementById('nav_bar').style.backgroundColor = '#101010';
      } else {
        document.getElementById('nav_bar').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
        document.getElementById('nav_bar').style.backgroundColor = 'transparent';
      } 
  });
}); 