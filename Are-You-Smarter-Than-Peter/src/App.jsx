import { useState } from 'react'
import Start from './Start.jsx'
import Result from './Result.jsx'
import Question from './Question.jsx'
import Scoreboard from './Scoreboard.jsx'

export default function App() {

  const [state, updateState] = useState("start")

  // function nextQuestion(){
  //   if end of list call update state("")
  // }

  return (
    <div>
      
      {state == "start" &&
        <Start state = {state} updateState={updateState}/>
      }

      {state == "question" &&
          <Question state = {state} updateState={updateState}/>       
      }

      {state == "result" &&
        <Result state = {state} updateState={updateState}/>
      }
    </div>
  );
}