import React,{useState} from 'react'

import { useLoaderData} from 'react-router-dom'
import { InputGroup,Modal,Button } from 'react-bootstrap'
import {toastSuccessText,toastTheme,toastWarningText} from '../../utils/toast'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './quiz.css'

const AllQuiz = () => {
    const [show, setShow] = useState(false);
    const [answer, setAnswer] = useState([])
    const quizData = useLoaderData()
    const handlecorrectAnswer = (e) => {
        const inputValue = e.target.value
        const answers = quizData.data.questions.map(({correctAnswer}) => correctAnswer )
        answers.includes(inputValue) ? toast.success(toastSuccessText,toastTheme) : toast.error(toastWarningText,toastTheme)
    }
    // modal shoowHide
    const handleClose = () => setShow(false)

    const handleShow = (e) => {
        setAnswer(e.target.id)
        setShow(true);
    }

    

    return (
        <div className="quiz container">
            <ToastContainer />
            <h4>Quiz for: {quizData.data.name}</h4>
            {
                quizData.data.questions.map((data,index) =>(
                    <div key={data.id}>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Correct Answer</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{answer}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>

                        <div className='d-flex '>
                            <h6 className='me-2'>Question:{index+1} {data.question}</h6>
                            <Button className="answer-btn" id={data.correctAnswer} onClick={handleShow}>See Answer</Button>
                        </div>
                        {
                            data.options.map((options,index)=>(
                                <InputGroup key={index} className='mb-2 ' >
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