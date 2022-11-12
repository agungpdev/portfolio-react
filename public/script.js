document.querySelector("#years").innerHTML = new Date().getFullYear();
let navbar = document.querySelector(".navbar");
let aboutImg = document.querySelector(".about-left");
let titleAbout = document.querySelector(".about-title");
let pAbout = document.querySelector(".p-about");
let menuAbout = document.querySelector(".menu-about");
let tabContent = document.querySelector(".tab-content");
let titleServicce = document.querySelector(".services-title");
let subtitleService = document.querySelector(".services-subtitle");
let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
let card4 = document.querySelector(".card4");
let card5 = document.querySelector(".card5");
let card6 = document.querySelector(".card6");
let titleProject = document.querySelector(".project-title");
let subtitleProject = document.querySelector(".project-subtitle");
let cardPortfolio1 = document.querySelector(".card-portfolio1");
let cardPortfolio2 = document.querySelector(".card-portfolio2");
let cardPortfolio3 = document.querySelector(".card-portfolio3");
let cardPortfolio4 = document.querySelector(".card-portfolio4");
let cardPortfolio5 = document.querySelector(".card-portfolio5");
let cardPortfolio6 = document.querySelector(".card-portfolio6");
let contactTitle = document.querySelector(".contact-title-text");
let contactSubtitle = document.querySelector(".contact-subtitle");
let form1 = document.querySelector(".form1");
let form2 = document.querySelector(".form2");
let form3 = document.querySelector(".form3");
let form4 = document.querySelector(".form4");
let contactBtn = document.querySelector(".contact-button");
let contactImg = document.querySelector(".contact-right");

window.onscroll = function(){navFixer()};

