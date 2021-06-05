import "./Guitar.css";
import { Component } from "react";
class Guitar extends Component {
  // strings = 6, frets = 24, tuning = "EADGBE", key = "C", scale = "chromatic"
  constructor(props) {
    super(props);
    this.chromaticKey = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    this.chromaticKeyb = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
    this.scaleRef = {
      minor: [true, false, true, true, false, true, false, true, true, false, true, false],
      major: [true, false, true, false, true, true, false, true, false, true, false, true],
      maj: [true, false, false, false, true, false, false, true, false, false, false, false],
      min: [true, false, false, true, false, false, false, true, false, false, false, false],
      dim: [true, false, false, true, false, false, true, false, false, false, false, false],
      maj7: [true, false, false, false, true, false, false, true, false, false, false, true],
      min7: [true, false, false, true, false, false, false, true, false, false, true, false],
      dim7: [true, false, false, true, false, false, true, false, false, true, false, false],
    };
    this.generateLabels = this.generateLabels.bind(this);
    this.generateBoard = this.generateBoard.bind(this);
    this.generateScale = this.generateScale.bind(this);
    this.printBoardH = this.printBoardH.bind(this);
    this.printBoardWebH = this.printBoardWebH.bind(this);
  }
  ck = function () {
    return ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  };

  generateScale() {
    let newScale = [];
    for (let i = 0; i < 12; i++) {
      let startNoteIndex = this.chromaticKey.indexOf(this.props.rootNote);
      if (this.scaleRef[this.props.scale][(12 + i - startNoteIndex) % 12]) {
        newScale.push(this.chromaticKey[i]);
      } else {
        newScale.push(" ");
      }
    }
    return newScale;
  }

  generateBoard() {
    let board = [];
    const scaleKey = this.props.scale === "chromatic" ? this.chromaticKey : this.generateScale(this.props.scale, this.props.rootNote);

    for (let i = 0; i < this.props.strings; i++) {
      let stringTuning = this.props.tuning[i];
      let tuningIndex = this.chromaticKey.indexOf(stringTuning);
      let inString = [];
      for (let j = 0; j <= this.props.frets; j++) {
        let note = scaleKey[(tuningIndex + j) % 12];
        inString.push(note);
      }
      board.push(inString);
    }
    console.log(board);
    return board;
  }

  printBoardH() {
    let board = this.generateBoardRaw();
    for (let i = board.length - 1; i >= 0; i--) {
      let stringString = "";
      for (let j = 0; j <= this.props.frets; j++) {
        let note = board[i][j];
        let formatNote = note[1] ? note : note + " ";
        stringString = stringString.concat("|", formatNote);
      }
      console.log(stringString);
    }
  }

  printBoardWebH() {
    let webBoard = [];
    let board = this.generateBoard();
    for (let i = board.length - 1; i >= 0; i--) {
      let stringRow = [];
      for (let j = 0; j <= this.props.frets; j++) {
        let note = board[i][j];
        let formatNote = note[1] ? note : note + " ";
        stringRow.push(
          <td className="actual-note-cell" key={j}>
            <pre className="pretty-preeze note-cell" key={j}>
              {formatNote}
            </pre>
          </td>
        );
      }
      webBoard.push(
        <tr className="note-cell" key={i}>
          {stringRow}
        </tr>
      );
    }
    return webBoard;
  }

  generateLabels() {
    let labels = [];
    for (let i = 0; i <= this.props.frets; i++) {
      labels.push(
        <td className="note-cell" key={i}>
          {i}
        </td>
      );
    }
    return labels;
  }

  render() {
    console.log(this);
    return (
      <div>
        <table id="tablethang">
          <thead>
            <tr>{this.generateLabels()}</tr>
          </thead>
          <tbody>{this.printBoardWebH()}</tbody>
        </table>
      </div>
    );
  }
}

export default Guitar;
