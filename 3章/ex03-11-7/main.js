const sam1 = {
  name : 'Sam',
  age : 4,
};
console.log(sam1);

const sam2 = {name : 'Sam',age : 4};
console.log(sam2);

console.log(sam1.name);
console.log(sam1.age);
console.log(sam1 == sam2);

const sam3 = {
  name : 'Sam',
  classfication : {
    kingdom : 'Animalia',
    phylum : 'Chordata',
    class : 'Mamalia',
    order : 'Carnivoria',
    family : 'Felidae',
    subfamily : 'Feliane',
    genus : 'Felis',
    species : 'F.catus',
  },
};
console.log(sam3);

const タマ = {
  名前 : 'タマ',
  分類 : {
    界 : '動物界',
    門 : '脊索動物門',
    綱 : '哺乳網',
    目 : 'ネコ目',
    科 : 'ネコ科',
    亜 : 'ネコ亜科',
    属 : 'ネコ属',
    種 : 'ネコ',
  },
};
console.log(タマ);
console.log("------------------");
console.log(sam3.classfication.family);
console.log(sam3["classfication"].family);
console.log(sam3.classfication["family"]);
console.log(sam3["classfication"]["family"]);

console.log(タマ.分類.科);
console.log(タマ["分類"].科);
console.log(タマ.分類["科"]);
console.log(タマ["分類"]["科"]);

sam3.speak = function() { return "Meow!"; };
タマ.鳴く = function() { return "ニャーゴ"; };
console.log(sam3.speak());
console.log(タマ.鳴く());

delete sam3.classfication;
delete sam3.speak;
console.log(sam3);

delete タマ.分類;
delete タマ.鳴く;
console.log(タマ);
