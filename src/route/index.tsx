import MainPage from "@/pages/_index";
import HomePage from "@/pages/homePage/_index";
import MainContentLayout from "@/pages/layout/_index";
import Intro from "@/pages/layout/intro/_index";
import Tool1 from "@/pages/layout/tools/tool1";
import Tool2 from "@/pages/layout/tools/tool2";
import { InfoCircleOutlined, ToolOutlined } from "@ant-design/icons";
import { Navigate, type RouteObject, createHashRouter } from "react-router-dom";

const toolsPrefix = '/tools';
const getMenuInfo = (key: string, label: string, icon?: any) => ({
    key: key,
    label: label,
    icon: icon
})
export const ContentRoute = [
    {
        id: '/intro',
        path: '/intro',
        element: <Intro />,
        ...getMenuInfo('/intro', '介绍', <InfoCircleOutlined />)
    },
    {
        id: '/tools',
        path: '/tools',
        ...getMenuInfo('/tools', '实用工具', <ToolOutlined />),
        children: [
            {
                path: `${toolsPrefix}`,
                element: <Navigate to={`${toolsPrefix}/tool1`} replace />,
            },
            {
                id: `${toolsPrefix}/tool1`,
                path: `${toolsPrefix}/tool1`,
                element: <Tool1/>,
                ...getMenuInfo(`${toolsPrefix}/tool1`, '工具1', <ToolOutlined />)
            },
            {
                id: `${toolsPrefix}/tool2`,
                path: `${toolsPrefix}/tool2`,
                element: <Tool2/>,
                ...getMenuInfo(`${toolsPrefix}/tool2`, '工具2', <ToolOutlined />)
            }
        ],
    }
]

const MapContentRoute = (obj: any[]) => {
    return obj.map(it => {
        const index = it.index ? ({ index: it.index }) : {};
        const element = it.element ? ({ element: it.element }) : {};
        const children: any = it.children ? ({ children: MapContentRoute(it.children)}) : {};
        return ({
            id: it.id,
            path: it.path,
            ...index,
            ...element,
            ...children
        })
    });
}

const routes: RouteObject[] = [
    {
        path: '/',
        id: "root",
        element: <MainPage />,
        children: [
            {
                index: true,
                id: 'homePage',
                element: <HomePage />
            },
            {
                id: 'layout',
                element: <MainContentLayout />,
                children: MapContentRoute(ContentRoute)
            }
        ]
    }
]
export const router = createHashRouter(routes)