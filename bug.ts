function printName(person: {firstName: string; lastName?: string}): void {
  console.log(person.firstName + ' ' + person.lastName);
}

const person1 = { firstName: 'John' };
printName(person1); // This will work fine

const person2 = { firstName: 'Jane', lastName: 'Doe' };
printName(person2); // This will also work fine

const person3 = { firstName: 'Peter', middleName: 'Paul' };
printName(person3); // This will throw a compile-time error because it's missing lastName
