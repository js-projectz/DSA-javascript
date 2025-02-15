function generatePascalTriangle(rows) {
    const triangle = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j <= i; j++) {
            // First and last element in each row is always 1
            if (j === 0 || j === i) {
                row.push(1);
            } else {
     
                row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
        }
        triangle.push(row);
    }

    return triangle;
}

const rows = 5;
const pascalTriangle = generatePascalTriangle(rows);

pascalTriangle.forEach(row => console.log(row.join(' ')));
