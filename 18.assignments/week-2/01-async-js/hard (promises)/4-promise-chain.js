/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function wait(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, t * 1000); // Convert seconds to milliseconds
    });
}
function wait1(t1) {
    return wait(t1);
}

function wait2(t2) {
    return wait(t2);
}

function wait3(t3) {
    return wait(t3);
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now(); // Record start time

    return wait1(t1)
        .then(() => wait2(t2))
        .then(() => wait3(t3))
        .then(() => {
            const endTime = Date.now(); // Record end time
            return endTime - startTime; // Calculate and return the time taken
        });
}

module.exports = calculateTime;
