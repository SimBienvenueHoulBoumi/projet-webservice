import { useEffect,useState } from "react";

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: {lat: "", lng: ""},
        error: null
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
            error: null
        });
    };

    const onError = error => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: "",
                lng: "",
            },
            error: error.message
        })
    }

    useEffect(() => {
        
        try {
            if(!("geolocation" in navigator)){
            onError({
                code: 0,
                message: "Geolocation not supported"
            })
        }
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        } catch (error) {
            console.log(error)
        }
    },[])

    return location;
}

export default useGeoLocation

