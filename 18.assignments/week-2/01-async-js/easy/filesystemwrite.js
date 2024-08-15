const fs = require('fs');

// Data to be written to the file
const data = "This is some new content written to the file!";

// Write data to a file asynchronously
fs.writeFile('output.txt', data, 'utf8', (err) => {
    if (err) {
        console.error("Error writing to file:", err);
        return;
    }
    console.log("File has been written successfully!");
});

// Expensive operation (CPU-bound)
let sum = 0;
for (let i = 0; i < 1e9; i++) {
    sum += i;
}

console.log("Expensive operation completed. Sum is:", sum);