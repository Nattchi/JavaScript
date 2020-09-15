function f(o){
    console.log(`  f の中(2つの代入の前) : o.message = "${o.message}"`); //初期値
    o.message = "f で最初にセットされた";
    console.log(`  f の中(2つの代入の間) : o.message = "${o.message}"`); //f で最初にセット
    o = {message : "新しいオブジェクト"}; // 関数内では、代入したオブジェクトを参照
    console.log(`  f の中(2つの代入の後) : o.message = "${o.message}"`); // 新しいオブジェクト
}

let o = {message : "初期値"};
console.log(`  f の呼び出し前 : o.message = "${o.message}"`); //初期値
f(o);
console.log(`  f の呼び出し後 : o.message = "${o.message}"`); // ×新しいオブジェクト ○f で最初にセット