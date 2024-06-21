const emojis = ["🥩", "🍗", "🍔", "🍟", "🍕", "🍙", "🍺", "🧃", "🍬", "🍡", "🍼", "🍷", "🍶", "🌼", "🧅", "🥕", "🍎", "🍑", "🍄", "🥑", "🛵", "🚔", "🚛", "🚕", "🦼", "🚍", "🚑", "🚲", "🚞", "🚃", "🚡", "🚂", "🚋"];
const array = [];

function getRandomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}


function writeArrayInHtml() {
    document.getElementById("arrayOutput").innerHTML = array;
    
}


// add emojis
const pushBtn = document.getElementById('pushBtn');
const unshiftBtn = document.getElementById('unshiftBtn');
const insertBtn = document.getElementById('insertBtn');




// remove emojis
const popBtn = document.getElementById('popBtn');
const shiftBtn = document.getElementById('shiftBtn');
const removeBtn = document.getElementById('removeBtn');





function pushEmoji() {
    array.push(getRandomEmoji());
    writeArrayInHtml();
}

pushBtn.addEventListener('click', () => {
    pushEmoji();
});

function unshiftEmoji() {
    array.unshift(getRandomEmoji());
    writeArrayInHtml();
}

unshiftBtn.addEventListener('click', () => {
    unshiftEmoji();
});


function insertEmoji() {
    const index = document.getElementById('insertIndex').value;
    array.splice(index, 0, getRandomEmoji());
    writeArrayInHtml();
}

insertBtn.addEventListener('click', () => {
    insertEmoji();
});

function popEmoji() {
    array.pop(getRandomEmoji());
    writeArrayInHtml();
}

popBtn.addEventListener('click', () => {
    popEmoji();
});

function shiftEmoji() {
    array.shift(getRandomEmoji());
    writeArrayInHtml();
}

shiftBtn.addEventListener('click', () => {
    shiftEmoji();
});

function removeEmoji() {
    const index = document.getElementById('removeIndex').value;
    array.splice(index, 1);
    writeArrayInHtml();
}

removeBtn.addEventListener('click', () => {
    removeEmoji();
});

