import React from 'react';
import './home.css';
import Nav from '../../component/nav/nav';
import Footer from '../../component/footer/footer';

const Home = () => {
    return (
        <div class="container">
    <div class="main-container"></div>
    <div class="header-section">
        
        <img src='./images/decor/hikaru_yoshiki_header1.jpg' alt='header'></img>
        <Nav />
    </div>
    <div class="status-section">
    <div className='status-img-section'>
            <img src='./images/decor/hikaruhome1.gif' alt='hikaru home'></img>
        </div>
        

    </div>
    <div class="content-section"></div>
    
    <div class="footer-section">
        <Footer />
    </div>
</div>
    );
}

export default Home;