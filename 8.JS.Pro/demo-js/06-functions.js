// declaración

function makeFoo(param) {
    console.log(param);
}

// asignación

const makeBaz = function (param) {
    // expresión funcional anónima
    console.log(param);
};

// arrow functions

const makeBazArrow = (param) => console.log(param);
// expresión funcional anónima arrow

// Ejemplo de uso

[1, 2, 3].map((item) => item ** 3);

// Arrow y objetos

const makeObject = (name, age) => ({ name, age });
const z = makeObject('Pepe', 22);

const a = { name: 'Pepe', age: 22 };
const b = a;

const fooX = makeObject;
console.log(fooX);

// Uso, ejecución
const foo = makeFoo('Hola');
console.log(typeof foo); //undefined

makeBaz('Adios');

// Paso por valor y paso por referencia


// Paso por valor: valores primitivos

const modifyValue = (x) => {
    x = x * 10; // 220
    return x 
};


const x = 22;
modifyValue(x); // Argumento pasado por valor 
console.log(x); // 22

const modifyObject = ({...obj}) => {
    obj.job = 'none';
};

const user = {
    name: 'Pepe',
    age: 22,
    job: 'developer',
    address: {
        street: 'c/ Pez',
        city: 'Soria',
    },
};

modifyObject(user);
console.log('user.job:', user.job); // none

{
    const modifyObject = (_obj) => {
        // const obj = JSON.parse(JSON.stringify(_obj));
        const obj = structuredClone(_obj);
        obj.job = 'none';
        obj.address.city = 'Teruel';
    };

    const user = {
        name: 'Pepe',
        age: 22,
        job: 'developer',
        address: {
            street: 'c/ Pez',
            city: 'Soria',
        },
    };

    modifyObject(user);
    console.log('User:', user);
}