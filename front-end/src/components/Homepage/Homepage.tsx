import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllPosts } from 'store/user/action';
import { selectAllPosts, selectIsLoggedIn } from 'store/user/selectors';
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
      likes: Array<string>;
    }>;
  };
  auth: { isLoggedIn: boolean };
}

const Homepage: React.FC<HomePageProps> = () => {
  const dispatch = useDispatch();
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
              postId={post.id}
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

export default Homepage;
