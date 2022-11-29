import "./App.css";
import { useState } from "react";

export default function App() {
  const [temperature, settemperature] = useState(10);
  const [temperatureColor, settemperatureColor] = useState("cold");

  const incTemp = () => {
    const newTemp = temperature + 1;
    settemperature(() => newTemp);
    if (newTemp >= 20) settemperatureColor("hot");
  };
  const decTemp = () => {
    const newTemp = temperature - 1;
    settemperature(() => newTemp);
    if (newTemp < 20) settemperatureColor("cold");
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperature}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={incTemp}>+</button>
        <button onClick={decTemp}>-</button>
      </div>
    </div>
  );
}
