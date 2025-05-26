import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col place-items-center gap-20">
      <img className="py-20" src="https://www.iware.com.tw/upload/images/404_notfound_soft_main.png" alt="page not found" />
      <button className="max-w-42 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"><Link to="/">Back to home</Link></button>
    </div>
  )
}

export default NotFound