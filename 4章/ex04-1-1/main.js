function rand(m, n){
  return m + Math.floor((n - m + 1) * Math.random());
}
function randFace(){
  return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

let funds = 50;
let round = 0;

while(funds > 1 && funds < 100){
  round++;
  console.log(`第${round}ラウンド:`);
  console.log(`手持ち資金 : ${funds}`);
  const bets = {
    "crown" : 0,
    "anchor" : 0,
    "heart" : 0,
    "spade" : 0,
    "club" : 0,
    "diamond" : 0,
  };
  let totalBet = rand(1, funds);
  if(totalBet === 7){
    totalBet = funds;
    bets.heart = totalBet;
  }else{
    //賭け金をランダムに分ける
    let remaining = totalBet;
    do{
      let bet = rand(1, remaining);
      let face = randFace();
      bets[face] += bet;
      remaining -= bet;
    }while(remaining > 0);
  }
  funds -= totalBet;
  console.log(`賭け金 : ${totalBet}(` +
  Object.keys(bets).map(face => `${face}: ${bets[face]}`).join(',') +
  ")");

  //サイコロを振る
  const hand = [];
  for(let roll = 0; roll < 3; roll++){
    hand.push(randFace());
  }

  //払戻金を得る
  let winings = 0;
  for(let die = 0; die < hand.length; die++){
    let face = hand[die];
    if(bets[face] > 0){
      winings += bets[face];
    }
    funds += winings;
    console.log(`払戻金 : ${winings}`);
  }
}

console.log(`残金 : ${funds}`);
if(funds > 100){
  console.log("意気揚々と船に戻る\n");
}else{
  console.log("トボトボと船に戻る\n");
}
