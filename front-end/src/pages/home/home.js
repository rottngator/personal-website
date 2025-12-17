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
        
        <img src='./images/decor/fissh.jpg' alt='left header'></img>
        <Nav />
        <Update />
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
            and look for jobs / freelance. also been interested 
            in getting into marvel comics, so i'll more than
            likely will have something to say about that when 
            i actually get some.
            </p>

            <p>
            i'm very inconsistent when it comes to coding, but i've
            come to realize that's probably because i did it for 
            three years and lost my enjoyment for it. i'm hoping 
            with this website and a few other projects i'm wanting
            to start, i'll rekindle it and become more consistent 
            rather than continually putting it off like i have 
            been for the last couple months.
            </p>

            <p>
            i will also be experimenting with the theme of this 
            particular website a lot until i find something i like,
            and stick to that general theme. i also code on a big 
            ass monitor, so if things look weird for you, that's 
            probably why and i haven't gotten around to making it
            responsive for lots of different monitor sizes. more 
            than likely it looks SUPER weird on mobile. probably
            best to not view it on your phone quite yet.
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