import React, { useState } from 'react';

function TrafficLight() {
    const [selectedLight, setSelectedLight] = useState(null);

    const handleLightClick = (color) => {
        setSelectedLight(color);
    };

    const handleCycleClick = () => {
        switch (selectedLight) {
            case 'red':
                setSelectedLight('green');
                break;
            case 'green':
                setSelectedLight('yellow');
                break;
            case 'yellow':
                setSelectedLight('red');
                break;
            default:
                setSelectedLight('green');
        }
    }

    return (
        <div className="traffic-light">
            <div
                className={`light green ${selectedLight === 'green' ? 'active' : ''}`}
                onClick={() => handleLightClick('green')}
            ></div>
            <div
                className={`light yellow ${selectedLight === 'yellow' ? 'active' : ''}`}
                onClick={() => handleLightClick('yellow')}
            ></div>
            <div
                className={`light red ${selectedLight === 'red' ? 'active' : ''}`}
                onClick={() => handleLightClick('red')}
            ></div>
            <button
                className='btn btn-primary'
                onClick={handleCycleClick}>
                Cycle Color
            </button>
        </div>
    );
}

export default TrafficLight;
