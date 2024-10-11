import { Button, Result } from "antd";
import { useNavigate, useRouteError } from "react-router";

interface ErorrType {
    data: string;
    error: any;
    internal: boolean;
    status: number;
    statusText: string;
    message?: string;
}

export default function ErrorPage() {
    const navigate = useNavigate();
    const error = useRouteError() as ErorrType;
    const msg = error.message ?? error.toString();
    if (msg.includes("dynamically imported module")) window.location.reload();
    if (error.status === 404) return (
        <div className="w-full h-full flex justify-center items-center">
            <Result status="404" title="404" subTitle="找不到页面" extra={
                <Button type="primary" onClick={() => navigate("/", { replace: true })}>
                    回到首页
                </Button>
            }/>
        </div>
    )
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Result status="500" title="500" subTitle={error.message ?? "系统错误"} extra={
                <>
                    <Button type="primary" onClick={() => location.reload()}>
                        刷新页面
                    </Button>
                    <Button type="primary" onClick={() => navigate("/", { replace: true })}>
                        回到首页
                    </Button>
                </>
            }/>
        </div>
    )
}