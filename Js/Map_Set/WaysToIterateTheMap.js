var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({a:"A"}, "baz"); // key can be an object too
for (const [key, value] of myMap.entries()) {
  //  console.log(key, value); // prints eah ket pair values in the Map
}

//Using foreahc method
myMap.forEach((value, key) => {
   // console.log(value, key) // prints value then key
})

// Loop through key-value-pairs
Array.from(myMap.entries()).map(([key, val]) => console.log(key, val));


// Loop through map keys
Array.from(myMap.keys()).map(key => console.log(key));

// Loop through values
Array.from(myMap.values()).map(value => console.log(value));

//Using Iterator
const iterator1 = myMap[Symbol.iterator]();
console.log(iterator1);

for (const item of iterator1) {
  console.log(item);
}