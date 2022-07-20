const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

function calculateSalary(role) {
  if(role == 'ceo'){
    return ceoSalary = 2200;}

    else if (role == 'manager'){
    return managerSalary=1800;}

    else if (role == 'cto'){
    return ctoSalary=1800;}

    else if (role == 'developer'){
    return developerSalary=1500;}

    else {
    return otherSalary=1000;}
}

    console.log (ceoSalary);
console.log (managerSalary);
console.log (ctoSalary);
console.log (developerSalary);
console.log (otherSalary);o