import { useState } from "react";
import axios from "axios"
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Form } from "react-bootstrap"
import Footer from "../components/Footer"

export default function LoginForm() {
    const [passwordValue, setPasswordValue] = useState('');
    const [usernameValue, setUsernameValue] = useState('');
    const [checked, setChecked] = useState('') 

    // const userId = useSelector((state) => state.userId)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        const bodyObj = { //creating the req.body 
            username: usernameValue.toLowerCase(),
            password: passwordValue
        }
         
        if (checked) {
            axios.post("api/login/admin", bodyObj)
            .then((res) => {
                dispatch({
                    type: "ADMIN_AUTH",
                    payload: res.data.adminId
                });
                navigate("/")
            })
            // .catch((error) => {
            //     console.error("error", error.res.data.message)
            // })
        } else {
        await axios.post("/api/login", bodyObj) 
        // axios assembles a gigantic 'request' object for you
        // if the method is .get() then axios will include a 'query' attribute to the reqest object
        // if method is .post()/.put()/.delete()... then axios will include a 'body' object
        // the body object ^ is the 2nd arguyment of post/put/delete
        // = axios.post("endpoint/as/a/string", req.body)
        .then((res) => { // 'res' is our variable that receives the response object from the server
            console.log(res.data) // res.data is exactly what you are sending back from the server
            if (res.data.success) {
                dispatch({
                    type: "USER_AUTH",
                    payload: res.data.userId
                })
                navigate("/")
            } else {
                alert(res.data.message)
            }
        })
        // .catch((error) => {
        //     console.error("error", error.res.data.message)
        // })
    }}

    const handleCheck = () => setChecked(!checked);

useEffect(() => {}, [])

    return (
        <>
        <form
        onSubmit={handleLogin}>
            <div>

            <label htmlFor="username">Username:</label>
            <input style={{width: "200px"}} name="username" id="username" type="text" required onChange={(e) => setUsernameValue(e.target.value)} />

            <br/>

            <label htmlFor="password">Password:</label>
            <input style={{width: "200px", justifySelf: 'end'}} name="password" id="password" type="password" required onChange={(e) => setPasswordValue(e.target.value)} />
            
            <br/>

            <button style={{ justifySelf: "center"}} className="img-btn" type="submit">Log In</button>
            <Form.Group className="mt-3" controlId="formCheckbox">
              <Form.Check
                type="checkbox"
                label="Admin"
                checked={checked}
                onChange={handleCheck}
                />
            </Form.Group>
                </div>
        </form>
        <Footer />
        </>
    )
}

