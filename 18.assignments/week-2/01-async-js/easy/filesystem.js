const fs = require('fs');

// Read file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:");
    console.log(data);
});

// Expensive operation (CPU-bound)
let sum = 0;
for (let i = 0; i < 1e9; i++) {
    sum += i;
}

console.log("Expensive operation completed. Sum is:", sum);