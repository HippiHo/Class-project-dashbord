import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { red, green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

import "./lastfm.css";

const styles = theme => ({
  largeIcon: {
    width: 60,
    height: 60
  },
  center: {
    // textAlign: "center",
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

class LastFM extends React.Component {
  state = { data: [], open: false, loading: true };
  handleClose = () => {
    this.setState({ open: false, loading: true });
  };
  handleSubmit = () => {
    this.setState({ open: true });
    fetch(
      "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=5&api_key=76b62d3c335adb9060a18ae03af73932&format=json"
    )
      .then(resp => resp.json())
      .then(resp => {
        const artist = resp.artists.artist;
        const topArtists = {
          name: artist[0]
        };

        this.setState({ data: artist, loading: false });
      });
  };

  render() {
    const { classes } = this.props;

    const { data } = this.state;
    const displayArtist = data.map(artist => {
      return (
        <div className="artists">
          <span className="name">{artist.name}</span>
          &nbsp;
          <img src={artist.image[1]["#text"]} className="artistImage" />
          &nbsp;
          <span className="listeners">{artist.listeners}&nbsp;Listeners</span>
          &nbsp;
          <a href={artist.url} target="_blank" className="radioLink">
            >> Try it out now!
          </a>
        </div>
      );
    });
    // console.log(displayArtist);

    return (
      <div className={`lastfm ${classes.center}`}>
        <h1>Last FM</h1>
        <p className={classes.mb3}>
          Click the button to get the top 5 hottest artists on LastFm.
        </p>

        <Button
          variant="contained"
          color="primary"
          onClick={this.handleSubmit}
          className={classes.button}
        >
          GO
        </Button>
        <Dialog
          modal={false}
          maxWidth="md"
          fullWidth="true"
          className={classes.center}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Typography component="h2" variant="display1" gutterBottom>
            Top 5 or not
          </Typography>
          {displayArtist}
          {/* <Paper className={classes.root} elevation={1}>
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
                
              </div>
            ) : (
              <Spinner />
            )}
          </Paper> */}
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

export default withStyles(styles)(LastFM);
