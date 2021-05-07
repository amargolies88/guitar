class Guitar {
    constructor(strings = 6, frets = 24, tuning = "EADGBE", scale = "chromatic", key = "C") {
        this.key = key;
        this.scale = scale;
        this.strings = strings;
        this.frets = frets;
        this.tuning = tuning;
        this.chromaticKey = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    }

    generateScale(scale, key) {
        let naturalMinor = [true, false, true, true, false, true, false, true, true, false, true, false];
        let newScale = [];
        if (scale === "minor") {
            for (let i = 0; i < 12; i++) {
                let startNoteIndex = this.chromaticKey.indexOf(key);
                if (naturalMinor[(12 + i - startNoteIndex) % 12]) {
                    newScale.push(this.chromaticKey[i]);
                } else {
                    newScale.push(" ");
                }
            }
            return newScale;
        }
        if (scale === "major") {
            for (let i = 0; i < 12; i++) {
                let startNoteIndex = this.chromaticKey.indexOf(key);
                if (naturalMinor[(12 + i - startNoteIndex) % 12]) {
                    newScale.push(this.chromaticKey[i]);
                } else {
                    newScale.push(" ");
                }
            }
            return newScale;
        }
    }

    generateBoard(strings, frets, tuning, scale, key) {
        let board = [];
        const scaleKey =
            (scale === "chromatic")
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