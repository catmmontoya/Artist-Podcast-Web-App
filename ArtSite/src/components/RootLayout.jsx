import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

//add logic here for if user or admin is logged in

function RootLayout() {
const userId = useSelector((state) => state.userId)
const dispatch = useDispatch()

const handleLogout = async () => {
  const res = await axios.get("/logout")

  if (res.data.success) {
      dispatch({
        type: "LOGOUT"
      })
  }
}

  return (
    <>
    <div className="root-layout">
      <header>
        <nav>
          <h1>CAT MONTOYA</h1>
          <NavLink to="/">home</NavLink>
          <NavLink to="blog">blog</NavLink>
          <NavLink to="podcast">podcast</NavLink>
          {!userId && 
          <button className="nav-btn">
              <NavLink to={"/login"}>Log In</NavLink>
            </button>
            }
            {userId && 
              <button onClick={handleLogout} className="nav-btn">Log Out
                {/* <NavLink to={"/logout"}>Log Out</NavLink> */}
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
