function printName(person: {firstName: string; lastName?: string}): void {
  console.log(person.firstName + (person.lastName ? ' ' + person.lastName : ''));
}

const person1 = { firstName: 'John' };
printName(person1); // This will work fine

const person2 = { firstName: 'Jane', lastName: 'Doe' };
printName(person2); // This will also work fine

const person3 = { firstName: 'Peter', middleName: 'Paul' };
printName(person3); // This will work fine, ignoring the middleName

//A more robust solution using a type guard
function isPerson(obj: any): obj is { firstName: string; lastName?: string } {
  return obj && typeof obj.firstName === 'string';
}

function printName2(person: any): void {
  if(isPerson(person)){
    console.log(person.firstName + (person.lastName ? ' ' + person.lastName : ''));
  } else {
    console.log("Invalid person object");
  }
}

printName2(person1);
printName2(person2);
printName2(person3);
printName2({age: 30});
