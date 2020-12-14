import React from 'react';

import projectStyles from './styling/project.module.scss';

const Project = props => {
    return (
        <div className={projectStyles.project_container}>
            <div className={projectStyles.project_content}>
                <div className={projectStyles.project_content_inner}>
                    <h4>{props.title}</h4>
                    <h5>Utilizing:</h5>
                    <div className={projectStyles.project_content_list}>
                        <ul className={projectStyles.project_content_list_ul1}>
                            <li>{props.skill1}</li>
                            <li>{props.skill2}</li>
                            <li>{props.skill3}</li>
                            <li>{props.skill4}</li>
                        </ul>
                        <ul>
                            <li>{props.skill5}</li>
                            <li>{props.skill6 ? props.skill6 : ''}</li>
                            <li>{props.skill7 ? props.skill7 : ''}</li>
                            <li>{props.skill8 ? props.skill8 : ''}</li>
                        </ul>
                    </div>
                    <div className={projectStyles.buttons}>
                        <a href={props.url1} target='_blank' rel="noopener noreferrer">Visit Project</a>
                        <a href={props.url2} target='_blank' rel="noopener noreferrer">View Source</a>
                    </div>
                </div>
            </div>
            <div className={projectStyles.image}>
                <img src={props.img} alt="Project"/>
                <div className={projectStyles.image_overlay}>
                    <p className={projectStyles.image_desc}>
                        {props.descBlack1} <span>{props.descPink1} </span>
                        {props.descBlack2} <span>{props.descPink2} </span>
                        {props.descBlack3} <span>{props.descPink3} </span>
                        {props.descBlack4} <span>{props.descPink4} </span>
                        {props.descBlack5}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Project;