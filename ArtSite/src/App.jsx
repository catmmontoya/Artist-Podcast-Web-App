// import { useState } from 'react'
import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Podcast from "./pages/Podcast"
import LoginForm from './pages/LoginForm'
import axios from "axios"

//Layouts
import RootLayout from './components/RootLayout'

//To, login user must enter email and password. Keep track with state values
//When form is submitted send those values to my server as a req.body
// const [username, setUsername] = useState('')
// const [password, setPassword] = useState('')


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="blog" element={<Blog />} />
    <Route path="podcast" element={<Podcast />} />
    <Route path="login" element={<LoginForm />} />

    {/* <input
    type='text'
    value={username} 
    placeholder='Username'
    onChange={(e) => setUsername(e.target.value)} />
    <input 
    type='password' 
    value={password}
    placeholder='Password'
    onChange={(e) => setPassword(e.target.value)} /> */}

  </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
      </>
  )
}

export default App
