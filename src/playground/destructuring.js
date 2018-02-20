//
// object destructuring
//


const person = {
  name: 'Bob',
  age: 22,
  location: {
    city: 'Montreal',
    temp: 23
  }
};

// const name = person.name;
// const age = person.age;
const {name: firstName = 'Alice',age} = person;

console.log(`${person.name} is ${person.age}.`);
console.log(`${firstName} is ${age}.`);


if(person.location.temp && person.location.city) {
  console.log(`It's ${person.location.temp} in ${person.location.city}`)
}

const {temp: temperature,city} = person.location;
if(temperature && city) {
  console.log(`It's ${temperature} in ${city}`)
}


//
// array destructuring
//

const address = ['123 home', 'Montreal', 'QC', 'ZIP123'];

// const [street, town, state = 'QC', zip] = address;
const [, town, state = 'QC'] = address;


console.log(`You are in ${address[1]} ${address[2]} `);
console.log(`You are in ${town} ${state} `);
