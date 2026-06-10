import { useNavigate } from "react-router-dom";

export default function Footer() {
      const navigate = useNavigate();
    return (
        <div className="footer">
            <div className="footer__list">
                <ul>
                    <li onClick={() => navigate("/aboutProject")}>О проекте</li>
                    <li onClick={() => navigate("/articles")}>Статьи</li>
                    <li onClick={() => navigate("/contacts")}>Контакты</li>
                </ul>
            </div>
        </div>
    );
}