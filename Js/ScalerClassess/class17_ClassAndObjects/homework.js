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


 //   let x = new Fraction(2, 3)  // 2/3
//	  let y = new Fraction(4, 5) // 4/5
  //  console.log( x.add(y)); // 22/15
  //  let z = x.subtract(y) // -2/15
    //let z = x.multiply(y) // 8/15
	//

	class Matrix {
	    // Define constructor here
		constructor(rows, cols){
			this.rows = rows;
			this.cols = cols;
			this.matrix = new Array(rows).fill().map(() => new Array(cols).fill());
        }
		
		input(){
			// Complete the function
            // use readLine() to read individual integers/strings
			let input = readLine();
			console.log(input);
		}
		
		add(x){
			// Complete the function
			
		}
		
		subtract(x){
			// Complete the function
			
		}
		
		transpose(){
			// Complete the function
			
		}
		
		print(){
			// Complete the function
            
		}
};


  //  a = new Matrix(10, 5)  // 10 rows, 5 columns
	//a.input() ;
//	b = new Matrix(10, 5)  // 10 rows, 5 columns
//	b.input()
 //   c1 = a.add(b)
 //   c2 = a.subtract(b)
  //  c3 = a.transpose()
  //  a.print()

  let input = ["1",2,3,4,5];
console.log(+input[0] + 1);
//arr.push(+input[0])
