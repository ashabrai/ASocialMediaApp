/* eslint-disable no-restricted-imports */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts, likeUserPost, unlikeUserPost, commentPost } from 'store/user/action';
import { ApplicationState } from 'store';
import PostCard from '../PostCard/PostCard';
import { dateConverted } from '../../utils/helper';
import './Homepage.scss';

interface PropsFromState {
  allPosts: Array<Object>;
  isLoggedIn: boolean;
  hasCommented: boolean;
}

interface PropsFromDispatch {
  fetchAllPosts: () => any;
  likeUserPost: (id: String) => any;
  unlikeUserPost: (id: String) => any;
  commentPost: (id: String, comment: String) => any;
}

type AllProps = PropsFromState & PropsFromDispatch;

const Homepage: React.FC<AllProps> = (props: any) => {
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
            <PostCard
              image={post.photo}
              header={post.postedBy.username}
              postedBy={post.postedBy._id}
              postId={post._id}
              meta={dateConverted(post.datePosted)}
              description={post.body}
              comments={post.comments}
              likes={post.likes}
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
    commentPost: (id: String, comment: any) => dispatch(commentPost(id, comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
