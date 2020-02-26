import React from 'react';

import { BlankPage } from 'components';

const propTypes = {};

const defaultProps = {};

class Error404Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <BlankPage title={`Error 404`} />;
  }
}

Error404Page.propTypes = propTypes;
Error404Page.defaultProps = defaultProps;

export { Error404Page };
export default Error404Page;
