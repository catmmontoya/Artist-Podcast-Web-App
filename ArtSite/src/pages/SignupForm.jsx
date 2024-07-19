import { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { toast } from "react-toastify"

function SignupForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const notify = toast();

    const handleSignup = async (e) => {
        e.preventDefault();

        const SignupBody = {
            username,
            email,
            password
        }

        axios.post("/api/user/create", SignupBody)
        .then((res) => {
            // evaluate res.data to find if the server responded to an admin being logged in
            // server-side: if admin was already logged in, the user is simply created
            //              else, the user is created AND id saved to req.session, implying that they should now be 'logged in'
            dispatch({
                type: "USER_AUTH",
                payload: res.data.userId
            });
            navigate("/cart");
            notify("success", res.data.message)
        })
        .catch((error) => {
            notify("error", error.res.data.message)
        })
    }

  return (
    <>
    <form
         onSubmit={handleSignup}>
            <h2>Let&apos;s set up your account!</h2>
            <label htmlFor="username">Create username:</label>
            <input name="username" id="username" type="text" required onChange={(e) => setUsername(e.target.value)} />
            
            <label htmlFor="email">Email:</label>
            <input name="email" id="email" type="email" required onChange={(e) => setEmail(e.target.value)} />
            
            <label htmlFor="password">Create password:</label>
            <input name="password" id="password" type="password" required onChange={(e) => setPassword(e.target.value)} />
            
            {/* <label htmlFor="password">Confirm password:</label>
            <input name="password" id="password" type="password" required onChange={(e) => setPassword(e.target.value)} /> */}

            <button type="submit">Sign Up</button>
        </form>
        <Footer />
        </>
  )
}

export default SignupForm