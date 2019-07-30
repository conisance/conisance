$(document).ready(function(){
	change_bg_vid_img('img/startpage/bg_video_loop.mp4', 'img/startpage/bg.jpg');
	get_events();
});

// Event Listeners //
$('#open-bar-btn').click(function(){sidebar_action();}); //Opens Sidebar
$('#overlay').click(function(){sidebar_action();}); //Closes Sidebar

$('#account-btn').click(function(){console.log('account-btn');});
$('#events-btn').click(function(){sidebar_action();show_home_page('events-section');});
$('#about-btn').click(function(){sidebar_action();show_home_page("about-section");});
$('#contact-btn').click(function(){sidebar_action();show_home_page("contact-section");});
$('#policies-btn').click(function(){console.log('policies-btn');});

$('#header-events-btn').click(function(){show_home_page('events-section');});


$('.sponsorship-btn').click(function(){show_section("contact-section");});
$('.brochure-btn').click(function(){show_section("contact-section");});

$('#get-in-touch-btn').click(function(){show_section("contact-section");});

// Functions //
function change_bg_vid_img(video, img) {
	$('#bg-video').html('<source src="'+video+'" type="video/mp4"></source>');
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
	$('#event0').html('<img class="event-img" src="'+event0[0]+'"><div class="event-text"><h5>'+event0[1]+'</h5><p>'+event0[2]+'<br>'+event0[3]+'<br>'+event0[4]+'</p></div>');
	
	var more_events = 3; //take value by count
	//below data will be from server
	var event = [['img/events/event0/event0.jpg','Conisance Algorithmic Summit 2020','March 2020','California, USA.',''],['img/events/event0/event0.jpg','Conisance Health Analytics Summit 2020','July 2020','Berlin, Geramany',''],['img/events/event0/event0.jpg','Conisance Smart Buildings Summit 2020','October 2020','Singapore','']];

	for (i=1;i<=more_events;i++) {
		$('#more-events').append('<div id="event'+i+'" class="w3-container w3-third w3-mobile w3-round-xxlarge w3-hover-grayscale"></div>');
		$('#event'+i).html('<img class="event-img" src="'+event[i-1][0]+'"><div class="event-text"><h5>'+event[i-1][1]+'</h5><p>'+event[i-1][2]+'<br>'+event[i-1][3]+'<br>'+event[i-1][4]+'</p></div>');
	}
}

function sidebar_action() {
  var sidebar = document.getElementById("sidebar-left");
  var overlay = document.getElementById("overlay");
  if (sidebar.style.display == "block") {
    sidebar.style.display = "none";
    overlay.style.display = "none";
    document.getElementById("events-btn").classList.add("w3-hide");
    document.getElementById("about-btn").classList.add("w3-hide");
    document.getElementById("contact-btn").classList.add("w3-hide");
  } else {
    sidebar.style.display = "block";
    overlay.style.display = "block";
    setTimeout(function(){document.getElementById("events-btn").classList.remove("w3-hide");}, 10);
    setTimeout(function(){document.getElementById("about-btn").classList.remove("w3-hide");}, 110);
    setTimeout(function(){document.getElementById("contact-btn").classList.remove("w3-hide");}, 210);
  }
}

// Show Section in Homepage when Bar Item Clicked
function show_home_page(view_section) {
  setTimeout(function(){
    document.getElementById("home-page").classList.remove("w3-hide");
    document.getElementById("event-info").classList.add("w3-hide");
    document.getElementById("about-page").classList.add("w3-hide");
    $('html, body').animate({scrollTop: $("#"+view_section).offset().top}, 300);
  }, 20);
}

function show_section(section){
	$('html, body').animate({scrollTop: $("#"+section).offset().top}, 300);
}