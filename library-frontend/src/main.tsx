import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/home/App'
import Add from './pages/Add/Add'
import Books from './pages/Books/Books'
import { OnlineCatalog } from './pages/onlineCatalog/OnlineCatalog'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/add",
        element: <Add />
      },
      {
        path: "/books",
        element: <Books />
      },
      {
        path: "/onlinecatalog",
        element: <OnlineCatalog/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>

  </React.StrictMode>,
)
