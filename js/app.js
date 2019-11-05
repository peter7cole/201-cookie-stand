'use strict';

//  Stores the min/max hourly customers, and the average cookies per customer,
//      in object properties

//  Constructor functions start with a capital
//  'this' in a constructor func can be read as
//  the new object you are making in this constructor

function City(name, min, max, avgCookie) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avgCookie = avgCookie;
}

var seattle = new City('Seattle', 23, 65, 6.3);

var tokyo = new City('Tokyo', 3, 24, 1.2);

var dubai = new City('Dubai', 11, 38, 3.7);

var paris = new City('Paris', 20, 38, 2.3);

var lima = new City('Lima', 2, 16, 4.6);

var dataDiv = document.getElementById('data');

// Uses a method of that object to generate a random number of customers per hour.
//     Objects/Math/random

function randCustomer() {
    return Math.floor(Math.random() * Math.floor(11));
}

// Calculate and store the simulated amounts of cookies purchased for each hour
//     at each location using average cookies purchased
//     and the random number of customers generated

// cookies purchased per hour = avg cookies purchased * number of customers

var storeHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am',
    '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', ];
console.log(`storeHours: ${storeHours}`);

var storeLocation = [seattle, tokyo, dubai, paris, lima];
console.log(`storeLocation: ${storeLocation}`);

// iterate through each store
var storeNow = '';
var cookiesPerHour = 0;

for (var storeIndex = 0; storeIndex < storeLocation.length; storeIndex++) {
    var paragraph = document.createElement('p');
    var currentStore = storeLocation[storeIndex];
    paragraph.textContent = currentStore.name;
    console.log(`storeNow: ${storeNow}`);

    dataDiv.append(paragraph);

    //  cookies per hour for one store
    for (var cookieIndex = 0; cookieIndex < storeHours.length; cookieIndex++) {
        
        var cookieParagraph = document.createElement('p');
        cookieParagraph.textContent = currentStore.avgCookie[cookieIndex];
        dataDiv.append(cookieParagraph);
        
        cookiesPerHour = storeNow[storeIndex].avgCookie * randCustomer();
        console.log(`cookiesPerHour: ${cookiesPerHour}`);
    }
}

// Store the results for each location in a separate array…
//     perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals;
// your output for each location should look like this:

// Seattle

// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// Total: 875 cookies

// Display the lists on sales.html


var dataDiv = document.getElementById('data');

var paragraph = document.createElement('p');
paragraph.textContent = 'Here is the data we want to see.';
dataDiv.append(paragraph);

console.log(`dataDiv: ${dataDiv}`);
