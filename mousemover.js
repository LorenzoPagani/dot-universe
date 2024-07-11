
// Function to generate a random color
function getRandomColor() {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Construct a color string in RGB format
    return `rgb(${r},${g},${b})`;
}

// Function to create dots
function makeDots() {
    let x = 0;
    let y = 0;
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    return function () {

        x = Math.floor(Math.random() * screenWidth - 20);
        y = Math.floor(Math.random() * screenHeight - 20);
        let newDot = document.createElement('div');
        newDot.classList.add('dot');
        newDot.style.backgroundColor = getRandomColor();
        document.body.appendChild(newDot);
        newDot.style.top = y + 'px';
        newDot.style.left = x + 'px';
    }

};

// dot counting variable
let dotNumber = 0;
dotCounter = setInterval(() => {
    dotNumber = document.querySelectorAll('.dot').length;
    document.getElementById('dotCounter').textContent = 'Current number of dots: ' + dotNumber;
}, 1);

// Function to constantly create dots
let dotToggle = false;
let intervalId;
function dotCreation() {
    if (dotToggle) {
        document.getElementById('toggleCreation').innerHTML = 'Start Dot Creation';
        clearInterval(intervalId);
        dotToggle = false;
    }
    else {
        document.getElementById('toggleCreation').innerHTML = 'Stop Dot Creation';
        intervalId = setInterval(makeDots(), 0.1);
        dotToggle = true;
    }
};
// event listener to start and stop the dot creation
document.getElementById('toggleCreation').addEventListener('click', dotCreation);

// function to toggle dot creation on and off multiple times
document.addEventListener('keydown', toggleDots);
let dotYield = true;
function toggleDots() {
    if (dotYield) {
        clearInterval(intervalId);
        dotYield = false;
    } else {
        intervalId = setInterval(makeDots(), 0.5);
        dotYield = true;
    }

}


/* // Function to log the mouse coordinates
document.addEventListener('mousemove', logMouseCoordinates);
function logMouseCoordinates(event) {
    const x = event.clientX;
    const y = event.clientY;
    document.getElementById('x').textContent = x;
    document.getElementById('y').textContent = y;
}
 */
/* // event to move the dots to the center and eliminate them
document.addEventListener('keyup', function (event) {
    let dotx = event.clientX / 300;
    let doty = event.clientY / 100;
    document.querySelectorAll('.dot').forEach(function (dot) {

        let currentx = parseFloat(dot.style.left);
        let currenty = parseFloat(dot.style.top);
        dot.style.left = 50 + '%';
        dot.style.top = 50 + '%';
        dot.style.transition = '1s';
        setTimeout(() => {
            dot.remove();

        }, 1000);

    });
}); */

// function to continuously move the dots to the center and eliminate them
let bhToggle = false;
let startHole;

function blackHole() {
    if (bhToggle) {
        document.getElementById('toggleBlackHole').innerHTML = 'Start Black Hole';
        clearInterval(startHole);
        bhToggle = false;
    } else {
        document.getElementById('toggleBlackHole').innerHTML = 'Stop Black Hole';
        startHole = setInterval(() => {
            document.querySelectorAll('.dot').forEach(function (dot) {
                dot.style.left = '50%';
                dot.style.top = '50%';
                dot.style.transition = '3s ease-in';
                setTimeout(() => {
                    dot.remove();
                }, 3000);
            });
        }, 50);
        bhToggle = true;
    }
    console.log(bhToggle);
}


//event listener to start the black hole effect
document.getElementById('toggleBlackHole').addEventListener('click', blackHole);
