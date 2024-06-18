const name = document.getElementById('name1');

// Define the hover effect
name.addEventListener('mouseover', function() {
    name.style.transform = 'scale(1.2)'; // Make the button bigger
    name.style.backgroundColor = '#0056b3'; // Change the button color
});

// Remove the hover effect when not hovering
name.addEventListener('mouseout', function() {
    name.style.transform = 'scale(1)'; // Revert the button size
    name.style.backgroundColor = 'white'; // Revert the button color
});
const register = document.getElementById('Registration');

// Define the hover effect
register.addEventListener('mouseover', function() {
    register.style.transform = 'scale(1.2)'; // Make the button bigger
    register.style.backgroundColor = '#0056b3'; // Change the button color
});

// Remove the hover effect when not hovering
register.addEventListener('mouseout', function() {
    register.style.transform = 'scale(1)'; // Revert the button size
    register.style.backgroundColor = 'white'; // Revert the button color
});
const college = document.getElementById('collegename');

// Define the hover effect
college.addEventListener('mouseover', function() {
    college.style.transform = 'scale(1.2)'; // Make the button bigger
    college.style.backgroundColor = '#0056b3'; // Change the button color
});

// Remove the hover effect when not hovering
college.addEventListener('mouseout', function() {
    college.style.transform = 'scale(1)'; // Revert the button size
    college.style.backgroundColor = 'white'; // Revert the button color
});
const button = document.getElementById('button');

// Define the hover effect
button.addEventListener('mouseover', function() {
    button.style.transform = 'scale(1.2)'; // Make the button bigger
    button.style.backgroundColor = '#0056b3'; // Change the button color
});

// Remove the hover effect when not hovering
button.addEventListener('mouseout', function() {
    button.style.transform = 'scale(1)'; // Revert the button size
    button.style.backgroundColor = 'white'; // Revert the button color
});
button.addEventListener('dblclick',function(){
    button.disabled='true';
});