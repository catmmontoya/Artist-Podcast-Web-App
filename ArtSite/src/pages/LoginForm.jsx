import { useState } from "react";
import axios from "axios"
import { useEffect } from "react";

export default function LoginForm() {
    const [passwordValue, setPasswordValue] = useState('');
    const [usernameValue, setUsernameValue] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault()

        const bodyObj = { //creating the req.body 
            username: usernameValue.toLowerCase(),
            password: passwordValue
        }
            
        await axios.post("login", bodyObj) 
        // axios assembles a gigantic 'request' object for you
        // if the method is .get() then axios will include a 'query' attribute to the reqest object
        // if method is .post()/.put()/.delete()... then axios will include a 'body' object
        // the body object ^ is the 2nd arguyment of post/put/delete
        // = axios.post("endpoint/as/a/string", req.body)
        .then((res) => { // 'res' is our variable that receives the response object from the server
            console.log(res.data) // res.data is exactly what you are sending back from the server
        })
    }

    const sessionCheck = async () => {
        const res = await axios.get("/api/sessionCheck")

        if (res.data.success) {
            setUserId(res.data.userId)
            setUsernameValue("")
            setPasswordValue("")
        }
    }

    const handleLogout = async () => {
        const res = await axios.get("logout")

        if (res.data.success) {
            setUserId(null)
        }
    }

useEffect(() => {}, [])

    return (
            
        <form
        onSubmit={handleLogin}>
            <label htmlFor="username">UserName:</label>
            <input name="username" id="username" type="text" required onChange={(e) => setUsernameValue(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input name="password" id="email" type="password" required onChange={(e) => setPasswordValue(e.target.value)} />

            <button type="submit">Log In</button>
        </form>
        
    )
}