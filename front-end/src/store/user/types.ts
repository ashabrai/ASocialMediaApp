export interface Post {
  _id: string;
  photo: string;
  datePosted: string;
  body: string;
  comments: Array<{
    comment: string;
    postedBy: { _id: string; username: string };
    _id: string;
  }>;
  hasLikedPost: boolean;
  likes: Array<{
    _id: string;
    postedBy: string;
    username: string;
  }>;
}

export interface UserPost {
  body: string;
  comments: Array<{
    comment: string;
    postedBy: { _id: string; username: string };
    _id: string;
  }>;
  datePosted: string;
  likes: Array<{
    postedBy: string;
    username: string;
    _id: string;
  }>;
  photo: string;
  postedBy: string;
  title: string;
  _id: string;
}

export interface UserPostLikes {
  postedBy: string;
  username: string;
  _id: string;
}

export interface PostComments {
  comment: string;
  postedBy: string;
  _id: string;
}

export interface UserState {
  readonly errors?: string;
  readonly isCreatingNewPost?: boolean;
  readonly createdNewPost?: boolean;
  readonly allPosts: Array<Post>;
  readonly isFetchingAllPosts?: boolean;
  readonly userPosts: Array<UserPost>;
  readonly likes: Array<UserPostLikes>;
  readonly comments: Array<PostComments>;
  readonly hasCommented?: boolean;
  readonly isCommenting?: boolean;
  readonly postId: string;
  readonly hasLikedPost: boolean;
}
