function capitalizeWords(sentence) {
    var words = sentence.split(" ");
    var result = [];
    
    for (var i = 0; i < words.length; i++) {
        var w = words[i];
        var cap = w.charAt(0).toUpperCase() + w.substring(1);
        result.push(cap);
    }
    
    return result.join(" ");
}

console.log(capitalizeWords("comback stronger")); 