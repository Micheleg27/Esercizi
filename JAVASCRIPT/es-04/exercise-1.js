// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000

function calculateSalary(role) {

  let salary = 0;

  if(role === 'ceo') {
    salary = 2200;
  }
  else if(role === 'manager') {
    salary = 1800;
  }
  else if(role === 'cto') {
    salary = 1800;
  }
  else if(role === 'developer') {
    salary = 1500;
  }
  else {
    salary = 1000;
  }
  return salary;
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);