
import { createBrowserRouter } from 'react-router-dom'

import AppLayout from '../pages/AppLayout'
import Homepage from '../pages/homepage'
import About from '../pages/About'
import ErrorPage from '../pages/ErrorPage'
import Shop from '../pages/Shop'
import FindDoctors from '../pages/FindDoctors'
import Forum from '../pages/Forum'
import Ingredients from '../pages/Ingredients'
import ForumPage from '../pages/ForumPage'
import FaqPage from '../pages/FaqPage'


const routes = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: `/forum/:id`,
                element: <Forum />
            },
            {
                path: "/find-doctors",
                element: <FindDoctors />
            },
            {
                path: "/ingredients",
                element: <Ingredients />
            },
            {
                path: "/forum",
                element: <ForumPage />
            },
            {
                path: "/faq",
                element: <FaqPage />
            },

        ]
    }

])

export default routes