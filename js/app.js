'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var pike = {
  storeLoc: '1st and Pike',
  minNumCust: 23,
  maxNumCust: 65,
  avgSold: 6.3,
  randCustpHour: [],
  totalSold: [],
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustpHour.push (
        Math.floor (
          Math.random() * (this.maxNumCust - this.minNumCust + 1)) + this.minNumCust);
      console.log(this.randCustpHour[i]);
    }
  },

  calcTotalSold: function() {
    for (var j = 0; j < hours.length; j++) {
      this.totalSold.push(
        Math.round(this.avgSold * this.randCustpHour[j]));
      console.log(this.totalSold[j]);
    }
  },

  render: function() {
    var pike = document.getElementById('pike');
    var fandp = document.getElementById('fandp');
    this.calcRandCustByHour();
    this.calcTotalSold();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    fandp.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours [k] + ': ' + this.totalSold[k] + ' cookies';
      console.log(liEl);
      pike.appendChild(liEl);
    }
  }
};
pike.render();

// var seaTac = {
//   storeLoc: 'SeaTac Airport',
//   minNumCust: 3,
//   maxNumCust: 24,
//   avgSold: 1.2,
//   randCustpHour: [],
//   totalSold: [],
// };

// var seaCent = {
//   storeLoc: 'Seattle Center',
//   minNumCust: 11,
//   maxNumCust: 38,
//   avgSold: 3.7,
//   randCustpHour: [],
//   totalSold: [],
// };

// var capHill = {
//   storeLoc: 'Capitol Hill',
//   minNumCust: 20,
//   maxNumCust: 38,
//   avgSold: 2.3,
//   randCustpHour: [],
//   totalSold: [],
// };

// var alki = {
//   storeLoc: 'Alki',
//   minNumCust: 2,
//   maxNumCust: 16,
//   avgSold: 4.6,
//   randCustpHour: [],
//   totalSold: [],
// };


