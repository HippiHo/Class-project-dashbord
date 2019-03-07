import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import "./drumkit.css";

// import sound files
import { Boom } from "./sounds/boom.wav";
import { Clap } from "./sounds/clap.wav";
import { HiHat } from "./sounds/hihat.wav";
import { Kick } from "./sounds/kick.wav";
import { OpenHat } from "./sounds/openhat.wav";
import { Ride } from "./sounds/ride.wav";
import { Snare } from "./sounds/snare.wav";
import { Tink } from "./sounds/tink.wav";
import { Tom } from "./sounds/tom.wav";

const styles = theme => ({
  largeIcon: {
    width: 60,
    height: 60
  },
  center: {
    textAlign: "center",
    flexFlow: "column",
    justifyContent: "center",
    display: "flex",
    height: "100%"
  },
  mb3: {
    marginBottom: "1em"
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class DrumKit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
      sounds: [this.Boom, this.Clap]
    };
    this.audio = new Audio(this.state.sounds);
  }

  handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  removeTransition = e => {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  };
  playSound = e => {
    this.setState({ play: true, pause: false });

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(this.audio);
    this.audio.play();

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return console.log("No audio!");
    key.classList.add("playing");
    audio.currentTime = 0;
  };

  render() {
    const keys = Array.from(document.querySelectorAll(".key"));
    keys.forEach(key =>
      key.addEventListener("transitionend", this.removeTransition)
    );
    window.addEventListener("keydown", this.playSound);

    const { classes } = this.props;

    const { data } = this.state;
    return (
      <div className={`drumkit ${classes.center}`}>
        <h1>DrumKit</h1>
        <div className="keys">
          <button onClick={this.handleClick}>
            <div
              data-key="65"
              className="key"
              onKeyDown={this.playSound}
              onKeyUp={this.removeTransition}
            >
              <kbd>A</kbd>
              <span className="sound">clap</span>
            </div>
          </button>
          <button onClick={this.handleClick}>
            <div data-key="83" className="key">
              <kbd>S</kbd>
              <span className="sound">hihat</span>
            </div>
          </button>
          <div data-key="68" className="key">
            <kbd>D</kbd>
            <span className="sound">kick</span>
          </div>
          <div data-key="70" className="key">
            <kbd>F</kbd>
            <span className="sound">openhat</span>
          </div>
          <div data-key="71" className="key">
            <kbd>G</kbd>
            <span className="sound">boom</span>
          </div>
          <div data-key="72" className="key">
            <kbd>H</kbd>
            <span className="sound">ride</span>
          </div>
          <div data-key="74" className="key">
            <kbd>J</kbd>
            <span className="sound">snare</span>
          </div>
          <div data-key="75" className="key">
            <kbd>K</kbd>
            <span className="sound">tom</span>
          </div>
          <div data-key="76" className="key">
            <kbd>L</kbd>
            <span className="sound">tink</span>
          </div>
        </div>
        <audio data-key="65" src={Clap} />
        <audio data-key="83" src={HiHat} />
        <audio data-key="68" src={Kick} />
        <audio data-key="70" src={OpenHat} />
        <audio data-key="71" src={Boom} />
        <audio data-key="72" src={Ride} />
        <audio data-key="74" src={Snare} />
        <audio data-key="75" src={Tom} />
        <audio data-key="76" src={Tink} />
        <Dialog
          modal={false}
          maxWidth="sm"
          fullWidth="true"
          className={classes.center}
          open={this.state.open}
          onRequestClose={this.handleClose}
        />
      </div>
    );
  }
}

export default withStyles(styles)(DrumKit);
