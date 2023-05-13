// Objects
// const dict = {
//     ami: 'valo achi alhamdulillah',
//     tumi: 'amio alhamdulillah valo achi'
    
//   }
  
//   console.log(dict)
// -------------------------------------
// Arithmetic Operators
// let a = 4;
// let b = 4;
// console.log('a + b = ', a+b)
// console.log('a - b = ', a-b)
// console.log('a * b = ', a*b)
// console.log('a / b = ', a/b)
// console.log('a % b = ', a%b)
// console.log('a++ = ', a++)
// console.log('a = ', a)
// console.log('a-- = ', a--)
// console.log('a = ', a)
// console.log('++a = ', ++a)

// Assignment operators
// a += 5 //same as a = a+5
// console.log(a)

// Comparison operators
// console.log("a==b = ", a==b)
// console.log("a!=b = ", a!=b)
// console.log("a===b = ", a===b)
// console.log("a!==b = ", a!==b)

// Logical operators
// console.log(a<b && a==b)
// -------------------------------------
//Type of: number, string, null, undefined

// Conditional Expression
// let a = prompt('Hey whats your age?')
// a = Number.parseInt(a) // Converting a string to a number
// console.log(typeof a)
// if(a<0){
//   alert('This is an invalid age')
// }
// else if(a<10){
//   alert('You are kid till now! you cant handle it')
// }
// else if(a<=10 && a<18){
//   alert('you are a kid you can think it when you will be in 18')
// }
// else{
//   alert('You can handle it')
// }
// console.log('you can' , (a<18? 'not drive':'drive'))

// let age = prompt('What is your age?')
// if(age>15 && age<20){
//   console.log('It is between 15 and 20')
// }
// else{
//   console.log("It isn't between 15 and 20")
  
// }
let a = prompt('what is your age?')
switch(a){
  case '18':
    console.log('you are not a kid')
    break
  case '19':
    console.log('you can do whatever you want')
    break
  case '20':
    console.log('tumi tahole nosto hoye jabe')
    break
  default: 
      console.log('tumi kisuina')
}
