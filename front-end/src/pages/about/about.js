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
        <i>"Remember that you must die."</i>
    </p>
    <div className='status-img-section'>
            <img src='./images/backgrounds/hikaru_header2.jpg' alt='header'/>
            
        </div>

    </div>
    <div class="content-section">
        <div class="content-section-one">
            <p>
            <img className='about-icon' src='./images/about/hikaru_icon1.jpg' alt='icon' />
            <img src='./images/decor/fragile.gif' alt='fragile' />
            </p>

            <ul className='about-me-list'>
                <li>
                    NAME: gator
                </li>
                <li>
                    NICKNAMES: swamp / thing / fish
                </li>
                <li>
                    AGE: 21
                </li>
                <li>
                    PRONOUNS: she / they / any
                </li>
                <li>
                    TIMEZONE: CST
                </li>
            </ul>


        </div>
        <div class="content-section-two">
            <p>
            hello, i currently only speak english but i want to seriously start 
            learning german and japanese ( so when i do have the money to travel, i 
            won't have to rely as heavily on translaters ). 
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