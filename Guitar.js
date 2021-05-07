class Guitar {
    constructor(strings = 6, frets = 24, tuning = "EADGBE") {
        console.log('hello');
        this.strings = strings;
        this.frets = frets;
        this.tuning = tuning;
        this.musicKey = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
        this.board = this.generateBoard(strings, frets, tuning);
    }
    generateBoard(strings, frets, tuning) {
        let board = [];
        for (let i = 0; i < strings; i++) {
            let stringTuning = tuning[i];
            let tuningIndex = this.musicKey.indexOf(stringTuning);
            let string = [];
            for (let j = 0; j <= frets; j++) {
                let note = this.musicKey[(tuningIndex + j) % 12];
                string.push(note);
            }
            board.push(string);
        }
        return board;
    }
    printBoardH() {
        for (let i = this.board.length - 1; i >= 0; i--) {
            let stringString = "";
            for (let j = 0; j <= this.frets; j++) {
                let note = this.board[i][j];
                let formatNote = note[1] ? note : note + " ";
                stringString = stringString.concat("|", formatNote);
            }
            console.log(stringString);
        }
    }
}

module.exports = Guitar;