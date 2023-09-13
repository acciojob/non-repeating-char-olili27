function firstNonRepeatedChar(str) {
 // Write your code here
	 let obj = {};

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);

    if (obj[char] != undefined) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  for (const iterator in obj) {
    // console.log(iterator);
    if (obj[iterator] == 1) return iterator;
  }

  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
