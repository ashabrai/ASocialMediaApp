import * as React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaApp from '../../assets/socialMediaApp.png';
import './Navbar.scss';


interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="nav">
      <div className="nav__header">
        <img
          className="nav__headerImage"
          src={SocialMediaApp}
          alt="social media app logo"
        />
        
    </div>
    </div>
  );
};

export default App;
