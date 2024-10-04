/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import Dropdown from "../../components/Dropdown";
import Rating from "../../components/Rating";
import Tag from "../../components/Tag";
import NotFound from "../NotFound";

type LocationData = {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: {
        name: string;
        picture: string;
    };
    rating: string;
    location: string;
    equipments: string[];
    tags: string[];
};

export function One() {
    const [data, setData] = useState<LocationData>();
    const params = useParams<{ id: string }>();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState(false);

    const fetchLocation = async () => {
        try {
            const response = await fetch("../../public/locations.json");
            if (!response.ok) {
                throw new Error("Failed to fetch location data");
            }
            const data: LocationData[] = await response.json();
            const location = data.find((location) => location.id === params.id);
            if (!location) {
                setError(true);
            }
            setData(location);
        } catch (error) {
            setError(true);
            console.error(error);
        }
    };

    useEffect(() => {
        fetchLocation();
    }, [params.id]);

    if (error) {
        return <NotFound />;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.pictures.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.pictures.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="one">
            <div className="container">
                <div className="slider">
                    <div className="pictures-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {data.pictures.map((picture, index) => (
                            <img key={index} className="pictures" src={picture} alt={data.title} />
                        ))}
                    </div>
                    <img src={arrow} alt="arrow" className="prev" onClick={handlePrev} />
                    <img src={arrow} alt="arrow" className="next" onClick={handleNext} />
                    <div className="currentIndex">
                        {currentIndex + 1}/{data.pictures.length}
                    </div>
                </div>
                <div className="top">
                    <div className="topContainer">
                        <div>
                            <h1 className="h1">{data.title}</h1>
                            <p className="p">{data.location}</p>
                            <Tag tags={data.tags} />
                        </div>
                        <div className="author">
                            <Rating rating={parseInt(data.rating)} />

                            <div className="avatar">
                                <p>{data.host.name}</p>
                                <img src={data.host.picture} alt={data.host.name} />
                            </div>
                        </div>
                    </div>

                    <div className="containerDropdown">
                        <Dropdown title="Description" content={data.description} />
                        <Dropdown title="Equipements" content={data.equipments} />
                    </div>
                </div>
            </div>
        </div>
    );
}
