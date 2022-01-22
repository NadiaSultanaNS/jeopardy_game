import { useState } from "react";

function Trivia(props) {
    const [category, setCategory] = useState('General Knowledge');
    const [points, setPoints] = useState();
    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();
    const [answerIsVisible, setAnswerVisibility] = useState(false);
    const toggleAnswerVisibility = () => {
        if (answerIsVisible) {
            setAnswerVisibility(false);
        }
        else {
            setAnswerVisibility(true);
        }
    }
    const getQuestion = () => {
        setAnswerVisibility(false); //setting answerisvisible = 0;
        fetch('http://jservice.io/api/random')
            .then(response => response.json())
            .then(data => {
                setQuestion(data[0].question);
                setAnswer(data[0].answer);
                setPoints(data[0].value);
                setCategory(data[0].category.title);
                props.setCurrentPoints(data[0].value);

            })
            .catch(error => {
                console.log(error);
            })
    };
    return (
        <div>
            <h2 className="color">Let's Play</h2>
            <button className="clickButton get-button" onClick={getQuestion}>Get Question</button>
            <h2 className="color">Category: {category} </h2>
            <h3 className="color">Points: {points} </h3>
            <h3 className="color">Question: {question}</h3>
            {answerIsVisible && <h3 className="color">Answer: {answer}</h3>}
            <button className="clickButton ans-button" onClick={toggleAnswerVisibility}>Click to Reveal Answer</button>
            <p>
                <a href="https://github.com/NadiaSultanaNS/jeopardy_game/tree/main/src">Git Repo</a>
            </p>
        </div>
    )
}

export default Trivia;