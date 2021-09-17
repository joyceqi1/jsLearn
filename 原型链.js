function People(){
    this.age='people';
}

function Person(){
    this.age='person';
    this.pp = 'pp';
}
People.prototype.test = ()=>{
    console.log('people');
}
Person.prototype.test1 = ()=>{
    console.log('person');
}
var person = new Person();
People.prototype = person;
var people = new People();

people.test1()
// people.test()