class ComplexNumber { 
	
	// Define constructor here
    constructor(r1, i1) {  // Constructor
        this.real = r1;
        this.imaginary = i1;
      }
		
	add(x){
		// Complete the function
		
	}
		
	subtract(x){
		// Complete the function
		
	}
		
	multiply(x){
		// Complete the function
		
	}
	
	divide(x){
		// Complete the function
		
	}
	
}

/*
    let a = new ComplexNumber(10, 5)
	let b = new ComplexNumber(2, 3)
	let c1 = a.add(b) 
	let c2 = a.subtract(b)
	let c3 = a.multiply(b)
	let c4 = a.divide(b)

*/


class Circle { 
	// Define constructor here
    constructor(r) {  // Constructor
        this.rad = r;
      }
    perimeter(){
		// Complete the function
        return 2 * 3.14 * this.rad;
		
	}
    
	area(){
		// Complete the function
        return 3.14 * Math.pow(this.rad, 2);

	}
}

a = new Circle(3)  // Radius = 3
console.log(a.perimeter()); // 18.84
console.log(a.area()); // 28.26
