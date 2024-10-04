import { Link, NavLink } from "react-router-dom";
import kasaDesktop from "../assets/kasa_logo.svg";
import kasa from "../assets/kasa_logo_mobile.svg";

export default function Header() {
    return (
        <header className="header container">
            <Link to="/">
                <picture>
                    <source media="(min-width: 768px)" srcSet={kasaDesktop} />
                    <img src={kasa} alt="Logo de Kasa" />
                </picture>
            </Link>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/a-propos">
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
