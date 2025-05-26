import { useParams, useNavigate } from "react-router-dom";
import { useBlog } from "../../contexts/useBlog";
import toast from "react-hot-toast";


const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blog, dispatch } = useBlog();

  const post = blog.find(item => item.id === id);

  if (!post) {
    return (
      <div>
        <h2>Post Not Found</h2>
        <button onClick={() => navigate("/blog")}>Back to List</button>
      </div>
    );
  }
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-md rounded px-8 py-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
      <p className="text-sm text-gray-600">
        Status: <span className={post.published ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
          {post.published ? "Yes" : "No"}
        </span>
      </p>

      <div className="flex gap-4 pt-4">
        <button
          onClick={() => navigate("/blog")}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Back to List
        </button>
        <button
          onClick={() => navigate(`/blog/edit/${post.id}`)}
          className=" bg-indigo-300 text-white rounded hover:bg-indigo-600 transition px-4 py-2"
        >
          Edit
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DELETE_POST", payload: post.id });
            toast.success("Post deleted");
            navigate("/blog");
          }}
          className="bg-red-300 text-white px-4 py-2 rounded hover:bg-red-500 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogDetail