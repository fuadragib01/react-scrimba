import React from "react";

export function withExtraPropsAdded(component) {
    const Component = component;
    return function (props) {
        return <Component extprp="Blah blah blah" {...props} />;
    };
}
