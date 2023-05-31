// router/index.ts
import { Navigate, createBrowserRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import Layout from '@/components/Layout'

import { Home } from '@/pages/Home'
import About from '@/pages/About'
import Dashboard from '@/pages/dashboard'

const Hooks = lazy(() => import('@/pages/Hooks'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'hooks',
        element: <Hooks />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]

export default createBrowserRouter(routes, {
  basename: '/',
})
