function getGreeting(){
    return "Hello World!!";
}

console.log(getGreeting());
console.log(getGreeting);

const f = getGreeting;
console.log(f());

const o = {};
o.f = getGreeting;
console.log(o.f());
console.log(o.f);

const arr = [1, 2, 3];
arr[1] = getGreeting;
const message = arr[1]();
console.log(message);