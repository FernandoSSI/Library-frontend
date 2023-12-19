import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/home/App'
import AddBooks from './pages/AddBooks/AddBooks'
import Books from './pages/Books/Books'
import { OnlineCatalog } from './pages/onlineCatalog/OnlineCatalog'
import { Clients } from './pages/clients/Clients'
import AddClients from './pages/AddClients/AddClients'
import { Orders } from './pages/Orders/Orders'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/addbooks",
        element: <AddBooks />
      },
      {
        path: "/books",
        element: <Books />
      },
      {
        path: "/onlinecatalog",
        element: <OnlineCatalog/>
      },
      {
        path: "/clients",
        element: <Clients/>
      },
      {
        path: "/addclients",
        element: <AddClients/>
      },
      {
        path: "/orders",
        element: <Orders/>
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
