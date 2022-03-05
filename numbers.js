/*function find_max(nums) {
    var max_num = Number.NEGATIVE_INFINITY;

    for (var num of nums) {
        if (num > max_num) {
            max_num = num;
        };
    };
    return max_num;
}

console.log(find_max([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

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
console.log(n_prime(500));  //imprime los primeros n números primos

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

console.log(fibonacci(100));

function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
}

console.log(factorial(5));

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

console.log(solution(4));

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


/*let inputs = [1, "turing", {x:2}, [3, 4], {y: 5}]
for(let i=0; i<inputs.length; i++){
    if(inputs[i] === "turing") inputs.slice(i, 1)
    else console.log(inputs[i])
}

console.log("otro")
let arr = [1, "turing", {x:2}, [3, 4], {y: 5}]
delete arr[1]
console.log(arr.length);

console.log("uno mas")
let a = {y: 10}
a.x = a
console.log(JSON.stringify(a))

function solution(year) {
    var  years = 0;

    if (year % 100 == 0) {
        years = Math.floor(year / 100);
        return (years);
    } else if  (year / 100 != 0) {
        years = Math.floor(year / 100);
        century = years + 1;
        return (century);
    }
}

console.log(solution(2000));*/

/*function isPalindrome(inputString) {
    let i = 0;
    let j = inputString.length - 1;

    while (i < j) {
        if (inputString[i] != inputString[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(isPalindrome("abac"));

function maxArray(inputArray) {
    let max = inputArray[0];
    let i;

    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > max) {
            max = inputArray[i];
        };
    };
    return max;
}

console.log(maxArray([1, 2, 3, 4, 5, 6, 7, 8, 9, -10]));*/

/* Given an array of integers,
find the pair of adjacent elements
that has the largest product and return that product.*/

/*function maxProduct(inputArray) {
    let max = inputArray[0] * inputArray[1];
    let i;

    for (i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] * inputArray[i + 1] > max) {
            max = inputArray[i] * inputArray[i + 1];
        };
    };
    return max;
}

console.log(maxProduct([1, 2, 3, 0]));

function shapeArea(n) {
    let i;
    let area = 1;

    for (i = 1; i < n; i++) {
        area = area + 4 * i;
    };
    return area;
}

console.log(shapeArea(3));

function makeArrayConsecutive(n) {
    let i;
    let j;
    let count = 0;
    let min = n[0];
    let max = n[0];

    for (i = 0; i < n.length; i++) {
        if (n[i] < min) {
            min = n[i];
        } else if (n[i] > max) {
            max = n[i];
        };
    };
    for (j = min + 1; j < max; j++) {
        if (n.indexOf(j) == -1) {
            count++;
        };
    };
    return count;
}

console.log(makeArrayConsecutive([0, 3]));

function almostIncreasingSequence(sequence) {
    let i;
    let count = 0;

    for (i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            count++;
            if (count > 1) {
                return false;
            }
        } else if (sequence[i] < sequence[i - 2] && sequence[i+1] <= sequence[i - 1]) {
            return false;
        }
    };
    return true;
}

console.log(almostIncreasingSequence([1, 2, 5, 3, 5]));

function solution(seq) {
    var bad=0
    for(var i=1;i<seq.length;i++) if(seq[i]<=seq[i-1]) {
        bad++
        if(bad>1) return false
        if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
    }
    return true
}

console.log(solution([1, 2, 5, 3, 5]))

function AllLongestStrings(inputArray) {
    let i;
    let max = inputArray[0].length;
    let arr = [];

    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > max) {
            max = inputArray[i].length;
        };
    };
    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length == max) {
            arr.push(inputArray[i]);
        };
    };
    return arr;
}

console.log(AllLongestStrings(["abad", "aa", "ad", "vcdd", "daba"]));

function commonCharacterCount(s1, s2) {
    let i;
    let j;
    let count = 0;
    let arr1 = s1.split("");
    let arr2 = s2.split("");

    for (i = 0; i < arr1.length - 1; i++) {
        for (j = 0; j < arr2.length - 1; j++) {
            if (arr1[i] == arr2[j]) {
                count++;
                arr2.splice(j - i, 1);
            } else if (arr1[i] != arr2[j]) {
                count;
            } else {
                count;
            }
        };
    };
    return count;
}

console.log(commonCharacterCount("zzzz", "zzzzzzz"));


// for digits =[1,2,3] the output should be solution(digits) = [1,2,4];
function plusOne(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;

        if( digits[i] > 9 ){
            digits[i] = 0;
        } else{
            return digits;
        }
    }

    digits.unshift(1);
    return digits;
}

console.log(plusOne([1,2,9]));*/

function matrixElementsSum(matrix) {
    let i;
    let j;
    let count = 0;

    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            
        }
    };
}

console.log(matrixElementsSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]));
console.table(matrixElementsSum([[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]]));