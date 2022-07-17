import React from "react";
import useMockData from "../utils/mockData";

const Main = () => {
    const { error, initialize, progress, status } = useMockData();
    const handleClick = () => {
        initialize();
    };
    return <div className="container">
        <h1> Main Page</h1>
        <h3>Инициализация данных</h3>
        <ul>
            <li>Status: {status}</li>
            <li>Progress: {progress}%</li>
           {error && <li>Error: {error}</li>}
        </ul>
        <button onClick={handleClick} className="btn btn-primary">
            Иниц
        </button>
    </div>;
};

export default Main;
