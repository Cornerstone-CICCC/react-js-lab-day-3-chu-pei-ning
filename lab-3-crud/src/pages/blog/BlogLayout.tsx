import { Outlet } from "react-router-dom"

const BlogLayout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default BlogLayout