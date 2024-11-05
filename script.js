const screen = document.getElementById('screen');

function appendToScreen(value) {
    if (screen.innerText === 'Error') {
        clearScreen();
    }
    screen.innerText += value;
}

function clearScreen() {
    screen.innerText = '';
}

function deleteChar() {
    screen.innerText = screen.innerText.slice(0, -1);
}

function calculateResult() {
    const input = screen.innerText;
    
    // Easter Egg 1: 2077++
    if (input === '2077++') {
        screen.innerText = 'Welcome to the CyberCalc X Future!';
        return;
    }

    // Easter Egg 2: 8888++
    if (input === '8888++') {
        screen.innerText = 'Lucky Number!';
        return;
    }

    // Easter Egg 3: 1234++
    if (input === '1234++') {
        screen.innerText = 'You found the Secret Number!';
        return;
    }

    try {
        screen.innerText = eval(input);
    } catch (e) {
        screen.innerText = 'Error';
    }
}