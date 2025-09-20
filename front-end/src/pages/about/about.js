import React from 'react';
import './about.css';
import Nav from '../../component/nav/nav';
import Footer from '../../component/footer/footer';

const About = () => {
    return (
        <div>
            <div className='big-aquarium-container'>

                <div className='site-header-image-area'>
                </div>

                <div className='da-scroll'>
                    <div className='scroll-text'>
                        <img src='./images/blinkies/friday_13.gif' alt='friday the 13th blinkie' />
                        <img src='./images/blinkies/something_fishy.gif' alt='fish' />
                        <img src='./images/blinkies/toxic_mold.gif' alt='toxic mold babee' />
                        <img src='./images/blinkies/da_blinkie.gif' alt='da blinkie?!' />
                        <img src='./images/blinkies/i_miss_her_tails.jpg' alt='i miss her tails' />
                    </div>
                </div>

                <div className='aquarium-content-columns'>
                    <div className='aquarium-column menu-column'>
                        <Nav />
                    </div>

                    <div className='aquarium-column main-content-column'>
                    <div className='about-me-container'>
                        <img src='./images/about/alan_icon2.jpg' alt='icon' />
                        
                        <div className='about-info-grid'>
                            <div className='about-label'>NAME:</div>
                            <div className='about-info'>gator</div>

                            <div className='about-label'>ALIASES:</div>
                            <div className='about-info'>swamp / fish / Thing</div>

                            <div className='about-label'>AGE:</div>
                            <div className='about-info'>21</div>

                            <div className='about-label'>MBTI:</div>
                            <div className='about-info'>infp-t</div>

                            <div className='about-label'>ZODIAC:</div>
                            <div className='about-info'>leo</div>

                            <div className='about-label'>TIMEZONE:</div>
                            <div className='about-info'>MST</div>

                            <div className='about-label'>ANIMAL:</div>
                            <div className='about-info'>microraptor / mole</div>

                            <div className='about-label'>SEASON:</div>
                            <div className='about-info'>summer / winter</div>

                            <div className='about-label'>FAV COLORS:</div>
                            <div className='about-info'>dark purple / green</div>

                            <div className='about-label'>REL. STATUS:</div>
                            <div className='about-info'>single</div>



                        </div>
                    </div>
                        

                    </div>
                    
                    <div className='aquarium-column sidebar-column'>
                        <h2>LINKS !</h2>
                        <ul className='link-list'>
                            <li><a href='https://github.com/gator-bones'>github</a></li>
                            <li><a href='https://steamcommunity.com/profiles/76561198392106811/'>steam</a></li>
                        </ul>
                    </div>
                    
                    <div className='aquarium-column sidebar-column'>
                        <h2>idk yet</h2>
                        <ul className='todo-list'>
                        </ul>
                    </div>

                    <div className='aquarium-column main-content-column'>
                        <h2>hi hi!</h2>
                        <p>
                            it's nice to meet you stranger ! i'm gator. or swamp, or fish, or
                            however you come to meet me. i am 21 years old, and i'm a web developer
                            that just graduated from college. which is.. terrifying. i have
                            social anxiety, which causes me to have a lot of trouble making and 
                            keeping connections. 
                        </p>
                    </div>

                    <div className='aquarium-column sidebar-column'>
                        <h2>MUSIC !</h2>
                        <ul className='todo-list'>
                        </ul>
                    </div>
                </div>

                <Footer />
            </div>

            {/* <img src='./images/decor/loserTag.png' 
            alt='loser tag' className='loser-tag' /> */}
        </div>
    );
}

export default About;