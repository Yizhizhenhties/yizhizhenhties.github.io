import { ContentRoute, menuDefaultOpenKeys } from "@/route";
import { Layout, Menu } from "antd";
import KeepAlive from "keepalive-for-react";
import { useMemo } from "react";
import { useLocation, useMatches, useNavigate, useOutlet } from "react-router";

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

function BasicLayoutWithCache() {
    const outlet = useOutlet();
    const location = useLocation();

    const cacheKey = useMemo(() => {
        return location.pathname + location.search;
    }, [location]);

    return (
        <KeepAlive activeName={cacheKey} max={10} strategy={'LRU'}>
            {outlet}
        </KeepAlive>
    )
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
                <BasicLayoutWithCache />
            </Layout.Content>
        </Layout>
    )
}