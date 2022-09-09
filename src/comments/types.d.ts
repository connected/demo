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
}
