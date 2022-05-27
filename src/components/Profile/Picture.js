import React from "react";
import picture from "../../images/picture.jpg";

export default function Picture() {
    return (
        <div className="">
            <img src={picture} alt="" className="profile--picture" />
        </div>
    );
}