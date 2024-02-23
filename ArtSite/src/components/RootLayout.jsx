import { NavLink, Outlet } from "react-router-dom";

//add logic here for if user or admin is logged in

function RootLayout() {
  return (
    <>
    <div className="root-layout">
      <header>
        <nav>
          <h1>CAT MONTOYA</h1>
          <NavLink to="/">home</NavLink>
          <NavLink to="blog">blog</NavLink>
          <NavLink to="podcast">podcast</NavLink>
          <button className="nav-btn">
              <NavLink to={"/login"}>Log In</NavLink>
            </button>
            {userId && 
              <button className="nav-btn">
                <NavLink to={"/logout"}>Log Out</NavLink>
              </button>
            }
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
    </>
  );
}

export default RootLayout;
