import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { yellow, lime } from "@material-ui/core/colors";

import "./population.css";

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

class Population extends React.Component {
  state = { open: false, loading: true };
  handleClose = () => {
    this.setState({ open: false, loading: true });
  };

  currentPopulation = () => {
    const startDate = new Date("June 30, 1997 23:59:59");
    const endDate = new Date();
    let timeSpan = (endDate.getTime() - startDate.getTime()) / 100; // time-intervall in 1/10 seconds!
    const growthRate = 0.012606;
    const curPop = Math.floor(
      5.85 *
        Math.pow(10, 9) *
        Math.exp((growthRate * timeSpan) / 365.25 / 24 / 36000)
    );

    return curPop;
  };

  showPopulation = (timeAtStart, populationAtStart) => {
    let endDate = new Date();
    let elapsedTime = Math.floor((endDate.getTime() - timeAtStart) / 1000);

    let curPopulation = this.currentPopulation();
    let curPopulationString = curPopulation.toString();
    curPopulationString =
      curPopulationString.slice(-10, -9) +
      "." +
      curPopulationString.slice(-9, -6) +
      "." +
      curPopulationString.slice(-6, -3) +
      "." +
      curPopulationString.slice(-3);

    document.getElementById(
      "display"
    ).innerHTML = `Population now:  ${curPopulationString} `;

    document.getElementById(
      "time"
    ).innerHTML = `Time elapsed since loading:  ${elapsedTime} seconds! `;

    document.getElementById(
      "increase"
    ).innerHTML = `Change in population since loading:  +${curPopulation -
      populationAtStart}! `;
  };

  componentDidMount() {
    const populationAtBeginning = this.currentPopulation();
    const dateAtStart = new Date();
    const timeAtStart = dateAtStart.getTime();
    this.timerID = setInterval(
      this.showPopulation,
      100,
      timeAtStart,
      populationAtBeginning
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={`decider ${classes.center}`}>
        <h1>Guessed Global Population</h1>
        <h2 id="display" style={{ backgroundColor: yellow[500] }}>
          Population
        </h2>
        <div />
        <h3 id="time">time</h3>
        <h2 id="increase" style={{ backgroundColor: lime[500] }}>
          Increase
        </h2>
      </div>
    );
  }
}

export default withStyles(styles)(Population);
