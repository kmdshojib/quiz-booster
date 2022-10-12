import React from 'react'

import { useLoaderData} from 'react-router-dom'
import { InputGroup } from 'react-bootstrap'

import {toastSuccessText,toastTheme,toastWarningText} from '../../utils/toast'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AllQuiz = () => {
    const quizData = useLoaderData()
    const handlecorrectAnswer = (e) => {
        const inputValue = e.target.value
        const answers = quizData.data.questions.map(({correctAnswer}) => correctAnswer )
        answers.includes(inputValue) ? toast.success(toastSuccessText,toastTheme) : toast.error(toastWarningText,toastTheme)
        console.log(inputValue)
    }
    return (
        <div className="quiz container">
            <ToastContainer />
            <h4>Quiz for: {quizData.data.name}</h4>
            {
                quizData.data.questions.map(data =>(
                    <div key={data.id}>
                        <h5>{data.question}</h5>
                        {
                            data.options.map((options,index)=>(
                                <InputGroup key={index} className='mb-2' >
                                    <InputGroup.Radio name="test" onClick={ handlecorrectAnswer}  id={options} value={options}/>
                                    <label className='ms-2' htmlFor={options}>{options}</label>
                                </InputGroup>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default AllQuiz