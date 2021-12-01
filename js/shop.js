
$(document).ready(function(){

$('.owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  margin:50,
  items:2,
  dotsEach:true,
  navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
})
});

$('#select_id').on('change',function(){
  $('#cart').css({"background-color":"Green"});
});