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
                            <b>MBTI:</b>INFP-T
                        </li>
                        <li>
                            <b>AGE:</b> 21 years old
                        </li>
                        <li>
                        <b>ZODIAC: leo</b>
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
                    i'm currently reading Goth by Otsuchi, and playing Ghost of Yotei. plus,
                    i'm working on this website. i wanna start learning how to build games for 
                    fun, and learn how to make my own models for them but that's probably gonna
                    be a while.
                    </p>

                    <p>
                    i have social anxiety ( diagnosed ), which unfortunately means i'm not super good at talking 
                    to people. BUT i'm working on it, and i've gotten better since i started college. 
                    all that i ask is that if you decide to interact with me, is that you're patient
                    with me ! i'll try my best to to interact with you, i'll attempt to be as social
                    as i can. i'll be awkward, but i'll try my best. :']
                    </p>
                    <p>
                    wip
                    </p>

                    <img src='./images/blinkies/toxic_mold.gif' alt='mold....'/>
                    <img src='./images/decor/about/webbing_it.gif' alt='i miss her tails'/>
                </div>

                <div className='content-section-three'>
                    <p>
                    games
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