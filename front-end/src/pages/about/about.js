import React from 'react';
import '../home/home.css';
import './about.css';
import Nav from '../../component/nav/nav';
import Footer from '../../component/footer/footer';
import Update from '../../component/updates/update';

const About = () => {
    return (
        <div class="container">
            <div class="main-container"></div>
            <div class="header-section">
                
                <img src='./images/decor/hikaru_yoshiki_header1.jpg' alt='header'></img>
                <Nav />
                <Update />
            </div>
            
            <div class="status-section">
                <p>
                    <i>"Remember that you must die,"</i>
                    <br></br>
                    <i>"Remember that you must <b>live</b>."</i>
                </p>
                <div className='status-img-section'>
                    <img src='./images/backgrounds/hikaru_header2.jpg' alt='header'/>
                    
                </div>
            </div>
            <div class="content-section">
                <div class="content-section-one">
                    
                    <div className='about-icons-wrapper'> 
                        <img className='about-icon' src='./images/about/hikaru_icon2.jpg' alt='icon' />
                        <br></br>
                        <img className='fragile-describer' src='./images/decor/about/fragile.gif' alt='fragile' />
                        <img className='entity-describer' src='./images/decor/about/entity.gif' alt='entity' />
                        <br></br>
                        <img className='flag-icon' src='./images/decor/about/demi_flag.gif' alt='demisexual flag' />
                    </div>

                    <ul className='about-me-list'>
                        <li>
                            <b>NAME:</b> gator
                        </li>
                        <li>
                            <b>NICKNAMES:</b> swamp / thing / fish
                        </li>
                        <li>
                            <b>AGE:</b> 21 years old
                        </li>
                        <li>
                            <b>PRONOUNS:</b> she / they / any
                        </li>
                        <li>
                            <b>TIMEZONE:</b> CST
                        </li>
                    </ul>

                </div>
                <div class="content-section-two">
                    <p>
                    heya, i'm some dork from the midwest who happens to know a little 
                    coding ( i went to college for it ) though to be specific i have a 
                    degree in web development and design!
                    i'm currently reading Goth by Otsuchi,
                    and i'm working on this website. i wanna start learning how to build games for 
                    fun, and learn how to make my own models for them.
                    </p>

                    <p>

                    </p>

                    <p>

                    </p>
                </div>
            </div>
            
            
            <div class="footer-section">
                <Footer />
            </div>
        </div>
    );
}

export default About;