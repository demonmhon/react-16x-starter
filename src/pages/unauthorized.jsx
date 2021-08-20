import React from 'react';

import { BlankPage } from 'components';

const propTypes = {};

const defaultProps = {};

const UnauthorizedPage = (props) => {
  return <BlankPage title={`You are not authorized`} />;
}

UnauthorizedPage.propTypes = propTypes;
UnauthorizedPage.defaultProps = defaultProps;

export { UnauthorizedPage as HomePage };
export default UnauthorizedPage;
