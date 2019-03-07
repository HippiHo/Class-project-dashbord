import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Remove from "@material-ui/icons/RemoveCircle";
import Card from "@material-ui/core/Card";

const styles = {
  container: {
    padding: "0.8rem",
    overflowY: "auto",
    position: "relative"
  },
  editButton: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: "0",
    right: "0",
    paddingRight: "10px"
  }
};

const Widget = ({ index, addRemoveWidgets, editMode, component, className, name }) => (
  <Card
    className={className}
    style={styles.container}
  >
    {editMode ? (
      <div onClick={() => addRemoveWidgets(index)} style={styles.editButton}>
        <IconButton >
          <Remove className="top" color="primary" />
        </IconButton>
        <span>{name}</span>
      </div>
    ) : null}
    {component}
  </Card>
);
export default Widget;

Widget.propTypes = {
  index: PropTypes.number.isRequired,
  addRemoveWidgets: PropTypes.func,
  editMode: PropTypes.bool,
  component: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired
};
