import React from "react";
export default function Home() {
    return (
        <>
            <h1>Welcome</h1>
            <h2>How to get started with this project:</h2>
            <ol>
                <li>Run 'npm install' to install dependencies</li>
                <li>Run 'npm start' to begin local server</li>
                <li>To add a new page, add it to the Switch in App.js, and the header.jsx component
                    <ul>
                        <li>Make sure the 'to' attribute in Header matches the 'path' attribute in App</li>
                    </ul>
                </li>
            </ol>
        </>
    );
}