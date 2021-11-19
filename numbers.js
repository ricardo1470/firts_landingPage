function find_max(nums) {
    var max_num = Number.NEGATIVE_INFINITY;

    for (var num of nums) {
        if (num > max_num) {
            max_num = num;
        };
    };
    return max_num;
}

//console.log(find_max([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function n_prime(n) {
    let i;
    let j;

    if (n <= 1) {
        console.log('is not a prime number');
    }

    for (i = 2; i <= n; i++) {
        for (j = 2; j < i; j++) {
            if (i % j === 0) {
                break;
            }
        }
        if (j == i) {
            console.log(i);
        }
    }
    return;
}
//console.log(n_prime(1000000));  //imprime los primeros n números primos

function fibonacci(n) {
    var a = 1;
    var b = 1;
    var c;
    var i;

    for (i = 1; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(a);
    }
    return c;
}

//console.log(fibonacci(100));

function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
}

//console.log(factorial(5));

// sumar dos numeros
function solution(n) {
    var i = 0;

    while (n != 0) {
        i =  i + n % 10;
        console.log("esto es i", i);
        n = Math.floor(n / 10);
        console.log("esto es n", n);
    }
    return(i);
}

//console.log(solution(0));

function fractions() {
    frac = ['2/3 + 2+6']
    var i;
    var j;

    for (i = 0; i < frac.length; i++) {
        for (j = 0; j < frac.length; j++) {
            fraction = frac[i] + frac[j];
        }
    }
    console.log(fraction);
}
