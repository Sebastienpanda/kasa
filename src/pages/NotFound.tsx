import { Link, useLocation } from "react-router-dom";
import notFoundDesktop from "../assets/desktop_not_found.svg";
import notFoud from "../assets/not_found_mobile.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function NotFound() {
    const location = useLocation();
    const isLogementPage = location.pathname.startsWith("/logement/");

    return (
        <>
            {!isLogementPage && <Header />}
            <div className="notFound">
                <div className="notFoundChildren">
                    <picture>
                        <source media="(min-width: 1440px)" srcSet={notFoundDesktop} />
                        <img src={notFoud} alt="Image d'une 404" />
                    </picture>

                    <h3>Oups! La page que vous demandez n'existe pas.</h3>
                    <Link className="link" to="/">
                        Retourner sur la page d’accueil
                    </Link>
                </div>
            </div>
            {!isLogementPage && <Footer />}
        </>
    );
}
