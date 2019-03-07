import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import Widget from "./Widget";

const WidgetsContainer = ({ editMode, widgets, addRemoveWidgets }) => (
  <Paper
    style={{
      backgroundColor: "#b3b3b3",
      width: "100%",
      padding: "10px",
      height: "95vh",
      overflowY: "auto",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    }}
  >
    {widgets.filter(x => x.mounted).length === 0
      ? "No widgets"
      : widgets.map((widget, index) => {
          if (widget.mounted) {
            return (
              <Widget
                name={widget.name}
                index={index}
                addRemoveWidgets={addRemoveWidgets}
                editMode={editMode}
                className={widget.className}
                key={widget.id}
                component={widget.component}
              />
            );
          }
          return;
        })}
  </Paper>
);
export default WidgetsContainer;

WidgetsContainer.propTypes = {
  editMode: PropTypes.bool,
  widgets: PropTypes.array.isRequired,
  addRemoveWidgets: PropTypes.func
};
