import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserByIdInfo, selectUserIdByProfile } from 'store/user/selectors';
import { followUser, unfollowUser, fetchUserById } from 'store/user/action';
import { selectedUserId } from 'store/auth/selectors';
import { isUserFound } from 'utils/helper';
import UserGrid from 'components/UserGrid/UserGrid';
import Button from 'sharedComponents/ButtonComponent';
import './UserProfileById.scss';

interface UserProfileByIdProps {
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
      isFollowingUser: boolean;
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
  const userByIdInfo: typeof userProfileData = useSelector(selectUserByIdInfo);
  const userSelectedId = useSelector(selectUserIdByProfile);
  const userId = useSelector(selectedUserId);
  const followersArray = userByIdInfo?.user.followers;

  useEffect(() => {
    dispatch(fetchUserById(userSelectedId));
  }, []);

  const followSelectedUser = () => {
    dispatch(followUser(userSelectedId));
  };

  const unfollowSelectUser = () => {
    dispatch(unfollowUser(userSelectedId));
  };

  const isFollowingUser = () => {
    const isFollowing = isUserFound(followersArray, userId);
    if (isFollowing) {
      return (
        <Button
          title="Unfollow"
          color="grey"
          onClick={() => {
            unfollowSelectUser();
          }}
        />
      );
    } else {
      return (
        <Button
          title="Follow"
          color="grey"
          onClick={() => {
            followSelectedUser();
          }}
        />
      );
    }
  };

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
            {userByIdInfo ? userByIdInfo.user.name : null} || @ {userByIdInfo ? userByIdInfo.user.username : null}
          </h3>
          <div className="user__dataCount">
            <p>{userByIdInfo ? userByIdInfo.posts.length : null} Post</p>
            <p>{userByIdInfo ? userByIdInfo.user.followers.length : 0} Followers</p>
            <p>{userByIdInfo ? userByIdInfo.user.following.length : 0} Following</p>
          </div>
          <div className="user__followButton">
            {userByIdInfo && userId !== userSelectedId ? isFollowingUser() : null}
          </div>
        </div>
      </div>
      {userByIdInfo ? <UserGrid userProfileData={userByIdInfo} /> : null}
    </div>
  );
};

export default UserProfileById;
