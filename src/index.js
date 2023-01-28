
module.exports = function towelSort (matrix) {
let res = [];
if (towelSort.arguments.length === 0) return res;

let ii = 0;
for (ii; ii < matrix.length; ii++) {
for (let i = ii; i === ii; i++) {
 for (let j = 0; j < matrix[0].length; j++) {
   if (ii === matrix.length) break;
   if (matrix[i][j] === undefined) break;
   res.push(matrix[i][j]);
 }
}

ii++;

for (let i = ii; i === ii; i++) {
 for (let j = matrix[1].length - 1; j !== -1; j--) {
   if (ii === matrix.length) break;
   if (matrix[i][j] === undefined) break;  
   res.push(matrix[i][j])
 }
}
}

return(res)
}