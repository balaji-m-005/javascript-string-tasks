function countVowels(input) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    
    for (var i = 0; i < input.length; i++) {
        var ch = input[i].toLowerCase();
        if (vowels.indexOf(ch) !== -1) {
            count++;
        }
    }
    
    return count;
}

console.log(countVowels("Sriram"));