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
      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="JavaScript" value={70} />
          <SkillItem title="React JS" value={80} />
          <SkillItem title="Node Js" value={60} />
          <SkillItem title="HTML5" value={80} />
          <SkillItem title="CSS" value={70} />
          <SkillItem title="MongoDB" value={60} />
          <SkillItem title="SQL" value={60} />
          <SkillItem title="Core Java" value={80} />
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
            date="2016— 2017"
            description="Score: 86%"
          />
          <TimelineItem
            title="High School, Maples Academy, Budhana"
            date="2014— 2015"
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
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Fresher"
            date=""
            description=""
          />
        </ol>
      </div>
    </section>
  );
};

export default Resume;