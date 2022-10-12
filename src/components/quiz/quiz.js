import React from 'react'

import { useLoaderData} from 'react-router-dom'
import { InputGroup } from 'react-bootstrap'

const AllQuiz = () => {
    const quizData = useLoaderData()
    console.log(quizData.data.questions)
    return (
        <div className="quiz container">
            <h4>Quiz for: {quizData.data.name}</h4>
            {
                quizData.data.questions.map(data =>(
                    <div key={data.id}>
                        <h5>{data.question}</h5>
                    </div>
                ))
            }
        </div>
    )
}

export default AllQuiz