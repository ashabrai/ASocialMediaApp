import React, { FC } from 'react';
import './UserGrid.scss';

interface GridProps {
  userPosts: Array<{
    body: string;
    comments: Array<{
      comment: string;
      postedBy: { _id: string; username: string };
      _id: string;
    }>;
    datePosted: string;
    likes: Array<{
      username: string;
      _id: string;
      comment: string;
      postedBy: string;
    }>;
    photo: string;
    postedBy: string;
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
