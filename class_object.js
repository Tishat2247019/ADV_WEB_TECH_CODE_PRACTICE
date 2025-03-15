class hello{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    details(){
        console.log(this.name);
        console.log(this.age);
    }
}

const h = new hello("tishat", 20);
console.log(h.age)
h.details();