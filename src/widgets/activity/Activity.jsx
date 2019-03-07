import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Spinner from "../../components/Spinner";
import "./activity.css";
import EventCard from "./EventCard";

export default class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {githubData: {}};
  }
  componentDidMount() {
    const url = "https://api.github.com/repos/DigitalCareerInstitute/marketing-website/events";
    fetch(url)
      .then(resp => resp.json())
      .then(activityData => {
        this.setState({githubData: activityData});
      });
  }

  render() {
    const {githubData} = this.state;
    return (
      <div className="github-activity">
        <h3 className="main-header">{githubData[0] && githubData[0].repo.name}</h3>
        <Divider />
        <List>
          {githubData.length > 1 ? (
            githubData.map(activity => {
              if (activity.type === "PullRequestEvent" || activity.type === "CreateEvent") {
                return <EventCard key={activity.id} activity={activity} />;
              }
              return null;
            })
          ) : (
            <Spinner />
          )}
        </List>
      </div>
    );
  }
}
