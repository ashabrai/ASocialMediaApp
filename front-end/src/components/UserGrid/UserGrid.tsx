import React from 'react';
import './UserGrid.scss';

interface PropsFromParent {
  userPosts: Array<any>;
}

type AllProps = PropsFromParent;

const Grid: React.FC<AllProps> = (props) => {
  const { userPosts } = props;
  return (
    <div className="user__gallery">
      {userPosts.map((post, index) => (
        <img className="user__postImage" key={index} src={post.photo} alt={post.title} />
      ))}
    </div>
  );
};

export default Grid;
