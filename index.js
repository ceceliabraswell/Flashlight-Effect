// Variables to store the intial mouse coordinates.
let mouseX = 0;
let mouseY = 0;

// Reference flashlight element by ID.
let flashlight = document.getElementById('flashlight');

// Function to check if the device supports touch events.
const isTouchDevice = () => {
    try {
        document.createEvent('TouchEvent');
        return true;
    } catch (e) {
        return false;
    }
}

// Function to get the mouse or touch position and update the flashlight position.
const getMousePosition = (e) => {
    // Determine the appropriate coordinates based on the device type (mouse or touch).
    mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

    // Set the custom properties in the CSS for the flashlight position.
    flashlight.style.setProperty('--Xpos', mouseX + 'px');
    flashlight.style.setProperty('--Ypos', mouseY + 'px');
}

// Event listener to call teh getMousePosition function on mouse or touch move.
document.addEventListener('mousemove', getMousePosition);
document.addEventListener('touchmove', getMousePosition);