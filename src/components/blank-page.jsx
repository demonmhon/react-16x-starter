import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  title: '',
};

const BlankPage = props => {
  const { title } = props;
  return (
    <div className="app__page--blank">
      <span>{title}</span>
    </div>
  );
};

BlankPage.propTypes = propTypes;

BlankPage.defaultProps = defaultProps;

export default BlankPage;
