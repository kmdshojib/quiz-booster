import React,{useState} from 'react'

import { useLoaderData} from 'react-router-dom'
import { InputGroup,Modal,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEye } from '@fortawesome/free-solid-svg-icons'

import {toastSuccessText,toastTheme,toastWarningText} from '../../utils/toast'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AllQuiz = () => {
    const [show, setShow] = useState(false);
    const quizData = useLoaderData()
    const handlecorrectAnswer = (e) => {
        const inputValue = e.target.value
        const answers = quizData.data.questions.map(({correctAnswer}) => correctAnswer )
        answers.includes(inputValue) ? toast.success(toastSuccessText,toastTheme) : toast.error(toastWarningText,toastTheme)
    }
    

    const handleClose = (e) =>e.target && setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="quiz container">
            <ToastContainer />
            <h4>Quiz for: {quizData.data.name}</h4>
            {
                quizData.data.questions.map(data =>(
                    <div key={data.id}>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Correct Answer</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{data.correctAnswer}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <h5>{data.question}</h5>
                        <FontAwesomeIcon onClick={handleShow} icon={faEye} />
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