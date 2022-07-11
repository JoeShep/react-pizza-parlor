import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    const currentUser = JSON.parse(localStorage.getItem("pizza_user"))

    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/orders">Orders</Link>
            </li>
            {
                !currentUser.staff &&
                <li className="navbar__item">
                    <Link className="navbar__link" to="/menu">Menu</Link>
                </li>
            }
            {
                localStorage.getItem("pizza_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("pizza_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}
