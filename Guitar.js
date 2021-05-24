class Guitar {
    constructor(strings = 6, frets = 24, tuning = "EADGBE", key = "C", scale = "chromatic") {
        this.key = key;
        this.scale = scale;
        this.strings = strings;
        this.frets = frets;
        this.tuning = tuning.toUpperCase();
        this.chromaticKey = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
        this.scaleRef = {
            minor: [true, false, true, true, false, true, false, true, true, false, true, false],
            major: [true, false, true, false, true, true, false, true, false, true, false, true],
            maj: [true, false, false, false, true, false, false, true, false, false, false, false],
            min: [true, false, false, true, false, false, false, true, false, false, false, false],
            dim: [true, false, false, true, false, false, true, false, false, false, false, false],
            maj7: [true, false, false, false, true, false, false, true, false, false, false, true],
            min7: [true, false, false, true, false, false, false, true, false, false, true, false],
            dim7: [true, false, false, true, false, false, true, false, false, true, false, false]
        }
    }
    ck = function () {
        return ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    }

    generateScale(scale, key) {
        let newScale = [];
        for (let i = 0; i < 12; i++) {
            let startNoteIndex = this.chromaticKey.indexOf(key);
            if (this.scaleRef[scale][(12 + i - startNoteIndex) % 12]) {
                newScale.push(this.chromaticKey[i]);
            } else {
                newScale.push(" ");
            }
        }
        return newScale;
    }

    generateBoard(strings, frets, tuning, scale, key) {
        let board = [];
        const scaleKey = scale === "chromatic"
            ? this.chromaticKey
            : this.generateScale(scale, key);

        for (let i = 0; i < strings; i++) {
            let stringTuning = tuning[i];
            let tuningIndex = this.chromaticKey.indexOf(stringTuning);
            let string = [];
            for (let j = 0; j <= frets; j++) {
                let note = scaleKey[(tuningIndex + j) % 12];
                string.push(note);
            }
            board.push(string);
        }
        return board;
    }

    printBoardH() {
        let board = this.generateBoard(this.strings, this.frets, this.tuning, this.scale, this.key);
        for (let i = board.length - 1; i >= 0; i--) {

            let stringString = "";
            for (let j = 0; j <= this.frets; j++) {
                let note = board[i][j];
                let formatNote = note[1] ? note : note + " ";
                stringString = stringString.concat("|", formatNote);
            }
            console.log(stringString);
        }
    }
}

module.exports = Guitar;