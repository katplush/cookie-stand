'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var allLocations = [];

var totalCookiesByHour = 0;

var netTotal = 0;

function Store(storeLoc, minNumCust, maxNumCust, avgSoldByHour) {
  this.storeLoc = storeLoc;
  this.minNumCust = minNumCust;
  this.maxNumCust = maxNumCust;
  this.avgSoldByHour = avgSoldByHour;
  this.randCustpHour = [];
  this.cookiesSoldByHour = [];
  this.totalSold = 0;
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
    }
  };
  this.calcCookiesSoldByHour();
}
var pikeStore = new Store('First and Pike', 23, 65, 6.3);
var seaTacStore = new Store('SeaTac Airport', 3, 24, 1.2);
var seaCentStore = new Store('Seattle Center', 11, 38, 3.7);
var capHillStore = new Store('Capitol Hill', 20, 38, 2.3);
var alkiStore = new Store('Alki', 2, 16, 4.6);

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
  table.appendChild(trEl);
}
makeHeaderRow(hours);

// var pikeList = {
//   storeLoc: 'First and Pike',
//   minNumCust: 23,
//   maxNumCust: 65,
//   avgSold: 6.3,
//   randCustpHour: [],
//   totalSold: [],
//   calcRandCustByHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustpHour.push (
//         Math.floor (
//           Math.random() * (this.maxNumCust - this.minNumCust + 1)) + this.minNumCust);
//       console.log(this.randCustpHour[i]);
//     }
//   },

//   calcTotalSold: function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.totalSold.push(
//         Math.round(this.avgSold * this.randCustpHour[j]));
//       console.log(this.totalSold[j]);
//     }
//   },

//   render: function() {
//     var pikeList = document.getElementById('pikeList');
//     var firstPikeHeader = document.getElementById('firstPikeHeader');
//     this.calcRandCustByHour();
//     this.calcTotalSold();
//     //var h3El = document.createElement('h3');
//     //h3El.textContent = this.storeLoc;
//     //firstPike.appendChild(h3El);
//     firstPikeHeader.textContent = this.storeLoc;

//     for (var k = 0; k < hours.length; k++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours [k] + ': ' + this.totalSold[k] + ' cookies';
//       console.log(liEl);
//       pikeList.appendChild(liEl);
//     }
//   }
// };
// pikeList.render();

// var seaTacList = {
//   storeLoc: 'SeaTac Airport',
//   minNumCust: 3,
//   maxNumCust: 24,
//   avgSold: 1.2,
//   randCustpHour: [],
//   totalSold: [],
//   calcRandCustByHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustpHour.push (
//         Math.floor (
//           Math.random() * (this.maxNumCust - this.minNumCust + 1)) + this.minNumCust);
//       console.log(this.randCustpHour[i]);
//     }
//   },

//   calcTotalSold: function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.totalSold.push(
//         Math.round(this.avgSold * this.randCustpHour[j]));
//       console.log(this.totalSold[j]);
//     }
//   },

//   render: function() {
//     var seaTacList = document.getElementById('seaTacList');
//     var seaTacHeader = document.getElementById('seaTacHeader');
//     this.calcRandCustByHour();
//     this.calcTotalSold();
//     //var h3El = document.createElement('h3');
//     seaTacHeader.textContent = this.storeLoc;

//     for (var k = 0; k < hours.length; k++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours [k] + ': ' + this.totalSold[k] + ' cookies';
//       console.log(liEl);
//       seaTacList.appendChild(liEl);
//     }
//   }
// };
// seaTacList.render();

// var seaCentList = {
//   storeLoc: 'Seattle Center',
//   minNumCust: 11,
//   maxNumCust: 38,
//   avgSold: 3.7,
//   randCustpHour: [],
//   totalSold: [],
//   calcRandCustByHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustpHour.push (
//         Math.floor (
//           Math.random() * (this.maxNumCust - this.minNumCust + 1)) + this.minNumCust);
//       console.log(this.randCustpHour[i]);
//     }
//   },

//   calcTotalSold: function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.totalSold.push(
//         Math.round(this.avgSold * this.randCustpHour[j]));
//       console.log(this.totalSold[j]);
//     }
//   },

//   render: function() {
//     var seaCentList = document.getElementById('seaCentList');
//     var seaCentHeader = document.getElementById('seaCentHeader');
//     this.calcRandCustByHour();
//     this.calcTotalSold();
//     //var h3El = document.createElement('h3');
//     seaCentHeader.textContent = this.storeLoc;

//     for (var k = 0; k < hours.length; k++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours [k] + ': ' + this.totalSold[k] + ' cookies';
//       console.log(liEl);
//       seaCentList.appendChild(liEl);
//     }
//   }
// };
// seaCentList.render();


// var capHillList = {
//   storeLoc: 'Capitol Hill',
//   minNumCust: 20,
//   maxNumCust: 38,
//   avgSold: 2.3,
//   randCustpHour: [],
//   totalSold: [],
//   calcRandCustByHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustpHour.push (
//         Math.floor (
//           Math.random() * (this.maxNumCust - this.minNumCust + 1)) + this.minNumCust);
//       console.log(this.randCustpHour[i]);
//     }
//   },

//   calcTotalSold: function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.totalSold.push(
//         Math.round(this.avgSold * this.randCustpHour[j]));
//       console.log(this.totalSold[j]);
//     }
//   },

//   render: function() {
//     var capHillList = document.getElementById('capHillList');
//     var capHillHeader = document.getElementById('capHillHeader');
//     this.calcRandCustByHour();
//     this.calcTotalSold();
//     //var h3El = document.createElement('h3');
//     capHillHeader.textContent = this.storeLoc;

//     for (var k = 0; k < hours.length; k++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours [k] + ': ' + this.totalSold[k] + ' cookies';
//       console.log(liEl);
//       capHillList.appendChild(liEl);
//     }
//   }
// };
// capHillList.render();

// var alkiList = {
//   storeLoc: 'Alki',
//   minNumCust: 2,
//   maxNumCust: 16,
//   avgSold: 4.6,
//   randCustpHour: [],
//   totalSold: [],
//   calcRandCustByHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustpHour.push (
//         Math.floor (
//           Math.random() * (this.maxNumCust - this.minNumCust + 1)) + this.minNumCust);
//       console.log(this.randCustpHour[i]);
//     }
//   },

//   calcTotalSold: function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.totalSold.push(
//         Math.round(this.avgSold * this.randCustpHour[j]));
//       console.log(this.totalSold[j]);
//     }
//   },

//   render: function() {
//     var alkiList = document.getElementById('alkiList');
//     var alkiHeader = document.getElementById('alkiHeader');
//     this.calcRandCustByHour();
//     this.calcTotalSold();
//     //var h3El = document.createElement('h3');
//     alkiHeader.textContent = this.storeLoc;

//     for (var k = 0; k < hours.length; k++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours [k] + ': ' + this.totalSold[k] + ' cookies';
//       console.log(liEl);
//       alkiList.appendChild(liEl);
//     }
//   }
// };
// alkiList.render();


