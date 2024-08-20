function gp(n, square) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + square(i);
    }
    return sum;
}
function square(a) {
    return a * a;
}
const value = gp(5, square);
console.log(value);