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

//How many days in a month?

function howManyDays(month) {
    switch (month) {
        case "January" :
        case "March" :
        case "May" :
        case "July" :
        case "August" :
        case "October" :
        case "December" :
        console.log(`${month} has 31 days.`);
        break;

        case "April" :
        case "June" :
        case "September" :
        case "November" :
        console.log(`${month} has 30 days.`);
        break;

        case "February" :
        console.log(`${month} has 28 days.`);
    }
}

howManyDays("February");

// Rock Paper Scissors

function rockPaperScissors(userChoice) {
    var computer = ['rock', 'paper', 'scissor'][Math.floor((Math.random()*3))]; // why 2 arrays and block?
    if (computer === "rock") {
        switch(userChoice) {
            case "paper" :
                return "Paper beat rocks";
            case "scissor" :
                return "Rock beats scissors";
            case "rock" :
                return "tie";
        }
    }
    else if (computer === "paper") {
        switch(userChoice) {
            case "rock" :
                return "Paper beats rock";
            case "scissor" :
                return "Scissor beats paper";
            case "paper" :
                return "tie";
        }
    }
    else if (computer === "scissor") {
        switch(userChoice) {
            case "rock" :
                return "Rock beats scissor";
            case "paper" :
                return "Scissor beats paper";
            case "scissor" :
                return "tie";
        }
    }
}

rockPaperScissors("rock");









