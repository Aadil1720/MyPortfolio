import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import TimelineItem from './TimeLineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
            <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Associate System Engineer, Tata Consultancy Services (TCS)"
            date="June 2025 - Present"
            description="Working on scalable enterprise-level projects using Java, Spring Boot, React Js, Docker, MySql, MongoDB and RESTful APIs."
         />
           <TimelineItem
            title="Associate Software Developer, Ramaera Legal Infotech"
            date="Nov 2024 - April 2025"
           description="Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented microservices with Spring Boot, integrated JWT authentication, and optimized API performance."
          />
          <TimelineItem
            title="Intern, Systemic Altruism"
            date="March 2024 - May 2024"
            certificateLink="https://drive.google.com/file/d/1cSp-5rwUAHsceI4OFYJho64Wv5wW5hXk/view"
            description="Worked on React.js-based web applications, integrating RESTful APIs and improving UI/UX using hooks, props, and state management. Collaborated in a team to deliver responsive, dynamic interfaces."
          />
        />
        </ol>
      </div>
      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
           <SkillItem title="Core Java" value={80} />
          <SkillItem title="Java Springboot" value={70} />
          <SkillItem title="JavaScript" value={80} />
          <SkillItem title="React JS" value={80} />
          <SkillItem title="Node Js" value={80} />
          <SkillItem title="MongoDB" value={70} />
          <SkillItem title="MySQL" value={80} />
          <SkillItem title="Git" value={80} />
           <SkillItem title="Docker" value={50} />
          <SkillItem title="HTML5" value={80} />
          <SkillItem title="CSS" value={70} />
        </ul>
      </div>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Master of Computer Application, IET Lucknow"
            date="2022 — 2024"
            description="CGPA: 8.3"
          />
          <TimelineItem
            title="B.Sc(Maths), CSS University Meerut"
            date="2019 — 2022"
            description="Score: 61%"
          />
          <TimelineItem
            title="12th Standard, Kaushalya world School, Greater Noida"
            date="2017— 2018"
            description="Score: 86%"
          />
          <TimelineItem
            title="High School, Maples Academy, Budhana"
            date="2015— 2016"
            description="CGPA: 10"
          />
        </ol>
      </div>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
           < GrCertificate />
          </div>
          <h3 className="h3">Achievements & Certifications</h3>
        </div>
        <ol className="timeline-list">
          {/* Add your TimelineItems for achievements and certifications here */}
          <TimelineItem
            title="Certification in Web Development"
            date="Sep 19, 2023"
            certificateLink='https://www.udemy.com/certificate/UC-7c65dce5-5baf-452c-8a7f-5ba83d871f27/'
            description="Achieved the web development bootcamp completion certificate by udemy."
          />
          <TimelineItem
            title="Certification in Data Analysis with Python by IBM"
            date=" June 30, 2023"
            certificateLink='https://courses.skillsbuild.skillsnetwork.site/certificates/40c9a78543384888ad589751c77049cb'
            description="successfully completed and received a passing grade in
Data Analysis with Python"
          />
        </ol>
      </div>

    </section>
  );
};

export default Resume;
