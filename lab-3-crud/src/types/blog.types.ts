export type Blog = {
  id: string,
  title: string,
  content: string,
  published: boolean
}

export type BlogAction =
  | { type: "ADD_POST"; payload: Blog }
  | { type: "UPDATE_POST"; payload: Blog }
  | { type: "DELETE_POST"; payload: string };