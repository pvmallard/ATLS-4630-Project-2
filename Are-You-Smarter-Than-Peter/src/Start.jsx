import './Start.css';

export default function Start({state, setState}) {

    function startGame(){
        setState("question")
    }

    return (
        <div>
            <h1>Are You Smarter Than Peter Rosenthal?</h1>
             <button onClick={startGame}>Start!</button>
             
        </div>
   
    );
}

    