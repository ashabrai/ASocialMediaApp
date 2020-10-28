import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserByIdInfo, selectUserId } from 'store/user/selectors';
import { followUser } from 'store/auth/action';
import UserGrid from 'components/UserGrid/UserGrid';
import Button from 'sharedComponents/ButtonComponent';
import './UserProfileById.scss';
import { fetchUserById } from 'store/user/action';

interface UserProfileByIdProps {
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
        name: string;
      };
      title: string;
      _id: string;
    }>;
  };
}

const UserProfileById: FC<UserProfileByIdProps> = ({ userProfileData }) => {
  const dispatch = useDispatch();
  const userByIdInfo = useSelector(selectUserByIdInfo);
  const userSelectedId = useSelector(selectUserId);
  const userData: typeof userProfileData = userByIdInfo;

  const followSelectedUser = () => {
    dispatch(followUser(userSelectedId));
  };

  useEffect(() => {
    dispatch(fetchUserById(userSelectedId));
  }, []);

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
            {userData ? userData.user.name : null} || @ {userData ? userData.user.username : null}
          </h3>
          <div className="user__dataCount">
            <p>{userData ? userData.posts.length : null} Post</p>
            <p>{userData ? userData.user.followers.length : 0} Followers</p>
            <p>{userData ? userData.user.following.length : 0} Following</p>
          </div>
          <div className="user__followButton">
            <Button
              title="Follow"
              color="grey"
              onClick={() => {
                followSelectedUser();
              }}
            />
          </div>
        </div>
      </div>
      {userData ? <UserGrid userProfileData={userData} /> : null}
    </div>
  );
};

export default UserProfileById;
