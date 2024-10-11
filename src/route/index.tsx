import MainPage from "@/pages/_index";
import HomePage from "@/pages/homePage/_index";
import MainContentLayout from "@/pages/layout/_index";
import Intro from "@/pages/layout/intro/_index";
import { type RouteObject, createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [
    {
        path: '/',
        id: "root",
        element: <MainPage/>,
        children: [
            {
                index: true,
                id: 'homePage',
                element: <HomePage/>
            },
            {
                id: 'layout',
                element: <MainContentLayout/>,
                children: [
                    {
                        id: '/intro',
                        path: '/intro',
                        element: <Intro/>
                    }
                ]
            }
        ]
    }
]
export const router = createBrowserRouter(routes)