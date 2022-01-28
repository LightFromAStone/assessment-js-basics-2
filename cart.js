///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((total, nextItem) => total += nextItem.price, 0);
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE    

//----- NOTE: coupons are applied before tax is calculated. Instructions make it sound backwards -----//
function calcFinalPrice(cartTotal, couponValue, tax) {
    cartTotal -= couponValue;
    return cartTotal *= (tax + 1);
}
//console.log(calcFinalPrice(11, 1, .2));



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Some of these choices seem self-evident, but I think the customer object should include an array of strings of what was ordered (helps determine what items are most popular, plus kitchen has to know what to make), the number of people in the customers party -Number- (lets the restuarant determine their average party size), table number -Number- (keep track of where each party is located), seated time and leave time -Numbers- (so the restuarant can calculate the average amount of time a customer spends there), the total cost of the orders -Number- (gotta keep track of expenses), and finally a boolean of whether or not the customer paid (to look out for dine-n-dashers).

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
customer = {
    orders: ['water', 'water', 'water', 'The Regret'],
    size: 3,
    table: 6,
    seated: 1304,
    departed: 1341,
    total: 43.29,
    paid: true
}
