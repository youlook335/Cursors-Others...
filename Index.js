// Function in Javascript

// Simple Function
// function simple(a, b) {
//     console.log(a + b);
// }
// simple(5,6);

// Return Function
// function return1(a, b) {
//     return a + b;
// }
// let result = return1(5, 6);
// console.log(return1("This is a Sum Valu : " , result));

// 1)

// function return1(a, b) {
//     return a + b;
// }
// console.log(return1("This is a Latest Vale in js ",5, 6));

// Arrow Function
// 1)
// const fun1 = (latest) => {
//     console.log("I am Arrow Function", latest);
// }
// fun1(21);

// 2)

const fun2 = (a, b, c, d, e, f, g) => {
    console.log("I Am Arrow Function : " + (a + b + d + e + f + g));
};
fun2(12, 1, 12, 121, 122, 98, 12);


// 3)
// Reduce Function
const fun23 = (...args) => {
    const sum = args.reduce((acc, curr) => acc + curr, 0);
    console.log("I Am Arrow Function : " + sum);
};
fun23(12, 1, 12, 121, 122, 98, 12);


// 4)
// Map Function
const fun24 = (...args) => {
    const sum = args.map((val) => val * 2);
    console.log("I Am Arrow Function : " + sum);
};
fun24(12, 1, 12, 121, 122, 98, 12);
// 5)
// Filter Function
const fun25 = (...args) => {
    const sum = args.filter((val) => val > 10);
    console.log("I Am Arrow Function : " + sum);
};
fun25(12, 1, 12, 121, 122, 98, 12);
// 6)
// Sort Function
const fun26 = (...args) => {
    const sum = args.sort((a, b) => a - b);
    console.log("I Am Arrow Function : " + sum);
};
fun26(12, 1, 12, 121, 122, 98, 12);