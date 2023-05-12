window.sr = ScrollReveal({
    reset: true
});

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1500,
    distance: '20rem',
    delay: 300;
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1500,
    distance: '20rem',
    delay: 300;
});
