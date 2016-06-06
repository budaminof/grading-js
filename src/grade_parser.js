exports.getMovements = function (grades) {
  var result = [];
  for (var i = 0; i < grades.length; i++) {
    if ( grades[i+1] > grades[i] ) result.push("up")
    if ( grades[i+1] < grades[i] ) result.push("down")
    if ( grades[i+1] === grades[i] ) result.push("even")
  }
  return result;
}

exports.inDecline = function (grades) {
  
}
