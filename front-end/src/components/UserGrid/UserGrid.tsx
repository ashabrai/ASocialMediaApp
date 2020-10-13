import React, { FC } from 'react';
import './UserGrid.scss';

interface GridProps {
  userPosts: Array<{
    body: string;
    datePosted: number;
    comments: Array<{
      comment: string;
      postedBy: string;
      username: string;
      _id: string;
    }>;
    likes: Array<{
      username: string;
      _id: string;
      postedBy: string;
    }>;
    photo: string;
    postedBy?: {
      name: string;
      _id: string;
    };
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
