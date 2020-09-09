/* eslint-disable no-restricted-imports */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts, likeUserPost, unlikeUserPost } from 'store/user/action';
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
  likeUserPost: (id: String) => any;
  unlikeUserPost: (id: String) => any;
}

type AllProps = PropsFromState & PropsFromDispatch;

const Homepage: React.FunctionComponent<AllProps> = (props: any) => {
  console.log(props);
  const { fetchAllPosts, allPosts, isLoggedIn, likeUserPost, unlikeUserPost } = props;

  useEffect(() => {
    if (isLoggedIn) {
      fetchAllPosts();
    }
  }, [fetchAllPosts, isLoggedIn]);

  const likePost = (id: String) => {
    likeUserPost(id);
  };

  const unlikePost = (id: String) => {
    unlikeUserPost(id);
  };

  return (
    <div className="home">
      <div className="home__allCards">
        {allPosts.map((post, index) => (
          // console.log(post)(
          <div key={index}>
            <DisplayCard
              image={post.photo}
              header={post.postedBy.username}
              postedBy={post.postedBy._id}
              postId={post._id}
              meta={dateConverted(post.datePosted)}
              description={post.body}
              extraContent="true"
              buttonContent="Comment"
              likeUsersPost={(id: String) => likePost(id)}
              unlikeUsersPost={(id: String) => unlikePost(id)}
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
    likeUserPost: (id: String) => dispatch(likeUserPost(id)),
    unlikeUserPost: (id: String) => dispatch(unlikeUserPost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
