const obj = {};
obj.color = "黄色";
console.log(obj.color);
obj["not an identifier"] = 3;
console.log(obj["not an identifier"]);
console.log(obj["color"]);
console.log(obj.size);
