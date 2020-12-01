import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserData } from 'store/user/selectors';
import { selectUserInfo } from 'store/auth/selectors';
import UserGrid from 'components/UserGrid/UserGrid';
import ModalContent from 'sharedComponents/Modal'
import ImageInputField from 'sharedComponents/ImageInputField';
import './UserProfile.scss';

interface UserProfileProps {
  userSignedIn: {
    name: string;
    username: string;
    email: string;
    _id: string;
    image: string;
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
      image: string;
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
        username?: string;
      };
      title: string;
      _id: string;
    }>;
  };
}

const UserProfile: FC<UserProfileProps> = ({ userProfileData, userSignedIn }) => {
  const [open, setOpen] = useState<boolean>();
  const [profileImage, setProfileImage] = useState<object>()
  const userInfoData: typeof userSignedIn = useSelector(selectUserInfo);
  const userProfile: typeof userProfileData = useSelector(selectUserData);
  // const dispatch = useDispatch()

  const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageUrl = event.target.files[0];
    setProfileImage(imageUrl);
  }

  const displayImageForm = () => {
    return (
      <ImageInputField
        labelValue='Select New Image'
        placeHolderValue={profileImage}
        onChange={(e) => handleProfileImageChange(e)}
      />
    )
  }

  const handleSubmit = () => {
    setOpen(false);
  }

  return (
    <div className="user">
      <div className="user__container">
        {userInfoData.image ? ( 
          <img
          src={userInfoData.image}
          alt={userInfoData.name}
          className="user__image"
        />) : null}
        <div className="user__info">
          <h3 className="user__name">
            {userInfoData.name} || @{userInfoData.username}
          </h3>
          <div className="user__dataCount">
            <p>{userProfile ? userProfile.posts.length : 0} Post</p>
            <p>{userProfile ? userProfile.user.followers.length : 0} Followers</p>
            <p>{userProfile ? userProfile.user.following.length : 0} Following</p>
          </div>
          <div className="user__updatePhoto">
            <ModalContent
            triggerContent='Update Profile Image'
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            headerValue='Profile Image'
            content={displayImageForm()}
            handleClick={() => handleSubmit()}
            handleCancel={() => setOpen(false)}
            />
          </div>
        </div>
      </div>
      <UserGrid userProfileData={userProfile} />
    </div>
  );
};

export default UserProfile;
