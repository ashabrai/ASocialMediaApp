/* eslint-disable no-restricted-imports */
import * as React from 'react';
import DisplayCard from '../../sharedComponents/DisplayCard';
import './Homepage.scss';
interface IAppProps {}

const Homepage: React.FunctionComponent<IAppProps> = () => {
  return (
    <div className="home">
      <div className="home__allCards">
        <div>
          <DisplayCard
            image="https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/68531485_2645980872088117_1923143302673072128_n.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=uOwEY-iGq7IAX9AzgfP&_nc_ht=scontent.fsjc1-3.fna&oh=5db93287192fff2336258b45380b3452&oe=5F6ADFBA"
            userName="braiiii"
            datePublished="Aug 25,2020"
            postDescription="Selfie moment"
          />
        </div>
        <div>
          <DisplayCard
            image="https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/68531485_2645980872088117_1923143302673072128_n.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=uOwEY-iGq7IAX9AzgfP&_nc_ht=scontent.fsjc1-3.fna&oh=5db93287192fff2336258b45380b3452&oe=5F6ADFBA"
            userName="braiiii"
            datePublished="Aug 25,2020"
            postDescription="Selfie moment"
          />
        </div>
        <div>
          <DisplayCard
            image="https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/68531485_2645980872088117_1923143302673072128_n.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=uOwEY-iGq7IAX9AzgfP&_nc_ht=scontent.fsjc1-3.fna&oh=5db93287192fff2336258b45380b3452&oe=5F6ADFBA"
            userName="braiiii"
            datePublished="Aug 25,2020"
            postDescription="Selfie moment"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
