document.querySelectorAll('.skill-heading').forEach(heading => {
    heading.addEventListener('click', () => {
        const skillList = heading.nextElementSibling; // Get the next sibling (the list)
        if (skillList.style.display === 'block') {
            skillList.style.display = 'none'; // Hide the list
        } else {
            skillList.style.display = ' block'; // Show the list
        }
    });
    heading.addEventListener('click', function() {
        const arrow = this.querySelector('.arrow');
        arrow.classList.toggle('rotate'); // Toggle the rotate class on click
    });
});

document.getElementById('hamburger').addEventListener('click', function() {
const navLinks = document.getElementById('nav-links');
navLinks.classList.toggle('active'); // Toggle the active class
this.classList.toggle('active'); // Toggle the active class for hamburger
});

// Add click event to each link to close the menu
const navItems = document.querySelectorAll('#nav-links li a');
navItems.forEach(item => {
item.addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('active'); // Remove active class to close the menu
    document.getElementById('hamburger').classList.remove('active'); // Remove active class from hamburger
});
});

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Show one slide at a time
    spaceBetween: 10, // Space between slides
   navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1, // Show one slide at a time on small screens
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2, // Show 2 slide at a time on medium screens
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3, // Show three slides at a time on larger screens
            spaceBetween: 30,
        },
    },
});
