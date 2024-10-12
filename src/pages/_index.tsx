import { useLayoutEffect } from "react";
import { Outlet, useNavigate, useNavigation } from "react-router";
import nprogress from 'nprogress';
import { Layout, Space } from "antd";
import { GithubOutlined } from "@ant-design/icons";

export default function MainPage() {
    const navigation = useNavigation();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        if(navigation.state === 'loading') nprogress.start();
        if(navigation.state === 'idle') nprogress.done();
    }, [navigation.state])

    return (
        <Layout className="h-[100vh]">
            <Layout.Header className="bg-white shadow-md border-b px-16 z-[99]">
                <div className="flex justify-between items-center h-full">
                    <div className="flex items-center justify-center h-full">
                        <img 
                            src="/icon.jpg" 
                            className="cursor-pointer"
                            width={32}
                            onClick={() => navigate('/')}
                        />
                        <span 
                            className="ml-8 text-xl font-semibold hover:text-blue-500 cursor-pointer"
                            onClick={() => navigate('/')}>
                            Yizhizhenhties
                        </span>
                    </div>
                    <Space>
                        <GithubOutlined 
                            className="text-lg cursor-pointer" 
                            onClick={() => window.open('https://github.com/Yizhizhenhties/yizhizhenhties.github.io','__blank')}
                        />
                    </Space>
                </div>
            </Layout.Header>
            <Layout.Content className="h-[calc(100vh-64px)]">
                <Outlet/>
            </Layout.Content>
        </Layout>
    )
}