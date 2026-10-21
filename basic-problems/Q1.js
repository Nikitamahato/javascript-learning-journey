/* Q1. Count vowels in a string
Write a function that counts the vowels (a, e, i, o, u) in a given string.*/

let str = "javascript";
let countVowel = (str) =>{

    let count = 0;

    for(let i =0; i<str.length;i++){
        
        if(str[i] == "a" ||str[i] == "e" ||str[i] == "i" ||str[i] == "o" ||str[i] == "u" ){
            count++;
        }
    }

    console.log(count);
}

countVowel(str);






