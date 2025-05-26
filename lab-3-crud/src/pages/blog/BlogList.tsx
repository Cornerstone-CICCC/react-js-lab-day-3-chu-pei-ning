import { useNavigate } from "react-router-dom";
import { useBlog } from "../../contexts/useBlog";
import toast from "react-hot-toast";

const BlogList = () => {
  const navigate = useNavigate();
  const { blog, dispatch } = useBlog();

  const handleView = (id: string) => {
    navigate(`/blog/${id}`);
  };

  const handleEdit = (id: string) => {
    navigate(`/blog/edit/${id}`);
  };

  const handleDelete = (id: string) => {
    dispatch({ type: "DELETE_POST", payload: id });
    toast.success("DELETE POST");
  };

  return (
    <>
      <div className="flex flex-row justify-between mb-3">
        <h2 className="text-2xl">All Blogs</h2>
        <button 
          onClick={() => navigate("/blog/new")} 
          className="w-47 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition"
        >Create New Blog</button>
      </div>
      <hr className="border-t-2 border-purple-500" />
      <ul className="my-5 flex flex-col gap-3">
        {blog.map((post) => (
          <li
            key={post.id}
            className="flex gap-2 palce-items-center justify-between"
          >
            <div>{post.title}</div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <button 
                onClick={() => handleView(post.id)}
                className="max-w-18 px-2 py-2 bg-purple-300 text-white rounded-lg hover:bg-purple-600 transition"
              >View</button>
              <button 
                onClick={() => handleEdit(post.id)}
                className="max-w-18 px-2 py-2 bg-indigo-300 text-white rounded-lg hover:bg-indigo-600 transition"
              >Edit</button>
              <button 
                onClick={() => handleDelete(post.id)}
                className="max-w-18 px-2 py-2 bg-red-300 text-white rounded-lg hover:bg-red-500 transition"
              >Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogList;