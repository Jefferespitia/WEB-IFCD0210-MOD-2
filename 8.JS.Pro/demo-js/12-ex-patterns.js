// Patrones de ejecución

const foo = function () {
    console.log('Soy foo');
    console.log('this:', this);
};

const fooArrow = () => {
    console.log('Soy fooArrow');
    console.log('this:', this);
};

// Function pattern

foo(); // this es el objeto global (modo no estricto o undefined en modo estricto)
fooArrow(); // this es un objeto {} (modo no estricto o undefined en modo estricto) 
// console.log(globalThis);

// Method pattern

const obj1 = {
    title: 'Soy obj1',
    foo: foo,
    fooArrow: fooArrow,
};

obj1.foo();
obj1.fooArrow();

// Constructor pattern

const nObj = new foo();
console.log(nObj);
console.log({})

// error new fooArrow();

// Apply pattern

const obj2 = {
    title: 'Soy obj2',
};

foo.apply(obj2);
fooArrow.apply(obj2);


const obj3 = {
    title: 'Soy obj2',
    greet() {
        console.log('Hola, soy obj2', this);
    },
    greetArrow: () => {
        console.log('Hola, soy una arrow de obj2 y this es:', this);
    }
}

obj3.greet();
setTimeout(obj3.greet.bind(obj3), 1000);

obj3.greetArrow();
setTimeout(obj3.greetArrow.bind(obj3), 1000);