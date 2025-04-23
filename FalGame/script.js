// JavaScript to add interactivity

// Add hover effect to team members
const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
    member.addEventListener('mouseover', () => {
        member.style.transform = 'scale(1.05)';
    });
    member.addEventListener('mouseout', () => {
        member.style.transform = 'scale(1)';
    });
});

// Handle contact form submission
document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Clear form inputs after submission
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#message').value = '';
});
