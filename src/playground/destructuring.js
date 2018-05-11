// console.log('destructuring.js');

// const person = {
//     name: 'Name',
//     age: 30,
//     location: {
//         temp: 27,
//         city: 'London'
//     }
// };

// // console.log(`${person.name} is ${person.age}`);

// //name has a default value just in case
// let { name:firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// // if you want to change the name of the key when destructuring
// let { temp: temperature, city } = person.location;
// if(temperature && city) {
//     console.log(`${temperature} is ${city}`);
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin',
    }
};

const {name: publisherName = 'Self Published'} = book.publisher;

console.log(`${publisherName}`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name,,price] = item;
console.log(`A medium ${name} costs ${price}`);