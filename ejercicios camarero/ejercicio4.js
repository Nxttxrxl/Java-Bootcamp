const dinner =[ '🍔', '🌭', '🍟', '🍟', '🍷', '🍷' ]


// const reversedDinner = dinner.reverse();


// const dinnerSorted = [];

// for (let i = dinner.length - 1; i >= 0; i--) {
//     dinnerSorted .push(dinner[i]);
// }

// console.log(dinnerSorted);

// for (let i = 0; i < Math.floor(dinner.length / 2); i++) {
//     const sorted = dinner[i];
//     dinner[i] = dinner[dinner.length - 1 - i];
//     dinner[dinner.length - 1 - i] = sorted;
// }

dinner.forEach((element, index, array) => {
    const reversedIndex = array.length - 1 - index;
    if (index < reversedIndex) {
        [array [index], array[reversedIndex]] = [array[reversedIndex], array[index]];
    }
});

dinner.unshift("🍸");
console.log(dinner);

