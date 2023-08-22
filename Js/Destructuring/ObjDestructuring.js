//1.
const obj = {
    foo: "val1",
    bar: "val2"
}
const {foo, bar} = obj;
//console.log(foo, bar);

//2. If you prefer to give a different variable name while destructuring an object
const foobar = {
    foo: "hello",
    bar1: "world"
};

const { foo: baz, bar1 } = foobar;
//console.log(baz, bar1); // hello world // console.log(foo) throws ReferenceError

//3. The default value of Destructured unassigned variable is undefined

let [first, second, third] = [1,2];
//console.log(first, second, third);

//4. We can initialize the variables as below
let [first1, second1, third1 = 3] = [1,2];
//console.log(first1, second1, third1);

//5. Overriding the default values
// Default values are created by using the = operator when we create a variable.
// When we create variables with a default value, if there's a match in the destructuring 
//environment it will be overwritten.

const { prime1 = 1, prime2 } = { prime1: 2, prime2: 3 };
//console.log(prime1, prime2);


//6. If we want to select a few entries from an array or object and capture the remaining 
//values we did not put into individual variables

//In case of Array
const [favoriteSnack, ...fruits] = ['chocolate', 'apple', 'banana', 'mango'];
//console.log(favoriteSnack);
//console.log(fruits);

//In case of object

const { id, ...person } = {
    name: 'Tracy',
    age: 24,
    id: 123
}
//console.log(id);
//console.log(person);


//7.We don't have to assign every entry to a variable

const [name] = ['Katrin', 'Judy', 'Eva'];
const { nyc: city } = { nyc: 'New York City', ldn: 'London' };

const [name1, , name2] = ['Katrin', 'Judy', 'Eva']; //Note the gap in the variable assignment between name1 and name2.

//8. Destructuring Nested Values

let [[part1], [part2], [part3], [part4]] = [['fee', 'mee'], ['fi', 'li'], ['fo', 'ko'], ['fum', 'plum']];

console.log(part1, part2, part3, part4);

//9.

const {
    name4,
    crimes: {
        yearsToServe
    }
} = {
    name4: 'John Doe',
    crimes: {
        charged: ['grand theft auto', 'stealing candy from a baby'],
        yearsToServe: 25
    }
};

console.log(yearsToServe);

//10.
const greetings = { en: 'hi', es: 'hola', fr: 'bonjour' };

for (const [key, value] of Object.entries(greetings)) {
    console.log(`${key}: ${value}`);
}

// In this case, Object.entries()
//  creates the following array [['en', 'hi'], ['es', 'hola'], ['fr', 'bonjour']].

