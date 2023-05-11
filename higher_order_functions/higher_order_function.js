//Functions that are passed to or returned from another function

const myNumbers = [1,2,3,4,5]

// for (const number of myNumbers) {
//     console.log(number)
// }

// const logNumber = (number) => {
//     console.log(number*2)
// }
// myNumbers.forEach(logNumber) //this forEach function takes in another function logNumber

// myNumbers.forEach((number, index, myNumbers) => { //simplification of above with ofEach(value:number, index:number, array :number[] )
//     console.log(`This is the number ${number} and it is at index ${index} of ${myNumbers}`)
// })

//-------------------------------------//

// const numbers = [5,6,7,8,9]
// const multipleByTwo = (numbers) => {
//     const result = []
//     numbers.forEach((number) => {    //forEach() has no return value
//         const multipliedNumber = number*2
//         result.push(multipliedNumber)   //add number into the array of result.
//     })
//     console.log(result)
//     return result
    
// }
// multipleByTwo(numbers)

//MultiplyByTwo can be refractored with array.map()
const numbers = [5,6,7,8,9]

const multipleByTwo = (numbers) => {
    const multipledByTwo = numbers.map(number => number * 2)
    return multipledByTwo
    }
    
console.log(multipleByTwo(numbers))

//-------------------------------------//

// Using the forEach method, complete the following tasks:
// Write a function called getEvens that takes an array of numbers as an argument and returns a new array that only contains the even numbers from the original array.
// Write a function called sumElements that takes an array of numbers as an argument and returns the sum total of all the elements in the array.

// const moreNumbers = [2,3,4,5,6,7,7,8,9,9,10]

// const getEvens = (numbers) => {
//     const results = []
//     numbers.forEach( (number) => {
//         if (number%2 ===0 ) {
//             results.push(number)
//         }
//     })
//     return results
// };

// console.log(getEvens(moreNumbers))

//getEvens can be refactored using array.filter()
const moreNumbers = [2,3,4,5,6,7,7,8,9,9,10]

const getEvens = (numbers) => { 
    const evenNumbers = moreNumbers.filter(number => number%2 === 0)
    return evenNumbers
}
console.log(getEvens(moreNumbers))


//-------------------------------------//

// const sumElements = (numbers) => {
//     let runningTotal = 0

//     numbers.forEach((number) => {
//         runningTotal += number
//     })
    
//     return runningTotal
// };

// console.log(sumElements(moreNumbers))

//sumElements can be refactored using array.reduce() 

const sumElements = (numbers) => {
    const initialValue = 0;  //not essential - if omitted the currentValue will be array[1]
    const sumWithInitial = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
    return sumWithInitial
}
console.log(sumElements(myNumbers))