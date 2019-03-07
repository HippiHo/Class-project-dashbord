import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import "./advice.css";

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

class Advice extends React.Component {
  state = { data: {}, open: false, loading: true };
  handleClose = () => {
    this.setState({ open: false, loading: true });
  };
  handleSubmit = () => {
    this.setState({ open: true });
    fetch("https://api.adviceslip.com/advice")
      .then(resp => resp.json())
      .then(resp => {
        console.log("resp", resp.slip.advice);
        this.setState({ data: resp, loading: false, advice: resp.slip.advice });
      });
  };

  render() {
    const { classes } = this.props;

    const { advice } = this.state;

    return (
      <div className={`advice ${classes.center}`}>
        <h1>Get some life changing advice</h1>
        <p className={classes.mb3}>
          Push the button and change your life today. For free!!!
        </p>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleSubmit}
          className={classes.button}
        >
          Don't push
        </Button>
        <Dialog
          modal={false}
          maxWidth="md"
          fullWidth="true"
          className={classes.center}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div className="adviceBox">
            <blockquote>{advice}</blockquote>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClose}
          >
            X
          </Button>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Advice);
