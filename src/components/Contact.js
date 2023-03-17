import React from 'react'
import '../App.css'

function Contact() {
  return (
    <>
      <div className=' contact d-flex flex-column justify-content-center align-items-start'>
        <a href='https://github.com/vaibhavgoswami44' rel="noreferrer" target='_blank'>  <i className="fa fa-github" aria-hidden="true">  /vaibhavgoswami44</i></a>
        <a href='mailto:vaibhavgoswami404@gmail.com' rel="noreferrer" target='_blank'>  <i className="fa fa-envelope" aria-hidden="true">  /vaibhavgoswami404@gmail.com</i></a>
        <a href='https://www.linkedin.com/in/vaibhav-goswami-09734426a' rel="noreferrer" target='_blank'>  <i className="fa fa-linkedin" aria-hidden="true">  /vaibhavgoswami</i></a>
        <a href='https://wa.me/+919687437661' rel="noreferrer" target='_blank'>  <i className="fa fa-whatsapp" aria-hidden="true">  +919687437661</i></a>
        <a href='tel:+919687437661' >  <i className="fa fa-phone" aria-hidden="true">  +919687437661</i></a>

      </div>
    </>
  )
}

export default Contact