import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserPosts } from 'store/user/action';
import { selectUserPosts } from 'store/user/selectors';
import { selectUserInfo } from 'store/auth/selectors';
import UserGrid from 'components/UserGrid/UserGrid';
import './UserProfile.scss';

const UserProfile: FC = () => {
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const userPosts = useSelector(selectUserPosts);
  console.log(userPosts);
  useEffect(() => {
    dispatch(fetchUserPosts());
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
          <h3 className="user__name">
            {userInfo.name} || @{userInfo.username}
          </h3>
          {/* <h3>@{userInfo.username}</h3> */}
          <div className="user__dataCount">
            <p>40 Post</p>
            <p>40 Followers</p>
            <p>40 Following</p>
          </div>
        </div>
      </div>
      <UserGrid userPosts={userPosts} />
    </div>
  );
};

export default UserProfile;
