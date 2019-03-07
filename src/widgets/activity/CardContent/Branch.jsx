import React from 'react';
import PropTypes from 'prop-types';

const Branch = ({ payload }) => {
  const {
    ref, master_branch: masterBranch, description
  } = payload;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '10px' }}>
      <strong>New branch</strong>
      <span>Branch Name: {ref}</span>
      <span>Master Branch: {masterBranch}</span>
      <span>{description}</span>
    </div>

  );
};

export default Branch;

Branch.propTypes = {
  payload: PropTypes.object,
};
