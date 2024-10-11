import { Layout } from "antd";
import { Outlet } from "react-router";

export default function MainContentLayout() {

    return (
        <Layout className="w-full h-full">
            <Layout.Sider className="shadow-xl bg-white">
                <div className="p-4">
                    这是一个Sider
                </div>
            </Layout.Sider>
            <Layout.Content>
                <Outlet/>
            </Layout.Content>
        </Layout>
    )
}