exports.getMovements = function (grades) {
  return gradesArr(grades);
}

exports.inDecline = function (grades) {
  let checker = 0;
  let newGrades = gradesArr(grades);

  for (let i = 0; i < newGrades.length; i++) {
    if ( newGrades[i] == "down" ) checker++;
    if ( newGrades[i] == "up" ) checker = 0;
  }

  return checker >= 3 ? true : false;
}

function gradesArr (grades) {

  let result = [];

  for (let i = 0; i < grades.length; i++) {
    if ( grades[i+1] > grades[i] ) result.push("up");
    if ( grades[i+1] < grades[i] ) result.push("down");
    if ( grades[i+1] == grades[i] ) result.push("even");
  }

  return result;
}
