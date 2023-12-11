// function greet()
// {
//     console.log("ramya");
// }
// greet();

// function greet(user)   //function return and passing
// {
//     return `Hello ${user}!`
// }
// let user='Ramya';
// let str=greet(user);
// console.log(str);

let add = function(num1, num2)  //function expression
{
    return num1+num2;
}
let sum=add;
let result=sum(5,6)
console.log(result);
