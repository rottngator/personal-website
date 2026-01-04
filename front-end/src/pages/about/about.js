import React from 'react';
// import '../home/home.css';
import './about.css';
import Nav from '../../component/nav/nav';
import Footer from '../../component/footer/footer';
import Update from '../../component/updates/update';
import Current from '../../component/current/current';
import Blinkie from '../../component/blinkie_list/blinkie';

const About = () => {
    return (
        <div class="container">
            <div class="main-container"></div>
            <div class="header-section">
                
                <img src='./images/decor/fissh.jpg' alt='left header'></img>
                <Nav />
                <Update />
                <Current />
                <Blinkie />
            </div>
            
            <div class="status-section">
                <p>
                    <i>"Only dead fish swim</i>
                    <br></br>
                    <i>with the <b>current</b>."</i>
                </p>
                <div className='status-img-section'>
                    <img src='./images/decor/pw_headerv1.png' alt='header'/>
                    
                </div>
            </div>
            <div class="content-section">
                <div class="content-section-one">
                    
                    <div className='about-icons-wrapper'> 
                        <img className='about-icon' src='./images/about/pw_abouticon_gmbt1.png' alt='icon' />
                        <br></br>
                        <img className='entity-describer' src='./images/decor/about/entity.gif' alt='entity' />
                        <img className='wizard-describer' src='./images/decor/about/wizard.gif' alt='wizard'/>
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
                        <br></br>
                        <li>
                            <b>AGE:</b> 21 years old
                        </li>
                        <li>
                        <b>ZODIAC:</b> leo
                        </li>
                        <li>
                            <b>PRONOUNS:</b> she / they / any
                        </li>
                        <br></br>
                        <li>
                            <b>TIMEZONE:</b> CST
                        </li>
                    </ul>

                    <br></br>
                    <p>more desribers here</p>

                </div>
                <div class="content-section-two">
                    <p>
                    heya, i'm some dork from the midwest who happens to know a little 
                    coding ( i went to college for it ) though to be specific i have a 
                    degree in <u>web development and design!</u> 
                    <br></br>
                    i'm mostly just working on this website. i wanna start learning how to build games for 
                    fun, and learn how to make my own models for them but that's probably gonna
                    be a while. i've also started learning how to mess with audio, so that's been
                    kinda fun ! 
                    </p>

                    <p>
                    i have social anxiety ( diagnosed ), which unfortunately means i'm not super good at talking 
                    to people. BUT i'm working on it, and i've gotten better since i started college. 
                    all that i ask is that if you decide to interact with me, is that you're patient
                    with me ! i'll try my best to interact with you, i'll attempt to be as social
                    as i can. i'll be awkward, but i'll try my best. :']
                    </p>
                    <p>
                    wip
                    </p>

                    <img src='./images/blinkies/toxic_mold.gif' alt='mold....'/>
                    <img src='./images/decor/about/webbing_it.gif' alt='webbing it'/>
                    <br></br>
                    <img src='./images/blinkies/employee.gif' alt='employee of the month babeeyy'/>
                    <img src='./images/blinkies/like_fish.gif' alt='i like fish' />
                </div>

                <div className='content-section-three'>
                    <p>
                     <h2>THINGS I LIKE</h2>
                    </p>

                    <p>
                        <b>games</b> <img src='./images/decor/about/icon_dividers/pw_icon1.png' alt='icon 1' /> path of titans, 
                            marvel rivals, megabonk, red dead redemption 2, HELLDIVERS 2, dead by daylight,
                            roblox, DEATH STRANDING, the isle, sons of the forest, the forest, phasmophobia, 
                            left 4 dead 2, until dawn, ghost of tsushima, clover pit, powerwash simulator
                    </p>

                    <p>
                        <b>books: </b> the twisted ones by t. kingfisher, jurassic park, the summer hikaru died, 
                        hollow places, 
                    </p>

                    <p>
                        <b>shows: </b> criminal minds, supernatural, the summer hikaru died, stranger things, 
                        older seasons of spongebob squarepants
                    </p>

                    <p>
                        <b>music </b> sleep token, HIMALAYAS, Ghost, odetari, lord huron, sick joy, jiinzo, 
                        the home team, snave, LEAP, mo lowda & the humble, kanii, friday pilots club, 
                        hollywood undead, lil hero, post malone, holywatr, whatsaheart, cade clair, SUPXR, 
                        lady gaga, katy perry, the technicolors
                    </p>

                </div>

                <div className='content-section-four'>
                    <p>
                    <h2>FAV CHARACTERS</h2>


                    <div className='character-grid'>

                        <div className='character-card'>
                        <img src='./images/about/favcharacters/bucky_barnes1.jpg'alt='bucky barnes' />
                            <p>
                                <b>Bucky Barnes</b>
                            </p>
                        </div>

                        <div className='character-card'>
                        <img src='./images\about\favcharacters\loki1.jpg' alt='loki' />
                            <p>
                                <b>Loki</b>
                            </p>
                        </div>

                        <div className='character-card'>
                            <img src='./images/about/favcharacters/gambit1.jpg' alt='gambit' />
                            <p>
                                <b>Gambit</b>
                            </p>
                        </div>

                        <div className='character-card'>
                            <img src='./images/about/favcharacters/steveh1.gif' alt='steve'/>
                            <p>
                                <b>Steve Harrington</b>
                            </p>
                        </div>

                        <div className='character-card' >
                            <img src='./images/about/favcharacters/cap1.jpg' alt='cap' />
                            <p>
                                <b>Captain America</b>
                            </p>
                        </div>

                        <div className='character-card'>
                            <img src='./images/about/favcharacters/rengoku1.jpg' alt='rengoku' />
                            <p>
                                <b>Kyojuro Rengoku</b>
                            </p>
                        </div>

                        <div className='character-card'>
                            <img src='./images/about/favcharacters/terzo1.jpg' alt='Terzo' />
                            <p>
                                <b>Papa Emeritus III</b>
                            </p>
                        </div>

                        <div className='character-card'>
                            <img src='./images/about/favcharacters/cardinal1.jpg' alt='Cardinal' />
                            <p>
                                <b>Cardinal Copia</b>
                            </p>
                        </div>

                        <div className='character-card'>
                            <img src='./images/about/favcharacters/dean1.gif' alt='Dean' />
                            <p>
                                <b>Dean Winchester</b>
                            </p>
                        </div>

                        <div className='character-card'>
                            <img src='./images/about/favcharacters/ellis1.gif' alt='Ellis' />
                            <p>
                                <b>Ellis</b>
                            </p>
                        </div>
                        
                        <div className='character-card'>
                            <img src='./images/about/favcharacters/keegan1.jpg' alt='Keegan' />
                            <p>
                                <b>Keegan P. Russ</b>
                            </p>
                        </div>

                        <div className='character-card'>
                            <img src='./images/about/favcharacters/bob1.jpg' alt='Bob' />
                            <p>
                                <b>Bob</b>
                            </p>
                        </div>

                        <div className='character-card'>
                            <img src='./images/about/favcharacters/alan1.jpg' alt='Alan' />
                            <p>
                                <b>Alan Wake</b>
                            </p>
                        </div>

                        <div className='character-card'>
                            <img src='./images/about/favcharacters/arthur1.jpg' alt='Arthur' />
                            <p>
                                <b>Arthur Morgan</b>
                            </p>
                        </div>

                        <div className='character-card'>
                            <img src='./images/about/favcharacters/price1.jpg' alt='Price' />
                            <p>
                                <b>Captain Price</b>
                            </p>
                        </div>

                        <div className='character-card'>
                            <img src='./images/about/favcharacters/bonnie1.jpg' alt='Bonnie' />
                            <p>
                                <b>Bonnie the Bunny</b>
                            </p>
                        </div>

                        <div className='character-card'>
                            <img src='./images/about/favcharacters/spencer1.jpg' alt='Spencer' />
                            <p>
                                <b>Spencer Reid</b>
                            </p>
                        </div>

                        <div className='character-card'>
                            <img src='./images/about/favcharacters/hotchner1.jpg' alt='Hotch' />
                            <p>
                                <b>Aaron Hotchner</b>
                            </p>
                        </div>


                    </div>

                    </p>
                </div>

                <div className='content-section-five'>
                    <p>
                    <h2>EXTRA</h2>
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