import { Toaster } from "react-hot-toast"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  const firstname = "Julia"

  return (
    <>
      <div><Toaster /></div>
      <div className="min-h-screen flex flex-col">
        <Header firstname={firstname}/>

        <main className="flex-1 p-6">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Layout