import React, { useEffect, useState } from "react";
import { DataWrapper, Error, PartingWrapper } from "./DataModal.style";

function DataModal({ currentSearch, distance }) {
  const [totalCost, setTotalCost] = useState(0);
  const [error, setError] = useState(false);
  const [calculatedTime, setCalculatedTime] = useState(0);
  const trimedDistance = parseInt(distance.replace(/\s/g, ""));

  const calculateTotalCost = (value) => {
    setError(false);
    if (value <= 0 || value > 200) {
      setTotalCost(0);
      setError(true);
      return;
    }
    let cost = trimedDistance * parseFloat(value);
    if (calculatedTime > 1) {
      // if calculated travel time is more than 1, we add 1000 cost for every travel day, and multiply by 1.1
      cost += calculatedTime * 1000;
    }
    cost *= 1.1;
    setTotalCost(cost);
  };

  useEffect(() => {
    const estimatedDistance = trimedDistance / 800;
    if (estimatedDistance < 1) {
      setCalculatedTime(1);
    } else {
      setCalculatedTime(Math.floor(estimatedDistance) + 1);
    }
  }, []);

  return (
    <DataWrapper>
      <PartingWrapper>
        <h2>
          Distance from <i>"{currentSearch[0].address}"</i>
        </h2>
        <h2>
          to <i>"{currentSearch[1].address}"</i> :<span>{distance}</span>
        </h2>
        <h2>
          Estimated travel time :<span>{calculatedTime} days</span>
        </h2>
      </PartingWrapper>
      <PartingWrapper>
        <h2>Specify the rate per kilometer:</h2>
        <input
          type="number"
          max={200}
          min={0}
          onChange={(e) => calculateTotalCost(e.target.value)}
        />
        <h2>Estimated total cost: {totalCost.toFixed(2)} zl</h2>
        {error && <Error>Min value=0, Max value=200</Error>}
      </PartingWrapper>
    </DataWrapper>
  );
}

export default DataModal;
