import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    // const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/orders">Orders</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Menu</Link>
            </li>
            {
                localStorage.getItem("pizza_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("pizza_user")
                            // navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}
