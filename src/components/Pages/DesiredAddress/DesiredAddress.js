import React, { useRef, useState } from "react";
import { Wrapper, WarningModal } from "./DesiredAddress.style";
import MapComponent from "../../MapComponent/MapComponent";
import { getPositionAPI } from "../../../api/axios";
import { useQuery } from "react-query";

function DesiredAddress({ setSelectedTab, setCurrentSearch, currentSearch }) {
  const [address, setAddress] = useState("Łódź, Piotrkowska 80 ");
  const [nextBTN, setNextBTN] = useState(false);
  const [warningModal, setWarningModal] = useState(false);
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

  const confirmBTN = () => {
    if (currentSearch.length === 0) {
      setWarningModal(true);
      setTimeout(() => setWarningModal(false), 3000);
      return;
    }
    setCurrentSearch((prevState) => [...prevState, data]);
  };

  if (isFetching) return <p>Loading...</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Wrapper>
      <form onSubmit={(event) => submitBTN(event)}>
        <label htmlFor="typeAddress">Select desired location:</label>
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
      {nextBTN && <button onClick={() => confirmBTN()}>Next</button>}
      {warningModal && (
        <WarningModal>Confirm your starting position first !</WarningModal>
      )}
    </Wrapper>
  );
}

export default DesiredAddress;
