export default interface AllPosts {
  _id: string;
  photo: string;
  postedBy: { username: string; _id: string };
  datePosted: number;
  body: string;
  comments: string;
  likes: Array<string>;
}

export interface UserState {
  readonly errors?: string;
  readonly isCreatingNewPost?: boolean;
  readonly createdNewPost?: boolean;
  readonly allPosts: Array<any>;
  readonly isFetchingAllPosts?: boolean;
  readonly userPosts: Array<string>;
  readonly likes: Array<string>;
  readonly comments: Array<string>;
  readonly hasCommented?: boolean;
  readonly isCommenting?: boolean;
  readonly currentPost: Object;
  readonly postId: any;
}
