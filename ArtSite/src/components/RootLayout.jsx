import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

function RootLayout() {
const userId = useSelector((state) => state.userId)
const adminId = useSelector((state) => state.adminId)

const dispatch = useDispatch()
const navigate = useNavigate()

const handleLogout = async () => {
  const res = await axios.get("/api/logout")

  if (res.data.success) {
      dispatch({
        type: "LOGOUT"
      })
      navigate("/")
  }
}

const buttonClick = async () => {
  if (userId) {
    // await axios.post("/cart")
    navigate("/cart")
  } else 
    navigate("/signup")
  }

  return (
    <>
    <div className="root-layout">
      <header>
        <nav>
          <h1>CAT MONTOYA</h1>
          <NavLink to="/">home</NavLink>
          <NavLink to="/blog">blog</NavLink>
          <NavLink to="/podcast">podcast</NavLink>
          {!userId && !adminId &&
          <button className="nav-btn">
              <NavLink to={"/login"}>Log In</NavLink>
            </button>
            }
            {userId && 
            <>
              <button onClick={handleLogout} className="nav-btn">Log Out
                {/* <NavLink to={"/logout"}>Log Out</NavLink> */}
              </button>
              <button id="imageButton" onClick={buttonClick}> 
                  <img className="btn-img" src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="Button Image" /> 
              </button> 
              </>
            }
            {adminId && 
            <button onClick={handleLogout} className="nav-btn">Log Out
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
