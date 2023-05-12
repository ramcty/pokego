function openNav() {
    document.getElementById("mySidebar").style.width = "450px";
    document.getElementById("main").style.marginLeft = "450px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


function revealFunction() {

    //first we need to initialize our "sr" (scroll reveal)
    //do you lnow all the behaviors that will be the same for all animations? Just send it directly here
    //as in my case, the duration, the distance...

    window.sr = ScrollReveal({
        duration: 1350,
        distance: '250px',
        easing: 'ease-out'
    });

    //here we can create infinite classes according to our needs
    //so first we declare the name of the class and pass the props to it
    //see the documentation and you are free to do anything you can think of about the scroll fade effect :)

    sr.reveal('.boxed', {
        origin: 'bottom',
        reset: false
    });

    sr.reveal('.content', {
        origin: 'bottom',
        reset: false
    });

}




// first of all, on load we call our magic
window.addEventListener('load', () => {

    revealFunction();
})
