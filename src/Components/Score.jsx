import { useState } from "react";

function Score(props) {

    const [currentScore, setCurrentScore] = useState(0);
    const increase = () => {
        setCurrentScore(currentScore + props.currentPoints)
    }
    const decrease = () => {
        setCurrentScore(currentScore - props.currentPoints)
    }

    const reset = () => {
        setCurrentScore(0);
    }

    return (
        <div>
            <h2 className="color">Score: {currentScore}</h2>
            <div className="button">
                <button className="decrease-button" onClick={decrease}>Decrease</button>
                <button className="increase-button" onClick={increase}>Increase</button>
                <button className="reset-button" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Score;