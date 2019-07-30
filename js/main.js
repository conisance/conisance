//-------------- Header Section --------------//

document.getElementById("event0").addEventListener("click",  function(){ 
  document.getElementById("home-page").classList.add("w3-hide");
  //document.getElementsByClass("event-info")[0].classList.add("w3-hide");
  document.getElementById("event-info").classList.remove("w3-hide");
  document.getElementById("event-info").scrollIntoView();
});

document.getElementById("know-more-btn").addEventListener("click",  function(){ 
  document.getElementById("home-page").classList.add("w3-hide");
  //document.getElementsByClass("event-info")[0].classList.add("w3-hide");
  document.getElementById("about-page").classList.remove("w3-hide");
  document.getElementById("about-page").scrollIntoView();
});

//-------------- Event More Section --------------//
//Know More Button Clicked
document.getElementById("more-events-btn").addEventListener("click",  function(){
  if (document.getElementById("more-events-btn").innerHTML == "More Events") {
    document.getElementById("more-events").classList.remove("w3-hide");
    document.getElementById("more-events-btn").innerHTML = "Hide";
  } else {
    document.getElementById("more-events").classList.add("w3-hide");
    document.getElementById("events-section").scrollIntoView();
    document.getElementById("more-events-btn").innerHTML = "More Events";
  }
});

//-------------- About Section --------------//
//Know More Button Clicked
document.getElementById("know-more-btn").addEventListener("click",  function(){
  if (document.getElementById("know-more-btn").innerHTML == "Know More") {
    document.getElementById("know-more-about").classList.remove("w3-hide");
    document.getElementById("know-more-about").scrollIntoView();
    document.getElementById("know-more-btn").innerHTML = "Hide";
  } else {
    document.getElementById("know-more-about").classList.add("w3-hide");
    document.getElementById("about-page").scrollIntoView();
    document.getElementById("know-more-btn").innerHTML = "Know More";
  }
});

//-------------- Event About Section --------------//
//Know More Button Clicked
document.getElementById("hidden-vectors-btn").addEventListener("click",  function(){
  if (document.getElementById("hidden-vectors-btn").innerHTML == "View More") {
    document.getElementById("hidden-vectors").classList.remove("w3-hide");
    document.getElementById("hidden-vectors").scrollIntoView();
    document.getElementById("hidden-vectors-btn").innerHTML = "Hide";
  } else {
    document.getElementById("hidden-vectors").classList.add("w3-hide");
    document.getElementById("hidden-vectors-btn").scrollIntoView();
    document.getElementById("hidden-vectors-btn").innerHTML = "View More";
  }
});

//-------------- Event About Section --------------//
//Know More Button Clicked
document.getElementById("hidden-speakers-btn").addEventListener("click",  function(){
  if (document.getElementById("hidden-speakers-btn").innerHTML == "View All") {
    document.getElementById("hidden-speakers").classList.remove("w3-hide");
    document.getElementById("hidden-speakers").scrollIntoView();
    document.getElementById("hidden-speakers-btn").innerHTML = "Hide";
  } else {
    document.getElementById("hidden-speakers").classList.add("w3-hide");
    document.getElementById("hidden-speakers-btn").scrollIntoView();
    document.getElementById("hidden-speakers-btn").innerHTML = "View All";
  }
});

document.getElementById("event-about-para-1-btn").addEventListener("click",  function(){
  if (document.getElementById("event-about-para-1-btn").innerHTML == "Show More") {
    document.getElementById("event-about-para-1").classList.remove("w3-hide");
    document.getElementById("event-about-para").scrollIntoView();
    document.getElementById("event-about-para-1-btn").innerHTML = "Hide";
  } else {
    document.getElementById("event-about-para-1").classList.add("w3-hide");
    document.getElementById("event-about-para-1-btn").innerHTML = "Show More";
    document.getElementById("event-about-heading-1").scrollIntoView();
  }
});
document.getElementById("event-about-para-2-btn").addEventListener("click",  function(){
  if (document.getElementById("event-about-para-2-btn").innerHTML == "Show More") {
    document.getElementById("event-about-para-2").classList.remove("w3-hide");
    document.getElementById("event-about-para").scrollIntoView();
    document.getElementById("event-about-para-2-btn").innerHTML = "Hide";
  } else {
    document.getElementById("event-about-para-2").classList.add("w3-hide");
    document.getElementById("event-about-para-2-btn").innerHTML = "Show More";
    document.getElementById("event-about-heading-2").scrollIntoView();
  }
});
document.getElementById("event-about-para-3-btn").addEventListener("click",  function(){
  if (document.getElementById("event-about-para-3-btn").innerHTML == "Show More") {
    document.getElementById("event-about-para-3").classList.remove("w3-hide");
    document.getElementById("event-about-para").scrollIntoView();
    document.getElementById("event-about-para-3-btn").innerHTML = "Hide";
  } else {
    document.getElementById("event-about-para-3").classList.add("w3-hide");
    document.getElementById("event-about-para-3-btn").innerHTML = "Show More";
    document.getElementById("event-about-heading-3").scrollIntoView();
  }
});