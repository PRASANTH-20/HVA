function findSecondMax(numbers) {
    if (numbers.length < 2) {
        return "Array should have at least two numbers.";
    }
   for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] < numbers[j]) {
                const temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
return numbers[1];
}
const numbersArray = [15, 30, 20, 10, 25];
const secondMax = findSecondMax(numbersArray);
console.log("The second maximum number is:", secondMax);
