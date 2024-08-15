const fs = require('fs');

// Function to clean extra spaces from the content
function removeExtraSpaces(content) {
    return content.replace(/\s+/g, ' ').trim();
}

// Read the file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Remove extra spaces
    const cleanedContent = removeExtraSpaces(data);

    // Write the cleaned content back to the same file
    fs.writeFile('example.txt', cleanedContent, 'utf8', (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return;
        }
        console.log("File has been cleaned and updated successfully!");
    });
});