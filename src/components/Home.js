import React from 'react';
import {SiInstagram} from 'react-icons/si';
import {AiFillYoutube} from 'react-icons/ai';

const Home = () => {
  return (
    <div>
      <div
      className="p-4 mt-4"
      style={{
        backgroundImage: `url(https://static.wixstatic.com/media/411816_f4c1a116481f4937a46476402d219514~mv2.jpg/v1/fill/w_877,h_415,fp_0.50_0.50,q_85/411816_f4c1a116481f4937a46476402d219514~mv2.webp)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1500px 600px",
        }}
      >
          <div
          className="col-4 bg-white m-auto p-5"
          style={{
            width: "1000px",
            height: "500px"
        }}
          >
            <h1 className="mt-5">PERMIKA<br/>EDMONTON</h1>
            <h5 className="mt-3">Who are we?</h5>
            <p className="mt-3">
                Apa kabar? We are the Permika Edmonton, a student body that helps Indonesian students feel at home and for international students to experience the Indonesian community and heritage
            </p>
          </div>
      </div>
      <div className="m-5">
          <h1 className="m-5">WELCOME GREETINGS</h1>
          <h3 className="m-5">EDMONTON INDONESIAN COMMUNITY (EICA)</h3>
          <p className="m-5">On behalf of EICA, we would like to welcome students to Permika UofA, the first Indonesian student group in the University of Alberta. We hope we would have more joint activities with our fellow Indonesians in Permika UofA</p>
          <h3 className="m-5">PERMIKA EXEC TEAM</h3>
          <p className="m-5">On behalf of PERMIKA UofA, we welcome you to the University of Alberta and to our Indonesian Students Association. We hope you enjoy your time here to explore yourself and the Edmonton community. We look forward to seeing you in person very soon!</p>
      </div>
      <div>
        <iframe width="800" height="400" src="https://www.youtube.com/embed/tgbNymZ7vqYhttps://www.youtube.com/watch?list=TLGGn8kwA0w4474wNzAyMjAyMQ&v=b5F7tkOR-9M"></iframe>
      </div>
      <div
      className="p-4 mt-4"
      style={{
        backgroundImage: `url(https://static.wixstatic.com/media/411816_f4c1a116481f4937a46476402d219514~mv2.jpg/v1/fill/w_877,h_415,fp_0.50_0.50,q_85/411816_f4c1a116481f4937a46476402d219514~mv2.webp)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1500px 600px",
        }}
      >
          <div
          className="col-4 bg-white m-auto p-5"
          style={{
            width: "1000px",
            height: "500px"
        }}
          >
            <h1 className="mt-5">CONTACT US</h1>
            <p className="mt-4">
                Interested in getting involved with Permika UofA and discovering more about our work? Contact us today and see what we have to offer!
            </p>
            <p className="mt-5">permika@ualberta.ca</p>
            <a href="https://www.instagram.com/"><SiInstagram className="mx-1 text-dark"/></a>
            <a href="https://www.youtube.com/"><AiFillYoutube className="mx-1 text-dark"/></a>          </div>
      </div>
    </div>
  );
};

export default Home;
