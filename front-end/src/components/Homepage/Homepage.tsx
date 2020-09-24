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
      postedBy: { username: string; _id: string };
      datePosted: string;
      body: string;
      comments: string;
      likes: Array<string>;
    }>;
  };
  auth: { isLoggedIn: boolean };
}

const Homepage: React.FC<HomePageProps> = (props) => {
  console.log(props);
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
              postedBy={post.postedBy._id}
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
