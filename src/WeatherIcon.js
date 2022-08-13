import React from "react";

export default function WeatherIcon(props) {
  return <img src={`/images/${props.iconCode}.png`} alt={props.alt} />;
}
