class ComplexNumber { 
	
	// Define constructor here
    constructor(r1, i1) {  // Constructor
        this.real = r1;
        this.imaginary = i1;
      }
		
	add(x){
		// Complete the function
		let real = this.real + x.real;
		let imaginary = this.imaginary + x.imaginary;
		return  real+","+ imaginary;
	}
		
	subtract(x){
		// Complete the function
		let real = this.real - x.real;
		let imaginary = this.imaginary - x.imaginary;
		return  real+","+ imaginary;
	}
		
	multiply(x){
		// Complete the function
		var real = (this.real * x.real)-(this.imaginary * x.imaginary);
		var imaginary = (this.real * x.imaginary)+(this.imaginary * x.real);
		return  real+","+ imaginary;

	}
	
	divide(x){
		// Complete the function
		var denom = x.imaginary * x.imaginary + x.real * x.real;
		var real = (this.real * x.real + this.imaginary * x.imaginary) /denom;
		var imaginary = (x.real * this.imaginary - this.real * x.imaginary) /denom; 
		return  real+","+ imaginary;

	}
	
}

let a = new ComplexNumber(2, -7);
let b = new ComplexNumber(4,  3);
let c1 = a.add(b) 
let c2 = a.subtract(b)
console.log(c1);
console.log(c2);
let c3 = a.multiply(b)
console.log(c3);

let c4 = a.divide(b)
console.log(c4);

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

// a = new Circle(3)  // Radius = 3
// console.log(a.perimeter()); // 18.84
// console.log(a.area()); // 28.26
