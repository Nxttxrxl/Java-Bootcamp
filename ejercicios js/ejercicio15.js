let arr = ["🌶", "🥛", "🌶", "🥛", "🌶", "🥛"]

let result = arr.reduce((accumulator, current) =>{
    accumulator.push(current);
    if (current === "🌶") {
        accumulator.push("🥵");
}
return accumulator
}, []);

console.log(result);