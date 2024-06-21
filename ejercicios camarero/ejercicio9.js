const tickets = [1, 100000, 21, 30, 4];
// const sortedTickets = tickets.sort((a, b) => b - a);

// console.log(sortedTickets)

// function sortTickets(arr) {
//     const t = arr.length
// }

for (let i = 0; i < tickets.length; i++) {
    for (let j = 0; j < tickets.length - 1; j++) {
        if (tickets[j] < tickets [j + 1]) {
            let temp = tickets[j];
            tickets[j] = tickets[j + 1];
            tickets[j + 1] = temp;
        }
    }
}

console.log(tickets)