export default function average(grades){
  let totalScore = 0;
    for(const grade of grades){
      totalScore += parseInt(grade);
    }
    return totalScore / grades.length;
    
}

