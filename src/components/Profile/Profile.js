import React, {Component} from "react";
import Picture from "./Picture";
import Information from "./Information";
import Contact from "./Contact";

class Profile extends Component {
    render() {
        return (
            <div>
                <Picture/>
                <Information/>
                <Contact/>
            </div>
        );
    }
}

export default Profile;