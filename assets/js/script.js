$("#hamburgerMenu").click(function () {
  let mobileNav = $("#mobileNav");
  let mainNav = $("#mainNav");
  mobileNav.toggleClass("hidden");
  mainNav.toggleClass("hidden");
});

$("#mobileHomeBtn").click(function () {
  let mobileNav = $("#mobileNav");
  let mainNav = $("#mainNav");
  mobileNav.toggleClass("hidden");
  mainNav.toggleClass("hidden");
});

$(".aboutMeLink").click(function (e) {
  e.preventDefault();
  let aboutMeText = $("#aboutMeText");
  let introText = $("#introText");
  console.log("test");
  aboutMeText.toggleClass("hidden");
  introText.toggleClass("hidden");
});

$("#featuredProjectText").click(function () {
  let text = $("#featuredProjectText")
  let featuredProjects = $(".fprojectBoxes");
  featuredProjects.toggleClass("hidden");
  text.toggleClass("bg-slate-300/20");

});

$("#otherProjectText").click(function () {
  let featuredProjects = $(".projectBoxes");
  featuredProjects.toggleClass("hidden");
});
