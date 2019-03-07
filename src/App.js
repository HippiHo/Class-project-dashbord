import React from "react";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {amber, grey} from "@material-ui/core/colors";

import Dashboard from "./components/Dashboard";
import AppNav from "./components/Nav";
import widgetsData from "./data";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {main: grey[900]},
    secondary: {main: amber[500]},
    action: {main: grey[100]},
  },
  typography: {useNextVariants: true},
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      widgets: [],
    };
  }
  componentWillMount() {
    this.setState({widgets: widgetsData});
    this.handleLocal();
  }
  handleLocal() {
    if (!localStorage.getItem("mounted")) {
      this.saveLocal(widgetsData);
    } else {
      this.updateLocal(widgetsData, JSON.parse(localStorage.getItem("mounted")));
    }
  }
  saveLocal(local) {
    const mounted = local.filter(w => w.mounted).map(w => w.id);
    localStorage.setItem("mounted", JSON.stringify(mounted));
  }
  updateLocal(widget, mounted) {
    const local = widget;
    local.map((a, i) => (mounted.includes(a.id) ? (local[i].mounted = true) : (local[i].mounted = false)));
  }
  addRemoveWidgets(index) {
    const d = this.state.widgets;
    d[index].mounted = !d[index].mounted;
    this.setState({widgets: d});
    this.saveLocal(d);
  }
  toggleEditMode = () => {
    this.setState({editMode: !this.state.editMode});
  };
  render() {
    const {widgets, editMode} = this.state;
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <AppNav
            editMode={editMode}
            toggleEditMode={this.toggleEditMode}
            data={widgets}
            addRemoveWidgets={widgets => this.addRemoveWidgets(widgets)}
          />
          <Dashboard addRemoveWidgets={widgets => this.addRemoveWidgets(widgets)} editMode={editMode} data={widgets} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
