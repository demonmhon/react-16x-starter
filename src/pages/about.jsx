import React from 'react';

import { BlankPage } from 'components';

const propTypes = {};

const defaultProps = {};

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <BlankPage title={`About`} />;
  }
}

AboutPage.propTypes = propTypes;
AboutPage.defaultProps = defaultProps;

export { AboutPage as HomePage };
export default AboutPage;
