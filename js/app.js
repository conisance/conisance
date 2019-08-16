// Init
$(document).ready(function(){
  
});

// Events
$('#open-bar-btn').click(function(){sidebar_action();}); //Opens Sidebar
$('#overlay').click(function(){sidebar_action();}); //Closes Sidebar

// Functions //
function sidebar_action() {
  var sidebar = document.getElementById("sidebar-left");
  var overlay = document.getElementById("overlay");
  if (sidebar.style.display == "block") {
    sidebar.style.display = "none";
    overlay.style.display = "none";
    document.getElementById("home-btn").classList.add("w3-hide");
    document.getElementById("about-btn").classList.add("w3-hide");
    document.getElementById("contact-btn").classList.add("w3-hide");
  } else {
    sidebar.style.display = "block";
    overlay.style.display = "block";
    setTimeout(function(){document.getElementById("home-btn").classList.remove("w3-hide");}, 10);
    setTimeout(function(){document.getElementById("about-btn").classList.remove("w3-hide");}, 110);
    setTimeout(function(){document.getElementById("contact-btn").classList.remove("w3-hide");}, 210);
  }
}

//Know More Buttons Clicked
document.getElementById("event-about-para-1-btn").addEventListener("click",  function(){
  show_section("event-about-1", "event-about-para-1", "Show More");
});
document.getElementById("event-about-para-2-btn").addEventListener("click",  function(){
  show_section("event-about-2", "event-about-para-2", "Show More");
});
document.getElementById("event-about-para-3-btn").addEventListener("click",  function(){
  show_section("event-about-3", "event-about-para-3", "Show More");
});
document.getElementById("hidden-vectors-btn").addEventListener("click",  function(){
  show_section("last-shown-vector", "hidden-vectors", "View More");
});
document.getElementById("hidden-speakers-btn").addEventListener("click",  function(){
  show_section("last-shown-speaker", "hidden-speakers", "View All")
});
document.getElementById("hidden-sponsors-btn").addEventListener("click",  function(){
  show_section("last-shown-sponsor", "hidden-sponsors", "View All")
});
document.getElementById("hidden-media-partners-btn").addEventListener("click",  function(){
  show_section("last-shown-media-partner", "hidden-media-partners", "View All")
});

function show_section(main_section,hidden_section_id, btn_name) {
  if (document.getElementById(hidden_section_id+"-btn").innerHTML == btn_name) {
    document.getElementById(hidden_section_id).classList.remove("w3-hide");
    $('html, body').animate({scrollTop: $('#'+main_section).offset().top}, 300);
    document.getElementById(hidden_section_id+"-btn").innerHTML = "Hide";
  } else {
    document.getElementById(hidden_section_id).classList.add("w3-hide");
    document.getElementById(hidden_section_id+"-btn").innerHTML = btn_name;
    $('html, body').animate({scrollTop: $('#'+main_section).offset().top}, 300);
  }
}