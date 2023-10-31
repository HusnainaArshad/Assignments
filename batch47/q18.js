"use strict";
//Seeing the World: Think of at least five places in the world you’d like to visit.
const placesToVisit = ["Tokyo", "Paris", "Bora Bora", "New York", "Machu Picchu"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", [...placesToVisit].sort());
console.log("Original order:", placesToVisit);
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
console.log("Original order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", placesToVisit.sort());
console.log("Reverse alphabetical order:", placesToVisit.sort().reverse());
