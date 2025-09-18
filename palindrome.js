function isPalindrome(word) {
    var lowered = word.toLowerCase();
    var chars = lowered.split('');
    var reversed = chars.reverse().join('');
    
    if (lowered === reversed) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("apple"));