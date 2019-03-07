import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { red, green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import ThumbsUp from "@material-ui/icons/ThumbUp";
import ThumbsDown from "@material-ui/icons/ThumbDown";

import Spinner from "../../components/Spinner";
import "./giphy.css";
import Paper from "@material-ui/core/Paper";

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

class Giphy extends React.Component {
  state = { data: {}, url: "", open: false, loading: true };
  handleClose = () => {
    this.setState({ open: false, loading: true });
  };
  handleSubmit = () => {
    this.setState({ open: true });
    fetch(
      "https://cors-anywhere.dominik-hanke.de/http://api.giphy.com/v1/gifs/random?api_key=B3SlJN7A9ClRwvTpR2PPQM8zDl4sNGFa"
    )
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
        this.setState({
          data: resp.data,
          loading: false,
          gif: resp.data.images.original.url,
          width: resp.data.images.original.width,
          height: resp.data.images.original.height
        });
      });
  };

  render() {
    const { classes } = this.props;

    const { gif, width, height } = this.state;

    return (
      <div className={`giphy ${classes.center}`}>
        <h1>Once upon a Gif</h1>
        <p className={classes.mb3}>Click to get your fix!</p>

        <Button
          variant="contained"
          color="primary"
          onClick={this.handleSubmit}
          className={classes.button}
        >
          Click
        </Button>
        <Dialog
          modal={false}
          maxWidth="md"
          fullWidth="true"
          className={classes.center}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div className="gif">
            <img
              src={gif}
              alt="random gif"
              maxWidth={width}
              maxHeight={height}
            />
          </div>
          <div>
            <a href={gif} target="_blank" className="link">
              Link
            </a>
          </div>
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClose}
          >
            Ok
          </Button>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Giphy);
