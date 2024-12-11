import './Result.css';

export default function Result({state, updateState}) {
    function restartGame(){
        updateState("start")
    }
    
    return (
        <div class="contain">
            {state == "win" && 
            <>
                <div>
                    <h1>You ARE Smarter Than Peter Rosenthal!</h1>
                    <button onClick={restartGame}>Play Again?</button>
                </div>
                <figure>
                    <img src="/src/assets/petermad.png"/>
                </figure>
            </>
            }
            {state == "lose" && 
            <>
                <div>
                    <h1>You are NOT Smarter Than Peter Rosenthal!</h1>
                    <button onClick={restartGame}>Try Again?</button>
                </div>
                <figure>
                    <img src="/src/assets/peterhappy.png"/>
                </figure>
            </>
            }
        </div>
    );
}