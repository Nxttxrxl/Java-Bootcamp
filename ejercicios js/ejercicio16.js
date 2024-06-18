let arr = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];

let result = arr.reduce((acc, curr, index, array) => {
    acc.push(curr);

    if (curr === "🎴" && index < array.length - 1 && array[index + 1] === "🎴") {
        acc.push("🃏");

        return acc;
    }
});

console.log(result);
