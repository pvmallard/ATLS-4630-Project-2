import { useState } from 'react'
import Start from './Start.jsx'
import Result from './Result.jsx'
import Question from './Question.jsx'

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
        <Question />
      }

      {state == "result" &&
        <Result />
      }
    </div>
  );
}