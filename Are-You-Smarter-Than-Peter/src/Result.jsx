import './Result.css';

export default function Result({state, updateState}) {
    function restartGame(){
        updateState("start")
    }
    
    return (
        <div>
            <h1>You Smarter Than Peter Rosenthal!</h1>
            <button onClick={restartGame}>Play Again?</button>
        </div>
    );
}