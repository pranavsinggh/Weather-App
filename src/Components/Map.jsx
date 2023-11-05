import { googleMapAPI } from "../Utils/API";

export const Map = ({ city }) => {

    return (
        <div>
            <iframe
                width="125%"
                height="350"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${googleMapAPI}&q=${city}`}>
            </iframe>
        </div>
    );
};