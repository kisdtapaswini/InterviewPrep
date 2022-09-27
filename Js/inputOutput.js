// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.on('SIGINT', function () {
    inputString = inputString.split('\n');
    main(inputString);
    process.exit(0);

});

function main(inputStringMain) {
    // Write your code here
    // Use console.log to output the result
    let name1 = inputStringMain[0];
    let name2 = inputStringMain[1];
    console.log(name1 + " says Hi to " + name2 + "Bye");



}