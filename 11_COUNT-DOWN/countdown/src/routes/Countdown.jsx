import Title from "../components/Title";
import Counter from "../components/Counter";

import useCountdown from "../hook/useCountdown";

import { CountDownContext } from "../context/CountdownContext";
import { useContext } from "react";

import { Navigate } from "react-router-dom";

const Countdown = () => {
  const { event } = useContext(CountDownContext);

  if (!event) return <Navigate to="/" />;

  const eventTitle = event.title;
  const eventColor = event.color;

  const [day, hour, minute, seconds] = useCountdown(event.date);

  return (
    <>
      <Title title={eventTitle} eventColor={eventColor}/>
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor}/>
        <Counter title="Horas" number={hour} eventColor={eventColor}/>
        <Counter title="Minutos" number={minute} eventColor={eventColor}/>
        <Counter title="Segundos" number={seconds} eventColor={eventColor}/>
      </div>
    </>
  );
};

export default Countdown;
