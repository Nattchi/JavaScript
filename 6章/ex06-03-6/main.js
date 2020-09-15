function getSentence({subject, verb, object}){
    return `${subject} ${verb} ${object}`;
}

function getSentenceFromArray([subject, verb, object]){
    return `${subject} ${verb} ${object}`;
}

function addPrefix(prefix, ...words){ //接頭辞を追加
    const prefixedWords = [];
    for(let i = 0; i < words.length; i++){
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}

const o = {
    subject : "I",
    verb : "love",
    object : "JS!!",
};

const arr = ["I", "love", "JavaScript!!"];

console.log(getSentence(o));
console.log(getSentenceFromArray(arr));

console.log(addPrefix("con", "verse", "vex", "stitution"));
console.log(addPrefix("非", "現実的", "プログラマ", "常"));