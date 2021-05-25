import './UserInput.css';
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
        return (
            <div onChange={this.handleChange} className="UserInput" >
                <label htmlFor="strings">Number of strings (1-88):</label>
                <input defaultValue="6" className="instrument-input" type="number" id="strings" name="strings" min="1" max="88" />

                <label htmlFor="frets">Number of frets (0-88):</label>
                <input defaultValue="24" className="instrument-input" type="number" id="frets" name="frets" min="0" max="88" />

                <label htmlFor="tuning">Choose a tuning:</label>
                <div className="instrument-input" name="tuning" id="tuning">
                    <select defaultValue="E" className="string-tuning" name="string-tuning-1" id="0">
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
                    <select defaultValue="A" className="string-tuning" name="string-tuning-2" id="1">
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
                </div>

                <label htmlFor="rootNote">Choose a root note:</label>
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

                <label htmlFor="scale">Choose a scale:</label>
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