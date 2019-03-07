import React from "react";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";
import preciseDiff from "moment-precise-range-plugin";

import "./countdown.css";

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

class Countdown extends React.Component {
  state = { date: new Date(), open: false, loading: true };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const now = new Date();
    const theDate = moment("7/19/2019").preciseDiff(now);

    this.setState({ 
      date: theDate
    });
  }


  render() {
    const { classes } = this.props;

    return (
      <div className={`countdown ${classes.center}`}>
        <h1>Countdown</h1>
        <h3 className={classes.mb3}> Days left in DCI.... </h3>
        <p className="box">
          Only {JSON.stringify(this.state.date)} days to go!
        </p>
        {}
        <div />
      </div>
    );
  }
}

export default withStyles(styles)(Countdown);
