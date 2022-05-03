import React from "react";

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <img src={props.img} alt={props.condition} />
      <p>
        <span>conditions: {props.condition}</span>
      </p>
      <p>
        <span>time: {props.time}</span>
      </p>
    </div>
  );
};

export default WeatherForecast;
