import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import WidgetsContainer from './WidgetsContainer';
import SideDrawer from './SideDrawer';

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#b3b3b3',
    borderRadius: 'none',
    alignItems: 'flex-start'
  }
};

const Dashboard = ({
  editMode, data, addRemoveWidgets
}) =>
  (
    <Paper style={styles.container}>
      <SideDrawer
        addRemoveWidgets={data => addRemoveWidgets(data)}
        widgets={data}
      />
      <WidgetsContainer
        addRemoveWidgets={data => addRemoveWidgets(data)}
        editMode={editMode}
        widgets={data}
      />
    </Paper>

    );

export default Dashboard;

Dashboard.propTypes = {
  editMode: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  data: PropTypes.array.isRequired,
  addRemoveWidgets: PropTypes.func,
};
