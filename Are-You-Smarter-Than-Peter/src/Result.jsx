import './Result.css';
import petermad from "/src/assets/petermad.png"
import peterglad from "/src/assets/peterhappy.png"

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
                    <img src={petermad}/>
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
                    <img src={peterglad}/>
                </figure>
            </>
            }
        </div>
    );
}