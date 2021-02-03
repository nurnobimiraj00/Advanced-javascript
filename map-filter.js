const letsDoSquare = [3, 6, 4, 8, 9, 7, 5, 1, 12];
let output = [];
for (let i = 0; i < letsDoSquare.length; i++) {
    const element = letsDoSquare[i];
    let result  = element * element;
    output.push(result);
}
console.log(output);