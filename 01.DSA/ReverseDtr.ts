function reverse(x: number): number {
    // Determine the sign of the number
    const sign = Math.sign(x);
    // Convert the absolute value of the number to a string, reverse it, and parse it back to a number
    const reversedNumber = parseInt(x.toString().split('').reverse().join('')) * sign;
    // Handle overflow for 32-bit signed integer range
    if (reversedNumber < -2147483648 || reversedNumber > 2147483647) {
        return 0;
    }
    return reversedNumber;
};