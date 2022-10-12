import React from 'react'
import {Accordion} from 'react-bootstrap'

const Blog = () => {
  return (
    <div  className='container'>
      <h4 className='text-bold'>Blog</h4>
      <div className='container w-70'>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is the purpose of react router</Accordion.Header>
          <Accordion.Body>
          ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>how does context api works?</Accordion.Header>
          <Accordion.Body>
          The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. 
          </Accordion.Body>
        </Accordion.Item>
      
        <Accordion.Item eventKey="2">
          <Accordion.Header>how does useref work?</Accordion.Header>
          <Accordion.Body>
          useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
          </Accordion.Body>
        </Accordion.Item>

    </Accordion>
      </div>
    </div>
  )
}

export default Blog