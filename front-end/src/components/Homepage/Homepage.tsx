/* eslint-disable no-restricted-imports */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from 'store/user/action';
import { ApplicationState } from 'store';
import DisplayCard from '../../sharedComponents/DisplayCard';
import { dateConverted } from '../../utils/helper';
import './Homepage.scss';

interface PropsFromState {
  allPosts: Array<String>;
  isLoggedIn: boolean;
}

interface PropsFromDispatch {
  fetchAllPosts: () => any;
}

type AllProps = PropsFromState & PropsFromDispatch;

const Homepage: React.FunctionComponent<AllProps> = (props: any) => {
  const { fetchAllPosts, allPosts, isLoggedIn } = props;

  useEffect(() => {
    if (isLoggedIn) {
      fetchAllPosts();
    }
  }, [fetchAllPosts, isLoggedIn]);

  return (
    <div className="home">
      <div className="home__allCards">
        {allPosts.map((post, index) => (
          <div key={index}>
            <DisplayCard
              image={post.photo}
              header={post.postedBy.username}
              meta={dateConverted(post.datePosted)}
              description={post.body}
              extraContent="true"
              buttonContent="Comment"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ user, auth }: ApplicationState) => ({
  allPosts: user.allPosts,
  isLoggedIn: auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
