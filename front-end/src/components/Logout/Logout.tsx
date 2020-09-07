import * as React from 'react';
import { Redirect } from 'react-router-dom';

const Logout: React.FunctionComponent = () => {
  return <Redirect to="/Login" />;
};

export default Logout;
