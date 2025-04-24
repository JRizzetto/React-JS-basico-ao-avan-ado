import './Counter.css'

const Counter = ({ title, number }) => {
  return (
    <div className="counter">
      <p className="counter-number">{number}</p>
      <h3 className="vounter-text">{title}</h3>
    </div>
  );
};

export default Counter;
