let myBooksChoices = ['Pride and Prejudice', 'Don Quixote', 'Anna Karenina', 'The Brothers Karamazov'];
    console.log(myBooksChoices);

    console.log('My #1 choice is ' + myBooksChoices[0]);
    console.log('My #2 choice is ' + myBooksChoices[1]);
    console.log('My #3 choice is ' + myBooksChoices[2]);
    console.log('My #4 choice is ' + myBooksChoices[3]);

// Bonus
    console.log(myBooksChoices);

    myBooksChoices.forEach((books, index) => {
        let number = index + 1
        let suffix;

        if (number == 1) {
            suffix = 'st';
        } else if (number == 2) {
            suffix = 'nd';
        } else if (number == 3) {
            suffix = 'rd';
        } else {
            suffix = 'th';
        }

    console.log(`My ${number}${suffix} choice is ${books}`);
});



