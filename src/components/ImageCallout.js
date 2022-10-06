import React from "react";

const ImageCallout = (props) => {
    return (
        <div className="callout">
            <img src={props.img} alt="" width="100%" />
            <figcaption>{props.caption}</figcaption>
        </div>
    );
};

export default ImageCallout;
