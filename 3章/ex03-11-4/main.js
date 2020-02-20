const obj = {};
obj.color = "黄色";
console.log(obj.color);
obj["not an identifier"] = 3;

const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj["not an identifier"]);
console.log(obj["color"]);
console.log(obj[SIZE]);
console.log(obj);

obj.SIZE = 12;
console.log(obj.SIZE);
console.log(obj["SIZE"]);
console.log(obj[SIZE]);
console.log(obj);
