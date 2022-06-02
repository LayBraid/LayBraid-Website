import React, {Component} from "react";
import picture from "../../images/picture.jpg";

class Picture extends Component {
    render() {
        return (
            <div className="">
                <img src={picture} alt="" className="profile--picture" />
            </div>
        );
    }
}

export default Picture;