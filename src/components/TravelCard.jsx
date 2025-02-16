import CardImage from "./CardImage";
import "./TravelCard.css";

import markerImg from '../assets/marker_j56pma.png';

const TravelCard = ({travel}) => {
    return(
        <div className="card">
            <CardImage src={travel.img.src} alt={travel.img.alt} />
            <div className="card-details">
                <div className="card-location-details">
                    <img src={markerImg} alt="Country Marker" />
                    <span>{travel.country}</span>
                    <a href={travel.googleMapsLink}>View on Google Maps</a>
                    
                </div>
                <h2 className="title">{travel.title}</h2>
                <p className="dates">{travel.dates}</p>
                <p>{travel.text}</p>

            </div>
        </div>
    )
}

export default TravelCard;