import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    const styles = {
        height: props.height,
        width: props.width,
        backgroundColor: props.cardColor,
    };
    return <div style={styles}></div>;
};

Card.propTypes = {
    cardColor: PropTypes.oneOf(["red", "blue", "yellow", "green"]).isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
};

Card.defaultProps = {};

export default Card;
