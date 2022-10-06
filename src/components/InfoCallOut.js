import React from "react";

const InfoCallOut = (props) => {
    return (
        <div className="callout">
            <h2>{props.header}</h2>
            <p>{props.body}</p>
        </div>
    );
};

export default InfoCallOut;
