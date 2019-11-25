/*
function scope(){
    var name = 'Harry';
    var age = 19;
//    console.log(name, age);

//    var result = name + age;

    function innerScope() {
        console.log ('inner ' + name);

        var surname = 'Potter';
        return surname;
    }
//    var surname = innerScope();

//    console.log (surname);
    return innerScope();
}

var surname = scope();
console.log(surname);

function secondScope(){
    function innerScope(){

    }
}
*/

(function(){
    console.log('first time');
})()

//(function(a){
//    console.log('second time');
//})(1)

let user;

(function(name, age){
    user = {name:name, age:age};
})('Harry', 19)

console.log(user);

let func = function(x, y) {
    return x + y;
}

console.log(func(10, 20));

let arrowFunc = (x, y) => x + y;

console.log(arrowFunc(40, 60));

let arrowFunc1 = (x, y) => {
    return x + y;
}
console.log(arrowFunc1(140, 260));

function cat(name, age) {

    this.name = name;
    this.age = age;


}

let bird = () => {
    this.nameWindow = 'Window';
}

console.log(window.nameWindow);