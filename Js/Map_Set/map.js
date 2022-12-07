/**
 *   ----------------------- MAP  starts-------------------
 *  Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
 * 
 * METHODS:--
 *  new Map()/ new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization.
    map.set(key, value) – stores the value by the key.
    map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    map.has(key) – returns true if the key exists, false otherwise.
    map.delete(key) – removes the element (the key/value pair) by the key.
    map.clear() – removes everything from the map.
    map.size – returns the current element count.


   Notes : 
   1.Although map[key] also works, e.g. we can set map[key] = 2, 
   this is treating map as a plain JavaScript object, so it implies all corresponding limitations
    (only string/symbol keys and so on). So we should use map methods: set, get and so on.
    2. Map can also use objects as keys. This is one of the most notable and important Map features.
    3. Every map.set call returns the map itself, so we can “chain” the calls:
          map.set('1', 'str1')
        .set(1, 'num1')
        .set(true, 'bool1');

    =------------Iteration over Map ------
    1. map.keys() – returns an iterable for keys,
    2. map.values() – returns an iterable for values,
    3. map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

    -----The insertion order is used----
    The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.
    recipeMap.forEach( (value, key, map) => {
    alert(`${key}: ${value}`); // cucumber: 500 etc
    });


    *----------------------- MAP  ends-------------------
 
 */


    /**
     * ------------------------- SET starts-------------------------
     * A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
        METHODS:--
        1. new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array),
         copies values from it into the set.
        2.set.add(value) – adds a value, returns the set itself.(The main feature is that repeated calls of set.add(value)
         with the same value don’t do anything.
        That’s the reason why each value appears in a Set only once.)
        3.set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
        4.set.has(value) – returns true if the value exists in the set, otherwise false.
        5.set.clear() – removes everything from the set.
        6.set.size – is the elements count.

    =------------Iteration over Map ------
        We can loop over a set either with for..of or using forEach:
        Notes:--

     * 
     * ------------------------- SET ends---------------------------

     */