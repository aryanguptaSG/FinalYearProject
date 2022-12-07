import React from "react";
import StarIcon from "../../../assets/icons/StarIcon";

function Rating(props) {
    const { rate = 0, className = "", setRate = (newRate) => { } } = props;
    return (
        <div className={`flex space-x-1 w-fit mr-5px ${className}`}>
            {[1, 2, 3, 4, 5].map((item, id) => {
                return (
                    <div key={id}
                        onClick={() => { setRate(item) }}
                    >
                        {item <= rate ? (
                            <StarIcon color='#EEE' height='13' width='13' />
                        ) : (
                            <StarIcon />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default Rating;
