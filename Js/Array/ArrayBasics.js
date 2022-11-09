var arrayName = new Array(3);
//1.  for(let i = 0; i <arrayName.length; i++){
//     console.log(arrayName[i])
// }
//arrayName.forEach(elem => console.log(elem));

//   Array.apply(null, Array(5)).forEach(element => {
//     console.log(element);
// });

// const array = ["a", "b"];
// const elements = [0, 1, 2];
// array.push.apply(array, elements);
// console.info(array); // ["a", "b", 0, 1, 2]

var arrayName = new Array(null, null, null);
arrayName.forEach(elem => console.log(elem));

// [empty,empty,empty,empty,empty]
// Questions

/**1. 
 * var arrayName = new Array(3);
for(let i = 0; i < arrayName.length; i++){
  console.log(arrayName[i])
 } //1. this loop works and logs undefined for each index
arrayName.forEach(elem => console.log(elem)); //2. However this doesn't log anything with no compilation error.
Array.apply(null, Array(5)).forEach(element => {
    console.log(element); //3. Why is this working fine and printing undefined for each Elem(here there is no assigned value rt) ?
});

Answer : 
Basically, when you're using Array(n) it is giving an array of size n with "empty" elements,
this is the catch here, the elements are "empty" not "undefined"
In an array, when you access the elements by index, a[k] will give the value present at 'k'th index right,
and if there is no value, it returns undefined, try accessing an array of some small length like this a[1000],
even if 1000 elements are not there in the array, it will give undefined in JS unlike other languages which throw
IndexOutOfBound error


Now, for the array we have var arrayName = new Array(3);
There are 3 empty values, means nothing is there in those indices, so accessing them by index will give us undefined
This is what we see in the first loop

The first loop is accessing array with index
Now, for the second loop, it is using forEach loop. 
forEach loop accesses elements not by index but by values directly. We pass a callback to the forEach method right,
that is executed for every value in the array
Unlike in normal for loop, where we access the values with index, in forEach loop it is not index but directly the value, 
which is empty in this case. Since there is no value here, the callback function passed to the forEach is not executed. All are "empty" elements right, if the elements had a value like "undefined" then it would have executed and printed it but there is no value
That is the behaviour of the second loop

For the third one
Array.apply(null, Array(5))
This line is calling the apply method, the Array(5) gives us an array with 5 elements with empty values, like in the first case
So it becomes Array.apply(null, [empty,empty,empty,empty,empty])
Array.apply(null, [...]) will basically give an array with the elements taken from the array given in the parameter, here is how this is behaving, if there is a length of the given array, the new array is being created of the same length with same values and the empty values are replaced with undefined
So, unlike the array in first case, here we have an array with "undefined" values; using of the apply() method made the empty values undefined. Now the forEach loop accesses the array with all undefined values, it accesses not with index and with value right, so we have all undefined values passed to the callback function
The callback gets executed since the values are not empty
This is what I observed, hope it helps
Also, thanks for bringing this up with me, I learnt that this is how it behaves
*/



