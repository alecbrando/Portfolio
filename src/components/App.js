import React, { useEffect, useRef } from 'react';
import {gsap, TimelineLite, TweenMax, Power3} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

import Header from './Header';
import Footer from './Footer';
import Project from './Project';

import './styling/styles.scss';
import landingStyles from './styling/landing.module.scss';
import logo from './images/logo.png';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img5 from './images/whatsapp.png';

import upperWave from './images/upperWave.svg';
import lowerWave from './images/lowerWave.svg';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    let mainLogo = useRef(null);
    let section = useRef(null);
    let hero = useRef(null);
    let projects = useRef(null);
    let projectList = useRef(null);
    let about = useRef(null);
    let skills = useRef(null);
    let tl = new TimelineLite({delay: 1});

    useEffect(() => {
        const heroImg = mainLogo.children[0];
        const heroSaxon = mainLogo.children[1].children[0];
        const heroDesc = mainLogo.children[2].children[0];
        const projectH5 = projects.firstElementChild.children[0];
        const projectH4 = projects.firstElementChild.children[1];

        const project1 = projectList.children[0];
        const project2 = projectList.children[1];
        const project3 = projectList.children[2];
        const project4 = projectList.children[3];
        const project5 = projectList.children[4];

        const aboutHeader = about.children[0];
        const aboutP1 = about.children[1];
        const aboutP2 = about.children[2];
        const aboutP3 = about.children[3];

        const skillsHeader = skills.children[0];
        const skill1 = skills.children[1].children[0];
        const skill2 = skills.children[1].children[1];
        const skill3 = skills.children[1].children[2];
        const skill4 = skills.children[1].children[3];

        const projectArray = [project1, project2, project3, project4, project5];
        const projectTitle = [projectH5, projectH4];
        const aboutArray = [aboutHeader, aboutP1, aboutP2, aboutP3];
        const skillsArray = [skillsHeader, skill1, skill2, skill3, skill4];

        TweenMax.to(hero, 0, {css: {visibility: 'visible'}});

        tl.staggerFrom([heroImg, heroSaxon, heroDesc], 1, {
            y: 90,
            opacity: 0, 
            ease: Power3.easeOut, 
            delay: .2 
        }, .15)

        // HERO LOGO

        projectTitle.forEach((el, index) => {
            gsap.fromTo(el, {
                opacity: 0,
                y: 100,
            }, {
                y: 0,
                duration: .5,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index+1}`,
                    trigger: projectH4,
                    start: 'top 90%',
                    toggleActions: 'play none none pause',
                }
            });
        })

        // PROJECTS

        projectArray.forEach((el, index) => {
            gsap.fromTo(el, {
                opacity: 0,
                y: 80,
            }, {
                y: 0,
                duration: .3,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index+1}`,
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            });
        })
        
        // ABOUT SECTION

        aboutArray.forEach((el, index) => {
            gsap.fromTo(el, {
                opacity: 0,
                y: 100,
            }, {
                y: 0,
                duration: .4,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index+1}`,
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            });
        })

        // SKILLS

        skillsArray.forEach((el, index) => {
            gsap.fromTo(el, {
                opacity: 0,
                y: 100,
            }, {
                y: 0,
                duration: .4,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index+1}`,
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            });
        })

        tl.from(section, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1)

    });

    return (
        <div>
            <Header />
                <div ref={el => hero = el} className={landingStyles.hero}>
                    <div className={landingStyles.inner_hero}>
                        <div ref={el => mainLogo = el} className={landingStyles.inner_hero_container}>
                            <img src={logo} alt="Pink Logo"/>
                            <div className={landingStyles.inner_hero_line}>
                                {/* <h1>Full</h1> */}
                            </div>
                            <div className={landingStyles.inner_hero_line}>
                                <h2>Full Stack Developer</h2>
                            </div>
                        </div>
                        <section ref={el => section = el}>
                            <a href="#projects">Projects</a><span className={landingStyles.line}>|</span>
                            <a href="#about">About</a><span className={landingStyles.line}>|</span>
                            <a href="https://github.com/alecbrando" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </section>
                    </div>
                </div>
                <div id='projects' className={landingStyles.workList_container}>
                    <div ref={el => projects = el} className={landingStyles.workList_container_inner}>
                        <div className={landingStyles.workList_container_heading}>
                            <h4>Project</h4>
                            <h3>Featured Work</h3>
                        </div>
                        <div ref={el => projectList = el} className={landingStyles.workList_container_projects}>
                            <Project
                             img={img6}
                             title='Red Flag App'
                             skill1='React Native'
                             skill2='Redux'
                             skill3='GraphQL'
                             skill4='AWS Amplify'
                             skill5='AWS S3 Bucket'
                             skill6='AWS Cognito'
                             skill7='AWS DynamoDB'
                             skill8='AWS AppSync'
                             url1='https://redflagapp.site/'
                             url2=''
                             url3=''
                             dribble='false'
                             descBlack1='Red Flag App is a dating app made with '
                             descPink1=' React Native / Redux'
                             descBlack2='. This is a serverless backend with AWS AppSync that connects to DynamoDB through GraphQL. User authentication is established with an OTP through SMS done with AWS Cognito'
                             descPink2=' which was implemented with AWS amplify. AWS S3 bucket was executed with userId separated folder’s and key’s accessing each photo. '
                             descBlack3='Distances between users was handled by geohashing the users location and distance chosen. '
                             descPink3='Lastly this was all done with the Expo CLI client.'
                             />
                            <Project
                             img={img7}
                             title='High Grade'
                             skill1='React Native'
                             skill2='Redux'
                             skill3='GraphQL'
                             skill4='AWS Amplify'
                             skill5='Expo CLI'
                             skill6='AWS Cognito'
                             skill7='AWS DynamoDB'
                             skill8='AWS AppSync'
                             url1=''
                             url2=''
                             url3=''
                             dribble='false'
                             descBlack1='High Grade was made with '
                             descPink1=' React Native / Redux'
                             descBlack2='. This is a serverless backend with AWS AppSync that connects to DynamoDB through GraphQL. User authentication is done with AWS Cognito'
                             descPink2=' which was implemented with AWS amplify. Admin accesibility to add drop products and merch as well as send out notifications to users. '
                             descBlack3='Lastly this was all done with the Expo CLI client. '
                             descPink3=''
                             />
                            <Project
                             img={img5}
                             title='WhatsApp Clone'
                             skill1='React Native'
                             skill2='Redux'
                             skill3='GraphQL'
                             skill4='AWS Amplify'
                             skill5='AWS AppSync'
                             skill6='AWS Cognito'
                             skill7='AWS DynamoDB'
                             skill8='Expo CLI'
                             url1='https://github.com/alecbrando/whatsAppClone'
                             url2='https://github.com/alecbrando/whatsAppClone'
                             url3=''
                             dribble='false'
                             descBlack1='WhatsApp clone is made with '
                             descPink1=' React Native / Redux'
                             descBlack2='. This is a serverless backend with AWS AppSync that connects to DynamoDB through GraphQL.'
                             descPink2='User authentication is done with AWS Cognito '
                             descBlack3='which was implemented with AWS amplify. '
                             descPink3='Lastly this was all done with the Expo CLI client.'
                             />
                            <Project
                             img={img1}
                             title='Digitize'
                             skill1='React'
                             skill2='Redux'
                             skill3='Flask'
                             skill4='SQLAlchemy'
                             skill5='Python'
                             skill6='Javascript'
                             skill7='Git'
                             skill8='CSS/SCSS'
                             url1='https://digitize-me.herokuapp.com/'
                             url2='https://github.com/alecbrando/Digitize'
                             url3='https://dribbble.com/shots/14642526-Digitize-me'
                             dribble='false'
                             descBlack1='Digitize is a clone of the famous site Goat.com made with'
                             descPink1=' React / Redux'
                             descBlack2='. This application connects to Flask API end routes that populate the website with Cameras instead of shoes.'
                             descPink2='User authentication'
                             descBlack3='made possible using JWT Token in the '
                             descPink3='backend.'
                             />
                             <Project
                             img={img4}
                             title='Twitchr'
                             skill1='React'
                             skill2='Redux'
                             skill3='Sequelize'
                             skill4='Express'
                             skill5='CSS/SCSS'
                             skill6='Javascript'
                             skill7='NodeJS'
                             skill8='AWS'
                             url1='https://twitchrr.herokuapp.com/'
                             url2='https://github.com/alecbrando/Twitchr'
                             url3=''
                             dribble='false'
                             descBlack1='A'
                             descPink1='Solo'
                             descBlack2='project clone of Unsplash built'
                             descPink2=' with a Express on the backend.'
                             descBlack3='Utilizing AWS technology to store users photos and store the url reference in the backend maintained by '
                             descPink3='React / Redux.'
                             descBlack4='User'
                             descPink4='authentication'
                             descBlack5='was accomplished with a JWT and CSRF.'
                             />
                            <Project
                             img={img2}
                             title='Galactic Brite'
                             skill1='React'
                             skill2='Redux'
                             skill3='Material UI'
                             skill4='Flask'
                             skill5='SQLAlchemy'
                             skill6='CSS/SCSS'
                             skill7='Javascript'
                             skill8='Python'
                             url1='http://galactic-brite.herokuapp.com/'
                             url2='https://github.com/jlgranof/Galactic-Brite'
                             url3=''
                             dribble='false'
                             descBlack1='A'
                             descPink1='group'
                             descBlack2='project clone of Event Brite but Star Wars Edition'
                             descPink2=' with a Flask backend.'
                             descBlack3='Additionally taking advantage of a massive Star Wars API to populate thousands of random events manage with '
                             descPink3='React / Redux.'
                             descBlack4='User'
                             descPink4='authentication'
                             descBlack5='was accomplished with a JWT token.'
                             />
                            <Project
                             img={img3}
                             title='Question Forum'
                             skill1='Pug'
                             skill2='Express'
                             skill3='Boostrap'
                             skill4='Javascript'
                             skill5='Node.js'
                             skill6='CSS'
                             skill7='Sequelize'
                             skill8=''
                             url1='http://the-question-forum.herokuapp.com/'
                             url2='https://github.com/ivanhroth/question-forum'
                             url3=''
                             dribble='true'
                             descBlack1='The Question Forum is a '
                             descPink1='Stack Overflow'
                             descBlack2=' clone built with pug, express and managed with postgres and sequelize in the backend.'
                             descPink2='The design was establish with boostrap and CSS.'
                             />
                        </div>
                    </div>
                </div>
                <div className={landingStyles.content_container}>
                    <img src={upperWave} alt="Wave"/>
                    <div id='about' className={landingStyles.content_box}>
                        <div ref={el => about = el} className={landingStyles.content_about}>
                            <h4>Software Engineer<strong> |</strong><span> Alec Garcia</span></h4>
                            <p>With a passion for software engineering, I have the expertise in languages and frameworks such as React, Redux, Javascript, SQLAlchemy, Flask, HTML and CSS. As a confident individual with the skills to succeed I envision an exciting future in the industry. <strong><a href="https://docs.google.com/document/u/2/d/e/2PACX-1vT1Ti-aqFSUzszkzYeYMyRuLxPSnU4UfwJpFWALKliF8e5DpK7JiqirFWVuKGl5G8B0E22M0RexCa8q/pub">Resume</a></strong></p>
                            <p>Delivering a fast and elegant user experience is at the heart of my programming philosphy.</p>
                            <p><a  href="mailto:alecbrandongarcia@gmail.com">Send email</a></p>
                        </div>
                        <hr/>
                        <div ref={el => skills = el} className={landingStyles.content_skills}>
                            <h4>Skills<span>.</span></h4>
                            <ul>
                                <li>
                                    <h5><span>Front End</span>:</h5>
                                    <section>React, React Native, Redux, JavaScript, HTML, CSS/SCSS, Front-end Frameworks  <p> - (Bootstrap / Material-UI / Semantic ui)</p> </section>
                                </li>
                                <li>
                                    <h5><span>Backend</span>:</h5>
                                    <p>NodeJS, Express, Flask, SQLAlchemy, Python, GraphQL</p>
                                </li>
                                <li id='contact'>
                                    <h5><span>Other</span>:</h5>
                                    <p>Git/GitHub, Docker, AWS AppSync, AWS Amplify</p>
                                </li>
                                <li>
                                    <h5><span>Learning</span>:</h5>
                                    <p>Photoshop, After Effects, Data Science</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src={lowerWave} alt="Wave"/>
                </div>
            <Footer />
        </div>
    );
}

export default App;