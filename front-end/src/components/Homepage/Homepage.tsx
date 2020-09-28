import React, { useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllPosts } from 'store/user/action';
import { selectAllPosts } from 'store/user/selectors';
import { selectedUserId, selectIsLoggedIn } from 'store/auth/selectors';
import PostCard from 'components/PostCard/PostCard';
import { dateConverted } from 'utils/helper';
import './Homepage.scss';

interface HomePageProps {
  user: {
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
        postedBy: { _id: string };
      }>;
    }>;
  };
  auth: { isLoggedIn: boolean };
}

const Homepage: FC<HomePageProps> = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectedUserId);
  const allPosts = useSelector(selectAllPosts);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchAllPosts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className="home">
      <div className="home__allCards">
        {allPosts?.map((post, index) => (
          <div key={index}>
            <PostCard
              image={post.photo}
              header={post.postedBy.username}
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
