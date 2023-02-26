import { ErrorMsg, NoDataModal, Wrapper } from "./ResultModal.style";
import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsRenderer,
} from "@react-google-maps/api";
import LoadingElement from "../../LoadingElement/LoadingElement";
import DataModal from "./DataModal/DataModal";
import { useNavigate } from "react-router-dom";
/* eslint-disable */ // eslinst is disabled as a result of throwing error that "google is not defined" but its mistake

const API_KEY = `${process.env.REACT_APP_APIGOOGLEMAPS}`;

function ResultModal({
  currentSearch,
  setHistoryData,
  setSelectedTab,
  historyData,
  setCurrentSearch,
}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
  });
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [distance, setDistance] = useState("");
  const navigate = useNavigate();
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
        const index = historyData.length - 1;
        if (historyData[index] !== currentSearch) {
          setHistoryData((prevState) => [...prevState, currentSearch]);
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    }
    calculareRoute();
    console.log(currentSearch);
  }, []);

  useEffect(() => {
    setSelectedTab("3");
  }, []);

  const resetBtn = () => {
    setCurrentSearch([]);
    navigate("/index");
  };

  if (loading || !isLoaded) return <LoadingElement />;
  if (currentSearch.length < 2)
    return (
      <NoDataModal>
        <p>No data to view</p>
      </NoDataModal>
    );

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
        <>
          <GoogleMap
            zoom={11}
            mapContainerStyle={{
              width: "60vw",
              maxWidth: "1200px",
              height: "60vh",
            }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
          >
            <DirectionsRenderer directions={directionsResponse} />
          </GoogleMap>
          <button onClick={() => resetBtn()}>Try again</button>
        </>
      )}
    </Wrapper>
  );
}

export default ResultModal;
