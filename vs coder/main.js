const now = new Date();

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const timeElement = document.getElementById('time');
    if (timeElement) {
        timeElement.textContent = "Current time: " + timeString;
    }
}

setInterval(updateTime, 1000);
updateTime();