document.getElementById("myDIV").addEventListener("click", myFunction);

function myFunction() {
    var menu = document.getElementById("myMENU");
    menu.classList.toggle("mystyle");
}


document.getElementById("contactClik").addEventListener("click", scrollFunc);
document.getElementById("contactClikMobile").addEventListener("click", scrollFunc);

function scrollFuncForMobile() {
    const element = document.getElementById("contact");
    element.scrollIntoView();
}

function scrollFunc() {
    const element = document.getElementById("contact");
    element.scrollIntoView();
}