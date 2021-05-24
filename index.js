const Guitar = require('./Guitar');
const validKeys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let qc = 0;
let questions = [askStrings, askFrets, askTuning, askKey, askScale]
let strings, frets, tuning, key, scale;

function createAndPrint() {
    const guitar = new Guitar(strings, frets, tuning, key, scale);
    guitar.printBoardH();
}

function askNext() {
    qc += 1;
    console.log('qc: ' + qc);
    return questions[qc](qc >= questions.length - 1 ? () => {
        readline.close();
        createAndPrint();
    }
        : askNext);
}

async function askGuitar() {
    qc = 0;
    questions[qc](askNext);
}


function askStrings(cb) {
    readline.question('Enter guitar properties...?\n Strings: ', uiStrings => {
        strings = uiStrings;
        cb();
    });
}

function askFrets(cb) {
    readline.question('Frets: ', uiFrets => {
        frets = uiFrets;
        console.log(frets);

        cb();
    });
}

function askTuning(cb) {
    readline.question('Tuning (example: EADGBE): ', uiTuning => {
        tuning = uiTuning;
        cb();
    });
}

function askKey(cb) {
    readline.question('Key:', uiKey => {
        if (!validKeys.includes(uiKey)) {
            console.log('You entered an invalid key. Valid keys are:');
            console.log(validKeys);
            askKey();
        } else {
            key = uiKey;
            cb();
        }
    });
}

function askScale(cb) {
    readline.question('Scale: ', uiScale => {
        scale = uiScale;
        cb();
    });
}

askGuitar();