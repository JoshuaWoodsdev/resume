// FooterForm.js
import React from 'react';

const Footer = () => {
    return (
        <div className="footer-form">
            <div className='form-side-one'>
            <h2>Let's work together</h2>
            <p>
                I would love to learn more about your work, and how we can work together to reach your goal. Also if you would like to join the podcast I'm an email away.
            </p>

            <div className="social-icons">
                {/* Add your social links here */}
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-envelope"></i> {/* Sample icon, replace with actual icons */}
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i>
                </a>
                {/* Add more social links similarly */}
            </div>
             </div>
             <div className='form-holder'>
            <form action="YOUR_BACKEND_ENDPOINT" method="post">
                <input type="text" placeholder="Name" name="name" required />
                <input type="email" placeholder="Email" name="email" required />
                <textarea placeholder="Type your message here" name="message" required></textarea>
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    );
}

export default Footer;
