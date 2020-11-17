import React, { FC } from 'react';
import './UserGrid.scss';

interface GridProps {
  userProfileData: {
    user: {
      email: string;
      followers: Array<{
        _id: string;
      }>;
      following: Array<{
        _id: string;
      }>;
      name: string;
      username: string;
      _id: string;
    };
    posts: Array<{
      body: string;
      comments: Array<{
        comment: string;
        postedBy: {_id: string; username: string; image: string}
        _id: string;
      }>;
      datePosted: number;
      likes: Array<{
        _id: string;
        postedBy: string;
        username: string;
      }>;
      photo: string;
      postedBy: {
        _id: string;
        name?: string;
      };
      title: string;
      _id: string;
    }>;
  };
}

const Grid: FC<GridProps> = ({ userProfileData }) => {
  return (
    <div className="user__gallery">
      {userProfileData
        ? userProfileData.posts.map((post, index) => (
            <img className="user__postImage" key={index} src={post.photo} alt={post.title} />
          ))
        : null}
    </div>
  );
};

export default Grid;
