import React from 'react';
import './home.css';
import Nav from '../../component/nav/nav';
import Footer from '../../component/footer/footer';
import Update from '../../component/updates/update';

const Home = () => {
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
        <h2 className='content-title'>WELCOME !</h2>
            <p>
            hello ! welcome to my corner of the web. this 
            is my personal website, which is where i will 
            say <i>many</i> things about my interests and what's
            happening in my life. i'll try and update this site 
            as often as i can, but i'm probably gonna forget.
            if something is borked, i'll try and fix it as soon
            as i can ! 
            </p>

            <p>
                btw if you know me in real life, <b>GET OUT</b> <s>jk i love you</s> 
            </p>
        </div>
        <div class="content-section-two">
            <p>
            i just graduated college, so im still rediscovering
            myself. recently got back into watching shows, and 
            have been watching a lot of anime surprisingly. 
            im going to try and watch as many shows before the
            end of the year, mainly because i have nothing 
            better to do while i learn some new coding languages
            and look for jobs / freelance. feel free to recommend
            some shows for me or some manga for me to read !
            ( i do in fact read, despite popular belief ).
            </p>
        </div>
    </div>
        
    
    <div class="footer-section">
        <Footer />
    </div>
</div>
    );
}

export default Home;