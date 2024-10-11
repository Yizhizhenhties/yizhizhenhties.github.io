import { Button } from "antd";
import { useNavigate } from "react-router";

export default function HomePage() {

    const navigate = useNavigate();

    return (
        <div className="p-4">
            <div>这是 HomePage</div>
            <Button onClick={() => navigate('/intro')}>Go</Button>
        </div>
    )
}