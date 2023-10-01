const findSecondMax = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3) {
        return num2 >= num3 ? num2 : num3;
    } else if (num2 >= num1 && num2 >= num3) {
        return num1 >= num3 ? num1 : num3;
    } else {
            return num1 >= num2 ? num1 : num2;
    }
};
const num1 = 15;
const num2 = 30;
const num3 = 20;
const secondMax = findSecondMax(num1, num2, num3);
console.log("The second maximum number is:", secondMax);
