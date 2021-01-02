
const matchName = function(person, name){

  const lastNameFilter = person.lastName.toLowerCase().includes(name.toLowerCase());
  const firstNameFilter = person.firstName.toLowerCase().includes(name.toLowerCase());
  return lastNameFilter || firstNameFilter? true:false;

}
module.exports = matchName;