import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: `Let's hit the beach`,
    iconName: "sun"
  },
  winter: {
    text: `Let's make a snowman`,
    iconName: "snowflake"
  },
  autumn: {
    text: `Let's go hike in the forest`,
    iconName: "envira"
  },
  spring: {
    text: `Let's go sit on a terrace`,
    iconName: "lemon"
  }
};

const getSeason = (lat, month) => {
  if ([11, 0, 1].includes(month)) {
    return lat > 0 ? "winter" : "summer";
  } else if ([2, 3, 4].includes(month)) {
    return lat > 0 ? "spring" : "autumn";
  } else if ([5, 6, 7].includes(month)) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "autumn" : "spring";
  }
};

const SeasonDisplay = props => {
  //   const month = Math.floor(Math.random() * 12);
  const season = getSeason(props.lat, new Date().getMonth());
  //   console.log(month);

  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <h2>Season's Checker</h2>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
