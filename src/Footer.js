import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            
            <div className="row">
            <div className="column">
                <h3>BK INFO</h3>
                <p>About BK</p>
                <p>Fresh Taste</p>
                <p>Investor Relations</p>
            </div>
            <div className="column">
                <h3>CONTACT</h3>
                <p>Help & Support</p>
                <p>Write to us:</p>
                <p>Customer Care</p>
                <p>Vendors</p>
            </div>
            <div className="column">
                <h3>BK CARES</h3>
                <p>Nutrition Information</p>
                <p>Trust & Taste</p>
                <p>Covid-19 Safety</p>
            </div>
            <div className="column">
                <h3>LEGAL</h3>
                <p>Terms and Condition</p>
                <p>Privacy Policy</p>
            </div>
            </div>

            <hr />
                    <h3>TM & Copyright 2020 Burger King India Ltd</h3>
            </div>
    );
}

export default Footer
