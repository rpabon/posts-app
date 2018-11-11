/** App */
export interface AppState {
  readonly postsList: PostsListState;
  readonly postSingle: SinglePostState;
  readonly commentList: CommentsState;
}

export interface AppRoute {
  path: string;
  component: React.ComponentClass;
  exact?: boolean;
}

/** Single Post */
export interface SinglePostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface SinglePostState {
  readonly post: SinglePostType;
  readonly pending: boolean;
  readonly error: Error | null;
}

export interface SinglePostAction {
  type: string;
  payload?: SinglePostType;
}

/** Posts List */
export interface PostsListState {
  readonly posts: SinglePostType[];
  readonly pending: boolean;
  readonly error: Error | null;
}

export interface PostsListAction {
  type: string;
  payload?: SinglePostType[];
}

export interface PostsListProps {
  posts: SinglePostType[];
  pending: boolean;
}

/** Comments */
export interface CommentType {
  id: number;
  name: string;
  body: string;
  email: string;
}

export interface CommentsState {
  readonly comments: CommentType[];
  readonly pending: boolean;
  readonly error: Error | null;
}

export interface CommentsAction {
  type: string;
  payload?: CommentType[];
}
