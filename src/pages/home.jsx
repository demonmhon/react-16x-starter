import React from 'react';

import { BlankPage } from 'components';

const propTypes = {};

const defaultProps = {};

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <BlankPage title={`React 15x Starter`} />;
  }
}

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export { HomePage };
export default HomePage;
