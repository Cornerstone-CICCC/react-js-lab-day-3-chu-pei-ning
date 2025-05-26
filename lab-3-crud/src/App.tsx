import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import BlogLayout from "./pages/blog/BlogLayout"
import { BlogContextProvider } from "./contexts/BlogContextProvider"
import BlogList from "./pages/blog/BlogList"
import BlogDetail from "./pages/blog/BlogDetail"
import BlogForm from "./pages/blog/BlogForm"

const App = () => {
  
  return (
    <BlogContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<BlogLayout />}>
              <Route index element={<BlogList />} />
              <Route path="new" element={<BlogForm />} /> 
              <Route path="edit/:id" element={<BlogForm />} />
              <Route path=":id" element={<BlogDetail />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BlogContextProvider>
  )
}

export default App