import React, { useState } from 'react';

function TrafficLight() {
    const [selectedLight, setSelectedLight] = useState(null);

    const handleLightClick = (color) => {
        setSelectedLight(color);
    };

    return (
        <div className="traffic-light">
            <div
                className={`light red ${selectedLight === 'red' ? 'active' : ''}`}
                onClick={() => handleLightClick('red')}
            ></div>
            <div
                className={`light yellow ${selectedLight === 'yellow' ? 'active' : ''}`}
                onClick={() => handleLightClick('yellow')}
            ></div>
            <div
                className={`light green ${selectedLight === 'green' ? 'active' : ''}`}
                onClick={() => handleLightClick('green')}
            ></div>
        </div>
    );
}

export default TrafficLight;
