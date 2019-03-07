import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Spinner from "../../components/Spinner";
import "./lostOrNot.css";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
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

class LostOrNot extends React.Component {
  state = { data: {}, open: false, loading: true };
  handleClose = () => {
    this.setState({ open: false, loading: true });
  };
  handleSubmit = () => {
    this.setState({ open: true });
    fetch("https://my.api.mockaroo.com/test.json?key=206361d0")
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
        <h1>Are They Lost or Not?</h1>
        <p className={classes.mb3}>
          The indispensable tool to check if they are with you or not.
        </p>
        <p className={classes.mb3}>
          No need to be not sure if your class is learning.
        </p>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleSubmit}
          className={classes.button}
        >
          Update
        </Button>
        {console.log(data)}
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
                  Is the class lost...?
                </DialogTitle>
                <br />
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">-2</TableCell>
                      <TableCell align="right">-1</TableCell>
                      <TableCell align="right">0</TableCell>
                      <TableCell align="right">1</TableCell>
                      <TableCell align="right">2</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.entries(data).map((element) => (
                      <TableRow key={element[0]}>
                        <TableCell component="th" scope="row">
                          {element[0]}
                        </TableCell>
                        <TableCell align="right">{element[1] === -2 ? "X" : null}</TableCell>                        
                        <TableCell align="right">{element[1] === -1 ? "X" : null}</TableCell>
                        <TableCell align="right">{element[1] === 0 ? "X" : null}</TableCell>
                        <TableCell align="right">{element[1] === 1 ? "X" : null}</TableCell>
                        <TableCell align="right">{element[1] === 2 ? "X" : null}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
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

export default withStyles(styles)(LostOrNot);
