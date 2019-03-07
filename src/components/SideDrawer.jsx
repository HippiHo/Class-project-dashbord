import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AddCircle from "@material-ui/icons/AddCircle";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    backgroundColor: "black",
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

function SideDrawer(props) {
  const { addRemoveWidgets, widgets } = props;

  return (
    <div>
      <Drawer
        width={300}
        open={props.sidebarOpen}
        onClose={() => props.handleClose()}
      >
        <List>
          <ListSubheader>Avilable Widgets</ListSubheader>

          {widgets.map((widget, i) => {
            if (!widget.mounted) {
              return (
                <ListItem key={widget.id}>
                  <ListItemText primary={widget.name} />
                  <ListItemIcon>
                    <AddCircle onClick={() => addRemoveWidgets(i)} />
                  </ListItemIcon>
                </ListItem>
              );
            }
            return null;
          })}
        </List>
      </Drawer>
    </div>
  );
}
export default withStyles(styles, { withTheme: true })(SideDrawer);

SideDrawer.propTypes = {
  widgets: PropTypes.array.isRequired,
  addRemoveWidgets: PropTypes.func,
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};
