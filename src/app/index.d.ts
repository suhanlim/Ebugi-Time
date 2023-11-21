export interface User {
  userId?: number;
  id?: string;
  password?: string;
  name?: string;
  grade?: string;
  introduce?: string;
  email?: string;
  userImage?: string;
  userPosts?: UserPost[];
}

export interface UserPost {
  likeCount: number;
  scrapCount: number;
  comments: Comment[];
  title: string;
  description: string;
  image: string;
  date: string;
}

export interface Comment {
  userId: number;
  name: string;
  userImage: string;
  contents: string;
  date: string;
}
