'use strict';

//  UNIVERSALS ---------------------------------------------------------------------
//
//  Declares Days
//  Declares Store Hours
//  Declares the min/max hourly customers, and the average cookies per customer,
//      in object properties
//  Creates an object of Store Variables called City

var days = ['Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(`days: ${days}`);

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am',
  '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
console.log(`storeHours: ${hours}`);


// Constructor w/ Random Customer Creator --------------------------
//    Create the data for each city
//    and their random customer per hour based on
//    random int between min and max (customersPerHour) * average sale
//    which equals Sales per Hour in the selected City
//    which I store as salesPerHourArray
//    cookiesHourlyArray becomes the cell data

function City(city, min, max, avgSale) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avgSale = avgSale;
  this.cookieHourlyArray = [];
  this.customersPerHour = function () {
    return Math.floor(Math.random() * Math.floor(this.max) + this.min);
  };
  this.salesPerHourArray = function () {
    for(var hourIndex = 0; hourIndex < hours.length; hourIndex++) {
      this.cookieHourlyArray.push(Math.round(this.customersPerHour() * this.avgSale));
    }
  };


  // Render Function -------------------------------------------------
  //    render gets the Table from the html and creates a tr "row" in it
  //    Then tdCityName creates the first cell in that tr "row"
  //    The cell is populated with the city name by appending it to the tdName "cell"
  //    The for loop appends data cells for the rest the cities
  //    sets up the render along the city axis, but not the time axis
  //    Totals are added as the cell data is filled (totalPerCity) and appended at end

  this.render = function () {
    var htmlTable = document.getElementById('cookie-table');
    var tr = document.createElement('tr');

    //    Horizontal Column Headers
    var thCityName = document.createElement('th');
    thCityName.textContent = this.city;
    tr.append(thCityName);

    //    Horizontal Row Contents
    var totalPerCity = 0;
    for (var cityIndex = 0; cityIndex < this.cookieHourlyArray.length; cityIndex++) {
      var td = document.createElement('td');
      td.textContent = this.cookieHourlyArray[cityIndex];
      totalPerCity = totalPerCity + this.cookieHourlyArray[cityIndex];
      tr.append(td);
    }

    //    Horizontal Row Totals
    td = document.createElement('td');
    td.setAttribute('id', 'totals');
    td.textContent = `${totalPerCity}`;
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

  var htmlTable = document.getElementById('cookie-table');
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = 'City';
  tr.append(th);

  //    Horizontal Column Headers

  for (var hourIndex = 0; hourIndex <= hours.length; hourIndex++) {
    th = document.createElement('th');
    th.textContent = hours[hourIndex];
    tr.append(th);
  }
  th.textContent = 'Total';
  tr.append(th);
  htmlTable.append(tr);
  for (var cityIndex = 0; cityIndex < arrayOfCities.length; cityIndex++) {
    arrayOfCities[cityIndex].salesPerHourArray();
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
