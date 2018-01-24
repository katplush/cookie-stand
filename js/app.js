'use strict';

var pike = {
  storeLoc: '1st and Pike',
  minNumCust: 23,
  maxNumCust: 65,
  avgNumCook: 6.3,
  hoursOpen: 14,
};

var seaTac = {
  storeLoc: 'SeaTac Airport',
  minNumCust: 3,
  maxNumCust: 24,
  avgNumCook: 1.2,
  hoursOpen: 14,
};

var seaCent = {
  storeLoc: 'Seattle Center',
  minNumCust: 11,
  maxNumCust: 38,
  avgNumCook: 3.7,
  hoursOpen: 14,
};

var capHill = {
  storeLoc: 'Capitol Hill',
  minNumCust: 20,
  maxNumCust: 38,
  avgNumCook: 2.3,
  hoursOpen: 14,
};

var alki = {
  storeLoc: 'Alki',
  minNumCust: 2,
  maxNumCust: 16,
  avgNumCook: 4.6,
  hoursOpen: 14,
};

var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function getRandomIntInclusive(min,max) {
  min = Math.minNumCust(min);
  max = Math.maxNumCust(max);
  return Math.maxNumCust(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive();


