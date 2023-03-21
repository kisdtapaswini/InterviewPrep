//Sorting in JS is alz inplace sorting and default sorting orer is ascending 
//1. Sorting characters

const data = ['z', 'p', 'c', 'd'];

data.sort(); // 
//console.log(data); // This prints [ 'c', 'd', 'p', 'z' ] as chars get sorted as per their UTF-16 char code
//-----------1. Sorting characters ends--------------



//2. Sorting characters type 2
const data1 = ['Z', 'p', 'c', 'd']; // with capital letter Z

// here if we print their char code
data1.forEach(element => {
  //  console.log(element.charCodeAt(0));
});


data1.sort();
//console.log(data1); // This prints [ 'Z', 'c', 'd', 'p' ] as chars get sorted as per their UTF-16 char code

//2. =-------------------Sorting characters type 2 ends-------------



//3. =-------------------Sorting numbers -------------

const data2 = [100, 3, 5, 6, 1]; // with capital letter Z

// here if we print their char code
data2.forEach(element => {
 //  console.log(String(element).charCodeAt(0));
});


data2.sort();
//console.log(data2); // This doesn't work properly as agn it compares the numbers as per their ASCII code So we need
// to have comparator to sort numbers
//3. =-------------------Sorting numbers ends-------------


//4. ---- Sorting numbers using comparator ----
// ASCENDING
const data3 = [2, 5, 100, 4];

    // data3.sort((a, b) =>{
    //     if(a < b){
    //         return -1;
    //     }else if(a > b){
    //         return 1;
    //     }else{
    //         return 0;
    //     }
    // });

    //we can write this a sbelow
    // data3.sort(()=>{
    //     a-b;
    // });

    
    /**
     * a = 2, b = 5;
     * a - b = 2 - 5 = -3 //minus value means a should come before b
     * 
     * 
     * a = 100, b = 4;
     * a-b = 100 - 4 = 96 // positive value means b should come before a so we should swap
     */

    //DESCENDING ORDER

    const data4 = [100, 3, 5, 6, 1];

    // data4.sort((a, b) =>{
    //     if(a < b){
    //         return 1;
    //     }else if(a > b){
    //         return -1;
    //     }else{
    //         return 0;
    //     }
    // });

    data4.sort((a, b)=>{
        b-a;
    });

    /**
     * 
     */

    console.log(data4);
//4. ---- Sorting numbers using comparator ends----




//5. sort below array using comparator methos

const spiceGirls = [
    {name: 'ginger', age: 37},
    {name: 'sporty', age: 30},
    {name: 'baby', age: 19},
    {name: 'posh', age: 20}
]
const comparator = (a, b)=>{
    return a.age - b.age;
};

spiceGirls.sort(comparator);
console.log(spiceGirls);