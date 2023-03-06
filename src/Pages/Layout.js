import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
      <nav>
        <ul className="d-flex justify-content-center">
          <li className=" me-5">
            <Link to="/">Home</Link>
          </li>
          <li className=" me-5">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className=" me-5">
            <Link to="/dashboard">dashboard</Link>
          </li>
          <li className=" me-5">
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;