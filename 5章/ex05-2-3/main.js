let x = 2;
console.log(x++ + x++);//2 + 3 = 5 (x = 4)
console.log(++x + ++x);//5 + 6 = 11 (x = 6)
console.log(x++ + ++x);//6 + 8 = 14 (x = 8)
console.log(++x + x++);//9 + 9 = 18 (x = 10)
console.log(x);// x = 10
console.log("----------");
let y = 10;
console.log(y-- + y--);//10 + 9 = 19 (y = 8)
console.log(--y + --y);//7 + 6 = 13 (y = 6)
console.log(y-- + --y);//6 + 4 = 10 (y = 4)
console.log(--y + y--);//3 + 3 = 6 (y = 2)
console.log(y);// y = 2
