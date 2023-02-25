import { ErrorMsg, Wrapper } from "./ResultModal.style";
import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsRenderer,
} from "@react-google-maps/api";
import LoadingElement from "../../LoadingElement/LoadingElement";
import DataModal from "./DataModal/DataModal";
/* eslint-disable */ // eslinst is disabled as a result of throwing error that "google is not defined" but its mistake

const API_KEY = `${process.env.REACT_APP_APIGOOGLEMAPS}`;


function ResultModal({ currentSearch, setHistoryData }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
  });
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [distance, setDistance] = useState("");

  useEffect(() => {
    async function calculareRoute() {
      setLoading(true);
      try {
        const directionsService = new google.maps.DirectionsService();
        const results = await directionsService.route({
          origin: currentSearch[0].address,
          destination: currentSearch[1].address,
          travelMode: google.maps.TravelMode.DRIVING,
        });
        setDirectionsResponse(results);
        setDistance(results.routes[0].legs[0].distance.text);
        setHistoryData((prevState) => [...prevState, currentSearch]);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    }
    calculareRoute();
  }, []);

  
  if (loading || !isLoaded) return <LoadingElement />;

  return (
    <Wrapper>
      {error ? (
        <p>
          There was a problem with routing. Error code: <br />
          <ErrorMsg>{error}</ErrorMsg>
        </p>
      ) : (
        <DataModal currentSearch={currentSearch} distance={distance} />
      )}
      {!error && (
        <GoogleMap
          zoom={11}
          mapContainerStyle={{ width: "100%", height: "400px" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <DirectionsRenderer directions={directionsResponse} />
        </GoogleMap>
      )}
    </Wrapper>
  );
}

export default ResultModal;
