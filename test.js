function isGoodFriends(string1, string2) {
    // write code here
    var flag = false, obj1 = new Map(), obj2 = new Map();
    for (let i in string1) {
        obj1.set(string1[i], (obj1.get(string1[i]) || 0) + 1);
    }
    for (let i in string2) {
        obj2.set(string2[i], (obj2.get(string2[i]) || 0) + 1);
    }
    var arr1 = [...obj1.keys()];
    var arr2 = [...obj2.keys()];
    for (let i in arr1) {
        if (!obj2.has(arr1[i])) {
            return false;
        } else if (obj1.get(arr1[i]) !== obj2.get(arr1[i])) {
            return false;
        }
    }
    for (let i in arr2) {
        if (!obj1.has(arr2[i])) {
            return false;
        } else if (obj1.get(arr2[i]) !== obj2.get(arr2[i])) {
            return false;
        }
    }
    return true;
}
// console.log(isGoodFriends("cmbchina","ccanbmhi"));
// for (var i = 0; i < 2; i++) {
//     ((i)=>{
//         return () => {
//             setTimeout(() => {
//                 console.log(i);
//             }, 0)
//         }
//     })(i)()
//     // fn(i)()
// }
// for (let i = 0; i < 2; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0)
// }
// console.log(i);
// var a = 1;
// function getA(){
//     var a=2;
//     return ()=>{
//         return a;
//     }
// }
// class person{
//     name='person';
//     age=18;
// }
// function People(){
//     this.name='name';
//     this.fn = ()=>{};
//     function ff(){};
//     this.name += '1';
//     this.age = 17;
// }
// var person1 = new person;
// var people1 = new People();
// var geta = new getA();
// geta()
function *gen(){
    for(let i=0;i<10;i++){
        yield i+1;
    }
}
fn = gen();
arr = [...fn];
console.log(arr)
var obj = {
    a:1,
    fun: function (a){
        setTimeout((a)=>{
            console.log(a);
        })
    }
}

obj.fun();