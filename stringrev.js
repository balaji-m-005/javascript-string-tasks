
function reverseString(myStr) {
    
    let letters = myStr.split('');
    let flipped = letters.reverse(); 
    let final = flipped.join('');    
    
    return final;
}


console.log(reverseString("MKCE"));  


