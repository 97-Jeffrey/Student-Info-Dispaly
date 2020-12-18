function average(grades){
  let totalScore = 0;
    for(const grade of grades){
      totalScore += parseInt(grade);
    }
    let median = totalScore / grades.length;
    return median
}

module.exports = average;