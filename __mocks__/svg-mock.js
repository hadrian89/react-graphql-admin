import React from  "react";

function Svg(props = Svg.defaultProps){
    return React.createElement("svg",props);
}

Svg.defaultProps = {
    height: 1,
    width: 1,
    viewBox: "0 0 1 1",
}

export const ReactComponent = Svg;