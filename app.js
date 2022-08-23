// Practice Section
console.log("Practice with a Simple Class (User):\n==========\n");

class User { //upercase class Name is correct convention
    constructor(email, name){//creates new user object in the class User and passes email and name through the constructor
        this.email = email;
        this. name = name;
        this.score = 0;
    }
    login(){//this is called the login method 
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email,'just logged out');
        return this;
    }
    updateScore(){
        this.score ++;
        console.log(this.email, 'score is now', this.score);
        return this;//this returns THIS instance of the object, or that particular user

    }
}

class Admin extends User { //whenever we create a new admin, it will inherit the user class in addition to the admin the EXTENDS key word Class
    //if you don't have a constructor it will inherit the constructor from User
    deleteUser(user){
        users = users.filter(u => {//filter method allows you to cycle throgh each elemet in the array and filter them out
            return u.email != user.email

        })
    }
}
var userOne = new User("dedloff@codewars.com", "Dedloff");//calls the constructor function the 'new' keyword
var userTwo = new User("bones@sherlock.com", "Sherlock");
var admin = new Admin("ninjas@ninja.com", "Misty");
//the 'new' keyword 
//- creates a new empty object {}
// -sets the value of 'this' to be the new object
// - calls the constructor method



var users = [userOne, userTwo, admin];
admin.deleteUser(userOne);//this will delete user two, passing the admin class and using class inheritance that extends to user

admin.login(); //this will login the admin user 

console.log(users);

userOne.login().updateScore().updateScore().logout();//example of method chaining

// userOne.updateScore();
// userOne.login();
// userTwo.logout();//this calls the login and logout method of THIS.email and displays the logout display of user twos emal

// console.log(userOne);
// console.log(userTwo);



// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//Create a Person Class
//properties for a person, name pets, residence, hobbies
//methods for a person: greetig, addHobby, removeHobby

class Person {
    //a constructor is called when i create an object from a class
    constructor (name = "Stranger", pets = 0, residence = "Earth", hobbies = []){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    greet(name) {
        console.log(`Hello ${name}!`)
    }
    addHobby(newHobby) {  //that will push whatever the new hobby is to the hobbies array and updates the hobbys list
        this.hobbies.push(newHobby)
    }
    removeHobby(oldHobby){
        this.hobbies = this.hobbies.filter((hobby) => {
            return hobby != oldHobby; 
        });
    }


}

let nick = new Person("Nick", 0, "Denver", [
    "coding", 
    "gaming", 
    "reading"
]);

nick.addHobby("painting");
nick.removeHobby("gaming");

console.log(nick);

//Create a Coder class
class Coder extends Person{  //create a class named coder that inherits form the Person class
    constructor (name = "Stranger", pets = 0, residence = "Earth", hobbies = []){
        super(name, pets, residence, hobbies)
        this.occupation = "Full Stack Web Delevoper"//adds a special occpation to coder 
    }

    greet(name) {
        console.log(`Hello world! ${name} say it with me!`);
    }
}

let bilbo = new Coder("Bilbo", 0, "The Shire", [
    "Breakfast(s)",
    "Running", 
    "Battling Orcs"
]);

nick.greet(bilbo.name);
bilbo.greet(nick.name);
console.log(bilbo.occupation);
//Exercise 3
let SherlockBones = new Person("Sherlock", 0, "Denver", [
    "running", 
    "swimming", 
    "eating"
]);
console.log(SherlockBones);

let Kal = new Coder("Kal", 17, "Edge of the World", [
    "Breakfast(s)",
    "Running", 
    "Battling Orcs"
]);
console.log(Kal);

//Create a Calculator Class
// class Calculator {
//     constructor (result = 0, param1 =0, param2 = 0){
//         this.result = result;
//         this.param1 = param1;
//         this.param2 = param2;
//     }
//     add(param1, param2){
//         this.result = this.param1 + this.param2;
//         console.log(this.result, ` is the sum of ${this.param1} and ${param2}`);
//         return this;

//     }
//     subtract(){}
//     multiply(){}
//     divide(){}

// }

// let Adding = new Calculator (0, 1, 1);
// console.log(Adding);

class Calculator {
    
        result = 0;
    
  
    add(a, b) {
      let res;
  
      if (b == undefined) {
        res = this.result + a;
      } else {
        res = a + b;
      }
  
      this.result = res;
      return this.result;
    }
  
    subtract(a, b) {
      let res;
  
      if (b == undefined) {
        res = this.result - a;
      } else {
        res = a - b;
      }
  
      this.result = res;
      return this.result;
    }
  
    multiply(a, b) {
      let res;
  
      if (b == undefined) {
        res = this.result * a;
      } else {
        res = a * b;
      }
  
      this.result = res;
      return this.result;
    }
  
    divide(a, b) {
      let res;
  
      if (b == undefined) {
        res = this.result / a;
      } else {
        res = a / b;
      }
  
      this.result = res;
      return this.result;
    }
  
    display() {
      console.log(this.result);
    }
  }
  
  let calc = new Calculator();
  
  console.log(calc.add(1, 2));
//   calc.subtract(2);
//   calc.multiply(4);
//   calc.divide(2);
//   calc.display();


