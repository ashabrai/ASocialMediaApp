import React, { FC } from 'react';
import './UserGrid.scss';

interface GridProps {
  userPosts: Array<{
    body: string;
    comments: Array<{
      _id: string;
      comment: string;
      postedBy: string;
    }>;
    likes: Array<{
      _id: string;
      postedBy: string;
      username: string;
    }>;
    photo: string;
    title: string;
    _id: string;
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
