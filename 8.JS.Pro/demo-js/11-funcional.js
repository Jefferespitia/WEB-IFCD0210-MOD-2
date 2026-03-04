{
    function foo(a, b, ...rest) {
        console.log(a, b, rest.length);
    }

    const foo2 = function (a, b, ...rest) {
        console.log(a, b, rest.length);
    };

    console.log("Línea 10", foo, foo2);

    foo.title = "Soy foo";
    foo2.title = "Soy foo 2";

    console.log("Línea 15", foo, foo2);

    foo.foo2 = foo2;

    console.log(foo, foo2);

    foo2("Pepe", 22, 1, 2, 3, 4);
    foo.foo2("Pepe", 22, 1, 2, 3, 4);
}
{
    const add = (a, b) => {
        const r = a + b;
        console.log(r); // 3
        return r;
    };

    const result = add(1, 2);
    // console.log(r); // ReferenceError: r is not defined
    console.log(result); // 3

    const createUser = (name, age) => {
        const daysAge = age * 365;
        const user = {
            name,
            daysAge,
        };

        return user;
    };

    const u1 = createUser("Pepe", 22);

    const makeFoo = function (a) {
        const r = [a];

        const innerFoo = () => {
            console.log(r);
            console.log("Soy innerFoo");
        };

        return innerFoo;
    };

    makeFoo(12)();
}
{
    const makeFooObject = function (a) {
        const r = [a];

        const duplicateItems = (z) => {
            return z.map((x) => x * 2)  ; 
        };

        const innerFoo1 = () => {
            console.log(duplicateItems(r));
        };

        const innerFoo2 = () => {
            console.log("Soy innerFoo");
        };

        return { innerFoo1, innerFoo2 };
    };

    makeFooObject(12).innerFoo1();
    makeFooObject(12).innerFoo2();
}

{
    //IIFE: Immediately Invoked Function Expression

    (() => {
        console.log("Soy una función anónima autoejecutable");
    })();


    (function (a) {
        const r = [a];

        return () => {
            console.log(r);
            console.log("Soy innerFoo");
        };
    })(12)();
}

const counterCreator = () => {
    let _value = 0;

    const increase = () => {
        _value++;
        console.log(_value);
    };

    const decrease = () => {
        _value--;
        console.log(_value);
    };

    return { increase, decrease };
};

const counter1 = counterCreator();
console.log('counter1');
counter1.increase();
counter1.decrease();
counter1.increase();
counter1.increase();
counter1.increase();


const counter2 = counterCreator();
console.log('counter2');
counter2.increase();
counter2.decrease();
counter2.decrease();


// const counter3 = counterCreator();  
// const {increase, decrease } = counterCreator();

const { increase: i3, decrease: d3 } = counterCreator();
i3();
i3();
i3();
d3();

const { increase: i4, decrease: d4 } = counterCreator();
i4();
i4();
i4();
d4();