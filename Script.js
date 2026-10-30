
// 1. Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(event) {

        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

});


// 2. Contact Me button interaction
const contactButton = document.querySelector('#home a');

if (contactButton) {

    contactButton.addEventListener('click', function(event) {

        event.preventDefault();

        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });

    });

}


// 3. Check JavaScript is working
console.log("Sakshi's Portfolio JavaScript loaded successfully!");
