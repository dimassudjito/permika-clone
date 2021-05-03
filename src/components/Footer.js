import React from 'react';
import {SiInstagram} from 'react-icons/si';
import {AiFillYoutube} from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
        <h5 className="mt-4">Subscribe Form</h5>
        <form className="col-4 mx-auto">
            <input type="email" className="col-12 mt-2 p-1" placeholder="Email Address"/>
            <button type="submit" className="btn-dark col-12 mt-2 mb-2 p-1">Submit</button>
        </form>
        <p className="mt-4">permika@ualberta.ca</p>
        <a href="https://www.instagram.com/"><SiInstagram className="mx-1 text-dark"/></a>
        <a href="https://www.youtube.com/"><AiFillYoutube className="mx-1 text-dark"/></a>
        <p className="mt-4">©2019 by Permika UofA. Proudly created with React</p>
    </div>
  );
};

export default Footer;
