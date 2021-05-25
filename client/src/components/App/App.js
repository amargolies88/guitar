import './App.css';
import '../UserInput/UserInput';
import UserInput from '../UserInput/UserInput';
import React from 'react';
import Guitar from '../Guitar/Guitar';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strings: "6",
      frets: "24",
      tuning: ["E", "A", "D", "G", "B", "E"],
      rootNote: "C",
      scale: "major"
    };
    this.handleSilly = this.handleSilly.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ value, id, className }) {
    console.log(className);
    console.log(id);
    console.log(value);
    if (className === "string-tuning") {
      let tuning = this.state.tuning;
      tuning[parseInt(id)] = value;
      this.setState({
        tuning: tuning
      })
    }
    else {
      this.setState({
        [id]: value
      })
    }
  }
  handleSilly() {
    console.log(this.state);
  }
  render() {
    return (
      <div className="App" >
        <UserInput strings={this.state.strings} handleChange={this.handleChange} />
        <Guitar strings={this.state.strings} frets={this.state.frets} tuning={this.state.tuning} rootNote={this.state.rootNote} scale={this.state.scale} />
        <button onClick={this.handleSilly} id="trashButton">YOU DARE</button>
      </div>
    );
  }
}
export default App;
