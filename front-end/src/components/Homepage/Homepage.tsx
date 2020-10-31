import React, { useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllPosts, setUserIdSelected } from 'store/user/action';
import { selectAllPosts } from 'store/user/selectors';
import { selectedUserId, selectIsLoggedIn } from 'store/auth/selectors';
import PostCard from 'components/PostCard/PostCard';
import { dateConverted } from 'utils/helper';
import './Homepage.scss';
import { Header } from 'semantic-ui-react';

interface HomePageProps {
  allPosts: Array<{
    _id: string;
    photo: string;
    datePosted: string;
    body: string;
    comments: Array<{
      comment: string;
      postedBy: { _id: string; username: string };
      _id: string;
    }>;
    hasLikedPost: boolean;
    likes: Array<{
      _id: string;
      postedBy: string;
      username: string;
    }>;
    postedBy: {
      _id: string;
      username: string;
    };
  }>;
  isLoggedIn: boolean;
}

const Homepage: FC<HomePageProps> = ({ allPosts, isLoggedIn }) => {
  const dispatch = useDispatch();
  const userIdSelected = useSelector(selectedUserId); // this is the current user whose signed in ID
  const allPostsValue: typeof allPosts = useSelector(selectAllPosts);
  const isLoggedInValue: typeof isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedInValue) {
      dispatch(fetchAllPosts());
    }
  }, [dispatch, isLoggedInValue]);

  const setUserId = (post) => {
    const userId = post.postedBy._id;
    dispatch(setUserIdSelected(userId));
  };

  const headerValue = (post) => {
    const linkTo = `/Profile/${post.postedBy._id}`;
    return (
      <Link to={linkTo} key="userByIdProfile" onClick={() => setUserId(post)}>
        <Header as="h3">{post.postedBy.username}</Header>
      </Link>
    );
  };

  return (
    <div className="home">
      <div className="home__allCards">
        {allPostsValue?.map((post, index) => (
          <div key={index}>
            <PostCard
              image={post.photo}
              header={headerValue(post)}
              postId={post._id}
              meta={dateConverted(post.datePosted)}
              description={post.body}
              comments={post.comments}
              postedBy={post.postedBy}
              likes={post.likes}
              userHasLikedPost={post.likes.find((user) => user.postedBy === userIdSelected)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
