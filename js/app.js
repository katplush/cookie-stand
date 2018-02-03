'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var allLocations = [];

var totalCookiesPerHour = 0;

var netTotal = 0;

function Store(storeLoc, minNumCust, maxNumCust, avgSoldByHour) {
  this.storeLoc = storeLoc;
  this.minNumCust = minNumCust;
  this.maxNumCust = maxNumCust;
  this.avgSoldByHour = avgSoldByHour;
  this.randCustpHour = [];
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;

  allLocations.push(this);

  this.calcRandCustByHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustpHour.push (
        Math.floor (
          Math.random() * (this.maxNumCust - this.minNumCust + 1)) + this.minNumCust);
      console.log(this.randCustpHour[i]);
    }
  };
  this.calcRandCustByHour();

  this.calcCookiesSoldByHour = function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(
        Math.round(this.avgSoldByHour * this.randCustpHour[j]));
      console.log(this.cookiesSoldByHour[j]);
      this.totalCookies += this.cookiesSoldByHour[j];
    }
  };
  this.calcCookiesSoldByHour();
}

function makeStands() {
  new Store('First and Pike', 23, 65, 6.3);
  new Store('SeaTac Airport', 3, 24, 1.2);
  new Store('Seattle Center', 11, 38, 3.7);
  new Store('Capitol Hill', 20, 38, 2.3);
  new Store('Alki', 2, 16, 4.6);
}
makeStands();

//Create Header Row with Store Hours and Daily Total
function makeHeaderRow(hours) {
  var table = document.getElementById('myTable');
  var trEl = document.createElement('tr');

  var thEmpty = document.createElement('th');
  thEmpty.textContent = '';
  trEl.appendChild(thEmpty);

  for(var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  var thElTot = document.createElement('th');
  thElTot.textContent = 'Daily Location Total';
  trEl.appendChild(thElTot);
  table.appendChild(trEl);
}
makeHeaderRow(hours);

//Create Data Rows for the body of the table
function makeDataRow(j) {
  var table = document.getElementById('myTable');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = allLocations[j].storeLoc;
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = allLocations[j].cookiesSoldByHour[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = allLocations[j].totalCookies;
  trEl.appendChild(tdEl);
  table.appendChild(trEl);
}
for (var j = 0; j < allLocations.length; j++) {
  makeDataRow(j);
}

//Create Footer Row of hourly totals from all stores
// function makeTotalRow() {
//   var table = document.getElementById('myTable');
//   var trEl = document.createElement('tr');
//   var tdEl = document.createElement('td');
//   tdEl.textContent = 'Total';
//   trEl.appendChild(tdEl);

//   for(var i = 0; i < hours.length; i++) {
//     totalCookiesPerHour = 0;

//     for(var j = 0; j < allLocations.length; j++) {
//       totalCookiesPerHour += allLocations[j].cookiesSoldByHour[i];
//     }
//   }
//   tdEl = document.createElement('td');
//   tdEl.textContent = totalCookiesPerHour;
//   trEl.appendChild(tdEl);
//   netTotal += totalCookiesPerHour;

//   tdEl = document.createElement('td');
//   tdEl.textContent = netTotal;
//   trEl.appendChild(tdEl);
//   table.appendChild(trEl);
// }
// makeTotalRow();