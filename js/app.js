'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var pikeList = {
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
    var pikeList = document.getElementById('pikeList');
    var firstPikeHeader = document.getElementById('firstPikeHeader');
    this.calcRandCustByHour();
    this.calcTotalSold();
    //var h3El = document.createElement('h3');
    //h3El.textContent = this.storeLoc;
    //firstPike.appendChild(h3El);
    firstPikeHeader.textContent = this.storeLoc;

    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours [k] + ': ' + this.totalSold[k] + ' cookies';
      console.log(liEl);
      pikeList.appendChild(liEl);
    }
  }
};
pikeList.render();

var seaTacList = {
  storeLoc: 'SeaTac Airport',
  minNumCust: 3,
  maxNumCust: 24,
  avgSold: 1.2,
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
    var seaTacList = document.getElementById('seaTacList');
    var seaTacHeader = document.getElementById('seaTacHeader');
    this.calcRandCustByHour();
    this.calcTotalSold();
    //var h3El = document.createElement('h3');
    seaTacHeader.textContent = this.storeLoc;

    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours [k] + ': ' + this.totalSold[k] + ' cookies';
      console.log(liEl);
      seaTacList.appendChild(liEl);
    }
  }
};
seaTacList.render();

var seaCentList = {
  storeLoc: 'Seattle Center',
  minNumCust: 11,
  maxNumCust: 38,
  avgSold: 3.7,
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
    var seaCentList = document.getElementById('seaCentList');
    var seaCentHeader = document.getElementById('seaCentHeader');
    this.calcRandCustByHour();
    this.calcTotalSold();
    //var h3El = document.createElement('h3');
    seaCentHeader.textContent = this.storeLoc;

    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours [k] + ': ' + this.totalSold[k] + ' cookies';
      console.log(liEl);
      seaCentList.appendChild(liEl);
    }
  }
};
seaCentList.render();


var capHillList = {
  storeLoc: 'Capitol Hill',
  minNumCust: 20,
  maxNumCust: 38,
  avgSold: 2.3,
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
    var capHillList = document.getElementById('capHillList');
    var capHillHeader = document.getElementById('capHillHeader');
    this.calcRandCustByHour();
    this.calcTotalSold();
    //var h3El = document.createElement('h3');
    capHillHeader.textContent = this.storeLoc;

    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours [k] + ': ' + this.totalSold[k] + ' cookies';
      console.log(liEl);
      capHillList.appendChild(liEl);
    }
  }
};
capHillList.render();

var alkiList = {
  storeLoc: 'Alki',
  minNumCust: 2,
  maxNumCust: 16,
  avgSold: 4.6,
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
    var alkiList = document.getElementById('alkiList');
    var alkiHeader = document.getElementById('alkiHeader');
    this.calcRandCustByHour();
    this.calcTotalSold();
    //var h3El = document.createElement('h3');
    alkiHeader.textContent = this.storeLoc;

    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours [k] + ': ' + this.totalSold[k] + ' cookies';
      console.log(liEl);
      alkiList.appendChild(liEl);
    }
  }
};
alkiList.render();


