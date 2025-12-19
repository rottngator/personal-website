import React from 'react';
import './byf.css';
import Nav from '../../../component/nav/nav';
import Footer from '../../../component/footer/footer';
import Update from '../../../component/updates/update';

const Byf = () => {
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
        <h2 className='content-title'>BE YOUR FRIEND !</h2>
            <p>
            content section 1
            </p>
        </div>
        <div class="content-section-two">
            <p>
            content section 2
            </p>
        </div>
    </div>
        
    
    <div class="footer-section">
        <Footer />
    </div>
</div>
    );
}

export default Byf;