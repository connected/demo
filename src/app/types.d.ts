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

export type Comment = {
  id: number;
  author: string;
  email: string;
  text: string;
};

export type JpComment = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

export type CommentFormData = {
  name: string;
  email: string;
  body: string;
};
