import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
document.body.className = 'bg-zinc-800 text-white'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/tutoring-react-refresher' element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App