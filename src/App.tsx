import classNames from "classnames";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import "./App.scss";
import jankclock from "./assets/jankclock";

const getHourAngle = (time: number) => (Number(format(time, "K")) / 12) * 360;
const getMinuteAngle = (time: number) => (Number(format(time, "m")) / 60) * 360;
const getSecondAngle = (time: number) => (Number(format(time, "s")) / 60) * 360;

function App() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const onTick = () => setNow(Date.now());
    const handle = window.setInterval(onTick, 1000);
    return () => window.clearInterval(handle);
  });

  return (
    <div className="App">
      <jankclock.Bg className="layer" />
      <jankclock.Arm
        className="layer second"
        style={{ transform: `rotate(${getSecondAngle(now)})` }}
      />
      <jankclock.Head className="layer" style={{ transform: "translate(0)" }} />
      <jankclock.Arm
        className="layer hour"
        style={{ scale: 0.9, transform: `rotate(${getHourAngle(now)})` }}
      />
      <jankclock.Arm
        className="layer minute"
        style={{ transform: `rotate(${getMinuteAngle(now)})` }}
      />
    </div>
  );
}

export default App;
