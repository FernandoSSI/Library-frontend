import {QueryClientProvider, QueryClient} from '@tanstack/react-query' 
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/home/Home'

const queryClient = new QueryClient()

const Home = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Home} />
    </QueryClientProvider>
    
  </React.StrictMode>,
)
