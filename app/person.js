
import addtodom from './add_to_dom'

class Person{
    constructor(name){
        this.name = name;
    }

    talk(msg){
        addtodom('h1', `${this.name} says: ${msg}`);
    }

    greet(){
        this.talk(`hi my name is ${this.name}`);
    }

}


class SuperPerson extends Person{
    constructor(name, superPower){
        super(name);
        this.superPower = superPower;
    }
    saySuperPower(){
        this.talk(`my super power is: ${this.superPower}`);
    }
}


export default SuperPerson;