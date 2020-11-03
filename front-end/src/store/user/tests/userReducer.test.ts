import UserReducer from 'store/user/reducer';

import { UserActionConstants } from 'store/user/userActionConstants';

const initialStateMock = {
  errors: undefined,
  isCreatingNewPost: false,
  createdNewPost: false,
  isFetchingAllPosts: false,
  isCommenting: false,
  hasCommented: false,
  allPosts: [],
  userData: null,
  likes: [],
  hasLikedPost: false,
  comments: [],
  userDataById: null,
  postId: null,
  userIdSelected: '',
  followers: [],
  following: [],
  isFollowingUser: false,
  isUnfollowingUser: false,
  hasUnfollowedUser: false,
};

describe('UserReducer', () => {
  it('Should have an initial state', () => {
    const actionMock = {
      type: null,
    };
    expect(UserReducer(undefined, actionMock)).toEqual(initialStateMock);
  });

  it('The CREATE_POST action should set isCreatingNewPost to true', () => {
    const actionMock = {
      type: UserActionConstants.CREATE_POST,
      payload: { title: 'test', body: 'test body', image: 'TEST-IMAGE-URL-STRING' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      isCreatingNewPost: true,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The CREATE_POST_SUCCEEDED action should set isCreatingNewPost to false and createdNewPost to true', () => {
    const actionMock = {
      type: UserActionConstants.CREATE_POST_SUCCEEDED,
      payload: {
        _id: '12121221',
        photo: 'TEST-IMAGE-URL-STRING',
        datePosted: '131313432',
        body: 'test body',
        comments: [],
        hasLikedPost: false,
        likes: [],
      },
    };

    const updatedStateMock = {
      ...initialStateMock,
      isCreatingNewPost: false,
      createdNewPost: true,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The CREATE_POST_FAILED action should set isCreatingNewPost to false and createdNewPost to false and set the errors payload to the errors object', () => {
    const actionMock = {
      type: UserActionConstants.CREATE_POST_FAILED,
      payload: { error: 'Something went wrong when trying to create post' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      isCreatingNewPost: false,
      createdNewPost: false,
      errors: actionMock.payload.error,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });

  it('The FETCH_ALL_POSTS action should set isFetchingAllPosts to true and createdNewPost to false', () => {
    const actionMock = {
      type: UserActionConstants.FETCH_ALL_POSTS,
    };

    const updatedStateMock = {
      ...initialStateMock,
      isFetchingAllPosts: true,
      createdNewPost: false,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The FETCH_ALL_POSTS_SUCCEEDED action should set isFetchingAllPosts to false and set the payload to the allPosts array', () => {
    const actionMock = {
      type: UserActionConstants.FETCH_ALL_POSTS_SUCCEEDED,
      payload: [
        {
          _id: '1312312323123',
          photo: 'image string test',
          datePosted: '231323',
          body: 'test body',
          comments: [],
          hasLikedPost: false,
          likes: [],
        },
      ],
    };

    const updatedStateMock = {
      ...initialStateMock,
      isFetchingAllPosts: false,
      allPosts: actionMock.payload,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The FETCH_ALL_POSTS_FAILED action should set isFetchingAllPosts to true and createdNewPost to false', () => {
    const actionMock = {
      type: UserActionConstants.FETCH_ALL_POSTS_FAILED,
      payload: { error: 'Something went wrong when trying to fetch posts' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      isFetchingAllPosts: false,
      createdNewPost: false,
      allPosts: [],
      errors: actionMock.payload.error,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });

  it('The LIKE_USER_POST action should set postId with the payload', () => {
    const actionMock = {
      type: UserActionConstants.LIKE_USER_POST,
      payload: { postId: '123123' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      postId: actionMock.payload.postId,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The LIKE_USER_POST_SUCCEEDED action should set hasLikedPost to true, and set the likes payload to the correct users post object', () => {
    const initialStateMockTest = {
      ...initialStateMock,
      postId: '231231',
    };

    const actionMock = {
      type: UserActionConstants.LIKE_USER_POST_SUCCEEDED,
      payload: {
        _id: '1211323',
        photo: 'image_string',
        datePosted: 121312412343,
        body: 'test',
        comments: [],
        likes: [{ _id: '1232313', postedBy: 'Test', username: 'test' }],
      },
    };

    const updatedStateMock = {
      ...initialStateMockTest,
      hasLikedPost: true,
      allPosts: initialStateMock.allPosts.map((item) => {
        if (item._id === initialStateMock.postId) {
          return {
            ...item,
            likes: actionMock.payload.likes,
          };
        }
        return item;
      }),
    };
    expect(UserReducer(initialStateMockTest, actionMock)).toEqual(updatedStateMock);
  });
  it('The LIKE_USER_POST_FAILED action should set the action payload to the errors object', () => {
    const actionMock = {
      type: UserActionConstants.LIKE_USER_POST_FAILED,
      payload: { error: 'Something went wrong when trying to like post' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      errors: actionMock.payload.error,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });

  it('The UNLIKE_USER_POST action should set postId with the payload', () => {
    const actionMock = {
      type: UserActionConstants.LIKE_USER_POST,
      payload: { postId: '123123' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      postId: actionMock.payload.postId,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The UNLIKE_USER_POST_SUCCEEDED action should set hasLikedPost to false, and set the likes payload to the correct users post object', () => {
    const initialStateMockTest = {
      ...initialStateMock,
      postId: '231231',
    };

    const actionMock = {
      type: UserActionConstants.UNLIKE_USER_POST_SUCCEEDED,
      payload: {
        _id: '1211323',
        photo: 'image_string',
        datePosted: 121312412343,
        body: 'test',
        comments: [],
        likes: [],
      },
    };

    const updatedStateMock = {
      ...initialStateMockTest,
      hasLikedPost: false,
      allPosts: initialStateMock.allPosts.map((item) => {
        if (item._id === initialStateMock.postId) {
          return {
            ...item,
            likes: actionMock.payload.likes,
          };
        }
        return item;
      }),
    };
    expect(UserReducer(initialStateMockTest, actionMock)).toEqual(updatedStateMock);
  });
  it('The UNLIKE_USER_POST_FAILED action should set the action payload to the errors object', () => {
    const actionMock = {
      type: UserActionConstants.UNLIKE_USER_POST_FAILED,
      payload: { error: 'Something went wrong when trying to unlike post' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      errors: actionMock.payload.error,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });

  it('The COMMENT_POST action should set postId with the payload and set isCommenting to true and hasCommented to false', () => {
    const actionMock = {
      type: UserActionConstants.COMMENT_POST,
      payload: { postId: '123123' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      isCommenting: true,
      hasCommented: false,
      postId: actionMock.payload.postId,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The COMMENT_POST_SUCCEEDED action should set isCommenting to false and hasCommented to true and set the comment payload to the correct post', () => {
    const initialStateMockTest = {
      ...initialStateMock,
      postId: '231231',
    };

    const actionMock = {
      type: UserActionConstants.COMMENT_POST_SUCCEEDED,
      payload: {
        _id: '231231',
        photo: 'image_string',
        datePosted: 121312412343,
        body: 'test',
        comments: [{ _id: '2313123', comment: 'test', postedBy: { _id: '12313', username: 'test' } }],
        likes: [],
      },
    };

    const updatedStateMock = {
      ...initialStateMockTest,
      isCommenting: false,
      hasCommented: true,
      allPosts: initialStateMock.allPosts.map((item) => {
        if (item._id === initialStateMock.postId) {
          return {
            ...item,
            comments: actionMock.payload.comments,
          };
        }
        return item;
      }),
    };
    expect(UserReducer(initialStateMockTest, actionMock)).toEqual(updatedStateMock);
  });
  it('The COMMENT_POST_FAILED action should set the action payload to the errors object, it should also set hasCommented and isCommenting to false and postId to null', () => {
    const actionMock = {
      type: UserActionConstants.COMMENT_POST_FAILED,
      payload: { error: 'Something went wrong when trying to unlike post' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      hasCommented: false,
      isCommenting: false,
      postId: null,
      errors: actionMock.payload.error,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });

  it('The DELETE_USER_POST action should set postId with the payload', () => {
    const actionMock = {
      type: UserActionConstants.DELETE_USER_POST,
      payload: '123123',
    };

    const updatedStateMock = {
      ...initialStateMock,
      postId: actionMock.payload,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The DELETE_USER_POST_SUCCEEDED action should set postId with the payload', () => {
    const initialStateMockTest = {
      postId: '123123142',
      allPosts: [
        {
          datePosted: 1231313,
          _id: '123123142',
          title: 'test',
          body: 'test',
          photo: 'photo-string',
          postedBy: { _id: '23423423', likes: [], comments: [] },
        },
      ],
    };
    const actionMock = {
      type: UserActionConstants.DELETE_USER_POST_SUCCEEDED,
      payload: {
        message: 'Successfully deleted post',
        postedDeleted: {
          datePosted: 1231313,
          _id: '123123142',
          title: 'test',
          body: 'test',
          photo: 'photo-string',
          postedBy: { _id: '23423423', likes: [], comments: [] },
        },
      },
    };

    const updatedStateMock = {
      ...initialStateMockTest,
      allPosts: initialStateMockTest.allPosts.filter((item) => {
        return item._id !== initialStateMockTest.postId;
      }),
    };
    expect(UserReducer(initialStateMockTest, actionMock)).toEqual(updatedStateMock);
  });
  it('The DELETE_USER_POST_FAILED action should set the errors object with the payload', () => {
    const actionMock = {
      type: UserActionConstants.DELETE_USER_POST_FAILED,
      payload: { errors: 'Something went wrong when trying to delete' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      errors: actionMock.payload.errors,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });

  it('The FETCH_USER_BY_ID_SUCCEEDED action should set postId with the payload', () => {
    const actionMock = {
      type: UserActionConstants.FETCH_USER_BY_ID_SUCCEEDED,
      payload: {
        user: { _id: '123123', email: 'test@mail.com', name: 'test', username: 'test' },
        posts: [
          {
            datePosted: 2313123,
            _id: '1231413',
            title: 'test title',
            body: 'test body',
            photo: 'test photo',
            postedBy: { _id: '1231312', name: 'test name' },
            likes: [],
            comments: [],
          },
        ],
      },
    };

    const updatedStateMock = {
      ...initialStateMock,
      userDataById: actionMock.payload,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });
  it('The FETCH_USER_BY_ID_FAILED action should set the errors object with the payload and userById set to an empty array', () => {
    const actionMock = {
      type: UserActionConstants.FETCH_USER_BY_ID_FAILED,
      payload: { errors: 'Something went wrong when trying to delete' },
    };

    const updatedStateMock = {
      ...initialStateMock,
      errors: actionMock.payload.errors,
      userDataById: [],
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });

  it('The SET_USER_ID action should set userIdSelected with the payload', () => {
    const actionMock = {
      type: UserActionConstants.SET_USER_ID,
      payload:  '2341243242q2' ,
    };

    const updatedStateMock = {
      ...initialStateMock,
      userIdSelected: actionMock.payload,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });

  it('The FOLLOW_USER action should set isFollowingUser to true', () => {
    const actionMock = {
      type: UserActionConstants.FOLLOW_USER,
      payload: true,
    };

    const updatedStateMock = {
      ...initialStateMock,
      isFollowingUser: actionMock.payload,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });

  it('The FOLLOW_USER_SUCCEEDED action should set isUnfollowingUser to false and hasUnfollowedUser to true.', () => {
    const initialStateMockTest = {
      ...initialStateMock,
      userDataById: {
        posts: [],
        user: {
          _id: '11111',
          email: 'test33@mail.com',
          name: 'test33',
          username: 'test33',
          following: [],
          followers: [],
        }
      }
    }
    
    const actionMock = {
      type: UserActionConstants.FOLLOW_USER_SUCCEEDED,
      payload: { dataForFollowId: {followers: [{_id: '2123123', username: 'test'}], following: [], _id: '12121', email: 'test@mail.com', name: 'test', username: 'test'}, dataForCurrentUser: {followers: [], following: [{_id: '1111111'}], _id: '12121', email: 'test@mail.com', name: 'test', username: 'test'}}
    }

    const updatedStateMock = {
      ...initialStateMockTest,
      isUnfollowingUser: false,
      hasUnfollowedUser: false,
      followers: actionMock.payload.dataForCurrentUser.followers,
      following: actionMock.payload.dataForCurrentUser.following,
      userDataById: {
        posts: [],
        user: {
          ...initialStateMockTest.userDataById.user,
          followers: actionMock.payload.dataForFollowId.followers,
          following: actionMock.payload.dataForFollowId.following,
        }
      }
    }
    expect(UserReducer(initialStateMockTest, actionMock)).toEqual(updatedStateMock)
  })
  it('The FOLLOW_USER_FAILED action should set isFollowingUser to false and set the payload to the errors object', () => {
    const actionMock = {
      type: UserActionConstants.FOLLOW_USER_FAILED,
      payload: { error: 'something went wrong when trying to follow user'}
    }

    const updatedStateMock = {
      ...initialStateMock,
      isFollowingUser: false,
      errors: actionMock.payload.error
    }
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock)
  })

  it('The UNFOLLOW_USER action should set isUnfollowingUser to true', () => {
    const actionMock = {
      type: UserActionConstants.UNFOLLOW_USER,
      payload: '987876875867567'
    };

    const updatedStateMock = {
      ...initialStateMock,
      isUnfollowingUser: true,
    };
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock);
  });

  it('The UNFOLLOW_USER_SUCCEEDED action should set isUnfollowingUser to false and hasUnfollowedUser to true and remove the following user from the followers array.', () => {
    const initialStateMockTest = {
      ...initialStateMock,
      userDataById: {
        posts: [],
        user: {
          _id: '11111',
          email: 'test33@mail.com',
          name: 'test33',
          username: 'test33',
          following: [{_id: '32132321'}],
          followers: [],
        }
      }
    }
    
    const actionMock = {
      type: UserActionConstants.UNFOLLOW_USER_SUCCEEDED,
      payload: { dataForFollowId: {followers: [], following: [], _id: '12121', email: 'test@mail.com', name: 'test', username: 'test'}, dataForCurrentUser: {followers: [], following: [], _id: '12121', email: 'test@mail.com', name: 'test', username: 'test'}}
    }

    const updatedStateMock = {
      ...initialStateMockTest,
      isUnfollowingUser: false,
      hasUnfollowedUser: true,
      followers: actionMock.payload.dataForCurrentUser.followers,
      following: actionMock.payload.dataForCurrentUser.following,
      userDataById: {
        posts: [],
        user: {
          ...initialStateMockTest.userDataById.user,
          isFollowingUser: false,
          followers: actionMock.payload.dataForFollowId.followers,
          following: actionMock.payload.dataForFollowId.following,
        }
      }
    }
    expect(UserReducer(initialStateMockTest, actionMock)).toEqual(updatedStateMock)
  })
  it('The FOLLOW_USER_FAILED action should set isFollowingUser to false and set the payload to the errors object', () => {
    const actionMock = {
      type: UserActionConstants.UNFOLLOW_USER_FAILED,
      payload: { error: 'something went wrong when trying to follow user'}
    }

    const updatedStateMock = {
      ...initialStateMock,
      isFollowingUser: false,
      errors: actionMock.payload.error
    }
    expect(UserReducer(initialStateMock, actionMock)).toEqual(updatedStateMock)
  })
});
