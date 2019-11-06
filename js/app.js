'use strict';

//  UNIVERSALS ---------------------------------------------------------------------
// 
//  Declares Days
//  Declares Store Hours
//  Declares the min/max hourly customers, and the average cookies per customer,
//      in object properties
//  Stages array if Store Variables

var days = ['Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(`days: ${days}`);

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am',
  '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', ];
console.log(`storeHours: ${hours}`);


// Constructor w/ Random Customer Creator --------------------------
// --- this allows me to create the data for each city
// --- and their random customer per hour * average sale
// --- which equals Sales per Hour in the selected City
// --- which I store as arraySalesPerHour

function City(city, min, max, avgSale) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avgSale = avgSale;
  this.customersPerHour = function () {
    return Math.floor(Math.random() * Math.floor(this.max) + this.min);
  }
  this.arraySalesPerHour = function () {
    for(var hourIndex = 0; hourIndex < hours.length; hourIndex++) {
      customersPerHour() * this.avgSale;
    }
  }
  this.cookieHourlyArray = [];

  // Render Function -------------------------------------------------
  // --- What does this do
  // --- sets up the render along the city axis, but not the time axis

  this.render = function (domReference) {

    var tr = document.createElement('tr');

    var tdName = document.createElement('td');
    tdName.textContent = this.name;
    tr.append(tdName);

    for (var cityIndex = 0; cityIndex < cookieHourlyArray.length; cityIndex++) {
      var td = document.createElement('td');
      td.textContent = this.cookieHourlyArray[cityIndex];
      tr.append(td);
    }

    td = document.createElement('td');
    td.textContent = 'total';
    tr.append(td);

    domReference.append(tr);
  };
}

// CITIES AND CITY ARRAY -------------------------------------------

var seattle = new City('Seattle', 23, 65, 6.3);

var tokyo = new City('Tokyo', 3, 24, 1.2);

var dubai = new City('Dubai', 11, 38, 3.7);

var paris = new City('Paris', 20, 38, 2.3);

var lima = new City('Lima', 2, 16, 4.6);

var arrayOfCities = [seattle, tokyo, dubai, paris, lima];
console.log(`arrayOfCities: ${arrayOfCities}`);

// ---------------------------------------------------------------------

function crunchAndRenderTotals(arrayOfCities, domReference) {

  var tr = document.createElement('tr');

  var firstTD = document.createElement('td');
  firstTD.textContent = 'Daily Totals';
  tr.append(firstTD);

  for(var )


}

// old stuff below
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

render('hourData', 'hr', 'th', hours, 'storeHours');

for(var indexRender = 0; indexRender < arrayOfCities.length; indexRender++) {
  render(arrayOfCities[indexRender].cityData, 'bullet', 'td',
    arrayOfCities[indexRender].cookieHourlyArray, arrayOfCities[indexRender].name);
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
*/
