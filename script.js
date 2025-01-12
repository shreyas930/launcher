function updateDay() {
    const now = new Date();
    const options = { weekday: 'long' };
    const formattedDate = now.toLocaleString('en-US', options);
    document.getElementById('Day').innerText = formattedDate;
}

function updateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedDate = now.toLocaleString('en-US', options);
    document.getElementById('Time').innerText = formattedDate;
}

function updateDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: '2-digit'};
    const formattedDate = now.toLocaleString('en-US', options);
    document.getElementById('Date').innerText = formattedDate;
}
// Call the function to set the initial date and time
updateDate();
updateDay();
updateTime();
// Update the date and time every second
setInterval(updateDate, 1000);
setInterval(updateTime, 500);
setInterval(updateDay, 1000);

function openSettings() {
    alert('Settings clicked!');
}
