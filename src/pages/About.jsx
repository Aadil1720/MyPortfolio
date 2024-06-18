import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ReactTypingEffect from 'react-typing-effect';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const About = () => {
  
  const handleDownload = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
    toast.success('CV downloaded successfully!');
  };

  return (
    <div className='about active'>
      <header className='h2 article-title'>About Me</header>
      <section className='featured-box about-text'>
        <div className="featured-text">
          <div className="hello">
            <p>Hello, I'm <strong className='strong'>Aadil</strong></p>
          </div>
          <p className="featured-name">
            <ReactTypingEffect
              text={['Web Developer', 'Coder', 'Quick Learner']}
              speed={200}
              eraseSpeed={100}
              eraseDelay={1500}
              typingDelay={1000}
            />
          </p>
          <div className="text-info">
            <p>
              I am a self-driven, meticulous MCA post-graduate skilled 
              at web development, solving problems, and proficient in Core Java.
              <br />
              Seeking opportunities in the field of software development.
            </p>
          </div>
          <div className="text-btn">
            <Link to="/contact">
              <button className="btn hire-btn">Hire me</button>
            </Link>
            <button className="btn" onClick={() => handleDownload('https://drive.google.com/file/d/19l1MqveP6Q-NU0_eU5gQ9V3TnsB7xAzy/view?usp=sharing')}>Download CV <i className="uil uil-file"></i></button>
          </div>
          <div className="social-icons">
            <div className="icon-circle"></div>
            <Link to='https://www.linkedin.com/in/mohd-aadil-029a58263/'>
              <div className="icon"><FaLinkedin /></div>
            </Link>
            <Link to='https://leetcode.com/Aadil_Yasin/'>
              <div className="icon"><SiLeetcode /></div>
            </Link>
            <Link to='https://github.com/Aadil1720'>
              <div className="icon"><FaGithub /></div>
            </Link>
            <a href="https://www.instagram.com/your-instagram-profile/">
              <div className="icon"><FaInstagram /></div>
            </a>
          </div>
        </div>
        <div className="featured-image">
          <img className="image" src="images/avatar.jpeg" alt="avatar" />
        </div>
      </section>
    </div>
  );
}

export default About;
