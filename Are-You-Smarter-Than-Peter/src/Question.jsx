import { useState } from 'react'
import {useEffect} from 'react'

import './Question.css';
import trivia from '/src/assets/trivia.json'
import { use } from 'react';

export default function Question({state, updateState}) {

    //import json as array
    const [questionList, setQuestionList] = useState(trivia.questions);
    const [currentQ, setQ] = useState(questionList[0])
    const [currentIndex, setIndex] = useState(0)
    const [points, setPoints] = useState(0)

    useEffect(() => {
        
        if (currentIndex >= 3){
            toResults()
        }

        setQ(questionList[currentIndex])

    }, [currentIndex]) 
    
    function nextQuestion(event, correct){
        // if no next question, toResults()
        setIndex(currentIndex + 1)
        if (correct){
            setPoints(points + 5)
        }
    }
    
    function toResults(){
        updateState("result")
    }
    
    return (
        <div className='container'>
            <div id='question'>
                <h2>{currentQ.question}</h2>
            </div>
            <div id='answers'>
                {currentQ.answers.map((ans, index) => 
                    <button 
                        key={index}
                        onClick={(e) => {
                            nextQuestion(e, ans.correct);
                        }}
                    >
                        {ans.answer}
                    </button>
                )}
            </div>
            <div id='score'>
                <h3>{points}</h3>
            </div>
        </div>
    );
}