function navFixer(){
    if(document.documentElement.scrollTop > 200){
        navbar.classList.add("nav-fixed")
    } else {
        navbar.classList.remove("nav-fixed")
    }

    if (document.documentElement.scrollTop > 380) {
        aboutImg.classList.add("slide-right")
    }else{
        aboutImg.classList.remove("slide-right");
    }

    if (document.documentElement.scrollTop > 420) {
        titleAbout.classList.add("slide-left")
    }else{
        titleAbout.classList.remove("slide-left");
    }

    if (document.documentElement.scrollTop > 420) {
        pAbout.classList.add("slide-left")
    }else{
        pAbout.classList.remove("slide-left");
    }

    if (document.documentElement.scrollTop > 420) {
        menuAbout.classList.add("slide-left")
    }else{
        menuAbout.classList.remove("slide-left");
    }

    if (document.documentElement.scrollTop > 420) {
        tabContent.classList.add("slide-left")
    }else{
        tabContent.classList.remove("slide-left");
    }

    if (document.documentElement.scrollTop > 1300) {
        titleServicce.classList.add("slide-top")
    }else{
        titleServicce.classList.remove("slide-top");
    }

    if (document.documentElement.scrollTop > 1400) {
        subtitleService.classList.add("slide-top")
    }else{
        subtitleService.classList.remove("slide-top");
    }

    if (document.documentElement.scrollTop > 1480) {
        card1.classList.add("slide-right")
    }else{
        card1.classList.remove("slide-right");
    }

    if (document.documentElement.scrollTop > 1480) {
        card2.classList.add("slide-down")
    }else{
        card2.classList.remove("slide-down");
    }

    if (document.documentElement.scrollTop > 1480) {
        card3.classList.add("slide-left")
    }else{
        card3.classList.remove("slide-left");
    }

    if (document.documentElement.scrollTop > 1800) {
        card4.classList.add("slide-right")
    }else{
        card4.classList.remove("slide-right");
    }

    if (document.documentElement.scrollTop > 1800) {
        card5.classList.add("slide-top")
    }else{
        card5.classList.remove("slide-top");
    }

    if (document.documentElement.scrollTop > 1800) {
        card6.classList.add("slide-left")
    }else{
        card6.classList.remove("slide-left");
    }

    if (document.documentElement.scrollTop > 2370) {
        titleProject.classList.add("slide-top")
    }else{
        titleProject.classList.remove("slide-top");
    }

    if (document.documentElement.scrollTop > 2370) {
        subtitleProject.classList.add("slide-top")
    }else{
        subtitleProject.classList.remove("slide-top");
    }

    if (document.documentElement.scrollTop > 2700) {
        cardPortfolio1.classList.add("slide-down")
    }else if(document.documentElement.scrollTop < 2500){
        cardPortfolio1.classList.remove("slide-down");
    }

    if (document.documentElement.scrollTop > 2700) {
        cardPortfolio2.classList.add("slide-top")
    }else if(document.documentElement.scrollTop < 2500){
        cardPortfolio2.classList.remove("slide-top");
    }

    if (document.documentElement.scrollTop > 2700) {
        cardPortfolio3.classList.add("slide-down")
    }else if(document.documentElement.scrollTop < 2500){
        cardPortfolio3.classList.remove("slide-down");
    }

    if (document.documentElement.scrollTop > 3300) {
        cardPortfolio4.classList.add("slide-top")
    }else if(document.documentElement.scrollTop < 3000){
        cardPortfolio4.classList.remove("slide-top");
    }

    if (document.documentElement.scrollTop > 3300) {
        cardPortfolio5.classList.add("slide-down")
    }else if(document.documentElement.scrollTop < 3000){
        cardPortfolio5.classList.remove("slide-down");
    }

    if (document.documentElement.scrollTop > 3300) {
        cardPortfolio6.classList.add("slide-top")
    }else if(document.documentElement.scrollTop < 3000){
        cardPortfolio6.classList.remove("slide-top");
    }

    if (document.documentElement.scrollTop > 3800) {
        contactTitle.classList.add("slide-top")
    }
    else if(document.documentElement.scrollTop < 3750){
        contactTitle.classList.remove("slide-top");
    }

    if (document.documentElement.scrollTop > 3800) {
        contactSubtitle.classList.add("slide-right")
    }
    else if(document.documentElement.scrollTop < 3750){
        contactSubtitle.classList.remove("slide-right");
    }

    if (document.documentElement.scrollTop > 4100) {
        form1.classList.add("slide-top")
    }
    else if(document.documentElement.scrollTop < 3800){
        form1.classList.remove("slide-top");
    }

    if (document.documentElement.scrollTop > 4150) {
        form2.classList.add("slide-top")
    }
    else if(document.documentElement.scrollTop < 3800){
        form2.classList.remove("slide-top");
    }

    if (document.documentElement.scrollTop > 4200) {
        form3.classList.add("slide-top")
    }
    else if(document.documentElement.scrollTop < 3800){
        form3.classList.remove("slide-top");
    }

    if (document.documentElement.scrollTop > 4250) {
        form4.classList.add("slide-top")
    }
    else if(document.documentElement.scrollTop < 3800){
        form4.classList.remove("slide-top");
    }

    if (document.documentElement.scrollTop > 4200) {
        contactImg.classList.add("slide-left")
    }
    else if(document.documentElement.scrollTop < 3800){
        contactImg.classList.remove("slide-left");
    }

    if (document.documentElement.scrollTop > 4250) {
        contactBtn.classList.add("slide-right")
    }
    else if(document.documentElement.scrollTop < 3800){
        contactBtn.classList.remove("slide-right");
    }

}

const showMenu = document.querySelector(".toggle-navbar");
showMenu.addEventListener("click", ()=> {
    let navMobile = document.querySelector(".nav-mobile");
    let overlayMobile = document.querySelector(".overlay-mobile");
    navMobile.classList.add("nav-mobile-active");
    overlayMobile.classList.add("overlay-active");
});
const closeMenu = document.querySelector(".close-menu");
closeMenu.addEventListener("click", ()=>{
    let navMobile = document.querySelector(".nav-mobile");
    let overlayMobile = document.querySelector(".overlay-mobile");
    navMobile.classList.remove("nav-mobile-active");
    overlayMobile.classList.remove("overlay-active");
})