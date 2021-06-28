let greeting:string = 'Hello World'

let age:number = 35

let success:boolean = true

let result:any = '100'
result = 100

interface IUser {
    name:string,
    age?:number,
    print():string
}

let user:IUser = {
    name: 'John',
    print: function(){return ''}
}

console.log(user)

class Person {
    id: number
    constructor(id:number){
        this.id=id
    }
}

class Manager extends Person implements IUser {
    name:string
    age:number

    constructor(id:number,name:string,age:number){
        super(id)
        this.name = name
        this.age = age
    }

    print(){
        return 'some'
    }
}

let m:IUser = new Manager(10,'Jessica',34)
console.log(m.name)

// -- Inheritence

class Department{
    private code:string
    name:string
    protected budget:number
}

let d = new Department()
d.name

// -- Module

// Decorator

@Test()
class Vehicle {

    @Getter
    name:string

    print() {

    }
}

function Getter(target){
    //what is the type of this property
}
