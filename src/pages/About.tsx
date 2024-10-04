import aboutLists from "../../src/lists.json";
import AboutBanniereDesktop from "../assets/about_banniere_desktop.jpg";
import AboutBanniereMobile from "../assets/about_banniere_mobile.jpg";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function About() {
    return (
        <>
            <Header />
            <main className="container about">
                <picture>
                    <source media="(min-width: 1440px)" srcSet={AboutBanniereDesktop} />
                    <img src={AboutBanniereMobile} alt="Image d'une montagne" />
                </picture>
                <div className="containerDropdown">
                    {aboutLists.map((item, index) => (
                        <Dropdown key={index} title={item.title} content={item.content} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
