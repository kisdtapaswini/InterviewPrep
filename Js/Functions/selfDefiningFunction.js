//1.Self-Defining Functions or lazy function definition
/**
 * This pattern is useful when our function has some initial prearatory work to do and it needs to do only once
 * Because there is no reason to do repeat work when it can be avoided, a portion of the function may no longer be required
*/

var scareMe = function(){
    console.log("Boo !");
    scareMe = function(){
        console.log("Double Boo !");
    }
}
scareMe();
scareMe();