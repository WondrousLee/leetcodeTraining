let s = "Hello World";

let startOfWord; let endOfWord;
let validValues = "asdfghjklzxcvbnmqwertyuiop-ASDFGHJKLQWERTYUIOPZXCVBNM";
for (i = 0; i <= s.length; i++) {

    if (s[i-1] == " " || s[i-1] == null) {
        if (validValues.includes(s[i])) {
            startOfWord = i;
        }
    }
    if (validValues.includes(s[i])) {
        if (s[i + 1] == " " || s[i + 1] == null) {
            endOfWord = i
        }
    }
}

console.log(startOfWord);
console.log(endOfWord);
console.log((endOfWord - startOfWord)+1)