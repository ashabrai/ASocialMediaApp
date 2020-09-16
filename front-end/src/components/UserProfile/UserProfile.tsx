/* eslint-disable no-restricted-imports */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store/index';
import { fetchUserPosts } from 'store/user/action';
import { selectedUserId } from '../../store/auth/selectors';
import UserGrid from '../UserGrid/UserGrid';
import './UserProfile.scss';

interface PropsFromState {
  userPosts: Array<String>;
  userId: String;
  isLoggedIn: boolean;
}

interface PropsFromDispatch {
  fetchUserPosts: () => any;
}

type AllProps = PropsFromState & PropsFromDispatch;

const UserProfile: React.FC<AllProps> = (props) => {
  const { fetchUserPosts } = props;

  useEffect(() => {
    fetchUserPosts();
  }, []);

  return (
    <div className="user">
      <div className="user__container">
        <img
          src="https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/103042843_3321913957828135_209146826409009172_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=HY1KBiGPd2YAX_qentG&_nc_ht=scontent.fsjc1-3.fna&oh=5ad1f2e9baa9cff174d549c667e65bc0&oe=5F68363D"
          alt="brai"
          className="user__image"
        />
        <div className="user__info">
          <h4 className="user__name">Ashabrai Frauen</h4>
          <div className="user__dataCount">
            <p>40 Post</p>
            <p>40 Followers</p>
            <p>40 Following</p>
          </div>
        </div>
      </div>
      <UserGrid {...props} />
    </div>
  );
};

const mapStateToProps = ({ user, auth }: ApplicationState) => ({
  userPosts: user.userPosts,
  userId: selectedUserId(auth),
  isLoggedIn: auth.isLoggedIn,
});
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUserPosts: () => {
      dispatch(fetchUserPosts());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
