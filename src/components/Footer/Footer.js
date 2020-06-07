import React from 'react';
import './Footer.css';
import { UL, Img, Div } from '../Common/Common';

const Footer = () => (
    <Div cName="footer">
        <Div cName="row">
            <Div cName="right">
                <UL>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="tooltip-class" title="Instagram" data-tooltip >
                        <Img src="instagram.png" height="18px"/>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="tooltip-class" title="Twitter" data-tooltip>
                        <Img src="Twitter.png" height="18px" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="tooltip-class" title="Facebook" data-tooltip>
                        <Img src="Facebook.png" height="18px" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="tooltip-class" title="Linkedin" data-tooltip>
                        <Img src="linkedin.png" height="18px" />
                    </a>
                </UL>
            </Div>
        </Div>
    </Div>
);

export default Footer;