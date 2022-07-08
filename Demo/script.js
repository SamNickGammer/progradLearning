const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45],
];

function maximumProduct(matrix) {
  let p = 1;
  for (let i = 0; i < matrix.length - 3; i++) {
    p = 1;
    for (let j = 0; j < matrix[i].length - 3; j++) {
      h = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
      v = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
      if (p < h) {
        p = h;
      }
      if (p < v) {
        p = v;
      }
    }
  }
  return p;
}
console.log(maximumProduct(matrix));
