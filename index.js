function getRandomNumber() {
    return Math.floor(Math.random() * (10 - 1) + 1);
}

let x= getRandomNumber();

document.getElementById("displayRandomNum").textContent = x;


function displayRandomNumber() {
    let x = getRandomNumber();
    document.getElementById("displayNumber").textContent = x;
}

function startInterval() {
    intervalId = setInterval(displayRandomNumber, 500); 
}

function stopInterval() {
    clearInterval(intervalId);
}

document.getElementById("run").addEventListener("click", startInterval);

document.getElementById("stop").addEventListener("click", stopInterval);

