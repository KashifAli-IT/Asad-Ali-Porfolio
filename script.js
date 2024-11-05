document.querySelectorAll('.skill-heading').forEach(heading => {
    heading.addEventListener('click', () => {
        const skillList = heading.nextElementSibling; // Get the next sibling (the list)
        if (skillList.style.display === 'block') {
            skillList.style.display = 'none'; // Hide the list
        } else {
            skillList.style.display = ' block'; // Show the list
        }
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
