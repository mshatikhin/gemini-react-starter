import React, { Component } from "react";

const styles = {
    font: "100 18px Helvetica, 'Segoe UI', serif",
    display: "inline-block",
    textAlign: "center",
    width: 150,
    padding: 40,
    margin: 10,
    background: "#fff",
    border: "1px solid #ccc"
}

export default class App extends Component {

    render() {
        return <div>
            <div style={styles}>
                Gemini is cool!
            </div>
            <div style={styles}>
                Testing is cool!
            </div>
            <div style={styles}>
                Bags is not cool!
            </div>
        </div>
    }

}