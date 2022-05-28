import React, {Component} from "react";
import "./styles.css";
import Profile from "./components/Profile/Profile";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="profile">
                    <Profile />
                </div>
                <div className="main--content">
                    <MainContent />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;