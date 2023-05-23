import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes, useLocation } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/one'>One</Link>
      <Link to='/two'>Two</Link>
      <Link to='/blog/1'>Blog 1</Link>
      <Link to='/blog/2'>Blog 2</Link>
      <Link to='/blog/3'>Blog 3</Link>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/one' element={<One name='licat' />} />
        <Route path='/two' element={<Two />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/three/*' element={<Outlet />}>
          <Route path='' element={<ThreeIndex />} />
          <Route path='threeOne' element={<ThreeOne />} />
          <Route path='threeTwo' element={<ThreeTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function ThreeIndex(){
  const location = useLocation();
  console.log(location);
  return <h1>ThreeIndex Page</h1>
}

function ThreeOne(){
  const location = useLocation();
  console.log(location);
  return <h1>ThreeOne Page</h1>
}

function ThreeTwo(){
  const location = useLocation();
  console.log(location);
  return <h1>ThreeTwo Page</h1>
}

function Index(){
  return <h1>Index Page</h1>
}

function One({name}){
  return <h1>{name} Page</h1>
}

function Two(){
  return <h1>Two Page</h1>
}

function Blog(){
  const location = useLocation();
  console.log(location);
  return <h1>Blog Page</h1>
}