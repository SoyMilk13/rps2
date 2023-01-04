const playButton = document.getElementById('playButton');

playButton.onclick = () => {
    const actions = ['rock', 'fire', 'scissors', 'snake', 'human', 'tree', 'wolf', 'sponge', 'paper', 'air', 'water', 'dragon', 'devil', 'lightning', 'gun'];
    const options = ['Yes', 'yes', 'Y', 'y'];

    function credit() {
        alert('Rock Paper Scissors Two: A minigame made by Soy Milk.')
        alert('Please read "How to Play?" for instructions.')
    };
    credit();

    let restart = true;
    let playAgain = null;
    let playAgainIndex = -1;
    function restartGame() {
        playAgain = prompt('Would you like to play again?');
        playAgain = playAgain.toLowerCase();
        playAgainIndex = options.indexOf(playAgain);
        if (playAgainIndex > 0) {
            alert('Restarting...')
        } else {
            alert('Ending game...')
            return restart = false;
        };
        return playAgain;
    };

    while (restart == true) {
        let userChoice = null;
        let userChoiceIndex = -1;
        do {
            userChoice = prompt('Your choice: ');
            userChoice = userChoice.toLowerCase();
            userChoiceIndex = actions.indexOf(userChoice);
            if (userChoiceIndex < 0) {
                alert('Invalid choice!');
            };
        } while (userChoiceIndex < 0);

        const opChoice = getRandomArrayValue(actions);
        const opChoiceIndex = actions.indexOf(opChoice);

        alert(`You chose ${userChoice}.`, userChoiceIndex + 1);
        alert(`Your opponent chose ${opChoice}.`, opChoiceIndex + 1);
        checkTie();

        function chooseWinner() {
            const withinSeven = (opChoiceIndex > userChoiceIndex && opChoiceIndex <= (userChoiceIndex + 7));
            const withinSevenWrapped = (withinSeven || opChoiceIndex <= (userChoiceIndex - 8));

            const userWon = (userChoiceIndex <= 7) ? withinSeven : withinSevenWrapped;
            alert(userWon ? 'You win!' : 'You lose!');
        };

        function checkTie() {
            if (userChoiceIndex == opChoiceIndex) {
                alert('Tie game!');
                return restartGame();
            };
            chooseWinner();
            restartGame();
        };

        function getRandomArrayValue(actions) {
            return actions[Math.floor(Math.random() * actions.length)];
        };
    };
};