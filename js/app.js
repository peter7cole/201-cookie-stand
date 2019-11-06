'use strict';

//  Declare Days and Store Hours

//  Stores the min/max hourly customers, and the average cookies per customer,
//      in object properties
//  Stages array if Store Variables

var days = ['Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(`days: ${days}`);

var storeHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am',
  '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', ];
console.log(`storeHours: ${storeHours}`);

var seattle = new City('Seattle', 23, 65, 6.3, 'seattleData');

var tokyo = new City('Tokyo', 3, 24, 1.2, 'tokyoData');

var dubai = new City('Dubai', 11, 38, 3.7, 'dubaiData');

var paris = new City('Paris', 20, 38, 2.3, 'parisData');

var lima = new City('Lima', 2, 16, 4.6, 'limaData');

var storeLocation = [seattle, tokyo, dubai, paris, lima];
console.log(`storeLocation: ${storeLocation}`);


// Uses a method of that object to generate a random number of customers per hour.
//     Objects/Math/random

//  Constructor functions start with a capital
//  'this' in a constructor func can be read as
//  the new object you are making in this constructor

function City(city, min, max, avgSale, cityData) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avgSale = avgSale;
  this.createCustomers = function randomCustomers() {
    return Math.floor(Math.random() * Math.floor(this.max) + this.min);
  };
  this.cookiesHourly = [];
  this.cityData = cityData;
}

// Calculate and store the simulated amounts of cookies purchased for each hour
//     at each location using average cookies purchased
//     and the random number of customers generated
// Cookies purchased per hour = avg cookies purchased * number of customers/hour

// Render Function

function render(data, varType, type, contentArray, HTMLtag) {
  data = document.getElementById(HTMLtag);
  for (var indexHTML = 0; indexHTML < contentArray.length; indexHTML++) {
    varType = document.createElement(type);
    console.log(`varType: ${varType}`);
    varType.textContent = contentArray[indexHTML];
    data.render(varType);
  }
}

// Render the values to the table
// iterate through each store

render('hourData', 'hr', 'th', storeHours, 'storeHours');

for(var indexRender = 0; indexRender < storeLocation.length; indexRender++) {
  render(storeLocation[indexRender].cityData, 'bullet', 'td',
    storeLocation[indexRender].cookiesHourly, storeLocation[indexRender].name);
}

// Need Totals

// Seattle

// 0  6am: 16 cookies
// 1  7am: 20 cookies
// 2  8am: 35 cookies
// 3  9am: 48 cookies
// 4  10am: 56 cookies
// 5  11am: 77 cookies
// 6  12pm: 93 cookies
// 7  1pm: 144 cookies
// 8  2pm: 119 cookies
// 9  3pm: 84 cookies
// 10 4pm: 61 cookies
// 11 5pm: 23 cookies
// 12 6pm: 42 cookies
// 13 7pm: 57 cookies
//    Total: 875 cookies

// Display the lists on sales.html
