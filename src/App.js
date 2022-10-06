import React from "react";
// import { withPointlessHOC } from "./withPointlessHOC";
import { withExtraPropsAdded } from "./withExtraPropsAdded";

function App(props) {
    console.log(props);
    return <div>Hello World!</div>;
}

const pointlessHOC = withExtraPropsAdded(App);
// const pointlessHOC = withPointlessHOC(App);

export default pointlessHOC;
