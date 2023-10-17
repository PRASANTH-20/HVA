const isPrime = function (num) {
    if (num <= 1) {
        return 0; 
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return 0; 
        }
    }
    return 1; };

function printFirst100Primes() {
    let count = 0;
    let num = 2;

    while (count < 100) {
        if (isPrime(num)) {
            console.log(num);
            count++;
        }
        num++;
    }
}

printFirst100Primes();
