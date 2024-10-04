import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import kasa from "../assets/kasa_footer_logo.svg";

export default function Footer() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 375 || window.innerWidth <= 1440);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 375);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    console.log(location.pathname);

    const isLogementPage = location.pathname.startsWith("/logement/") || location.pathname === "/a-propos";

    return (
        <footer className={`footer ${isMobile && isLogementPage ? "footerLocation" : ""}`}>
            <img src={kasa} alt="Logo de Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
