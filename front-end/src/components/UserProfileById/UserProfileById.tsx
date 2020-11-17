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
      image: string;
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
        name: string;
      };
      title: string;
      _id: string;
    }>;
  };
  userSelectedValue: string;
  userIdValue: string;
}

const UserProfileById: FC<UserProfileByIdProps> = ({ userProfileData, userSelectedValue, userIdValue }) => {
  const dispatch = useDispatch();
  const userByIdInfo: typeof userProfileData = useSelector(selectUserByIdInfo);
  const userSelectedId: typeof userSelectedValue = useSelector(selectUserIdByProfile);

  console.log(userByIdInfo, ' : userByIdInfo')
  const userId: typeof userIdValue = useSelector(selectedUserId);
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
    const userIsFollowing: boolean = checkIfUserIsFollowing();

    if (userIsFollowing) {
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

  const checkIfUserIsFollowing = () => {
    const isFollowing: boolean = isUserFound(followersArray, userId);
    return isFollowing;
  };

  return (
    <div className="user">
      <div className="user__container">
        {userByIdInfo ? (
          <img
          src={userByIdInfo.user.image}
          alt=""
          className="user__image"
          />
        ) : null}
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
      {(userByIdInfo && checkIfUserIsFollowing()) || (userByIdInfo && userId === userSelectedId) ? (
        <UserGrid userProfileData={userByIdInfo} />
      ) : (
        <p>
          Currently this users profile and posts are private, if you would like to view their profile please give them a
          follow
        </p>
      )}
    </div>
  );
};

export default UserProfileById;
