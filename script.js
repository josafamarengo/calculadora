var display = document.getElementById('display'),
    key = document.getElementsByClassName('key'),
    numbers = document.querySelectorAll('.number'),
    operators = document.querySelectorAll('.operator'),
    percent = document.getElementById('percent'),
    decimal = document.getElementById('decimal'),
    equals = document.getElementById('equals'),
    clear = document.getElementById('clear'),
    resultDisplayed = false;

    // Play sound when button is clicked
    for (var i = 0; i < key.length; i++) {
        key[i].addEventListener('click', function() {
            var audio = document.createElement('audio');
            audio.setAttribute('src', 'beep.mp3');
            audio.setAttribute('volume', '0.5');
            audio.play();
        }
        );
    }

    // Add event listeners to all numbers
    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function() {
            if (resultDisplayed) {
                display.value = '0';
                resultDisplayed = false;
            }
            if(display.value === '0') {
            display.value = this.innerHTML;
            } else {
            display.value += this.innerHTML;
            }
        });
    }

    // Add event listeners to all operators
    for (var i = 0; i < operators.length; i++) {
        var multiplication = document.getElementById('multiply'),
            division = document.getElementById('divide');

        operators[i].addEventListener('click', function() {
            if (resultDisplayed) {
                display.value = '0';
                resultDisplayed = false;
            } else if (multiplication && display.value !== '0') {
                display.value += '*';
            } else if (division && display.value !== '0') {
                display.value += '/';
            } else {
            display.value += this.innerHTML;
            }
        });
    }

    // Add event listener to percentage button
    percent.addEventListener('click', function() {
        if (resultDisplayed) {
            display.value = '0';
            resultDisplayed = false;
        }
        display.value = display.value / 100;
    }
    );

    // Add event listener to decimal
    decimal.addEventListener('click', function() {
        if (resultDisplayed) {
            display.value = '0';
            resultDisplayed = false;
        }
        if (display.value.indexOf('.') === -1) {
            display.value += '.';
        }
    });

    // Add event listener to clear
    clear.addEventListener('click', function() {
        display.value = '0';
    });

    // Add event listener to equals
    equals.addEventListener('click', function() {
        if (resultDisplayed) {
            display.value = '0';
            resultDisplayed = false;
        } else {
            var equation = eval(display.value);
            display.value = equation;
            resultDisplayed = true;
        }
    });