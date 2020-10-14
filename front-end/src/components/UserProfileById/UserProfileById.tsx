import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectUserByIdInfo } from 'store/user/selectors';
import UserGrid from 'components/UserGrid/UserGrid';
import './UserProfileById.scss';

interface UserProfileByIdProps {
  user: {
    _id: string;
    email: string;
    name: string;
    username: string;
  };
  posts: Array<{
    body: string;
    comments: Array<{
      comment: string;
      postedBy: string;
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
      name: string;
    };
    title: string;
    _id: string;
  }>;
}

const UserProfileById: FC<UserProfileByIdProps> = ({ user, posts }) => {
  const userByIdInfo = useSelector(selectUserByIdInfo);
  const userData: typeof user = userByIdInfo.user;
  const userPosts: typeof posts = userByIdInfo.posts;

  return (
    <div className="user">
      <div className="user__container">
        {/* <img
          src="https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/103042843_3321913957828135_209146826409009172_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=HY1KBiGPd2YAX_qentG&_nc_ht=scontent.fsjc1-3.fna&oh=5ad1f2e9baa9cff174d549c667e65bc0&oe=5F68363D"
          alt="brai"
          className="user__image"
        /> */}
        <div className="user__info">
          <h3 className="user__username">
            {userData ? userData.name : null} || @ {userData ? userData.username : null}
          </h3>
          <div className="user__dataCount">
            <p>40 Post</p>
            <p>40 Followers</p>
            <p>40 Following</p>
          </div>
        </div>
      </div>
      {userPosts ? <UserGrid userPosts={userPosts} /> : null}
    </div>
  );
};

export default UserProfileById;
