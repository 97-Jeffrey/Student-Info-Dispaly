
const matchName = function(person, name){

  if(person.firstName.toLowerCase().includes(name) 
  || person.lastName.toLowerCase().includes(name) 
  || person.firstName.toUpperCase().includes(name) 
  || person.lastName.toUpperCase().includes(name)){
    return true;
  }else{
    return false;
  }
}


module.exports = matchName;