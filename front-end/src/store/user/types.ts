export default interface AllPosts {
  _id: string;
  photo: string;
  postedBy: { username: string; _id: string };
  datePosted: number;
  body: string;
  comments: string;
  likes: Array<string>;
}

type AllPostsState = {
  allPosts: AllPosts[];
};
