import type { Blog, BlogAction } from "../types/blog.types";

export const blogReducer = (state: Blog[], action: BlogAction): Blog[] => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload];
    case "UPDATE_POST":
      return state.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};
