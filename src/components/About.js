import React from 'react'

function About() {
  return (
    <>
      <div className='about-page p-3'>
        <h4>About Me</h4>
        <p className='ms-5' > Hi, my name is Vaibhav Goswami, and I am currently study in M.Sc(CA & IT). I completed my BCA from Matrushree L.J. Gandhi B.C.A. and P.G.D.C.A. collage Modasa with a CGPA of 8.03 out of 10. During my last semester, I worked on a project with my team on library management system using ASP.NET with C# as the backend language. I enjoy playing chess and coding while listening to music</p>
        <h4 className='mt-5' >Skills</h4>
        <hr />
        <div className='d-flex justify-content-between mx-3'>
          <div style={{ width: '40%' }}>
            <h5>Language</h5>
          </div>
          <div style={{ width: '40%' }} >
            <h6>HTML</h6>
            <h6>CSS</h6>
            <h6>JavaScript</h6>
          </div>
        </div>
        <hr />
        <div className='d-flex justify-content-between mx-3'>
          <div style={{ width: '40%' }}>
            <h5>Frameworks and Libraries</h5>
          </div>
          <div style={{ width: '40%' }} >
            <h6>React</h6>
            <h6>Redux</h6>
            <h6>Tailwind CSS</h6>
            <h6>BootStrap CSS</h6>
            <h6>Node JS(learning)</h6>
            <h6>Express JS(learning)</h6>
          </div>
        </div>
        <hr />
        <div className='d-flex justify-content-between mx-3'>
          <div style={{ width: '40%' }}>
            <h5>Database</h5>
          </div>
          <div style={{ width: '40%' }} >
            <h6>MongoDB(learning)</h6>
          </div>
        </div>
        <hr />
        <div className='d-flex justify-content-between mx-3'>
          <div style={{ width: '40%' }}>
            <h5>Program and Tools</h5>
          </div>
          <div style={{ width: '40%' }}>
            <h6  >VS code</h6>
          </div>
        </div>
        <hr />

        <div>
          <a  href='https://drive.google.com/file/d/1F4TSpxE8d5EnMaySEDuJ085biPfd6ahD/view?usp=drivesdk'>  <button className='btn btn-primary' >Resume</button></a>
        </div>

      </div>
    </>
  )
}

export default About