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
