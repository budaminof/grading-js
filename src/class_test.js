var data = require('../data/grades.json');
var test = require('./grade_parser.js');
var total = 0;

for (var item in data) {
  if( test.inDecline(data[item]) ) {
    total ++;
  }
}

console.log('total', total);
