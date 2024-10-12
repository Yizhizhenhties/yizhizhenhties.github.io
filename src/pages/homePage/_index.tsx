import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import './index.css';

export default function HomePage() {

    const navigate = useNavigate();

    return (
        <div className="homepage-bg">
            <button onClick={() => navigate('/intro')} className="w-32 h-32 rounded-full bg-white text-black p-8 text-xl shadow-lg hover:scale-110 hover:shadow-2xl hover:text-blue-500">
                <ArrowRightOutlined />
            </button>
        </div>
    )
}