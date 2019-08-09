$(document).ready(function(){
	get_events();
	//change_bg_vid_img('', 'img/bg/bg.jpg');
});

history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);show_home_page('header-section');
    };

// Event Listeners //
$('#icon-nav').click(function(){show_home_page('header-section');});
$('#open-bar-btn').click(function(){sidebar_action();}); //Opens Sidebar
$('#overlay').click(function(){sidebar_action();}); //Closes Sidebar

$('#account-btn').click(function(){
  sidebar_action();
  document.getElementById("event-info").classList.add("w3-hide");
  document.getElementById("contact-page").classList.remove("w3-hide");
  document.getElementById("contact-page").scrollIntoView();
});
$('#home-btn').click(function(){sidebar_action();show_home_page('header-section');});
$('#events-btn').click(function(){sidebar_action();show_home_page('events-section');});
$('#about-btn').click(function(){sidebar_action();show_home_page("about-section");});
$('#contact-btn').click(function(){
  sidebar_action();
  document.getElementById("home-page").classList.add("w3-hide");
  document.getElementById("event-info").classList.add("w3-hide");
  document.getElementById("about-page").classList.add("w3-hide");
  document.getElementById("contact-page").classList.remove("w3-hide");
  document.getElementById("contact-page").scrollIntoView();
});
$('#policies-btn').click(function(){console.log('policies-btn');});

$('#header-events-btn').click(function(){show_home_page('events-section');});

$('.sponsorship-btn').click(function(){
  document.getElementById("event-info").classList.add("w3-hide");
  document.getElementById("contact-page").classList.remove("w3-hide");
  document.getElementById("contact-page").scrollIntoView();
});
$('.brochure-btn').click(function(){
  document.getElementById("event-info").classList.add("w3-hide");
  document.getElementById("contact-page").classList.remove("w3-hide");
  document.getElementById("contact-page").scrollIntoView();
});
$('.register-now-btn').click(function(){
  document.getElementById("event-info").classList.add("w3-hide");
  document.getElementById("contact-page").classList.remove("w3-hide");
  document.getElementById("contact-page").scrollIntoView();
});

$('#get-in-touch-btn').click(function(){
  document.getElementById("event-info").classList.add("w3-hide");
  document.getElementById("contact-page").classList.remove("w3-hide");
  document.getElementById("contact-page").scrollIntoView();
});
$('#join-us-btn').click(function(){
  document.getElementById("event-info").classList.add("w3-hide");
  document.getElementById("about-page").classList.add("w3-hide");
  document.getElementById("home-page").classList.add("w3-hide");
  document.getElementById("contact-page").classList.remove("w3-hide");
  document.getElementById("contact-page").scrollIntoView();
});

$('#event0').click(function(){
  document.getElementById("home-page").classList.add("w3-hide");
  document.getElementById("event-info").classList.remove("w3-hide");
  change_bg_vid_img('', 'img/events/event0/event-bg.jpg');
  document.getElementById("event-info").scrollIntoView();
});

// Functions //
function change_bg_vid_img(video, img) {
	//$('#bg-video').html('<source src="'+video+'" type="video/mp4"></source>');
	$('#bg').css('background-image', 'url('+img+')');
}

//-------------- Event More Section --------------//
//Know More Button Clicked
$("more-events-btn").click(function(){
  if (document.getElementById("more-events-btn").innerHTML == "More Events") {
    document.getElementById("more-events").classList.remove("w3-hide");
    $('html, body').animate({scrollTop: $("#more-events").offset().top}, 300);
    document.getElementById("more-events").scrollIntoView();
    document.getElementById("more-events-btn").innerHTML = "Hide";
  } else {
    document.getElementById("more-events").classList.add("w3-hide");
    $('html, body').animate({scrollTop: $("#event0").offset().top}, 300);
    document.getElementById("more-events-btn").innerHTML = "More Events";
  }
});

function get_events() {
	//from server
	var event0 = ['img/events/event0/event0.jpg','Conisance Access Management and Open Banking Summit 2019','14th-15th November 2019','London, UK.','#CAMOB2019'];
	$('#event0').html('<div class="w3-hover-shadow w3-round-xxlarge"><img class="event-img" src="'+event0[0]+'"><div class="event-text"><h2>'+event0[1]+'</h2><p>'+event0[2]+'<br>'+event0[3]+'<br>'+event0[4]+'</p></div></div>');
	
	var more_events = 2; //take value by count
	//below data will be from server
	var event = [
  ['img/events/event0/event1.jpg','Conisance Health Economics Summit','April 2020','London, UK',''],
  ['img/events/event0/event2.jpg','World Prosthetics Summit',' October 2020','Chicago, USA','']];

	for (i=1;i<=more_events;i++) {
		$('#more-events').append('<div id="event'+i+'" class="w3-container w3-half w3-mobile w3-round-xxlarge"></div>');
		$('#event'+i).html('<div class="w3-hover-shadow w3-round-xxlarge"><img class="event-img" src="img/events/event'+i+'/event'+i+'.jpg"><div class="event-text"><h2>'+event[i-1][1]+'</h2><p>'+event[i-1][2]+'<br>'+event[i-1][3]+'<br>'+event[i-1][4]+'</p></div></div>');
	}
}

function sidebar_action() {
  var sidebar = document.getElementById("sidebar-left");
  var overlay = document.getElementById("overlay");
  if (sidebar.style.display == "block") {
    sidebar.style.display = "none";
    overlay.style.display = "none";
    document.getElementById("home-btn").classList.add("w3-hide");
    document.getElementById("events-btn").classList.add("w3-hide");
    document.getElementById("about-btn").classList.add("w3-hide");
    document.getElementById("contact-btn").classList.add("w3-hide");
  } else {
    sidebar.style.display = "block";
    overlay.style.display = "block";
    setTimeout(function(){document.getElementById("home-btn").classList.remove("w3-hide");}, 10);
    setTimeout(function(){document.getElementById("events-btn").classList.remove("w3-hide");}, 110);
    setTimeout(function(){document.getElementById("about-btn").classList.remove("w3-hide");}, 210);
    setTimeout(function(){document.getElementById("contact-btn").classList.remove("w3-hide");}, 310);
  }
}

// Show Section in Homepage when Bar Item Clicked
function show_home_page(view_section) {
  setTimeout(function(){
    change_bg_vid_img('', 'img/bg/bg_img.jpg');
    document.getElementById("home-page").classList.remove("w3-hide");
    document.getElementById("event-info").classList.add("w3-hide");
    document.getElementById("about-page").classList.add("w3-hide");
    document.getElementById("contact-page").classList.add("w3-hide");
    $('html, body').animate({scrollTop: $("#"+view_section).offset().top}, 300);
  }, 20);
}

function show_section(section){
	$('html, body').animate({scrollTop: $("#"+section).offset().top}, 300);
}