function formatTime24Hours(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function formatTime12Hours(date) {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 (midnight) to 12
    return `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
}

function displayTime() {
    const now = new Date();
    const time24Hours = formatTime24Hours(now);
    const time12Hours = formatTime12Hours(now);

    console.log(`24-Hour Format: ${time24Hours}`);
    console.log(`12-Hour Format: ${time12Hours}`);
    console.log('----------------------');
}

// Update the time every second
setInterval(displayTime, 1000);
