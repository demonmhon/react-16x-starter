import React from 'react';

import { BlankPage } from 'components';

const propTypes = {};

const defaultProps = {};

const AccountPage = (props) => {
  return <BlankPage title={`Account`} />;
};

AccountPage.propTypes = propTypes;
AccountPage.defaultProps = defaultProps;

export { AccountPage as HomePage };
export default AccountPage;
