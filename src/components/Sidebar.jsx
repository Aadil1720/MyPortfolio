import React,{useState} from 'react'
import {GiClawSlashes,GiPhone,GiMailbox,GiMayanPyramid,GiCalendar} from "react-icons/gi"
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BiBorderRadius } from 'react-icons/bi';
const Sidebar = () => {
  const [active, setActive] = useState(false);

  const toggleContacts = () => {
    setActive(prevState => !prevState);
  };

  return (
   <aside className={`sidebar ${active ? 'active' : ''}`}>
    <div className='sidebar-info'>
        <figure>
            <img src='images/profile-image.png' alt='' width='100' style={{borderRadius:'50%', border:'solid #38BDF8'}}/>
        </figure>
          <div className='info-content'>
            
           <h1 className='name'>Mohd Aadil</h1>
           <p className='title'>Web Developer</p>
         </div>
         <button className="info_more-btn"  onClick={toggleContacts}>
            <span>Show Contacts</span><GiClawSlashes />
          </button>
          </div>
    <div className="sidebar-info_more" data-sidebar>
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
              <MdEmail />
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:richard@example.com" className="contact-link">
                  mohdadil1j2@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+12133522795" className="contact-link">
                  +91 9068516731
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiCalendar/>
               
              </div>

            </li>

            <li className="contact-item">
              <div className="icon-box">
                <FaLocationDot/>
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Greater Noida, UP, India</address>
              </div>
            </li>
          </ul>

          
        </div>
   </aside>
  )
}
export default Sidebar;
