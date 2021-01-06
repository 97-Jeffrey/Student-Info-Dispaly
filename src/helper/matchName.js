
const matchName = function(person, name){

  const lastNameFilter = person.lastName.toLowerCase().includes(name.toLowerCase());
  const firstNameFilter = person.firstName.toLowerCase().includes(name.toLowerCase());
  const fullName = `${person.firstName} ${person.lastName}`;
  const fullNameFilter = fullName.toLowerCase().includes(name.toLowerCase());
  return lastNameFilter || firstNameFilter || fullNameFilter? true:false;

}
module.exports = matchName;