import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts } from 'store/user/action';
import PostCard from 'components/PostCard/PostCard';
import { dateConverted } from 'utils/helper';
import './Homepage.scss';
import { selectAllPosts, selectIsLoggedIn } from 'store/user/selectors';

interface HomePageProps {
  user: {
    allPosts: Array<{
      _id: string;
      photo: string;
      postedBy: { username: string; _id: string };
      datePosted: string;
      body: string;
      comments: string;
      likes: Array<string>;
    }>;
  };
  auth: { isLoggedIn: boolean };
}

const Homepage: React.FC<HomePageProps> = (...props) => {
  const dispatch = useDispatch();
  const allPosts = useSelector(selectAllPosts);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log(props);

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

export default Homepage;
