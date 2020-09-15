function f(o){
    console.log(`    関数 f の中、 o.message に代入する前の値 : "${o.message}"`);
    o.message = "message の値を関数 f の中で設定した!!";
    console.log(`    関数 f の中、 o.message に代入する後の値 : "${o.message}"`);
}

let o = {message : "message の初期値"};
console.log(`関数 f を呼び出す前、 o.message = "${o.message}"`);
f(o); // 関数の内外で、同じオブジェクトを参照しているため、関数内での変更が適用される。
console.log(`関数 を呼び出した後、 o.message = "${o.message}"`);
