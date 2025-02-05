
const letters = [];
const word = "racecar";
const rword = "";
for (const i = 0; i < word.length; i++) {
  letters.push(word[i]);
}
for (const i = 0; i < word.length; i++) {
  rword += letters.pop();
}
if (rword === word) console.log("palindrome");
else console.log("not palindrome");
