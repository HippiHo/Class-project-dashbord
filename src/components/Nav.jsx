import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import AppBar from "@material-ui/core/AppBar";
import ModeEdit from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import SideDrawer from "./SideDrawer";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
class Nav extends React.Component {
  state = { sidebarOpen: false };
  handleToggle = () => this.setState({ sidebarOpen: !this.state.open });

  handleClose = () => this.setState({ sidebarOpen: false });

  render() {
    const { classes } = this.props;
    const { toggleEditMode, data, addRemoveWidgets, editMode } = this.props;
    return [
      <AppBar key="AppBar" position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => this.handleToggle()}>
            <MenuIcon color={"secondary"} />
          </Button>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Dashboard
          </Typography>
          <IconButton onClick={toggleEditMode}>
            <ModeEdit color={editMode ? "action" : "secondary"} />
          </IconButton>
        </Toolbar>
      </AppBar>,
      <SideDrawer
        handleClose={this.handleClose}
        sidebarOpen={this.state.sidebarOpen}
        key="SideDrawer"
        addRemoveWidgets={data => addRemoveWidgets(data)}
        widgets={data}
      />
    ];
  }
}
export default withStyles(styles)(Nav);

Nav.propTypes = {
  toggleEditMode: PropTypes.func,
  data: PropTypes.array.isRequired,
  addRemoveWidgets: PropTypes.func
};
