import React from "react";
// import moment from "moment";
import Collapse from "@material-ui/core/Collapse";
// import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import LinkIcon from "@material-ui/icons/Link";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import Branch from "./CardContent/Branch";
import PullRequest from "./CardContent/PullRequest";

const events = {
  PullRequestEvent: "Pull Request",
  CreateEvent: "Created a branch"
};
const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});
class EventCard extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { payload, type } = this.props.activity;
    let cardText;
    if (type === "PullRequestEvent") {
      cardText = <PullRequest payload={payload} />;
    } else if (type === "CreateEvent") {
      cardText = <Branch payload={payload} />;
    }

    return [
      <ListItem button onClick={this.handleClick}>
        <ListItemText primary={events[type]} />
        {this.state.open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>,
      <Collapse in={this.state.open} timeout="auto" unmountOnExit>
        {cardText}
      </Collapse>,

      <Divider key="divider" />
    ];
  }
}
export default withStyles(styles)(EventCard);
