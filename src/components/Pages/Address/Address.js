import React, { useRef, useState } from "react";
import { Wrapper } from "./Address.style";
import MapComponent from "../../MapComponent/MapComponent";
import { getPositionAPI } from "../../../api/axios";
import { useQuery } from "react-query";

function Address({ setSelectedTab }) {
  const [address, setAddress] = useState("Łódź, Piotrkowska 80 ");
  const [nextBTN, setNextBTN] = useState(false);
  const focusRef = useRef();

  const { error, data, isFetching, isLoading, refetch } = useQuery(
    "getPositionAPI",
    () => getPositionAPI(address),
    {
      refetchOnWindowFocus: false,
    }
  );

  const submitBTN = async (event) => {
    event.preventDefault();
    await refetch();
    setNextBTN(true);
  };

  if (isFetching) return <p>Loading...</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Wrapper>
      <form onSubmit={(event) => submitBTN(event)}>
        <label htmlFor="typeAddress">Choose your start location:</label>
        <input
          id="typeAddress"
          placeholder="Type address here"
          type="text"
          ref={focusRef}
          maxLength={40}
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          required
        />
        <button>Submit</button>
      </form>
      <MapComponent getPosition={data} />
      {nextBTN && <button onClick={() => setSelectedTab('2')}>Next</button>}
    </Wrapper>
  );
}

export default Address;
