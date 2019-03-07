import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";

import "./colors.css";

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
  header: {
    margin: "1rem",
    fontWeight: "bold"
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  input: {
    margin: theme.spacing.unit
  }
});

class Colors extends Component {
  state = { data: [], open: false, loading: true };

  handleClose = () => {
    this.setState({ open: false, loading: true });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ open: true });
    const mainUrl =
      "https://cors-anywhere.dominik-hanke.de/http://www.colourlovers.com/api/palettes/top?format=json";
    const endpoint = "&numResults=:amount";
    const url =
      mainUrl + endpoint.replace(":amount", e.target.elements.number.value);
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        //console.log(resp);
        this.setState({ data: resp, loading: false });
      });
  };

  render() {
    const { classes } = this.props;

    const { data } = this.state;

    const displayColors = data.map(palette => {
      return (
        <div className="palettes">
          <div className="title">
            <a href={palette.url} target="_blank">
              <span>{palette.title}</span>
            </a>
          </div>
          <div className="creator">
            <span>by: {palette.userName} </span>
          </div>
          <div className="example">
            <img src={palette.imageUrl} alt="color palette" />
          </div>
          <div className="hexes">
            <span>HEX-Colors used: {palette.colors.join(", ")}</span>
          </div>
        </div>
      );
    });

    return (
      <div className={`colors ${classes.center}`}>
        <h1 className={classes.header}>Colors</h1>
        <p className={classes.mb3}>Click on the button to get</p>
        <form onSubmit={this.handleSubmit}>
          <Input
            placeholder="n"
            className={classes.input}
            name="number"
            inputProps={{
              "aria-label": "Description"
            }}
            type="number"
          />
          <p className={classes.mb3}>color palettes.</p>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
          >
            GO
          </Button>
        </form>
        <Dialog
          modal={false}
          maxWidth="md"
          fullWidth="true"
          className={classes.center}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Typography
            component="h2"
            variant="display1"
            gutterBottom
            className={classes.header}
          >
            Get inspired
          </Typography>
          {displayColors}
          <Button variant="outlined" color="primary" onClick={this.handleClose}>
            Leave
          </Button>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Colors);
