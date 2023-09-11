import "./Content.css";
import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";

import Home from "../../views/default/Home";
import Crypto01 from "../../views/crypto01/crypto-app";
//import About from "../../views/crypto01/About";
import NotFound from "../../views/default/NotFound";

const Content = props => (
    <main className="Content">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/crypto01" element={<Crypto01 />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </main>
);

export default Content;