let projectTitle = $('#modalLabel');
let imgSource = $('#projectImage');
let projectDescription = $('#projectDescription');
let publishedLink = $('#siteLink');
let gitRepo = $('#gitRepo');

let projectsArray = [
  {
    name: "Portfolio",
    description: "This is my portfolio, built using HTML, CSS, Javascript. Also JQuery and Tailwind CSS",
    image: "#",
    repoLink: "#",
    siteLink: "#"
  },
  {
    name: "AstroMusic",
    description: "AstroMusic a way to help connect you to your daily horoscope and discover some new music using your astrological sign! We've carefully currated a playlist based off of your mood and have discovered your lucky hour and number for the day",
    image: "assets/images/screenshot-astromusic.png",
    gitRepo: "https://github.com/Astro-Div/Astro-Music",
    siteLink: "https://astro-div.github.io/Astro-Music/"
  },
  {
    name: "Study Timer",
    description: "This is a pomodoro style timer made to help the user focus while studying and working. Users can also adjust the times and backgrounds to better suite their needs.",
    image: "assets/images/screenshot-timer.png",
    gitRepo: "https://github.com/Zcordeiro/Study-Timer",
    siteLink: "https://pure-reef-70690.herokuapp.com/"
  },
  {
    name: "City Weather App",
    description: "Simple weather app using the Openweather API that allows you to search your city and get back a five day forecast.",
    image: "assets/images/screenshot-weatherApp.png",
    gitRepo: "https://github.com/Zcordeiro/City-Weather-Forecast",
    siteLink: "https://zcordeiro.github.io/City-Weather-Forecast/"
  },
  {
    name: "Random Password Generator",
    description: "Password generator that prompts the user for the qualificaltions of the password needed and returns a randomly generated password.",
    image: "assets/images/screenshot-passwordGen.png",
    gitRepo: "https://github.com/Zcordeiro/random-password-generator",
    siteLink: "https://zcordeiro.github.io/random-password-generator/"
  },
  {
    name: "Daily Planner",
    description: "JQuery workday scheduler that can help a user outline and organize their workday by the hour.",
    image: "assets/images/screenshot-daily-planner.png",
    gitRepo: "https://github.com/Zcordeiro/Daily-Workday-Scheduler",
    siteLink: "https://zcordeiro.github.io/Daily-Workday-Scheduler/"
  },
  {
    name: "Team Profile Generator",
    description: "This app will help you build a team profile based on the information you enter into it.",
    image: "assets/images/screenshot-team-profile.gif",
    gitRepo: "https://github.com/Zcordeiro/Team-Profile-Generator",
    siteLink: "#"
  },
  {
    name: "Coming Soon",
    description: "#",
    image: "assets/images/coming-soon.jpg",
    gitRepo: "#",
    siteLink: "#"
  }
]

$("#hamburgerMenu").click(() => {
  let mobileNav = $("#mobileNav");
  let mainNav = $("#mainNav");
  mobileNav.toggleClass("hidden");
  mainNav.toggleClass("hidden");
});

$("#mobileHomeBtn").click(() => {
  let mobileNav = $("#mobileNav");
  let mainNav = $("#mainNav");
  mobileNav.toggleClass("hidden");
  mainNav.toggleClass("hidden");
});

$(".aboutMeLink").click((e) => {
  e.preventDefault();
  let aboutMeText = $("#aboutMeText");
  let introText = $("#introText");
  console.log("test");
  aboutMeText.toggleClass("hidden");
  introText.toggleClass("hidden");
});

$("#featuredProjectText").click(() => {
  let text = $("#featuredProjectText")
  let featuredProjects = $(".fprojectBoxes");
  featuredProjects.toggleClass("hidden");
  text.toggleClass("bg-slate-300/20");

});

$("#otherProjectText").click(() => {
  let featuredProjects = $(".projectBoxes");
  featuredProjects.toggleClass("hidden");
});

$("#featuredProject1").click(() => {
  projectTitle.text(projectsArray[1].name)
  imgSource.attr('src', projectsArray[1].image);
  projectDescription.text(projectsArray[1].description);
  publishedLink.attr('href', projectsArray[1].siteLink);
  gitRepo.attr('href', projectsArray[1].gitRepo);
});

$("#featuredProject2").click(() => {
  projectTitle.text(projectsArray[2].name)
  imgSource.attr('src', projectsArray[2].image);
  projectDescription.text(projectsArray[2].description);
  publishedLink.attr('href', projectsArray[2].siteLink);
  gitRepo.attr('href', projectsArray[2].gitRepo);
});

$("#project3").click(() => {
  projectTitle.text(projectsArray[3].name)
  imgSource.attr('src', projectsArray[3].image);
  projectDescription.text(projectsArray[3].description);
  publishedLink.attr('href', projectsArray[3].siteLink);
  gitRepo.attr('href', projectsArray[3].gitRepo);
});

$("#project4").click(() => {
  projectTitle.text(projectsArray[4].name)
  imgSource.attr('src', projectsArray[4].image);
  projectDescription.text(projectsArray[4].description);
  publishedLink.attr('href', projectsArray[4].siteLink);
  gitRepo.attr('href', projectsArray[4].gitRepo);
});

$("#project5").click(() => {
  projectTitle.text(projectsArray[5].name)
  imgSource.attr('src', projectsArray[5].image);
  projectDescription.text(projectsArray[5].description);
  publishedLink.attr('href', projectsArray[5].siteLink);
  gitRepo.attr('href', projectsArray[5].gitRepo);
});

$("#project6").click(() => {
  projectTitle.text(projectsArray[6].name)
  imgSource.attr('src', projectsArray[6].image);
  projectDescription.text(projectsArray[6].description);
  publishedLink.attr('href', projectsArray[6].siteLink);
  gitRepo.attr('href', projectsArray[6].gitRepo);
});

$("#project7").click(() => {
  projectTitle.text(projectsArray[7].name)
  imgSource.attr('src', projectsArray[7].image);
  projectDescription.text(projectsArray[7].description);
  publishedLink.attr('href', projectsArray[7].siteLink);
  gitRepo.attr('href', projectsArray[7].gitRepo);
});