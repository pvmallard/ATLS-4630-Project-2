import { useState } from 'react'
import Start from './Start.jsx'
import Result from './Result.jsx'
import Question from './Question.jsx'

export default function App() {

  const [state, updateState] = useState("question")

  // function nextQuestion(){
  //   if end of list call update state("")
  // }

  return (
    <div>
      <h2>hello</h2>
      {state == "start" &&
        <Start />
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