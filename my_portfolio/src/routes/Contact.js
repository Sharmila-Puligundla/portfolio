import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mainpro from '../components/Mainpro'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
     <Navbar/>
     <Mainpro heading="CONTACT" text="Lets have a chat"/>
     <Form/>
     <Footer/>
    </div>
  )
}

export default Contact
