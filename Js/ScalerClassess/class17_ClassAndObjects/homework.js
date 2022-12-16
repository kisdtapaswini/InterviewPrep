class Fraction {
    
	// Define constructor here
    constructor(num, deno){
        this.numerator = num;
        this.deno = deno;
    }
	
	add(a){
		// Complete the function
		return (this.numerator/this.deno) + (a.numerator/a.deno);
	}
	
	subtract(a){
		// Complete the function
		return (this.numerator/this.deno) - (a.numerator/a.deno);
	}
	
	multiply(a){
		// Complete the function
        return (this.numerator/this.deno) * (a.numerator/a.deno);
		
	}
};


    let x = new Fraction(2, 3)  // 2/3
	let y = new Fraction(4, 5) // 4/5
    console.log( x.add(y)); // 22/15
  //  let z = x.subtract(y) // -2/15
    //let z = x.multiply(y) // 8/15
