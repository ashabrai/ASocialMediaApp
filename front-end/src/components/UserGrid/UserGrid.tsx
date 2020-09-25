import React, { FC } from 'react';
import './UserGrid.scss';

interface GridProps {
  userPosts: Array<{
    photo: string;
    title: string;
  }>;
}

const Grid: FC<GridProps> = ({ userPosts }) => {
  return (
    <div className="user__gallery">
      {userPosts.map((post, index) => (
        <img className="user__postImage" key={index} src={post.photo} alt={post.title} />
      ))}
    </div>
  );
};

export default Grid;
