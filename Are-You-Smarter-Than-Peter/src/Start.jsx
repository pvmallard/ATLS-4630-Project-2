import './Start.css';
import peter from "/src/assets/peter.png";

export default function Start({state, updateState}) {

    function startGame(){
        updateState("question")
    }

    return (
        <div class="contain">
            <div>
                <h1>Are You Smarter Than Peter Rosenthal?</h1>
                <button onClick={startGame}>Start!</button>
             
            </div>
            <figure>
                <img src={peter}/>
            </figure>
        </div>
        
   
    );
}

    