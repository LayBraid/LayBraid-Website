import React from "react";
import Picture from "./Picture";
import Information from "./Information";
import Contact from "./Contact";

export default function Profile() {
    return (
        <div>
            <Picture/>
            <Information/>
            <Contact/>
        </div>
    );
}