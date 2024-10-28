const colors = ['green','red','yellow','blue'];
    let sequence = [];
    let userInput= [];
    let score = 0;

    document.getElementById('start').addEventListener('click', startGame);
    document.querySelectorAll('.color').forEach(color => {
        color.addEventListener('click', () => {
            userInput.push(color.id)
            checkInput();
            // playSound(color.id); // Խաղացողի սեղմելուց հետո ձայն
            animateColor(color.id)  // Անիմացիա սեղմված գույնի համար
        });
    });

    function startGame() {
        sequence = [];
        score = 0;
        userInput = [];
        document.getElementById('score').textContent = 'Հաշիվ: '  +  score;
        nextSequence();
    }

    function nextSequence() {
        userInput= [];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        sequence.push(randomColor);
        showSequence();
}

    
    function showSequence() {
        let i = 0;
        const interval = setInterval(() => {
            const currentColor = sequence[i];
            // playSound(currentColor); //Խաղի հաջորդականության համար ձայն
            animateColor(currentColor); //Անիմացիա հաջորդական գույնի համար
            i++;
            if (i >= sequence.length) {
                clearInterval(interval);
            }
        }, 1000);
    }
  
    function checkInput() {
        if(userInput[userInput.length - 1] !== sequence[userInput.length - 1]){
            alert('Դուք սխալ եք արել! Խաղը ավարտվեց։ Ձեր հաշիվը' + score);
            score = 0;
            document.getElementById('score').textContent = 'Հաշիվ:' + score;
            return;
        }

        if(userInput.length === sequence.length){
            score++;
            document.getElementById('score').textContent = 'Հաշիվ:' + score;
            setTimeout(nextSequence, 1000);
        }
    }
    // function playSound(color) {
        // const audio = new Audio(`sounds/${color}.mp3`); // Ապահովեք, որ ձայնային ֆայլեր կան՝ green.mp3, red.mp3 և այլն
        // audio.play();
    // }
    function animateColor(color) {
        const colorDiv = document.getElementById(color);
        colorDiv.classList.add('active');
        setTimeout(() => {
            colorDiv.classList.remove('active');
        }, 500);
    }
    
    
















