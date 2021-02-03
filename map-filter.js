const letsDoSquare = [3, 6, 4, 8, 9, 7, 5, 1, 12];
// let output = [];
// for (let i = 0; i < letsDoSquare.length; i++) {
//     const element = letsDoSquare[i];
//     let result  = element * element;
//     output.push(result);
// }


// const result = letsDoSquare.map(function(element){
//     return element * element;
// })

// const result = letsDoSquare.map(m => m*m);

const result = letsDoSquare.filter(x => x/2);
console.log(result);