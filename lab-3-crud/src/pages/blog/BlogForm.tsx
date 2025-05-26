import { useParams, useNavigate } from "react-router-dom";
import { useBlog } from "../../contexts/useBlog";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

const BlogForm = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const { blog, dispatch } = useBlog();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);

  useEffect(() => {
    if (isEdit) {
      const post = blog.find((p) => p.id === id);
      if (post) {
        setTitle(post.title);
        setContent(post.content);
        setPublished(post.published)
      }
    }
  }, [id, isEdit, blog]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      id: isEdit ? id! : uuidv4(),
      title,
      content,
      published,
    };



    dispatch({
      type: isEdit ? "UPDATE_POST" : "ADD_POST",
      payload,
    });

    navigate("/blog");
    isEdit ? toast.success("edit blog success") : toast.success("Add new blog");

  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6 space-y-4">
        
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="published"
            checked={!!published}
            onChange={(e) => setPublished(e.target.checked)}
            className="w-4 h-4 text-blue-600"
          />
          <label htmlFor="published" className="text-sm text-gray-700">
            Published
          </label>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {isEdit ? "Save Changes" : "Add Blog"}
          </button>
          <button
            type="button"
            onClick={() => {
              setTitle("");
              setContent("");
              setPublished(false);
            }}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
