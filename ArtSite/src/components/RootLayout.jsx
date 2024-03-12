import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import axios from "axios"

function RootLayout() {
const userId = useSelector((state) => state.userId)
const adminId = useSelector((state) => state.adminId)

const dispatch = useDispatch()
const navigate = useNavigate()

// function to call server to know if the browser still contains 
// the userId/adminId in the req.session cookie
const sessionCheck = async () => {
  axios.get(`/api/session-check`)
  .then(res => {
    // if a user/admin is logged in, need to dispatch 
    // their ID to the redux store
    if (res.data.userId) {
      dispatch({
        type: "USER_AUTH",
        payload: res.data.userId
      })
    } else if (res.data.adminId) {
      dispatch({
        type: "ADMIN_AUTH",
        payload: res.data.adminId
      })
    }
  })
}

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

  // useEffect(callback, [dependencyArray])
  // if dependencyArray is empty, the callback only runs when this
  // componenent is 'initially rendered' and not on re-renders
  // if you include something in the dependencyArray, the callback
  // will run every time that something is modified
  useEffect(() => {
    sessionCheck()
  }, [])

  return (
    <>
    <div className="root-layout">
      <header>
        <nav>
          <h1 className="notable-regular">CAT MONTOYA</h1>
          <NavLink to="/">home</NavLink>
          <NavLink to="/blog">blog</NavLink>
          <NavLink to="/podcast">podcast</NavLink>
          <NavLink to="/about">about</NavLink>
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
            <button onClick={handleLogout}>Log Out
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
