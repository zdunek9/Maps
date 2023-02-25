import React, { useEffect, useState } from "react";
import { DataWrapper } from "./DataModal.style";

function DataModal({ currentSearch, distance }) {
  const [totalCost, setTotalCost] = useState(0);
  const [calculatedTime, setCalculatedTime] = useState(0);
  const trimedDistance = parseInt(distance.replace(/\s/g, ""));

  const calculateTotalCost = (value) => {
    if (value <= 0) {
      setTotalCost(0);
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
      <div>
        Distance from <span>{currentSearch[0].address}</span> to{" "}
        <span>{currentSearch[1].address}</span> :<p>{distance}</p>
        <br />
        Estimated travel time :<p>{calculatedTime} days</p>
        <br />
      </div>
      <div>
        Specify the rate per kilometer: <br />
        <input
          type="number"
          max={200}
          min={0}
          onChange={(e) => calculateTotalCost(e.target.value)}
        />
        <br />
        Estimated total cost: {totalCost.toFixed(2)} zl
      </div>
    </DataWrapper>
  );
}

export default DataModal;
