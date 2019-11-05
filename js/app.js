'use strict';

// Stores the min/max hourly customers, and the average cookies per customer,
//     in object properties

var seattle = {
    name: 'Seattle',
    minSeattle: '23',
    maxSeattle: '65',
    avgCookieSeattle: '6.3',
    randCustomer: function() {
        return Math.floor(Math.random() * Math.floor(11));
    }
};

var tokyo = {
    name: 'Tokyo',
    minTokyo: '3',
    maxTokyo: '24',
    avgCookieTokyo: '1.2'
};

var dubai = {
    name: 'Dubai',
    minDubai: '11',
    maxDubai: '38',
    avgCookieDubai: '3.7'
};

var paris = {
    name: 'Paris',
    minParis: '20',
    maxParis: '38',
    avgCookieParis: '2.3'
};
var lima = {
    name: 'Lima',
    minLima: '2',
    maxLima: '16',
    avgCookieLima: '4.6'
};

// Uses a method of that object to generate a random number of customers per hour.
//     Objects/Math/random

/*
randCustomer: function() {
  return Math.floor(Math.random() * Math.floor(11));
}
*/

// Calculate and store the simulated amounts of cookies purchased for each hour
//     at each location using average cookies purchased
//     and the random number of customers generated

var storeHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am',
    '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', ];

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