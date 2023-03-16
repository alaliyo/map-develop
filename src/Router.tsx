import { createBrowserRouter } from "react-router-dom";
import Root from './Root';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Home />,
            },
        ],
        errorElement: <NotFound />
    }
])

export default router;