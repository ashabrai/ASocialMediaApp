import * as React from 'react';
import { Redirect } from 'react-router-dom';
interface IAppProps {}

const Logout: React.FunctionComponent<IAppProps> = () => {
  return <Redirect to="/Login" />;
};

export default Logout;
