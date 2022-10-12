import React from 'react'

import { useLoaderData} from 'react-router-dom'

const Quiz = () => {
    const quizData = useLoaderData()
    console.log(quizData.data)
    return (
        <div className="quiz">
          
        </div>
    )
}

export default Quiz