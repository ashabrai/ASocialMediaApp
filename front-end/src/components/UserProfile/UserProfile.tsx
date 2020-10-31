import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'store/user/selectors';
import { selectUserInfo } from 'store/auth/selectors';
import UserGrid from 'components/UserGrid/UserGrid';
import './UserProfile.scss';

interface UserProfileProps {
  userSignedIn: {
    name: string;
    username: string;
    email: string;
    _id: string;
  };
  userProfileData: {
    user: {
      email: string;
      followers: Array<{
        _id: string;
        username: string;
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
        username: string;
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
        name?: string;
      };
      title: string;
      _id: string;
    }>;
  };
}

const UserProfile: FC<UserProfileProps> = ({ userProfileData, userSignedIn }) => {
  const userInfoData: typeof userSignedIn = useSelector(selectUserInfo);
  const userProfile: typeof userProfileData = useSelector(selectUserData);

  return (
    <div className="user">
      <div className="user__container">
        {/* <img
          src="https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/103042843_3321913957828135_209146826409009172_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=HY1KBiGPd2YAX_qentG&_nc_ht=scontent.fsjc1-3.fna&oh=5ad1f2e9baa9cff174d549c667e65bc0&oe=5F68363D"
          alt="brai"
          className="user__image"
        /> */}
        <div className="user__info">
          <h3 className="user__name">
            {userInfoData.name} || @{userInfoData.username}
          </h3>
          <div className="user__dataCount">
            <p>{userProfile ? userProfile.posts.length : 0} Post</p>
            <p>{userProfile ? userProfile.user.followers.length : 0} Followers</p>
            <p>{userProfile ? userProfile.user.following.length : 0} Following</p>
          </div>
        </div>
      </div>
      <UserGrid userProfileData={userProfile} />
    </div>
  );
};

export default UserProfile;
