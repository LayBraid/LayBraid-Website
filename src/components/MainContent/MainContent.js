import React, {Component} from "react";

class MainContent extends Component {
    render() {
        return (
            <div className="main--content--page">
                <div className="main--content--page--text">
                    <h1>About</h1>
                    <p>I am a student at Epitech Lyon. My main skills are fullstack web developer and artificial intelligence programmer.</p>
                </div>
                <div className="main--content--page--text">
                    <h1>Interests</h1>
                    <p>Skiing. Bicycle. Designing. Video games. Entrepreneur. Guitar player.</p>
                </div>
            </div>
        );
    }
}

export default MainContent;