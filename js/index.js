// Iteration 1: Names and Input
//
const hacker1 = "XXXX";
console.log(`the driver's name is ${hacker1}`);

const hacker2 = "YYYY";
console.log(`the navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`the driver's name is ${hacker1.length} characters.`)
}
else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};

// Iteration 3: Loops



//3.2
const hacker1reves = hacker1.split('').reverse().join('')
console.log({hacker1reves})