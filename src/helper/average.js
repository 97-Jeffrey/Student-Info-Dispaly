function average(arr){
  let totalScore = 0;
    for(const each of arr){
      totalScore += parseInt(each);
    }
    let median = totalScore / arr.length;
    return median
}

module.exports = average;