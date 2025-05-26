import { useReducer, type ReactNode } from "react";
import { BlogContext } from "./BlogContext";
import { blogReducer } from "../reduces/blogReducer";
import type { Blog } from "../types/blog.types";

const initialState: Blog[] = [];

export const BlogContextProvider = ({ children }: { children: ReactNode }) => {
  const [blog, dispatch] = useReducer(blogReducer, initialState);

  return (
    <BlogContext.Provider value={{ blog, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};
