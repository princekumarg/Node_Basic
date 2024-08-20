let counter = 0;
function updateCounter() {
    console.log(counter);
    counter += 1;
    setTimeout(updateCounter, 1000);
}
updateCounter();