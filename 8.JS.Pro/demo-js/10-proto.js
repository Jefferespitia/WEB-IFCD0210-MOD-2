const user = {
    name: 'Pepe',
    age: 22,
    address: {},
    greet: function () {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    },
};

console.log({}.__proto__);
console.log({}.__proto__.__proto__);

const mammal = {
    hasFur: true,
};

const person = {
    teeth: 32,
};

user.__proto__ = person;
person.__proto__ = mammal;

console.log('Nombre', user.name);
console.log('Edad:', user.age);
console.log('Dientes', user.teeth);
console.log('Pelo', user.hasFur);
console.log(user.hasOwnProperty('name'));
console.log(user.hasOwnProperty('teeth'));
console.log(user.hasOwnProperty('hasFur'));
console.log(user.hasOwnProperty('hasOwnProperty'));
console.log(user.hasOwnProperty('tururu'));


user.teeth = 30;
console.log('Dientes:', user.teeth);
console.log(user.hasOwnProperty('teeth'));


// Prototype pollution
({}).__proto__.taste = 'vanilla';
console.log(user.taste);

{
    const patata = {
        color: 'yellow',
    };
    const user2 = Object.assign(user, patata); // {...user}
    console.log(user2);
    
    const user3 = Object.create(person); //__proto__ = person
    console.log(user3.teeth);
    user3.teeth = 33;
}