import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { red, green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import ThumbsUp from "@material-ui/icons/ThumbUp";
import ThumbsDown from "@material-ui/icons/ThumbDown";

import Spinner from "../../components/Spinner";
import "./decider.css";
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

class Decider extends React.Component {
  state = { data: {}, open: false, loading: true };
  handleClose = () => {
    this.setState({ open: false, loading: true });
  };
  handleSubmit = () => {
    this.setState({ open: true });
    fetch("https://yesno.wtf/api/")
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ data: resp, loading: false });
      });
  };

  render() {
    const { classes } = this.props;

    const { data } = this.state;
    return (
      <div className={`decider ${classes.center}`}>
        <h1>The Decider</h1>
        <p className={classes.mb3}>
          The indispensable tool for every important decision in your company.
        </p>
        <p className={classes.mb3}>
          Just lean back and let the algorythm make the hard work for you!
        </p>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleSubmit}
          className={classes.button}
        >
          Ask
        </Button>
        <Dialog
          modal={false}
          maxWidth="sm"
          fullWidth="true"
          className={classes.center}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Paper className={classes.root} elevation={1}>
            {!this.state.loading ? (
              <div>
                And the answer is...
                <DialogTitle id="simple-dialog-title">
                  {data.answer}
                </DialogTitle>
                <br />
                {data.answer && data.answer === "yes" ? (
                  <ThumbsUp className={classes.largeIcon} color={green[200]} />
                ) : (
                  <ThumbsDown className={classes.largeIcon} color={red[500]} />
                )}
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleClose}
                >
                  Ok
                </Button>
              </div>
            ) : (
              <Spinner />
            )}
          </Paper>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Decider);
