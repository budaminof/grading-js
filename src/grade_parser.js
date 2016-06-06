exports.getMovements = function (grades) {
  let result = [];
  for (let i = 0; i < grades.length; i++) {
    if ( grades[i+1] > grades[i] ) result.push("up")
    if ( grades[i+1] < grades[i] ) result.push("down")
    if ( grades[i+1] === grades[i] ) result.push("even")
  }
  return result;
}

exports.inDecline = function (grades) {
  let result = [];
  let downs = 0;

  if ( grades.length <= 1 ) return false
  for (let i = 0; i < grades.length; i++) {
    if ( grades[i] > grades[i+1] ) result.push("down")
    if ( grades[i] < grades[i+1] ) result.push("up")
  }

  for ( let i = 0; i < result.length; i++ ) {
    if ( result[i] == "down" ) downs++;
    if ( result[i] == "up" ) downs = 0;
  }

  if( downs < 3 ) return false;

  return true;
}
