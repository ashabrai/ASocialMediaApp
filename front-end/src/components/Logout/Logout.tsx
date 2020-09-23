import * as React from 'react';
import { Redirect } from 'react-router-dom';

const Logout: React.FC = () => {
  return <Redirect to="/Login" />;
};

export default Logout;
