//Delete this when submitting to leet
let haystack = "hello";
let needle = "ll";
//

let location = -1; //if not found in haystack it says -1 as per question in leet

for (let i = 0; i <= haystack.length - needle.length; i++) {
  // -needle.lenght because it does not need to search further.
  if (haystack[i] === needle[0]) {
    let found = true; //Found first sign of needle
    for (let j = 1; j < needle.length; j++) { 
      //check whole word from needle
      if (haystack[i + j] !== needle[j]) {
        found = false;
        break;
        //if it's not that word then break
      }
    }
    if (found) {
      location = i;
      break;
      //if found whole word then replace -1 location to real location in string.
    }
  }
}

console.log(location); //change this to return when submitting this to leet.