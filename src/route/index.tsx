import MainPage from "@/pages/_index";
import HomePage from "@/pages/homePage/_index";
import MainContentLayout from "@/pages/layout/_index";
import Intro from "@/pages/layout/intro/_index";
import Calculate from "@/pages/layout/tools/calculate";
import Drawio from "@/pages/layout/tools/drawio";
import { CalculatorOutlined, InfoCircleOutlined, PartitionOutlined, ToolOutlined } from "@ant-design/icons";
import { Navigate, type RouteObject, createHashRouter } from "react-router-dom";

const toolsPrefix = '/tools';
const getMenuInfo = (key: string, label: string, icon?: any) => ({
    key: key,
    label: label,
    icon: icon
})
export const menuDefaultOpenKeys = ['/tools']
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
                element: <Navigate to={`${toolsPrefix}/calculate`} replace />,
            },
            {
                id: `${toolsPrefix}/calculate`,
                path: `${toolsPrefix}/calculate`,
                element: <Calculate/>,
                ...getMenuInfo(`${toolsPrefix}/calculate`, '数学表达式计算', <CalculatorOutlined />)
            },
            {
                id: `${toolsPrefix}/drawio`,
                path: `${toolsPrefix}/drawio`,
                element: <Drawio/>,
                ...getMenuInfo(`${toolsPrefix}/drawio`, 'DrawIo（记得保存）', <PartitionOutlined />)
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