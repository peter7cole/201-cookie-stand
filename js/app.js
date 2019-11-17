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
  '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm',];
console.log(`storeHours: ${hours}`);


// Constructor w/ Random Customer Creator --------------------------
//    this allows me to create the data for each city
//    and their random customer per hour * average sale
//    which equals Sales per Hour in the selected City
//    which I store as arraySalesPerHour

function City(city, min, max, avgSale) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avgSale = avgSale;
  this.cookieHourlyArray = [];
  this.customersPerHour = function () {
    return Math.floor(Math.random() * Math.floor(this.max) + this.min);
  };
  this.fillArrayOfSalesPerHour = function () {
    for (var hourIndex = 0; hourIndex < hours.length; hourIndex++) {
      this.cookieHourlyArray.push(Math.round(this.customersPerHour() * this.avgSale));
    }
  };


  // Render Function -------------------------------------------------
  // --- What does this do
  // --- sets up the render along the city axis, but not the time axis

  this.render = function () {
    var htmlTable = document.getElementById('cookie-table');
    var tr = document.createElement('tr');

    var tdName = document.createElement('td');
    tdName.textContent = this.city; //this.name edited
    tr.append(tdName);

    for (var cityIndex = 0; cityIndex < this.cookieHourlyArray.length; cityIndex++) {
      var td = document.createElement('td');
      td.textContent = this.cookieHourlyArray[cityIndex];
      tr.append(td);
    }

    td = document.createElement('td');
    td.textContent = 'total';
    tr.append(td);

    htmlTable.append(tr);
  };
}

// CITIES AND CITY ARRAY --------------------------------------------

var seattle = new City('Seattle', 23, 65, 6.3);

var tokyo = new City('Tokyo', 3, 24, 1.2);

var dubai = new City('Dubai', 11, 38, 3.7);

var paris = new City('Paris', 20, 38, 2.3);

var lima = new City('Lima', 2, 16, 4.6);

var arrayOfCities = [seattle, tokyo, dubai, paris, lima];
console.log(`arrayOfCities: ${arrayOfCities}`);

// CALL CITIES TO RENDER --------------------------------------------
// --- plug in each city into the render method and watch it burn

function renderTable() {
  for (var cityIndex = 0; cityIndex <= arrayOfCities.length; cityIndex++) {
    arrayOfCities[cityIndex].fillArrayOfSalesPerHour();
    console.log(`cookieHourlyArray: ${arrayOfCities[cityIndex].cookieHourlyArray}`);
    arrayOfCities[cityIndex].render();
  }
}
renderTable();

// FORM -----------------------------------------------------------------------------
//
/*
var form = document.getElementById('cookie-form');

form.addEventListener('submit', clickHandler);
function clickHandler() {
  event.preventDefault();
}

var newCity = City();

arrayOfCities.push(newCity);
*/
/*

function crunchAndRenderTotals(arrayOfCities, domReference) {

  var tr = document.createElement('tr');

  var firstTD = document.createElement('td');
  firstTD.textContent = 'Daily Totals';
  tr.append(firstTD);
}

*/
