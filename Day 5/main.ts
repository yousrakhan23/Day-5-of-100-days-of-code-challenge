
// Q 66:

//Logical AND Verification: Create a function that checks two boolean (true or false) values. 
//It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) 
//should be false.

// Explain & TIP: The && operator in JavaScript checks if both sides are true. It's great for confirming
// several things are true all at once.

function checkBothTrue(val1 : boolean , val2 : boolean) : boolean {
    return val1 && val2 ;
}

console.log(checkBothTrue(true , false)) ;

//.........................................................................................................................

// Q 67:

//Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents
// a number (e.g., "5"). Return their sum as a number. 

//Explain & TIP: JavaScript allows arithmetic operations between mixed types. When you add a number 
//to a string that looks like a number, JavaScript converts the string to a number for the operation.

function addNumberAndString(num1: number , numberString : string ) : number{
    return num1 + Number (numberString) ;
}
console.log(addNumberAndString(10 , "5"));

//...........................................................................................................

// Q 68:

//Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round 
//the result to two decimal places.

//Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help 
//keep numbers manageable.

function multiplyDecimals(num1 : number , num2 : number ) : number {
    return Math.round((num1 * num2) * 100) / 100 ;
}
console.log(multiplyDecimals(0.1 , 0.2));

//...................................................................................................................

// Q 69:

// Dividing and finding the remainder: write a function that divides two numbers and returns both the quotient and 
//the remainder use an object to return both values.

function divideAndRemainder(dividend : number , divisor : number): {
    quotient: number ; remainder: number
}
{
    let quotient = Math.floor(dividend / divisor );
    let remainder = dividend % divisor ; 
    return {quotient , remainder};
}
console.log(divideAndRemainder(10 , 3));

//.............................................................................................................................

// Q 70:

// understanding let in loops . wrrite  a function that uses a loop with the let keyword to print number from 1 to 5 , 
// explain how the let keyword affects the visibility of the loop variable.

function printNumberWithLet (){
    for(let i = 1 ; i <= 5 ; i++){
        console.log(i) ; 
    }
}
printNumberWithLet();