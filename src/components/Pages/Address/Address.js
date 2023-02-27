import React, { useEffect, useState } from "react";
import { Wrapper } from "./Address.style";
import { getPositionAPI } from "../../../api/axios";
import { useQuery } from "react-query";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import LoadingElement from "../../LoadingElement/LoadingElement";
import { useNavigate } from "react-router-dom";

const API_KEY = `${process.env.REACT_APP_APIGOOGLEMAPS}`;

function Address({ setSelectedTab, setCurrentSearch, currentSearch }) {
  const [address, setAddress] = useState("Łódź, Piotrkowska 80 "); // state used for translating string into coordinates via API
  const [nextBTN, setNextBTN] = useState(false);
  const [center, setCenter] = useState({
    // state used for center searching location
    lat: 51.7675,
    lng: 19.45705,
  });
  const { error, data, isFetching, isLoading, refetch } = useQuery(
    "getPositionAPI",
    () => getPositionAPI(address),
    {
      refetchOnWindowFocus: false,
    }
  );
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
  });

  const navigate = useNavigate();

  const confirmBTN = () => {
    if (currentSearch.length === 0) {
      setCurrentSearch([{ address: address, data: data }]);
    } else {
      const nextCurrentSearch = currentSearch.map((item, i) =>
        i === 0 ? { address: address, data: data } : item
      );
      setCurrentSearch(nextCurrentSearch);
    }
    setSelectedTab("2");
    navigate("/desired-address");
  };
  const submitBTN = async (event) => {
    event.preventDefault();
    await refetch();
    setNextBTN(true);
  };

  useEffect(() => {
    if (data) {
      const nextCenter = {
        lat: data[0],
        lng: data[1],
      };
      setCenter(nextCenter);
    }
  }, [data]);

  if (!isLoaded || isFetching || isLoading) return <LoadingElement />;
  if (error) return <LoadingElement error={error.message} />;

  return (
    <Wrapper>
      <form onSubmit={(event) => submitBTN(event)}>
        <label htmlFor="typeAddress">Choose your start location:</label>
        <input
          id="typeAddress"
          placeholder="Type address here"
          type="text"
          maxLength={40}
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          required
        />
        <button>Submit</button>
      </form>
      <GoogleMap
        center={center}
        zoom={13}
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
        <Marker position={center} />
      </GoogleMap>
      {nextBTN && <button onClick={() => confirmBTN()}>Next</button>}
    </Wrapper>
  );
}

export default Address;
