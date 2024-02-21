import { NavLink, Outlet } from "react-router-dom";

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
          <button type="button class="log-in>Log In</button>
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
