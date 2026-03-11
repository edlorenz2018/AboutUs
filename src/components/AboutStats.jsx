import React from "react";
import "./AboutStats.css";
import team from "../assets/team.png";
import CountUp from "react-countup";
import CEO from "../assets/kemariceo.png"
import FINANCE from "../assets/finance.png"
import HR from "../assets/hrofficer.png"
function AboutStats() {
  return (
    <section className="about-stats">
      <div className="stats-container">

        {/* LEFT IMAGE */}
        <div className="stats-image">
          <img src={team} alt="team" />
        </div>

        {/* RIGHT GRID */}
        <div className="stats-grid">

          <div className="stat-card">
            <h2>
              <CountUp end={98} duration={20} suffix="%" />
            </h2>
            <p>Complete customer satisfaction</p>
          </div>

          <div className="stat-card">
            <h2>
              <CountUp end={50} duration={20} suffix="+" />
            </h2>
            <p>Projects Completed</p>
          </div>

          <div className="stat-card">
            <h2>
              <CountUp end={99} duration={20} suffix="+" />
            </h2>
            <p>Skilled Personnel</p>
          </div>

          <div className="stat-card">
            <h2>
              <CountUp end={10} duration={20} suffix="+" />
            </h2>
            <p>Years of industry experience</p>
          </div>

        </div>

      </div>

      {/* CENTERED PARAGRAPH BELOW */}
      <p className="about-paragraph">
       Kemari is a systems integration company focused on building strong 
       and dependable technology infrastructures for businesses and 
       institutions. We work behind the scenes to ensure environments 
       are secure, organized, and technically sound. Our services 
       include design and layouts, CCTV systems, PABX systems, 
       structured cabling, and all auxiliary works, delivered 
       with precision and professionalism. Our role is to provide
        structured, well-planned installations that support daily 
        operations and long-term growth. Every project is approached
         with careful planning and technical discipline to ensure 
         systems function smoothly within their intended environment. 
         At Kemari, we understand that modern operations rely on stable
          and properly implemented systems and we are committed to
           delivering that foundation.
      </p>
      {/* MISSION VISION VALUES */}
<div className="mvv-container">

  <div className="mvv-card">
    <div className="mvv-title">MISSION</div>

    <div className="mvv-content">
      <h3>Mission</h3>
      <p>
        Our mission is to provide protection and security to our clients 
        through a bespoke service tailored to their specific needs, 
        ultimately the safety and security of the client’s staff, 
        premises, assets and the general public is our highest priority
      </p>
    </div>
  </div>

  <div className="mvv-card">
    <div className="mvv-title">VISION</div>

    <div className="mvv-content">
      <h3>Vision</h3>
      <p>
        We are committed to the ongoing improvement of the services we 
        provide to our clients. By investing in and developing our most 
        important assets, our staff, we aim to achieve all our goals 
        and exceed our clients’ expectations. Through our commitment 
        to high standards it is our vision to earn the trust of our 
        clients by delivering the best quality security services within
         the Philippines.
      </p>
    </div>
  </div>

  <div className="mvv-card">
    <div className="mvv-title">VALUES</div>

    <div className="mvv-content">
      <h3>Values</h3>
      <p>
        As a company and as individuals we value above all else honesty,
         integrity, unselfishness, professionalism and mutual respect. 
         For our staff, we offer a rewarding and challenging environment
          where personal development can flourish. We hold ourselves 
          accountable to our clients, staff and partners by honouring 
          our commitments, providing results and continually striving 
          to provide the highest quality security services.
      </p>
    </div>
  </div>

</div>
    {/* TEAM SECTION */}
<div className="team2-section">

  <h2 className="team2-phrase">
    Our strength lies in the people behind the systems a team driven by
    innovation, collaboration, and technical excellence.
  </h2>

  <div className="team2-grid">

    {/* MEMBER */}
    <div className="team2-card">

      <div className="team2-avatar">
        <img src={CEO} alt="member"/>
      </div>
      <h3>Loreke V. Burbos</h3>
      <p className="team2-role">
        CEO/PRESIDENT
      </p>

      <p className="team2-desc">
        The CEO of Kemari guides the company in providing reliable 
        and well-structured technology systems for businesses
         and institutions.
      </p>

      
    </div>


    <div className="team2-card">
  
      <div className="team2-avatar">
        <img src={FINANCE} alt="member"/>
      </div>

      <h3>Olivia Bennett</h3>
      <p className="team2-role">
        Finance Manager.
      </p>

      <p className="team2-desc">
       The Finance Manager at Kemari oversees financial planning
        and management, ensuring the company’s resources are used 
        efficiently to support growth and stable operations.
      </p>

      
    </div>


    <div className="team2-card">
    
      <div className="team2-avatar">
        <img src={HR} alt="member"/>
      </div>

      <h3>Ferdilisa V. Sulat</h3>
      <p className="team2-role">
        HR OFFICER
      </p>

      <p className="team2-desc">
        The HR Officer at Kemari manages human resources,
         fostering a supportive work environment and ensuring
          effective recruitment, development, and employee well-being.
      </p>

    </div>
  </div>
</div>
    </section>
  );
}

export default AboutStats;