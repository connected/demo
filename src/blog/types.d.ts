import { Comment } from '../comments/types';

export type BlogPost = {
  id: number;
  author: string;
  title: string;
  previewText: string;
  fullText: string;
};

export type JpBlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type BlogPostWithComments = {
  post: BlogPost;
  comments: Comment[];
};
