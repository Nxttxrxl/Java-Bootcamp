const ticket1 = ['🍺', '🍺', '🥜']; 
const ticket2 = ['🍺', '🥪', '🥙']; 


// const combinedTicket = ticket1.concat(ticket2);

// console.log(combinedTicket)

// ---------------------------

// const combinedTicket = [...ticket1, ...ticket2];

// console.log(combinedTicket)

// ---------------------------

// const combinedTicket = [];
// combinedTicket.push.apply(combinedTicket, ticket1);
// combinedTicket.push.apply(combinedTicket, ticket2);
// console.log(combinedTicket)

// ---------------------------


// const combinedTicket = [];

// for (let i = 0; i < ticket1.length; i++) {
//     combinedTicket.push(ticket1[i])
// }

// for (let i = 0; i < ticket2.length; i++) {
//     combinedTicket.push(ticket2[i])
// }

// console.log(combinedTicket);

const combinedTicket = [];

ticket1.forEach(element => { combinedTicket.push(element)});
ticket2.forEach(element => { combinedTicket.push(element)});

console.log(combinedTicket);

