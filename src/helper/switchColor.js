const switchColor = grade =>{

  return grade>=90? 
  '#07c40d': 
  (grade>=80 && grade<90? 'rgb(252, 191, 79)':'rgb(248, 54, 54)');
}

export default switchColor;