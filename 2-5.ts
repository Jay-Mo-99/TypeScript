/**
 * private
 * - Accessible only inside the class where it is declared.
 * - Cannot be accessed by child classes.
 * - Cannot be accessed directly from an instance.
 * - Can be read or modified through public methods or getters/setters defined inside the class.
 */

/**
 * protected
 * - Accessible inside the class where it is declared.
 * - Accessible inside child classes (extends).
 * - Cannot be accessed directly from an instance.
 */

/**
 * public
 * - Accessible anywhere (inside the class, child classes, and from instances).
 * - Default access modifier if nothing is specified.
 */

class Parents {
  private age: number = 58;
  protected lastName: string = "Kim";
}

class Child extends Parents {}

let child1 = new Child();
//child1.lastName = "Lee";
console.log(child1); //{lastName: "Kim",age:58}
//console.log(child1.lastName); //Impossible
//console.log(child1.age); //Impossible
//

/**
 * static
 * - Belongs to the class itself, not to instances.
 * - Inherited by subclasses (class-level inheritance).
 * - Instances created from the subclass do NOT have this property.
 */

//When can I use static
//
class Fruit {
  static hasVitamin: boolean = true;
  //Only for parents class
}
class Orange extends Fruit {
  color: string = "orange";
}
let fruit1 = new Fruit();
let orange1 = new Orange();
console.log(Fruit.hasVitamin); //static: Only for parent class
console.log(fruit1);
//Fruit{}
console.log(orange1);
/*Orange {color: 'orange'}*/

class User {
  static field = "TypeScript"; //Can't use this.
  intro = "I am professional in " + User.field;
}
User.field = "JavaScript"; //사실 권장되는조작은 아님

let amily = new User();
console.log(amily);

//Assignment2
class User2 {
  private static x = 10;
  public static y = 20;

  static addOne(param: number) {
    User2.x = User2.x + param;
    console.log(User2.x);
  }

  static printX() {
    console.log(User2.x);
  }
}
User2.addOne(3); //이렇게 하면 x가 3 더해져야함
User2.addOne(4); //이렇게 하면 x가 4 더해져야함
User2.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
