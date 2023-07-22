function Dog(name, breed, color){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.bark =  function (){
        return 'woof';
    }
}
console.log(Dog.prototype);