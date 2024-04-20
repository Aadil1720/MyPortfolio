import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ReactTypingEffect from 'react-typing-effect';
import { toast } from "react-toastify"
import { Link } from 'react-router-dom';
const About = () => {
  const cvFilename = 'resume_latest.pdf';
  const cvURL = '/CVs/' + cvFilename;
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvURL;
    link.download = cvFilename;
    document.body.appendChild(link);
    setTimeout(() => {
      link.click();
      document.body.removeChild(link);
      toast.success('CV downloaded successfully!', true);
    }, 500);
  };
  return (
    <div className='about active'>
      <header className='h2 article-title'>About Me</header>
      <section className='featured-box about-text'>
        <div className="featured-text">
          <div className="hello">
            <p>Hello I'm <strong className='strong'>Aadil</strong></p>
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
            <p> I am a self-driven meticulous MCA post-graduate skilled 
            at web-development, solving problems and proficient in Core java.
            <br/> Seeking opportunities in the field of software development.</p>
          </div>
          <div className="text-btn">
            <Link to="/contact">
              <button className="btn hire-btn">Hire me</button>
            </Link>
            <button className="btn" onClick={handleDownload}>Download CV <i className="uil uil-file"></i></button>
          </div>
          <div className="social-icons">
            <div className="icon-circle"></div>
            <Link to='https://www.linkedin.com/in/mohd-aadil-029a58263/'>
            <div className="icon">
            <FaLinkedin /></div>
            </Link>
             <Link to='https://leetcode.com/Aadil_Yasin/'>
             <div className="icon"><SiLeetcode /></div>
             </Link>
             <Link to='https://github.com/Aadil1720'>
             <div className="icon"><FaGithub /></div>
             </Link>
            <div className="icon"><a href=""></a><FaInstagram /></div>
          </div>
        </div>
        <div className="feauterd-image">
          <img className="image" src="images/avatar.jpeg" alt="avatar" />
        </div>
      </section>
    </div>
  );
}

export default About;
