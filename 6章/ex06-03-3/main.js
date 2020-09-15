function f(x){
    console.log(`関数 f の中(代入の前) : x = ${x}`);
    x = 5;
    console.log(`関数 f の中(代入の後) : x = ${x}`);
}

let x = 3;
console.log(`関数 f の中(代入の前) : x = ${x}`);
f(x);
console.log(`関数 f の中(代入の後) : x = ${x}`);