const numbers = [5, 12, 8, 130, 44];

const maxNumber = numbers.reduce((max, current) => {
    return current > max ? current : max;
}, numbers[0]);

console.log("The maximum number is:", maxNumber);




