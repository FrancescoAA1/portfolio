import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logo1 from '../assets/images/logo1.jpg';
import logo2 from '../assets/images/logo2.png';
import logo4 from '../assets/images/logo4.png';
import logo3 from '../assets/images/logo3.png';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Mar 2026 - Present"
            iconStyle={{ background: '#0a0a0a', color: 'white' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <div className="timeline-content-with-logo">
              <img src={logo1} alt="Microsoft" className="timeline-logo"/>
              <div>
                <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Microsoft, Kongens Lyngby</h4>
                <p>
                  Dynamics 365 SCM Distribution, Cloud-based enterprise solutions
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2025 - Feb 2026"
            iconStyle={{ background: '#0a0a0a', color: 'white' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <div className="timeline-content-with-logo">
              <img src={logo2} alt="Laerdal" className="timeline-logo"/>
              <div>
                <h3 className="vertical-timeline-element-title">Software Tester</h3>
                <h4 className="vertical-timeline-element-subtitle">Laerdal, Copenhagen</h4>
                <p>
                  Test automation, Quality assurance, Playwright
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2025 - Nov 2025"
            iconStyle={{ background: '#0a0a0a', color: 'white' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <div className="timeline-content-with-logo">
              <img src={logo4} alt="UNIPD" className="timeline-logo"/>
              <div>
                <h3 className="vertical-timeline-element-title">Software Engineer & Consultant</h3>
                <h4 className="vertical-timeline-element-subtitle">Independent — Padua, Italy</h4>
                <p>
                  Full-stack development, blockchain solutions, backend optimization
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025"
            iconStyle={{ background: '#0a0a0a', color: 'white' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <div className="timeline-content-with-logo">
              <img src={logo3} alt="TIME DTU" className="timeline-logo"/>
              <div>
                <h3 className="vertical-timeline-element-title">TIME Program Student</h3>
                <h4 className="vertical-timeline-element-subtitle">Technical University of Denmark — Copenhagen, Denmark</h4>
                <p>
                  International academic exchange in Computer Engineering with multicultural learning environment
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
