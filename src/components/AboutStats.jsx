import React from "react";
import "./AboutStats.css";
import team from "../assets/team.png";
import CountUp from "react-countup";
import CEO from "../assets/kemariceo.png"
import FINANCE from "../assets/finance.png"
import HR from "../assets/hrofficer.png"
import ACC from "../assets/accountingofficer.png"
import ADMIN from "../assets/Admin.png"
import CAD from "../assets/cad.png"
import DRIVER from "../assets/driver.png"
import HEAD from "../assets/head.png"
import PERSONNEL from "../assets/personnel.png"
import SURVEYOR from "../assets/quantitysurveyor.png"
import SITE1 from "../assets/site1.png"
import SITE2 from "../assets/site2.png"
import SUPERVISOR from "../assets/superviser.png"
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
      {/* OUR TEAM SECTION */}
<div className="team-section">

  <div className="team-header">
    <span className="team-small">Our Team</span>
    <h2>Meet our <span>visionary team</span></h2>

    <p>
      Our team is our greatest asset. We bring together a diverse group of 
      talented professionals with a shared passion for technology and innovation.
    </p>
  </div>

  <div className="team-grid">

    <div className="team-card">
      <img src={CEO} alt="CEO" />
      <h4>Loreke V. Burbos</h4>
      <p>CEO/PRESIDENT</p>
    </div>

    <div className="team-card">
      <img src={FINANCE} alt="CFO" />
      <h4>Maricel S. Burbos</h4>
      <p>FINANCE MANAGER</p>
    </div>

    <div className="team-card">
      <img src={HR} alt="CTO" />
      <h4>Ferdilisa V. Sulat</h4>
      <p>HR OFFICER</p>
    </div>

    <div className="team-card">
      <img src={ACC} alt="CMO" />
      <h4>Donabel V. Tapdasan</h4>
      <p>ACCOUNTING OFFICER</p>
    </div>

    <div className="team-card">
      <img src={ADMIN} alt="Advisor" />
      <h4>Maria Fatima B. Tapic</h4>
      <p>ADMIN/PURCHASING</p>
    </div>

    <div className="team-card">
      <img src={DRIVER} alt="Operations" />
      <h4>Rosauro T. Sabellon</h4>
      <p>PURCHASING DRIVER</p>
    </div>

    <div className="team-card">
      <img src={SURVEYOR} alt="Marketing" />
      <h4>Rachel Marie L. Miranda</h4>
      <p>QUANTITY SURVEYOR</p>
    </div>

    <div className="team-card">
      <img src={SUPERVISOR} alt="Engineer" />
      <h4>Ramil Handumon</h4>
      <p>PROJECT SUPERVISOR</p>
    </div>
    <div className="team-card">
      <img src={CAD} alt="Engineer" />
      <h4>Jogie Anne T. Candol</h4>
      <p>CAD OPERATOR</p>
    </div>
    <div className="team-card">
      <img src={SITE2} alt="Engineer" />
      <h4>Princess Lea Canlas</h4>
      <p>SITE ENGINEER/PASEO</p>
    </div>
    <div className="team-card">
      <img src={SITE1} alt="Engineer" />
      <h4>Reynzo N. Olila</h4>
      <p>SITE ENGINEER/VERTEX</p>
    </div>
    <div className="team-card">
      <img src={HEAD} alt="Engineer" />
      <h4>Mario L. Aparis</h4>
      <p>TECHNICAL HEAD</p>
    </div>
    <div className="team-card">
      <img src={PERSONNEL} alt="Engineer" />
      <h4>Angelito N. Abalo</h4>
      <p>TECHNICAL PERSONNEL/OUTSIDE CEBU</p>
    </div>
    <div className="team-card">
      <img src={HEAD} alt="Engineer" />
      <h4>Mario L. Aparis</h4>
      <p>TECHNICAL HEAD</p>
    </div>
    <div className="team-card">
      <img src={HEAD} alt="Engineer" />
      <h4>Mario L. Aparis</h4>
      <p>TECHNICAL HEAD</p>
    </div>

  </div>

</div>

    </section>
  );
}

export default AboutStats;