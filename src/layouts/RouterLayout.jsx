import { NavLink, Outlet } from "react-router-dom";
import "../style/index.css";

function RootLayout() {
  return (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        style={{ margin: "5px" }}
        to="/"
      >
        Home
      </NavLink>
      |{" "}
      <NavLink style={{ margin: "5px" }} to="/blog">
        Blog
      </NavLink>{" "}
      |
      <NavLink style={{ margin: "5px" }} to="/about">
        About
      </NavLink>
      <br />
      <Outlet />
    </>
  );
}

export default RootLayout;
