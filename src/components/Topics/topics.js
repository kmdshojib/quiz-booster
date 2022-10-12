import React from 'react'

import { useLoaderData,Link } from 'react-router-dom'
import { Card,Button } from 'react-bootstrap'
import './topics.styles.css'

const Topics = () => {
    const topicData = useLoaderData()
    // console.log(topicData.data)
  return (
      <div className='container d-grid grid-sys'>
        {
        topicData.data.map((element) => 
            <Card className='bg-light ' key={element.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={element.logo}/>
                <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Text>Total Quiz: {element.total}</Card.Text>
                    <Button variant="primary"><Link className='text-light' to={element.id.toString()}>Go Quiz</Link></Button>
                </Card.Body>
            </Card>
        )
      }
      </div>
  
  )
}

export default Topics