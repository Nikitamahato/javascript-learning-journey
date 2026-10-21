/*Q3. Count character frequency
Count how many times each character appears in the string.*/
let string = "banana";


let freq = {};

for (let i = 0; i < str.length; i++) {
    let ch = string[i];

    if (freq[ch]) {
        freq[ch]++;
    } else {
        freq[ch] = 1;
    }
}

console.log(freq);
