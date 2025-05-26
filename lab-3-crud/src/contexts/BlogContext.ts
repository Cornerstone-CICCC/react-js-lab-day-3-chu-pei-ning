import { createContext } from "react";
import type { Blog, BlogAction   } from "../types/blog.types";

export type BlogContextType = {
  blog: Blog[];
  dispatch: React.Dispatch<BlogAction>;
};

export const BlogContext = createContext<BlogContextType>({
  blog: [],
  dispatch: () => {}
});