import banniereDesktop from "../assets/banniere_desktop.png";
import banniere from "../assets/banniere_mobile.png";

export default function HeroBanner() {
    return (
        <section className="heroBanner container">
            <picture>
                <source media="(min-width: 768px)" srcSet={banniereDesktop} />
                <img src={banniere} alt="Image d'une montagne" />
            </picture>
            <h1>Chez vous, partout et ailleurs</h1>
        </section>
    );
}
