let s = "   fly me   to   the moon  ";


let strim = s.trim() //let's trim it a little bit.
let startOfWord; let endOfWord;
let validValues = "asdfghjklzxcvbnmqwertyuiop-ASDFGHJKLQWERTYUIOPZXCVBNM"; //might be bad to check every possible letter every time.
for (i = 0; i <= strim.length; i++) {

    if (strim[i-1] == " " || strim[i-1] == null) {
        if (validValues.includes(strim[i])) {
            startOfWord = i;
        }
    }
    if (validValues.includes(strim[i])) {
        if (strim[i + 1] == " " || strim[i + 1] == null) {
            endOfWord = i
        }
    }
}

console.log(startOfWord);
console.log(endOfWord);
console.log((endOfWord - startOfWord)+1)