//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titleca  
let personName: string = "John Doe";

console.log(personName.toLowerCase()); // Print lowercase
console.log(personName.toUpperCase()); // Print uppercase
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()); // Print titlecase