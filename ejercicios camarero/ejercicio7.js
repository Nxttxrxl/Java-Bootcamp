import foods from "./foods.mjs";

const getAllCategories = [...new Set(foods.map((food) => food.category))];
const checkIfCategoryExists = (category) => getAllCategories.includes(category);
const findCategory = (category) => foods.filter((food) => food.category === category);


console.log(getAllCategories);
console.log(checkIfCategoryExists("Mexican"));
console.log(checkIfCategoryExists("Thai"));
console.log(findCategory("Fast food"));


const ticket = ['🥜', '🌮', '🥗', '🍕', '🍣', '🧀'];

const calculateTotalTicket = (ticket, foods) => {
    ticket.map((item) => foods.find(food) => food.emoji === item);
    ticket.filter
}