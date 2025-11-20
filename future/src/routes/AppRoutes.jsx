import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from '@/pages/Home.jsx'
import About from '@/pages/About.jsx'
import Contact from '@/pages/Contact.jsx'
import Dashboard from '@/pages/Dashboard.jsx'

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <Layout/>,
        children:[
            {index: true, element: <Home/>},
            {path: 'about', element: <About/>},
            {path: 'contact', element: <Contact/>},
            {path: 'dashboard', element: <Dashboard/>},
        ],
    },
])
