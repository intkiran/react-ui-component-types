import React from "react";

const FunctionExpressionComponent = function (props) {
    return (
        <div className="function-component">
            <h1>Function Expression Component example {props.name}</h1>
        </div>
    );
};

export default FunctionExpressionComponent;
