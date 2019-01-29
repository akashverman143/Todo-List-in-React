import React from "react";
import { render } from "react-dom";

import App from './component/App';


const Root = () => {
    return(
        <div>
            <App/>
        </div>
    )
}

render(
    <Root/>,
    document.querySelector("#main")
);