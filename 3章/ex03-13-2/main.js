const a1 = [1, 2, 3, 4];
const a2 = [1, 'two', 3, null];
const a3 = [
  "What the hammer? What the chain?",
  "In what furnace was thy brain?",
  "What the anvil? What dread grasp",
  "Dare its deadly terrors clasp?",
];
const a4 = [
  { name : "Ruby", hardness : 9 },
  { name : "Diamond", hardness : 10},
  { name : "Topaz", hardness : 8},
];
const b4 = [
  { 名前 : "ルビー", 硬度 : 9},
  { 名前 : "ダイアモンド", 硬度 : 10},
  { 名前 : "トパーズ", 硬度 : 8},
];
const a5 = [
  [1, 3, 5],
  [2, 4, 6],
];

console.log(a1.length);
console.log(a1[0]);
console.log(a1[a1.length - 1]);
console.log(b4[1].名前);
console.log(b4[2].硬度);
