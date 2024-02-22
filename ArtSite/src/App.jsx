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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="blog" element={<Blog />} />
    <Route path="podcast" element={<Podcast />} />
    <Route path="login" element={<LoginForm />} />
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
