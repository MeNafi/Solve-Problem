// Problem 1 solution

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));



// Problem 2 solution

function reverseString(value: string){
    return value.split("").reverse().join("");
}

console.log('"'+ reverseString("typescript") + '"');


//Problem 3 solution