document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById("colorBox");
    const colorOptions = document.querySelectorAll(".colorOption");
    const gameStatus = document.getElementById("gameStatus");
    const scoreDisplay = document.getElementById("score");
    const newGameButton = document.getElementById("newGameButton");

    let score = 0;
    let targetColor = "";

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function setNewGame() {
        targetColor = getRandomColor();
        colorBox.style.backgroundColor = targetColor;

        let colors = [targetColor];
        while (colors.length < 6) {
            let newColor = getRandomColor();
            if (!colors.includes(newColor)) colors.push(newColor);
        }
        colors.sort(() => Math.random() - 0.5);

        colorOptions.forEach((button, index) => {
            button.style.backgroundColor = colors[index];
            button.onclick = () => checkGuess(colors[index]);
        });
    }

    function checkGuess(selectedColor) {
        if (selectedColor === targetColor) {
            gameStatus.textContent = "Correct!";
            gameStatus.style.color = "green";
            score++;
            scoreDisplay.textContent = score;
        } else {
            gameStatus.textContent = "Wrong! Try Again.";
            gameStatus.style.color = "red";
        }
    }

    newGameButton.addEventListener("click", () => {
        gameStatus.textContent = "";
        setNewGame();
    });

    setNewGame();
});
