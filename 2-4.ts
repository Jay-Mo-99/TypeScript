//public private protected static
class User {
  public name: string;
  //public
  //Every instance can utilize this property
  // public 키워드는 생략 가능.
  private lastName: string = "Smith";

  //private
  //Must be edit inside of the class or setter
  constructor(name: string) {
    this.name = name;
  }
  public sayHi() {
    console.log("Hi, My name is ", this.name);
  }
  //Getter
  //Return the value, No parameter
  //Read the property saftly
  get getFullName() {
    return `Name: ${this.name} ${this.lastName}`;
  }
  //Setter
  //Edit the property
  //No return , Must use parameter
  set setLastName(newLastName: string) {
    this.lastName = newLastName;
  }
}

let user1 = new User("Adam");
//user1.lastName = "Lee"; //Can't editusing instance
user1.setLastName = "Lee"; //Using the setter to edit the private property
user1.getFullName;

class Cookie {
  constructor(public name: string) {}
}

let cookie1 = new Cookie("cheese");
console.log(cookie1);
