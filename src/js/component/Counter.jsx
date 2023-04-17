import React, { useState } from "react";

const Home = () => {
    const [count, setCount] = useState(0);

    const handleDecrement = () => setCount(count - 1);
    const handleIncrement = () => setCount(count + 1);

    return (
        <div className="text-center">
            <h1 className="text-center mt-5">Simple Counter!</h1>
            <button onClick={handleIncrement} className="btn btn-success">
                UP
            </button>
            <p className="text-center fs-1">{count}</p>
            <button onClick={handleDecrement} className="btn btn-danger">
                DOWN
            </button>
        </div>
    );
};

export default Home;
