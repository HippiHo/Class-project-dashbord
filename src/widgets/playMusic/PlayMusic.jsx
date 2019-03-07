import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { red, lightBlue } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import "./playMusic.css";

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
  },
  slider: {
    padding: "22px 0px"
  }
});

class PlayMusic extends React.Component {
  state = {
    data: {},
    open: false,
    loading: true,
    play: true,
    pause: false,
    playButton: false,
    value: 50
  };
  url = "http://streaming.tdiradio.com:8000/house.mp3";
  audio = new Audio(this.url);

  handleClose = () => {
    this.setState({ open: false, loading: true });
  };
  handleSubmit = e => {
    this.setState({
      play: !this.state.play,
      pause: !this.state.pause,
      playButton: !this.state.playButton
    });

    if (this.state.play) {
      this.audio.play();
      this.audio.volume = this.state.value / 100;
      e.target.innerHTML = "Pause";
      e.currentTarget.style.backgroundColor = red[500];
    } else {
      this.audio.pause();
      e.target.innerHTML = "Play Music";
      e.currentTarget.style.backgroundColor = lightBlue[500];
    }
  };

  componentWillUnmount() {
    this.audio.pause();
  }

  render() {
    const { classes } = this.props;
    //const { value } = this.state;
    return (
      <div className={`decider ${classes.center}`}>
        <h1>Sounds good?!</h1>

        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: lightBlue[500] }}
          onClick={this.handleSubmit}
          className={classes.button}
        >
          Play Music
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(PlayMusic);
