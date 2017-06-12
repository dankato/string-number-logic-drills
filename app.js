// Jedi name
function jediName(firstName, lastName) {
    var firstThree = lastName.slice(0, 3);
    var firstTwo = firstName.substring(0, 2);
    return firstThree + firstTwo;
};

jediName('Beyonce', 'Knowles');

// To infinity...
function beyond(num) {
    if (num === Infinity) {
        console.log('And beyond');
    } else if (num > 0) {
        console.log('To infinity');
    } else if (num < 0) {
        console.log('To negative infinity');
    } else if (num === 0) {
        console.log('Staying home');
    }
}

// Cracking the code
function decode(code) {
    switch (code.charAt(0)) {
        case 'a': return code.charAt(1);
        case 'b': return code.charAt(2);
        case 'c': return code.charAt(3);
        case 'd': return code.charAt(4);
        default: return ' ';
    };
}

function breakup(sentance) {
    let words = sentance.split(' ');
    let results = [];
    for(let i = 0; i < words.length; i++) {
        results.push(decode(words[i])); // why in block?
    }
    return results.join(''); 
}

breakup('craft block argon meter bells brown croon droop');

// 