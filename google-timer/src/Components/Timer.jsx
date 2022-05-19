import React, { useState, useEffect, useRef } from "react";
import "../App.css";

function Timer() {
  const [time, setTime] = useState(null);
  const [isTimerRunning, setTimerRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (time === 0) {
      clearInterval(timerRef.current);
    }
  }, [time]);

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const handleUpdate = (time) => {
    setTime(time);
    handleStart();
  };

  const handleStart = () => {
    if (timerRef.current !== null) return;
    if (time === 0) return;
    timerRef.current = setInterval(() => {
      console.log(`setInterval`);
      setTime((prev) => prev - 1);
    }, 1000);
    setTimerRunning(true);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    setTimerRunning(false);
    timerRef.current = null;
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
  };

  return (
    <div className="other-div">
      {time === null ? (
        <TimerInput handleUpdate={handleUpdate} />
      ) : (
        <>
          <div className="other-div"> TIMER : {time} </div>
          {isTimerRunning ? (
            <button onClick={handleStop}>PAUSE</button>
          ) : (
            <button onClick={handleStart}>START</button>
          )}
          <button onClick={handleReset}>RESET</button>
        </>
      )}
    </div>
  );
}

const TimerInput = ({ handleUpdate }) => {
  const [time, setTime] = useState(0);

  const handleTimeUpdate = (value) => {
    console.log(`oops`, value);
    if (Number.isNaN(value)) {
      alert("please input number");
      return;
    }
    setTime(Number(value));
  };
  console.log(time);
  return (
    <div className="main-div">
      <input value={time} onChange={(e) => handleTimeUpdate(e.target.value)} />
      <button onClick={() => handleUpdate(time)}>START TIMER </button>
    </div>
  );
};

export default Timer;
