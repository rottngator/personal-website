import React from "react";
import "./update.css";

const Update = () => {
    return (
        <div className="update-box">
            <h2 className="update-title">UPDATES    </h2>
            <h3 className="update-date">mm/dd/yyyy</h3>
            <p className="update-content">
                <b>09/28/2025:</b> overhaul started
                <br></br>
                <b>09/29/2025:</b> about started
                <br></br>
                <b>12/17/2025:</b> i remembered i had this
                <br></br>
                <b>12/18/2025:</b> started fixing some small elements
                <br></br>
                <b>12/20/2025:</b> added music player to about, added 
                current container to about to get rid of some of the 
                empty spacing, added some off site links, messing around
                with about layout.
                <br></br>
                <b>1/3/2026:</b> tried adding image to music player component, 
                realized i didnt want to mess with it. might revisit. 
            </p>
        </div>
    );
};   

export default Update;