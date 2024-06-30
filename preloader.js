// Create the overlay element
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(30, 30, 30, 0.85);
    z-index: 999;
`;

// Create the Lottie container element
const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottie';
lottieContainer.style.cssText = `
    max-width: 35%;
    max-height: 30%;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// Append the elements to the overlay
overlay.appendChild(lottieContainer);

// Append the overlay to the body
document.body.appendChild(overlay);

// Load the Lottie animation
lottie.loadAnimation({
    container: lottieContainer,
    renderer: 'svg', // or 'canvas' if you prefer
    loop: true,
    autoplay: true,
    path: 'https://cdn.jsdelivr.net/gh/request-tickets/external@main/lottie_preloader.json',
});

// Function to hide the overlay and Lottie animation
function hideOverlay() {
   overlay.style.display = 'none';
    lottieContainer.style.display = 'none';
}
// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
    // Replace the following lines with the actual code that loads your external JS files
    // For demonstration purposes, we'll use a setTimeout to simulate loading external JS files.
    setTimeout(hideOverlay, 100); // Replace with your actual loading code.
});

// Fallback: If all external resources are loaded and the DOMContentLoaded event doesn't fire,
// we'll still hide the overlay when the window's load event is triggered.
window.addEventListener('load');
