import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./style.scss";

const CircleRating = ({ rating }) => {
  //this is a rating progress bar library we called react-circular-progress bar and rating is the no coming from API
    return (
        <div className="circleRating">
            <CircularProgressbar
                value={rating}
                maxValue={10} //if we remove this that it will take 100 by default
                text={rating}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                })}
            />
        </div>
    );
};

export default CircleRating;