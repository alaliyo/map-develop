import { createBrowserRouter } from "react-router-dom";
import Root from './Root';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import PlanPage from './pages/PlanPage';
import Community from './pages/Community';
import Detail from "./pages/Detail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'detail/:postId',
                element: <Detail />,
            },
            {
                path: 'loginpage',
                element: <LoginPage />,
            },
            {
                path: 'mypage',
                element: <MyPage />,
            },
            {
                path: 'planPage',
                element: <PlanPage />,
            },
            {
                path: 'community',
                element: <Community />,
            },
        ],
        errorElement: <NotFound />
    }
])

export default router;