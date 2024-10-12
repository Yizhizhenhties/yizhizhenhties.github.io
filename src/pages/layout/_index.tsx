import { ContentRoute, menuDefaultOpenKeys } from "@/route";
import { Layout, Menu } from "antd";
import { Outlet, useMatches, useNavigate } from "react-router";

const mapRouteToMenu = (routes: any) => {
    return routes.map((it: any) => {
        if (!it.id) return;
        const children = it.children ? { children: mapRouteToMenu(it.children) } : {};
        return {
            key: it.key,
            label: it.label,
            icon: it.icon,
            ...children
        }
    })
}

export default function MainContentLayout() {

    const matchRoutes = useMatches();
    const currentRoute = matchRoutes[matchRoutes.length - 1];
    const routeId = currentRoute?.id;
    const navigate = useNavigate();

    return (
        <Layout className="w-full h-full">
            <Layout.Sider theme="light" className="shadow-xl" collapsible>
                <Menu
                    onSelect={(info) =>
                        navigate(info.key)
                    }
                    defaultOpenKeys={menuDefaultOpenKeys}
                    inlineIndent={12}
                    mode="inline"
                    selectedKeys={[routeId]} 
                    items={mapRouteToMenu(ContentRoute)}
                    className="py-2"
                />
            </Layout.Sider>
            <Layout.Content>
                <Outlet />
            </Layout.Content>
        </Layout>
    )
}