import React, { useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllPosts, fetchUserById } from 'store/user/action';
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
      postedBy: string;
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
  const userId = useSelector(selectedUserId);
  const allPostsValue: typeof allPosts = useSelector(selectAllPosts);
  const isLoggedInValue: typeof isLoggedIn = useSelector(selectIsLoggedIn);

  const viewProfile = () => {
    dispatch(fetchUserById(userId));
  };

  const headerValue = (post) => {
    const linkTo = `/Profile/${userId}`;

    return (
      <Link to={linkTo} key="userByIdProfile">
        <Header as="h3" onClick={() => viewProfile()}>
          {post.postedBy.username}
        </Header>
      </Link>
    );
  };

  useEffect(() => {
    if (isLoggedInValue) {
      dispatch(fetchAllPosts());
    }
  }, [dispatch, isLoggedInValue]);

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
              userHasLikedPost={post.likes.find((user) => user.postedBy === userId)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
