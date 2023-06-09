import "./App.css";
import React from "react";
import workIt from "./sounds/1-work-it.mp3";
import makeIt from "./sounds/2-make-it.mp3";
import doIt from "./sounds/3-do-it.mp3";
import makesUs from "./sounds/4-makes-us.mp3";
import harder from "./sounds/5-harder.mp3";
import better from "./sounds/6-better.mp3";
import faster from "./sounds/7-faster.mp3";
import stronger from "./sounds/8-stronger.mp3";
import instrumental from "./sounds/9-instrumental.mp3";
import SoundButton from "./components/SoundButton";

class App extends React.Component {
  instrumentalAudio = new Audio(instrumental);
  handlePlay = () => {
    this.instrumentalAudio.play();
  };
  handleStop = () => {
    this.instrumentalAudio.pause();
    this.instrumentalAudio.currentTime = 0;
  };

  render() {
    return (
      <div className="App">
        <div id="logo">
        </div>
        <div id="buttonsDiv" className="container">
          <div className="row">
            <div className="col-xs-4">
              <SoundButton audio={workIt} string="Work It" triggerKey="q" />
              <p className="keyElement">Q</p>
            </div>
            <div className="col-xs-4">
              <SoundButton audio={makeIt} string="Make It" triggerKey="w" />
              <p className="keyElement">W</p>
            </div>
            <div className="col-xs-4">
              <SoundButton audio={doIt} string="Do It" triggerKey="e" />
              <p className="keyElement">E</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4">
              <SoundButton audio={makesUs} string="Makes Us" triggerKey="a" />
              <p className="keyElement">A</p>
            </div>
            <div className="col-xs-4">
              <SoundButton audio={harder} string="Harder" triggerKey="s" />
              <p className="keyElement">S</p>
            </div>
            <div className="col-xs-4">
              <SoundButton audio={better} string="Better" triggerKey="d" />
              <p className="keyElement">D</p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-4">
              <SoundButton audio={faster} string="Faster" triggerKey="z" />
              <p className="keyElement">Z</p>
            </div>
            <div className="col-xs-4">
              <SoundButton audio={stronger} string="Stronger" triggerKey="x" />
              <p className="keyElement">X</p>
            </div>
            <div className="col-xs-4">
              <button
                className="btn-inst btn text-center"
                onClick={this.handlePlay.bind(this)}
              >
                <i className="fa-solid fa-play"></i> Play Inst
              </button>

              <button
                className="btn-inst btn"
                onClick={this.handleStop.bind(this)}
              >
                <i className="fa-solid fa-stop"></i> Stop Inst
              </button>
            </div>
          </div>
        </div>
        <h5 id="credits">Made by Matheus Leopoldo - <a id="portfolio" href="https://mtlpks.github.io/portfolio/" target="_blank" rel="noreferrer">@mtlpks</a></h5>
      </div>
    );
  }
}

export default App;
