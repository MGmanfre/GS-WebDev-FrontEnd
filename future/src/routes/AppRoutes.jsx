import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from '@/pages/Home.jsx'

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <Layout/>,
        children:[
            {index: true, element: <Home/>},
        ],
    },
])
