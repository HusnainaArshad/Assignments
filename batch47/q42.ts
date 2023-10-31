//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians1(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great1(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "the Great " + magicians[i];
    }
  }
  
  const magicianNames1: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  make_great(magicianNames1);
  show_magicians(magicianNames1);
  