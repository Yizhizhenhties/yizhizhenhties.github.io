import { useLayoutEffect } from "react";
import { Outlet, useNavigation } from "react-router";
import nprogress from 'nprogress';
import { Layout } from "antd";

export default function MainPage() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        if(navigation.state === 'loading') nprogress.start();
        if(navigation.state === 'idle') nprogress.done();
    }, [navigation.state])

    return (
        <Layout className="h-[100vh]">
            <Layout.Header className="bg-white shadow border-b">
                这是一个Header
            </Layout.Header>
            <Layout.Content className="h-[calc(100vh-64px)]">
                <Outlet/>
            </Layout.Content>
        </Layout>
    )
}