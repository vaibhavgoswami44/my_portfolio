import React from 'react'

function ProjectItem(props) {
    let { title, git, web, des, webTech } = props
    return (
        <>
            <div className="card p-3" style={{ background: 'black' }}>
                <div className="card-body">
                    <h4 className="card-title">Project Name :{title}</h4>
                    <h6>GitHub Link : <a className="card-link" href={`${git}`} rel="noreferrer" target='_blank'  >{`${git}`}</a> </h6>
                    <h6>Web Link :{web ? <a className="card-link" href={`${web}`} rel="noreferrer" target='_blank'  >{`${web}`}</a> : 'Not Available'}</h6>
                    <h6 className="card-subtitle mb-2 ">Description :{des}</h6>
                    <h6 className="card-text">Web Technology :{webTech}</h6>
                </div>
            </div>
        </>
    )
}

export default ProjectItem