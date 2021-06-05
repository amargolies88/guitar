import "./UserInput.css";
import { Component } from "react";
class UserInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.handleChange(e.target);
  }
  render() {
    let stringDrops = [];
    for (let i = 0; i < this.props.strings; i++) {
      stringDrops.push(
        <select key={i} defaultValue={this.props.tuning[i]} className="string-tuning" name="string-tuning-1" id={i}>
          <option value="A">A</option>
          <option value="A#">A#</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="C#">C#</option>
          <option value="D">D</option>
          <option value="D#">D#</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="F#">F#</option>
          <option value="G">G</option>
          <option value="G#">G#</option>
        </select>
      );
    }
    return (
      <div onChange={this.handleChange} className="UserInput">
        <label htmlFor="strings">Number of Strings (1-88):</label>
        <input defaultValue="6" className="instrument-input" type="number" id="strings" name="strings" min="1" max="88" />

        <label htmlFor="frets">Number of Frets (0-88):</label>
        <input defaultValue="24" className="instrument-input" type="number" id="frets" name="frets" min="0" max="88" />

        <label htmlFor="tuning">Tuning:</label>
        <div className="instrument-input" name="tuning" id="tuning">
          {stringDrops}
        </div>

        <label htmlFor="rootNote">Root Note:</label>
        <select defaultValue="C" className="instrument-input" name="rootNote" id="rootNote">
          <option value="A">A</option>
          <option value="A#">A#</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="C#">C#</option>
          <option value="D">D</option>
          <option value="D#">D#</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="F#">F#</option>
          <option value="G">G</option>
          <option value="G#">G#</option>
        </select>

        <label htmlFor="scale">Scale / Chord:</label>
        <select defaultValue="major" className="instrument-input" name="scale" id="scale">
          <option value="major">major</option>
          <option value="minor">minor</option>
          <option value="maj">maj</option>
          <option value="maj7">maj7</option>
          <option value="min">min</option>
          <option value="min7">min7</option>
          <option value="dim">dim</option>
          <option value="dim7">dim7</option>
        </select>
      </div>
    );
  }
}

export default UserInput;
