import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type LocationData = {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    descritpion: string;
    host: {
        name: string;
        picture: string;
    };
    rating: string;
    location: string;
    equipments: string[];
    tags: string[];
};

export default function Grid() {
    const [data, setData] = useState<LocationData[]>([]);

    const fetchLocation = async () => {
        try {
            const response = await fetch("../../public/locations.json");
            if (!response.ok) {
                throw new Error("Failed to fetch location data");
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error("Erreur : ", error);
        }
    };

    useEffect(() => {
        fetchLocation();
    }, []);

    return (
        <div className="flex">
            {data.map((location) => (
                <div key={location.id} className="card">
                    <Link to={`/logement/${location.id}`}>
                        <img src={location.cover} alt={location.title} />
                        <h2 className="h2">{location.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}
