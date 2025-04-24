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
      <Title title={eventTitle} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} />
        <Counter title="Horas" number={hour} />
        <Counter title="Minutos" number={minute} />
        <Counter title="Segundos" number={seconds} />
      </div>
    </>
  );
};

export default Countdown;
