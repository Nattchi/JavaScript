let x = 2;
console.log(x++ + x++);//2 + 3 = 5
console.log(++x + ++x);//5 + 6 = 11
console.log(x++ + ++x);//6 + 8 = 14
console.log(++x + x++);//9 + 9 = 18
console.log(x);// x = 10
console.log("----------");
let y = 10;
console.log(y-- + y--);//10 + 9 = 19
console.log(--y + --y);//7 + 6 = 13
console.log(y-- + --y);//6 + 4 = 10
console.log(--y + y--);//3 + 3 = 6
console.log(y);// y = 2
