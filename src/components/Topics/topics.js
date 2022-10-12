import React from 'react'

import { useLoaderData,Link } from 'react-router-dom'
import { Card,Button } from 'react-bootstrap'
import './topics.styles.css'

const Topics = () => {
    const topicData = useLoaderData()
  return (
      <div className='container'>
        <div className='mb-2 mt-5'>
            <div className='d-flex'>
                <img className='img-header' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTFj0H0kx9MOiv-Hom7PUOzTD1QMdxaLtOJFU0G5ghTax79tULRC7JgwDcqnTCNgeX-c&usqp=CAU" alt="site imag"/>
                <h4 className='text-bold ms-2 mt-5'>This Quiz Booster will help you to evalueate your Coding skills.</h4>
            </div>
            
        </div>
            <div className='container d-grid grid-sys mt-5'>
                {
                topicData.data.map((element) => 
                    <Card className='backgrnd' key={element.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={element.logo}/>
                        <Card.Body>
                            <Card.Title>{element.name}</Card.Title>
                            <Card.Text>Total Quiz: {element.total}</Card.Text>
                            <Button variant="primary"><Link className='text-light' to={`quizpage/${element.id.toString()}`}>Go Quiz</Link></Button>
                        </Card.Body>
                    </Card>
                )
                }
        </div>
      </div>
  
  )
}

export default Topics