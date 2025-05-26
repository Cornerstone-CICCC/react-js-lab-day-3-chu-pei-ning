import { Link } from "react-router-dom"
import { memo } from "react"

type Props = {
  firstname: string
}

const Header = memo(({firstname}: Props) => {
  return (
    <div className="flex h-20 bg-purple-900 text-white items-center justify-between px-6">
      <h1 className="text-lg">{firstname}'s Blog</h1>
      <nav>
        <menu className="flex gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </menu>
      </nav>
    </div>
  )
})

export default Header