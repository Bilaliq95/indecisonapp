class Person{
    constructor(name='Anonymous',age=0){
        this.name=name;
        this.age=age;

    }

    getGreeting()
    {
        return `Hi this is ${this.name}`;
    }

    getDescription()
    {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Traveller extends Person{
    constructor(homeLocation='None')
    { 
        super(); //calls constructor of parent class
        this.homeLocation=homeLocation;
    }

    getGreeting()
    {
        let greet=super.getGreeting();
        greet+=` and i am visiting ${this.homeLocation}`;
        return greet;
    }

}

let me =new Traveller ('Hira',25,'Lahore');
let other=new Traveller();

console.log(me.getGreeting());
console.log(other.getGreeting());