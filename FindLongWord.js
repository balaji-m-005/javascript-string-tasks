function longestWord(sentence) {
    var parts = sentence.split(" ");
    var biggest = "";
    
    for (var i = 0; i < parts.length; i++) {
        var current = parts[i];
        if (current.length > biggest.length) {
            biggest = current;
        }
    }
    
    return biggest;
}

console.log(longestWord("I am going to America"));