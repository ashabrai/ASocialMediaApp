/* eslint-disable no-restricted-imports */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DisplayCard from '../../sharedComponents/DisplayCard';
import './Homepage.scss';
import { fetchAllPosts } from 'store/user/action';
import { ApplicationState } from 'store';

interface PropsFromState {
  allPosts: Array<String>;
}

interface PropsFromDispatch {
  fetchAllPosts: () => any;
}

type AllProps = PropsFromState & PropsFromDispatch;

const Homepage: React.FunctionComponent<AllProps> = (props: any) => {
  useEffect(() => {
    props.fetchAllPosts();
  }, [props.fetchAllPosts]);

  console.log(props, 'props in homepage');
  return (
    <div className="home">
      <div className="home__allCards">
        <div>
          <DisplayCard
            image="https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/68531485_2645980872088117_1923143302673072128_n.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=uOwEY-iGq7IAX9AzgfP&_nc_ht=scontent.fsjc1-3.fna&oh=5db93287192fff2336258b45380b3452&oe=5F6ADFBA"
            header="braiiii"
            meta="Aug 25,2020"
            description="Selfie moment"
            extraContent="true"
            buttonContent="Comment"
          />
        </div>
        <div>
          <DisplayCard
            image="https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/68531485_2645980872088117_1923143302673072128_n.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=uOwEY-iGq7IAX9AzgfP&_nc_ht=scontent.fsjc1-3.fna&oh=5db93287192fff2336258b45380b3452&oe=5F6ADFBA"
            header="braiiii"
            meta="Aug 25,2020"
            description="Selfie moment"
            extraContent="true"
            buttonContent="Comment"
          />
        </div>
        <div>
          <DisplayCard
            image="https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/68531485_2645980872088117_1923143302673072128_n.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=uOwEY-iGq7IAX9AzgfP&_nc_ht=scontent.fsjc1-3.fna&oh=5db93287192fff2336258b45380b3452&oe=5F6ADFBA"
            header="braiiii"
            meta="Aug 25,2020"
            description="Selfie moment"
            extraContent="true"
            buttonContent="Comment"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }: ApplicationState) => ({
  allPosts: user.allPosts,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
