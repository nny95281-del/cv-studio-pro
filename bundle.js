(() => {
  // js/sampleData.js
  var sampleProfiles = {
    cambodian: {
      templateId: "charcoal",
      language: "kh",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      photoBg: "#1e88e5",
      // Cambodian passport blue
      personalInfo: {
        fullName: "\u1780\u17C2\u179C \u179F\u17BB\u1784\u17A1\u17B6\u1799 (Kaing SongLay)",
        jobTitle: "Graphic Designer & MIS Specialist",
        email: "songlay.kaing@gmail.com",
        phone: "085 662 616",
        telegram: "085 662 616",
        address: "\u1781\u17C1\u178F\u17D2\u178F\u1780\u17C6\u1796\u1784\u17CB\u1785\u17B6\u1798 / \u1797\u17D2\u1793\u17C6\u1796\u17C1\u1789, \u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6",
        nationality: "\u1781\u17D2\u1798\u17C2\u179A (Cambodian)",
        sex: "\u1794\u17D2\u179A\u17BB\u179F (Male)",
        dob: "03, \u17A7\u179F\u1797\u17B6, 2002",
        pob: "\u1781\u17C1\u178F\u17D2\u178F\u1780\u17C6\u1796\u1784\u17CB\u1785\u17B6\u1798 (Kampong Cham)",
        linkedin: "linkedin.com/in/songlay",
        website: "songlay.design.kh",
        summary: "\u1793\u17B7\u179F\u17D2\u179F\u17B7\u178F\u1786\u17D2\u1793\u17B6\u17C6\u1791\u17B8\u17E4 \u1795\u17D2\u1793\u17C2\u1780\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784\u1794\u17D2\u179A\u1796\u17D0\u1793\u17D2\u1792\u1796\u17D0\u178F\u17CC\u1798\u17B6\u1793 (MIS) \u1793\u17B7\u1784\u1787\u17B6 Graphic Designer \u178A\u17C2\u179B\u1798\u17B6\u1793\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD\u1780\u17D2\u1793\u17BB\u1784\u1780\u17B6\u179A\u179A\u1785\u1793\u17B6\u179A\u17BC\u1794\u1797\u17B6\u1796 UI/UX \u1793\u17B7\u1784\u1794\u17D2\u179A\u1796\u17D0\u1793\u17D2\u1792\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u17D4 \u1798\u17B6\u1793\u1786\u1793\u17D2\u1791\u17C8\u1781\u17D2\u1796\u179F\u17CB\u1780\u17D2\u1793\u17BB\u1784\u1780\u17B6\u179A\u179A\u17C0\u1793\u179F\u17BC\u178F\u17D2\u179A \u1792\u17D2\u179C\u17BE\u1780\u17B6\u179A\u1787\u17B6\u1780\u17D2\u179A\u17BB\u1798 \u1793\u17B7\u1784\u178A\u17C4\u17C7\u179F\u17D2\u179A\u17B6\u1799\u1794\u1789\u17D2\u17A0\u17B6\u1794\u17D2\u179A\u1780\u1794\u178A\u17C4\u1799\u1797\u17B6\u1796\u1785\u17D2\u1793\u17C3\u1794\u17D2\u179A\u178C\u17B7\u178F\u17D4"
      },
      skills: [
        { name: "Adobe Photoshop & Illustrator", level: 90 },
        { name: "Figma & UI/UX Design", level: 85 },
        { name: "Microsoft Office & Excel Advanced", level: 95 },
        { name: "Web Development (HTML/CSS/JS)", level: 75 },
        { name: "Database Management (SQL)", level: 80 },
        { name: "Team Communication & Problem Solving", level: 90 }
      ],
      experiences: [
        {
          role: "Graphic Designer & Content Creator",
          company: "Borcelle Digital Media",
          location: "\u1797\u17D2\u1793\u17C6\u1796\u17C1\u1789 (Phnom Penh)",
          period: "2022 - \u1794\u1785\u17D2\u1785\u17BB\u1794\u17D2\u1794\u1793\u17D2\u1793 (Current)",
          highlights: [
            "\u179A\u1785\u1793\u17B6\u179A\u17BC\u1794\u1797\u17B6\u1796\u1795\u17D2\u179F\u1796\u17D2\u179C\u1795\u17D2\u179F\u17B6\u1799 Poster, Banner \u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB Facebook & TikTok \u1780\u17BE\u1793 Reach 40%",
            "\u179F\u17A0\u1780\u17B6\u179A\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u179A\u17BB\u1798\u1780\u17B6\u179A\u1784\u17B6\u179A\u1794\u1784\u17D2\u1780\u17BE\u178F Brand Identity \u1793\u17B7\u1784 Logo \u1787\u17BC\u1793\u17A2\u178F\u17B7\u1790\u17B7\u1787\u1793\u1787\u17B6\u1784 \u17E2\u17E0 \u1780\u17D2\u179A\u17BB\u1798\u17A0\u17CA\u17BB\u1793",
            "\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784\u1780\u17B6\u179A\u1790\u178F \u1793\u17B7\u1784\u1780\u17B6\u178F\u17CB\u178F\u179C\u17B8\u178A\u17C1\u17A2\u17BC\u1781\u17D2\u179B\u17B8\u17D7\u179F\u1798\u17D2\u179A\u17B6\u1794\u17CB\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8\u1795\u17D2\u179F\u1796\u17D2\u179C\u1795\u17D2\u179F\u17B6\u1799\u179F\u1784\u17D2\u1782\u1798"
          ]
        },
        {
          role: "Barista & Shift Leader",
          company: "Radio Coffee & Bakery",
          location: "\u1797\u17D2\u1793\u17C6\u1796\u17C1\u1789 (Phnom Penh)",
          period: "2019 - 2021",
          highlights: [
            "\u1795\u17D2\u178F\u179B\u17CB\u179F\u17C1\u179C\u17B6\u1780\u1798\u17D2\u1798\u17A2\u178F\u17B7\u1790\u17B7\u1787\u1793\u1794\u17D2\u179A\u1780\u1794\u178A\u17C4\u1799\u1797\u17B6\u1796\u179A\u17BD\u179F\u179A\u17B6\u1799\u179A\u17B6\u1780\u17CB\u1791\u17B6\u1780\u17CB \u1793\u17B7\u1784\u179A\u17A0\u17D0\u179F\u1791\u17B6\u1793\u17CB\u1785\u17B7\u178F\u17D2\u178F",
            "\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784\u179F\u17D2\u178F\u17BB\u1780\u1791\u17C6\u1793\u17B7\u1789 \u1793\u17B7\u1784\u1794\u1789\u17D2\u1787\u17B8\u1785\u17C6\u178E\u17BC\u179B\u1785\u17C6\u178E\u17B6\u1799\u1794\u17D2\u179A\u1785\u17B6\u17C6\u1790\u17D2\u1784\u17C3\u178A\u17C4\u1799\u1787\u17C4\u1782\u1787\u17D0\u1799"
          ]
        }
      ],
      education: [
        {
          degree: "\u1794\u179A\u17B7\u1789\u17D2\u1789\u17B6\u1794\u178F\u17D2\u179A \u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784\u1794\u17D2\u179A\u1796\u17D0\u1793\u17D2\u1792\u1796\u17D0\u178F\u17CC\u1798\u17B6\u1793\u179C\u17B7\u1791\u17D2\u1799\u17B6 (MIS - Year 4)",
          school: "\u179C\u17B7\u1791\u17D2\u1799\u17B6\u179F\u17D2\u1790\u17B6\u1793 \u179F\u17C1\u178F\u17B7\u1785 (SETEC Institute)",
          period: "2021 - Present",
          description: "GPA: 3.8/4.0 - \u1791\u1791\u17BD\u179B\u1794\u17B6\u1793\u17A2\u17B6\u17A0\u17B6\u179A\u17BC\u1794\u1780\u179A\u178E\u17CD\u1786\u17D2\u1793\u17BE\u1798\u1794\u17D2\u179A\u1785\u17B6\u17C6\u1786\u17D2\u1793\u17B6\u17C6"
        },
        {
          degree: "\u1797\u17B6\u179F\u17B6\u17A2\u1784\u17CB\u1782\u17D2\u179B\u17C1\u179F\u1791\u17BC\u1791\u17C5 (General English Program)",
          school: "\u179F\u17B6\u1780\u179B\u179C\u17B7\u1791\u17D2\u1799\u17B6\u179B\u17D0\u1799\u1794\u1789\u17D2\u1789\u17B6\u179F\u17B6\u179F\u17D2\u178F\u17D2\u179A (Panhasas University)",
          period: "2019 - 2021",
          description: "\u1794\u1789\u17D2\u1785\u1794\u17CB\u1780\u1798\u17D2\u179A\u17B7\u178F Advanced Level (Level 12)"
        },
        {
          degree: "\u179F\u1789\u17D2\u1789\u17B6\u1794\u178F\u17D2\u179A\u1798\u1792\u17D2\u1799\u1798\u179F\u17B7\u1780\u17D2\u179F\u17B6\u1791\u17BB\u178F\u17B7\u1799\u1797\u17BC\u1798\u17B7 (\u1794\u17B6\u1780\u17CB\u178C\u17BB\u1794)",
          school: "\u179C\u17B7\u1791\u17D2\u1799\u17B6\u179B\u17D0\u1799 \u179F\u1798\u17D2\u178F\u17C1\u1785\u178F\u17C1\u1787\u17C4 \u17A0\u17CA\u17BB\u1793 \u179F\u17C2\u1793 \u179F\u17BD\u1784",
          period: "2016 - 2019",
          description: "\u1793\u17B7\u1791\u17D2\u1791\u17C1\u179F\u179B\u17D2\u17A2 B"
        }
      ],
      languages: [
        { name: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A (Khmer)", level: "\u1797\u17B6\u179F\u17B6\u1780\u17C6\u178E\u17BE\u178F (Native)", percent: 100 },
        { name: "\u1797\u17B6\u179F\u17B6\u17A2\u1784\u17CB\u1782\u17D2\u179B\u17C1\u179F (English)", level: "\u1780\u1798\u17D2\u179A\u17B7\u178F\u179B\u17D2\u17A2\u1794\u1784\u17D2\u1782\u17BD\u179A (Fluent - B2/C1)", percent: 85 },
        { name: "\u1797\u17B6\u179F\u17B6\u1785\u17B7\u1793 (Chinese)", level: "\u1780\u1798\u17D2\u179A\u17B7\u178F\u179F\u1793\u17D2\u1791\u1793\u17B6 (Basic - A2)", percent: 45 }
      ],
      references: [
        {
          name: "\u179F\u17B6\u179F\u17D2\u178F\u17D2\u179A\u17B6\u1785\u17B6\u179A\u17D2\u1799 \u179B\u17B8 \u179F\u17BB\u179C\u178E\u17D2\u178E",
          role: "\u1794\u17D2\u179A\u1792\u17B6\u1793\u178A\u17C1\u1794\u17C9\u17B6\u178F\u17BA\u1798\u17C9\u1784\u17CB MIS, SETEC Institute",
          contact: "Phone: 012 345 678 | Email: sovann.ly@setec.edu.kh"
        },
        {
          name: "James Smith",
          role: "Creative Director, Borcelle Media",
          contact: "Phone: 017 888 999 | Email: james@borcelle.com"
        }
      ],
      awards: [
        { title: "Best Creative Graphic Award", issuer: "National Youth Tech Competition", year: "2023" },
        { title: "Honor Student Scholarship", issuer: "SETEC Institute", year: "2022" }
      ],
      preferences: ["\u1794\u17B6\u179B\u17CB\u1791\u17B6\u178F\u17CB (Football)", "E-Sports", "\u178F\u1793\u17D2\u178F\u17D2\u179A\u17B8 (Music)", "\u1780\u17B6\u179A\u17A2\u17B6\u1793\u179F\u17C0\u179C\u1797\u17C5", "\u1791\u17C1\u179F\u1785\u179A\u178E\u17CD (Travel)"]
    },
    english: {
      templateId: "charcoal",
      language: "en",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
      photoBg: "#ffffff",
      personalInfo: {
        fullName: "SIOBHAN SIMMONS",
        jobTitle: "Logistics & Dispatch Specialist",
        email: "siobhan.simmons@example.com",
        phone: "+44 7029 588 201",
        telegram: "+44 7029 588 201",
        address: "21 Cobblestone Road, York, YO1 0GT",
        nationality: "British",
        sex: "Female",
        dob: "15, August, 1993",
        pob: "York, United Kingdom",
        linkedin: "linkedin.com/in/siobhansimmons",
        website: "simmonslogistics.co.uk",
        summary: "Efficient dispatch driver and logistics coordinator with 10+ years experience safely transporting high-value consignments and optimizing delivery operations. Expert in planning rapid delivery routes, interpreting traffic data, and managing vehicle maintenance with a zero-incident safety record."
      },
      skills: [
        { name: "Route Optimisation & GPS Navigation", level: 95 },
        { name: "Fleet & Vehicle Maintenance", level: 90 },
        { name: "Safety Regulations & Compliance", level: 95 },
        { name: "Inventory & Consignment Tracking", level: 85 },
        { name: "Customer Service & Timely Delivery", level: 90 },
        { name: "Team Onboarding & Leadership", level: 80 }
      ],
      experiences: [
        {
          role: "Dispatch Driver & Team Coordinator",
          company: "Ocado Logistics",
          location: "Southampton, UK",
          period: "January 2021 - Present",
          highlights: [
            "Update vehicle log detailing duty and driving hours as per DfT standards in digital formats.",
            "Read maps and analyze traffic trends to identify the fastest routes, saving company over 26 hours per month.",
            "Execute 35 deliveries daily, driving pickups and vans carrying loads valued \xA312K+ without damage.",
            "Conduct daily interior/exterior cleaning and comprehensive preventative maintenance on vehicles."
          ]
        },
        {
          role: "Company Senior Driver",
          company: "UPS Global",
          location: "Southampton, UK",
          period: "January 2018 - January 2021",
          highlights: [
            "Planned delivery routes and schedules before each pick-up to increase fuel cost savings by 25%.",
            "Recognised by employer in 3 consecutive annual award ceremonies for decreasing route times by 30%.",
            "Helped company cut 23% on maintenance costs by proactively monitoring engine diagnostics."
          ]
        },
        {
          role: "Commercial Courier Driver",
          company: "Parcelforce Worldwide",
          location: "Bristol, UK",
          period: "April 2015 - January 2018",
          highlights: [
            "Regularly verified consignment against delivery papers and completed all documentation accurately.",
            "Supervised loading/unloading of consignment into lorries adhering strictly to company safety protocols."
          ]
        }
      ],
      education: [
        {
          degree: "Diploma in Logistics & Supply Chain Operations",
          school: "University of Southampton",
          period: "2012 - 2014",
          description: "Graduated with Distinction; focused on Fleet Operations & Distribution."
        },
        {
          degree: "Advanced Driving & Safety Certification (Class B & C1)",
          school: "UK Driving Standards Agency",
          period: "2014",
          description: "Clean driving license with zero penalty points."
        }
      ],
      languages: [
        { name: "English", level: "Native / Bilingual", percent: 100 },
        { name: "Spanish", level: "Professional Working (C1)", percent: 80 },
        { name: "French", level: "Elementary (A2)", percent: 40 }
      ],
      references: [
        {
          name: "Sandy Peppercorn",
          role: "Operations Manager, Ocado Logistics",
          contact: "Phone: +44 208 999 1234 | Email: sandy.p@ocado.co.uk"
        },
        {
          name: "James Smith",
          role: "Fleet Supervisor, UPS",
          contact: "Phone: +44 208 456 7890 | Email: j.smith@ups.com"
        }
      ],
      awards: [
        { title: "Driver of the Year Award (2022)", issuer: "Ocado Logistics", year: "2022" },
        { title: "Zero Accident Safety Badge", issuer: "DfT UK", year: "2020" }
      ],
      preferences: ["Route Planning Tech", "Automotive Repair", "Cycling", "Travel", "Photography"]
    }
  };

  // js/templates.js
  function escapeHtml(str) {
    if (!str) return "";
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function renderCharcoal(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-charcoal" id="resume-canvas-body">
      <!-- Left Sidebar -->
      <aside class="sidebar">
        <div class="avatar-container">
          <img src="${p.photo || data.photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview" style="background-color: ${data.photoBg || "#ffffff"}">
        </div>

        <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "SIOBHAN SIMMONS")}</h1>

        <!-- Contact Details -->
        <div class="sidebar-section">
          <div class="sidebar-title">${isKh ? "\u1796\u17D0\u178F\u17CC\u1798\u17B6\u1793\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784" : "CONTACT"}</div>
          ${p.phone ? `
            <div class="contact-item">
              <span class="contact-icon"><i class="fa-solid fa-phone"></i></span>
              <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
            </div>` : ""}
          ${p.email ? `
            <div class="contact-item">
              <span class="contact-icon"><i class="fa-solid fa-envelope"></i></span>
              <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
            </div>` : ""}
          ${p.address ? `
            <div class="contact-item">
              <span class="contact-icon"><i class="fa-solid fa-location-dot"></i></span>
              <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
            </div>` : ""}
          ${p.telegram ? `
            <div class="contact-item">
              <span class="contact-icon"><i class="fa-brands fa-telegram"></i></span>
              <span data-bind="personalInfo.telegram">${escapeHtml(p.telegram)}</span>
            </div>` : ""}
          ${p.linkedin ? `
            <div class="contact-item">
              <span class="contact-icon"><i class="fa-brands fa-linkedin-in"></i></span>
              <span data-bind="personalInfo.linkedin">${escapeHtml(p.linkedin)}</span>
            </div>` : ""}
        </div>

        <!-- Skills -->
        <div class="sidebar-section">
          <div class="sidebar-title">${isKh ? "\u1787\u17C6\u1793\u17B6\u1789" : "SKILLS"}</div>
          <ul class="skill-list">
            ${(data.skills || []).map((s, idx) => `
              <li data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>
            `).join("")}
          </ul>
        </div>

        <!-- Languages -->
        ${data.languages && data.languages.length > 0 ? `
          <div class="sidebar-section">
            <div class="sidebar-title">${isKh ? "\u1797\u17B6\u179F\u17B6" : "LANGUAGES"}</div>
            <ul class="sidebar-list">
              ${data.languages.map((l, idx) => `
                <li data-bind="languages.${idx}.name"><strong>${escapeHtml(l.name.split(" ")[0])}</strong> - ${escapeHtml(l.level)}</li>
              `).join("")}
            </ul>
          </div>
        ` : ""}
      </aside>

      <!-- Right Main Content -->
      <main class="main-content">
        <!-- Personal Statement -->
        <section class="main-section">
          <div class="section-title">${isKh ? "\u1782\u17C4\u179B\u1794\u17C6\u178E\u1784 \u1793\u17B7\u1784\u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u179F\u1784\u17D2\u1781\u17C1\u1794" : "PERSONAL STATEMENT"}</div>
          <p class="summary-text" data-bind="personalInfo.summary">${escapeHtml(p.summary || "Enthusiastic professional with deep expertise and passion for delivering high-impact results. Adept at cross-functional collaboration and strategic planning.")}</p>
        </section>

        <!-- Work History -->
        <section class="main-section">
          <div class="section-title">${isKh ? "\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD\u1780\u17B6\u179A\u1784\u17B6\u179A" : "WORK HISTORY"}</div>
          ${(data.experiences || []).map((exp, idx) => `
            <div class="timeline-item">
              <div class="timeline-period" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</div>
              <div class="timeline-role" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
              <div class="timeline-company">${escapeHtml(exp.company)} ${exp.location ? `\u2022 ${escapeHtml(exp.location)}` : ""}</div>
              <ul class="timeline-highlights">
                ${(exp.highlights || []).map((hl, hlIdx) => `
                  <li data-bind="experiences.${idx}.highlights.${hlIdx}">${escapeHtml(hl)}</li>
                `).join("")}
              </ul>
            </div>
          `).join("")}
        </section>

        <!-- Education -->
        ${data.education && data.education.length > 0 ? `
          <section class="main-section">
            <div class="section-title">${isKh ? "\u1794\u17D2\u179A\u179C\u178F\u17D2\u178F\u17B7\u1780\u17B6\u179A\u179F\u17B7\u1780\u17D2\u179F\u17B6" : "EDUCATION"}</div>
            ${data.education.map((edu, idx) => `
              <div class="timeline-item">
                <div class="timeline-period" data-bind="education.${idx}.period">${escapeHtml(edu.period)}</div>
                <div class="timeline-role" data-bind="education.${idx}.degree">${escapeHtml(edu.degree)}</div>
                <div class="timeline-company" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
                ${edu.description ? `<p style="font-size: 11.5px; color: #64748b; margin-top: 2px;" data-bind="education.${idx}.description">${escapeHtml(edu.description)}</p>` : ""}
              </div>
            `).join("")}
          </section>
        ` : ""}
      </main>
    </div>
  `;
  }
  function renderTimeline(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-timeline" id="resume-canvas-body">
      <!-- Left Sidebar -->
      <aside class="sidebar">
        <div class="avatar-container">
          <img src="${p.photo || data.photo || "https://via.placeholder.com/150"}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview">
        </div>

        <div class="sidebar-section">
          <div class="sidebar-title">${isKh ? "\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784" : "CONTACT"}</div>
          ${p.address ? `
            <div class="contact-item">
              <span class="contact-icon"><i class="fa-solid fa-location-dot"></i></span>
              <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
            </div>` : ""}
          ${p.phone ? `
            <div class="contact-item">
              <span class="contact-icon"><i class="fa-solid fa-phone"></i></span>
              <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
            </div>` : ""}
          ${p.email ? `
            <div class="contact-item">
              <span class="contact-icon"><i class="fa-solid fa-envelope"></i></span>
              <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
            </div>` : ""}
        </div>

        <div class="sidebar-section">
          <div class="sidebar-title">${isKh ? "\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6" : "EDUCATION"}</div>
          ${(data.education || []).map((edu, idx) => `
            <div class="education-item">
              <div class="edu-school" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
              <div class="edu-period" data-bind="education.${idx}.period">${escapeHtml(edu.period)}</div>
              <div class="edu-degree" data-bind="education.${idx}.degree">${escapeHtml(edu.degree)}</div>
            </div>
          `).join("")}
        </div>

        <!-- References -->
        ${data.references && data.references.length > 0 ? `
          <div class="sidebar-section">
            <div class="sidebar-title">${isKh ? "\u1794\u17BB\u1782\u17D2\u1782\u179B\u1792\u17B6\u1793\u17B6" : "REFERENCES"}</div>
            ${data.references.map((ref, idx) => `
              <div class="reference-item">
                <div class="ref-name" data-bind="references.${idx}.name">${escapeHtml(ref.name)}</div>
                <div class="ref-role" data-bind="references.${idx}.role">${escapeHtml(ref.role)}</div>
                <div class="ref-contact" data-bind="references.${idx}.contact">${escapeHtml(ref.contact)}</div>
              </div>
            `).join("")}
          </div>
        ` : ""}
      </aside>

      <!-- Right Main Content -->
      <main class="main-content">
        <header class="header">
          <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "JANE SMITH")}</h1>
          <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "PROFESSIONAL TITLE")}</div>
        </header>

        <!-- Work Experience with Timeline Connector -->
        <div class="section-header-box">
          <span class="section-header-icon"><i class="fa-solid fa-briefcase"></i></span>
          <span>${isKh ? "\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD\u1780\u17B6\u179A\u1784\u17B6\u179A" : "WORK EXPERIENCE"}</span>
        </div>

        <div class="timeline-container">
          ${(data.experiences || []).map((exp, idx) => `
            <div class="timeline-node">
              <div class="timeline-node-header">
                <span data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</span>
                <span style="font-weight: 500; font-size: 11px;" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</span>
              </div>
              <div class="timeline-node-role" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
              <div class="timeline-node-desc">
                ${exp.highlights && exp.highlights.length > 0 ? exp.highlights.map((hl, hlIdx) => `
                  <div data-bind="experiences.${idx}.highlights.${hlIdx}">\u2022 ${escapeHtml(hl)}</div>
                `).join("") : `<div data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>`}
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Skills & Expertise Grid Box -->
        <div class="section-header-box" style="margin-top: 10px;">
          <span class="section-header-icon"><i class="fa-solid fa-wrench"></i></span>
          <span>${isKh ? "\u1787\u17C6\u1793\u17B6\u1789 \u1793\u17B7\u1784\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD" : "SKILLS & EXPERTISE"}</span>
        </div>

        <div class="skills-box">
          <div class="skills-grid">
            ${(data.skills || []).map((skill, idx) => `
              <div class="skills-grid-item" data-bind="skills.${idx}.name">${escapeHtml(skill.name)}</div>
            `).join("")}
          </div>
        </div>
      </main>
    </div>
  `;
  }
  function renderExecutive(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    const nameParts = (p.fullName || "LARRY TIBBETTS").split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || (isKh ? "" : "TIBBETTS");
    return `
    <div class="resume-page cv-template-executive" id="resume-canvas-body">
      <!-- Top Banner with Large Avatar and 3D Gold Ribbon -->
      <header class="header-banner">
        <div class="avatar-wrapper">
          <img src="${p.photo || data.photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview">
        </div>
        
        <div class="header-text-block">
          <h1 class="header-name">
            <span class="name-gold" data-bind="personalInfo.fullName">${escapeHtml(firstName)}</span>
            <span class="name-white">${escapeHtml(lastName)}</span>
          </h1>
          <div class="header-job-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "J o b  t i t l e")}</div>
          <p class="header-summary" data-bind="personalInfo.summary">${escapeHtml(p.summary || "Describe in a few lines your career path, your key skills for the position and your career goals. This is actually an introduction to your cover letter.")}</p>
        </div>

        <!-- 3D Gold Wave Ribbon -->
        <div class="gold-ribbon-container">
          <div class="gold-ribbon-fold"></div>
          <div class="gold-ribbon-band"></div>
        </div>
      </header>

      <div class="body-layout">
        <!-- Dark Teal Left Sidebar -->
        <aside class="sidebar">
          <!-- Contact Details -->
          <div class="sidebar-contact-group">
            ${p.phone ? `
              <div class="contact-item">
                <span class="contact-icon"><i class="fa-solid fa-phone"></i></span>
                <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
              </div>` : ""}
            ${p.email ? `
              <div class="contact-item">
                <span class="contact-icon"><i class="fa-solid fa-envelope"></i></span>
                <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
              </div>` : ""}
            ${p.address ? `
              <div class="contact-item">
                <span class="contact-icon"><i class="fa-solid fa-location-dot"></i></span>
                <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
              </div>` : ""}
            ${p.linkedin ? `
              <div class="contact-item">
                <span class="contact-icon"><i class="fa-brands fa-linkedin-in"></i></span>
                <span data-bind="personalInfo.linkedin">${escapeHtml(p.linkedin.startsWith("/") ? p.linkedin : `/${p.linkedin}`)}</span>
              </div>` : ""}
          </div>

          <!-- SKILLS Pill -->
          <div class="sidebar-section">
            <div class="sidebar-pill-title">${isKh ? "S K I L L S" : "S K I L L S"}</div>
            <ul class="sidebar-list">
              ${(data.skills || []).map((skill, idx) => `
                <li data-bind="skills.${idx}.name">${escapeHtml(skill.name)}</li>
              `).join("")}
            </ul>
          </div>

          <!-- LANGUAGES Pill -->
          ${data.languages && data.languages.length > 0 ? `
            <div class="sidebar-section">
              <div class="sidebar-pill-title">${isKh ? "L A N G U A G E S" : "L A N G U A G E S"}</div>
              <ul class="sidebar-list">
                ${data.languages.map((l, idx) => `
                  <li><span data-bind="languages.${idx}.name">${escapeHtml(l.name.split(" ")[0])}</span> \u2013 <span data-bind="languages.${idx}.level">${escapeHtml(l.level)}</span></li>
                `).join("")}
              </ul>
            </div>
          ` : ""}

          <!-- HOBBIES Pill -->
          <div class="sidebar-section" style="margin-bottom: 0;">
            <div class="sidebar-pill-title">${isKh ? "H O B B I E S" : "H O B B I E S"}</div>
            <ul class="sidebar-list">
              ${data.preferences && data.preferences.length > 0 ? data.preferences.map((item, idx) => `
                <li data-bind="preferences.${idx}">${escapeHtml(item)}</li>
              `).join("") : `
                <li>Writing</li>
                <li>Sketching</li>
                <li>Photography</li>
              `}
            </ul>
          </div>
        </aside>

        <!-- Right White Main Body -->
        <main class="main-content">
          <!-- EXPERIENCE Pill -->
          <div class="main-pill-header">
            <div class="main-gold-pill">${isKh ? "E X P E R I E N C E" : "E X P E R I E N C E"}</div>
          </div>

          ${(data.experiences || []).map((exp, idx) => `
            <div class="job-item">
              <div class="job-role" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
              <div class="job-meta">
                <span data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</span>, 
                <span data-bind="experiences.${idx}.location">${escapeHtml(exp.location || "Location")}</span> | 
                <span data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</span>
              </div>
              <ul class="job-duties">
                ${exp.highlights && exp.highlights.length > 0 ? exp.highlights.map((hl, hlIdx) => `
                  <li data-bind="experiences.${idx}.highlights.${hlIdx}">${escapeHtml(hl)}</li>
                `).join("") : `
                  <li>Key responsibility or achievement</li>
                  <li>Key responsibility or achievement</li>
                  <li>Key responsibility or achievement</li>
                `}
              </ul>
            </div>
          `).join("")}

          <!-- EDUCATION Pill -->
          <div class="main-pill-header" style="margin-top: 14px;">
            <div class="main-gold-pill">${isKh ? "E D U C A T I O N" : "E D U C A T I O N"}</div>
          </div>

          ${(data.education || data.educations || []).map((edu, idx) => `
            <div class="edu-item">
              <div class="edu-title">
                <strong data-bind="education.${idx}.degree">${escapeHtml(edu.degree)}</strong> | 
                <span data-bind="education.${idx}.period">${escapeHtml(edu.period)}</span>
              </div>
              <div class="edu-sub" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
            </div>
          `).join("")}
        </main>
      </div>

      <!-- Bottom Gold Stripe Accent -->
      <div class="bottom-gold-accent"></div>
    </div>
  `;
  }
  function renderCambodian(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-cambodian" id="resume-canvas-body">
      <div class="border-frame">
        <h1 class="main-title">CURRICULUM VITAE</h1>

        <!-- 1. PERSONAL DATA -->
        <div class="section-block">
          <div class="section-ribbon">${isKh ? "PERSONAL DATA" : "PERSONAL DATA"}</div>
          <div class="personal-data-row">
            <table class="personal-table">
              <tbody>
                <tr>
                  <td class="lbl">Name</td>
                  <td class="cln">:</td>
                  <td class="val" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "Kaing SongLay")}</td>
                  <td class="lbl-r">Sex</td>
                  <td class="cln">:</td>
                  <td class="val-r" data-bind="personalInfo.sex">${escapeHtml(p.sex || "Male")}</td>
                </tr>
                <tr>
                  <td class="lbl">Nationality</td>
                  <td class="cln">:</td>
                  <td class="val" data-bind="personalInfo.nationality">${escapeHtml(p.nationality || "Cambodian")}</td>
                  <td class="lbl-r">Date of Birth</td>
                  <td class="cln">:</td>
                  <td class="val-r" data-bind="personalInfo.dob">${escapeHtml(p.dob || "03, May, 2002")}</td>
                </tr>
                <tr>
                  <td class="lbl">Place of Birth</td>
                  <td class="cln">:</td>
                  <td class="val" data-bind="personalInfo.pob">${escapeHtml(p.pob || "Kampong Cham Province")}</td>
                  <td class="lbl-r">Phone Number</td>
                  <td class="cln">:</td>
                  <td class="val-r" data-bind="personalInfo.phone">${escapeHtml(p.phone || "085 662 616")}</td>
                </tr>
                <tr>
                  <td class="lbl">Email</td>
                  <td class="cln">:</td>
                  <td class="val"><a href="mailto:${escapeHtml(p.email || "laykaing458@gmail.com")}" class="email-link" data-bind="personalInfo.email">${escapeHtml(p.email || "laykaing458@gmail.com")}</a></td>
                  <td class="lbl-r">Telegram</td>
                  <td class="cln">:</td>
                  <td class="val-r" data-bind="personalInfo.telegram">${escapeHtml(p.telegram || p.phone || "085 662 616")}</td>
                </tr>
              </tbody>
            </table>

            <div class="passport-photo-wrapper">
              <img src="${p.photo || data.photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"}" alt="Passport Photo" class="passport-photo" id="cv-avatar-preview" style="background-color: ${data.photoBg || "#1e88e5"}">
            </div>
          </div>
        </div>

        <!-- 2. EDUCATION -->
        <div class="section-block">
          <div class="section-ribbon">${isKh ? "EDUCATION" : "EDUCATION"}</div>
          <table class="data-table">
            <tbody>
              <tr>
                <td class="year-col">2019-Present</td>
                <td class="cln">:</td>
                <td class="content-col">Studying Management information system 3<sup>rd</sup> year at SETEC Institute</td>
              </tr>
              <tr>
                <td class="year-col"></td>
                <td class="cln">:</td>
                <td class="content-col">Studied English (part time) at Panhasas University.</td>
              </tr>
              <tr>
                <td class="year-col">2016-2019</td>
                <td class="cln">:</td>
                <td class="content-col">Graduated Degree of high school at Samdach Deychor Hun Sen Suong High school.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 3. EXPERIENCE -->
        <div class="section-block">
          <div class="section-ribbon">${isKh ? "EXPERIENCE" : "EXPERIENCE"}</div>
          <table class="data-table">
            <tbody>
              <tr>
                <td class="year-col">2019-2020</td>
                <td class="cln">:</td>
                <td class="content-col">Worked as Barista at Radio Coffee</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 4. SKILL -->
        <div class="section-block">
          <div class="section-ribbon">${isKh ? "SKILL" : "SKILL"}</div>
          <table class="data-table">
            <tbody>
              <tr>
                <td class="year-col">Computer</td>
                <td class="cln">:</td>
                <td class="content-col">Completed Microsoft Office, Graphics Design</td>
              </tr>
              <tr>
                <td class="year-col">Communication</td>
                <td class="cln">:</td>
                <td class="content-col">Good</td>
              </tr>
              <tr>
                <td class="year-col">Characteristic</td>
                <td class="cln">:</td>
                <td class="content-col">Honest hard working, team working, friendly and Confident.</td>
              </tr>
              <tr>
                <td class="year-col">Driving License</td>
                <td class="cln">:</td>
                <td class="content-col">Categories B</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 5. LANGUAGES -->
        <div class="section-block">
          <div class="section-ribbon">${isKh ? "LANGUAGES" : "LANGUAGES"}</div>
          <table class="data-table">
            <tbody>
              <tr>
                <td class="year-col">Khmer</td>
                <td class="cln">:</td>
                <td class="content-col">Mother Tongue</td>
              </tr>
              <tr>
                <td class="year-col">English</td>
                <td class="cln">:</td>
                <td class="content-col">Medium (Speaking, Writing, Reading, Listening)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 6. PREFERENCES -->
        <div class="section-block" style="margin-bottom: 0;">
          <div class="section-ribbon">${isKh ? "PREFERENCES" : "PREFERENCES"}</div>
          <div class="preferences-row">
            ${data.preferences && data.preferences.length > 0 ? data.preferences.join(", ") : "Soccer, E-Sport, Music, Conversation, Travel"}
          </div>
        </div>

      </div>
    </div>
  `;
  }
  function renderInfographic(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-infographic" id="resume-canvas-body">
      <!-- Left Navy Column -->
      <aside class="sidebar">
        <div class="avatar-container">
          <div class="avatar-ring">
            <img src="${p.photo || data.photo || "https://via.placeholder.com/150"}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview">
          </div>
        </div>

        <!-- About Me Capsule -->
        <div class="sidebar-section">
          <div class="sidebar-capsule-title">${isKh ? "\u17A2\u17C6\u1796\u17B8\u1781\u17D2\u1789\u17BB\u17C6" : "ABOUT ME"}</div>
          <p class="about-text" data-bind="personalInfo.summary">${escapeHtml(p.summary || "")}</p>
        </div>

        <!-- Skill Progress Bars -->
        <div class="sidebar-section">
          <div class="sidebar-capsule-title">${isKh ? "\u1787\u17C6\u1793\u17B6\u1789" : "SKILL"}</div>
          ${(data.skills || []).slice(0, 5).map((skill, idx) => `
            <div class="skill-bar-item">
              <div class="skill-bar-label">
                <span data-bind="skills.${idx}.name">${escapeHtml(skill.name)}</span>
              </div>
              <div class="skill-bar-track">
                <div class="skill-bar-fill" style="width: ${skill.level || 80}%;"></div>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Languages Gauge Arcs -->
        ${data.languages && data.languages.length > 0 ? `
          <div class="sidebar-section">
            <div class="sidebar-capsule-title">${isKh ? "\u1797\u17B6\u179F\u17B6" : "LANGUAGE"}</div>
            <div class="languages-gauge-grid">
              ${data.languages.slice(0, 3).map((l, idx) => `
                <div class="gauge-item">
                  <div class="gauge-arc" style="border-color: ${idx === 0 ? "#d4af37" : "#e2e8f0"}"></div>
                  <div class="gauge-name" data-bind="languages.${idx}.name">${escapeHtml(l.name.split(" ")[0])}</div>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}

        <!-- Awards with Trophy Icons -->
        ${data.awards && data.awards.length > 0 ? `
          <div class="sidebar-section">
            <div class="sidebar-capsule-title">${isKh ? "\u1796\u17B6\u1793\u179A\u1784\u17D2\u179C\u17B6\u1793\u17CB" : "AWARD"}</div>
            ${data.awards.map((aw, idx) => `
              <div class="award-item">
                <div class="award-icon"><i class="fa-solid fa-trophy"></i></div>
                <div>
                  <div class="award-title" data-bind="awards.${idx}.title">${escapeHtml(aw.title)} (${escapeHtml(aw.year)})</div>
                  <div class="award-sub" data-bind="awards.${idx}.issuer">${escapeHtml(aw.issuer)}</div>
                </div>
              </div>
            `).join("")}
          </div>
        ` : ""}
      </aside>

      <!-- Right Column -->
      <main class="main-content">
        <header class="header">
          <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "JULIANA SILVA")}</h1>
          <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "GRAPHIC DESIGNER")}</div>
        </header>

        <!-- Contact Capsule -->
        <div class="main-capsule-title">${isKh ? "\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784" : "CONTACT"}</div>
        <div class="contact-grid">
          ${p.phone ? `<div class="contact-grid-item"><i class="fa-solid fa-phone"></i> <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span></div>` : ""}
          ${p.email ? `<div class="contact-grid-item"><i class="fa-solid fa-envelope"></i> <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span></div>` : ""}
          ${p.address ? `<div class="contact-grid-item"><i class="fa-solid fa-location-dot"></i> <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span></div>` : ""}
          ${p.website ? `<div class="contact-grid-item"><i class="fa-solid fa-globe"></i> <span data-bind="personalInfo.website">${escapeHtml(p.website)}</span></div>` : ""}
        </div>

        <!-- Experience Capsule -->
        <div class="main-capsule-title">${isKh ? "\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD\u1780\u17B6\u179A\u1784\u17B6\u179A" : "EXPERIENCE"}</div>
        ${(data.experiences || []).map((exp, idx) => `
          <div class="timeline-item">
            <div class="timeline-date" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</div>
            <div class="timeline-info">
              <div class="timeline-role" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
              <div class="timeline-company" data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</div>
              <div class="timeline-desc">
                ${(exp.highlights || []).join(". ")}
              </div>
            </div>
          </div>
        `).join("")}

        <!-- Education Capsule -->
        <div class="main-capsule-title" style="margin-top: 20px;">${isKh ? "\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6" : "EDUCATION"}</div>
        ${(data.education || []).map((edu, idx) => `
          <div class="timeline-item">
            <div class="timeline-date" data-bind="education.${idx}.period">${escapeHtml(edu.period)}</div>
            <div class="timeline-info">
              <div class="timeline-role" data-bind="education.${idx}.degree">${escapeHtml(edu.degree)}</div>
              <div class="timeline-company" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
            </div>
          </div>
        `).join("")}
      </main>
    </div>
  `;
  }
  function renderBlackGold(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-blackgold" id="resume-canvas-body">
      <div class="top-accent-bar">
        <div class="gold-dots">
          <div class="gold-dot"></div>
          <div class="gold-dot"></div>
          <div class="gold-dot"></div>
          <div class="gold-bar-strip"></div>
        </div>
      </div>

      <!-- Left Column (White) -->
      <div class="left-col">
        <div class="avatar-box">
          <img src="${p.photo || data.photo || "https://via.placeholder.com/150"}" alt="Photo" class="avatar-img" id="cv-avatar-preview">
        </div>

        <!-- Contact Section -->
        <div style="margin-bottom: 24px;">
          <div class="sec-title-white"><i class="fa-solid fa-user"></i> ${isKh ? "\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784" : "Contact"}</div>
          ${p.phone ? `<div class="contact-item"><i class="fa-solid fa-phone" style="color: #f59e0b;"></i> <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span></div>` : ""}
          ${p.email ? `<div class="contact-item"><i class="fa-solid fa-envelope" style="color: #f59e0b;"></i> <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span></div>` : ""}
          ${p.telegram ? `<div class="contact-item"><i class="fa-brands fa-telegram" style="color: #f59e0b;"></i> <span data-bind="personalInfo.telegram">${escapeHtml(p.telegram)}</span></div>` : ""}
          ${p.address ? `<div class="contact-item"><i class="fa-solid fa-location-dot" style="color: #f59e0b;"></i> <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span></div>` : ""}
        </div>

        <!-- Education Section -->
        <div style="margin-bottom: 24px;">
          <div class="sec-title-white"><i class="fa-solid fa-graduation-cap"></i> ${isKh ? "\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6" : "Education"}</div>
          ${(data.education || []).map((edu, idx) => `
            <div class="edu-node">
              <div class="node-dot"></div>
              <div class="node-year" data-bind="education.${idx}.period">${escapeHtml(edu.period)}</div>
              <div class="node-content">
                <div class="node-title" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
                <div class="node-sub" data-bind="education.${idx}.degree">${escapeHtml(edu.degree)}</div>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Work Experience Section -->
        <div>
          <div class="sec-title-white"><i class="fa-solid fa-briefcase"></i> ${isKh ? "\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD\u1780\u17B6\u179A\u1784\u17B6\u179A" : "Work Experience"}</div>
          ${(data.experiences || []).map((exp, idx) => `
            <div class="exp-node">
              <div class="node-dot"></div>
              <div class="node-year" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</div>
              <div class="node-content">
                <div class="node-title" data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</div>
                <div class="node-sub" data-bind="experiences.${idx}.role"><strong>${escapeHtml(exp.role)}</strong></div>
                ${exp.highlights && exp.highlights.length > 0 ? `<div style="font-size: 11px; color: #4b5563; margin-top: 2px;">${escapeHtml(exp.highlights[0])}</div>` : ""}
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Right Column (Black) -->
      <div class="right-col">
        <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "NAME HERE")}</h1>
        <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "Your Designation Here")}</div>

        <div class="sec-title-black">${isKh ? "\u17A2\u17C6\u1796\u17B8\u1781\u17D2\u1789\u17BB\u17C6" : "About Me"}</div>
        <p class="about-desc" data-bind="personalInfo.summary">${escapeHtml(p.summary || "")}</p>

        <!-- Languages -->
        ${data.languages && data.languages.length > 0 ? `
          <div class="sec-title-black">${isKh ? "\u1797\u17B6\u179F\u17B6" : "Languages"}</div>
          <div style="margin-bottom: 20px;">
            ${data.languages.map((l, idx) => `
              <div class="skill-bar-row">
                <span class="skill-name" data-bind="languages.${idx}.name">${escapeHtml(l.name.split(" ")[0])}</span>
                <div class="skill-track"><div class="skill-fill-gold"></div></div>
              </div>
            `).join("")}
          </div>
        ` : ""}

        <!-- Skills -->
        <div class="sec-title-black">${isKh ? "\u1787\u17C6\u1793\u17B6\u1789" : "Skills"}</div>
        <div style="margin-bottom: 20px;">
          ${(data.skills || []).map((s, idx) => `
            <div class="skill-bar-row">
              <span class="skill-name" data-bind="skills.${idx}.name">${escapeHtml(s.name)}</span>
              <div class="skill-track"><div class="skill-fill-gold"></div></div>
            </div>
          `).join("")}
        </div>

        <!-- Hobbies & Preferences -->
        ${data.preferences && data.preferences.length > 0 ? `
          <div class="sec-title-black">${isKh ? "\u1785\u17C6\u178E\u1784\u17CB\u1785\u17C6\u178E\u17BC\u179B\u1785\u17B7\u178F\u17D2\u178F" : "Hobbies"}</div>
          <p style="font-size: 11px; color: #cbd5e1; margin-bottom: 14px;">${data.preferences.join(" , ")}</p>
        ` : ""}
      </div>
    </div>
  `;
  }
  function renderGeometric(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-geometric" id="resume-canvas-body">
      <div class="top-diag-banner"></div>

      <!-- Left Sidebar -->
      <aside class="sidebar">
        <div class="avatar-wrapper">
          <img src="${p.photo || data.photo || "https://via.placeholder.com/150"}" alt="Photo" class="avatar-img" id="cv-avatar-preview">
        </div>

        <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "KATIE SLATER")}</h1>
        <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "DIGITAL MARKETING")}</div>

        <div class="sidebar-sec-title">${isKh ? "\u17A2\u17C6\u1796\u17B8\u1781\u17D2\u1789\u17BB\u17C6" : "WHO AM I"}</div>
        <p class="sidebar-text" data-bind="personalInfo.summary">${escapeHtml(p.summary || "")}</p>

        <!-- Segmented Skills -->
        <div class="sidebar-sec-title">${isKh ? "\u1787\u17C6\u1793\u17B6\u1789" : "SKILLS"}</div>
        ${(data.skills || []).slice(0, 5).map((s, idx) => `
          <div style="font-size: 11px; color: #374151; margin-bottom: 2px;" data-bind="skills.${idx}.name">${escapeHtml(s.name)}</div>
          <div class="seg-skill-bar">
            <div class="seg-block filled"></div>
            <div class="seg-block filled"></div>
            <div class="seg-block filled"></div>
            <div class="seg-block filled"></div>
            <div class="seg-block ${(s.level || 80) > 85 ? "filled" : ""}"></div>
          </div>
        `).join("")}

        <!-- Contact Section -->
        <div class="sidebar-sec-title" style="margin-top: 16px;">${isKh ? "\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784" : "CONTACT"}</div>
        ${p.phone ? `<div style="font-size: 11px; color: #4b5563; margin-bottom: 6px;"><i class="fa-solid fa-phone" style="color: #fca590;"></i> <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span></div>` : ""}
        ${p.email ? `<div style="font-size: 11px; color: #4b5563; margin-bottom: 6px;"><i class="fa-solid fa-envelope" style="color: #fca590;"></i> <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span></div>` : ""}
        ${p.address ? `<div style="font-size: 11px; color: #4b5563; margin-bottom: 6px;"><i class="fa-solid fa-location-dot" style="color: #fca590;"></i> <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span></div>` : ""}
      </aside>

      <!-- Right Main Content -->
      <main class="main-content">
        <!-- Education -->
        <div class="main-sec-title">${isKh ? "\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6" : "EDUCATION"}</div>
        ${(data.education || []).map((edu, idx) => `
          <div style="display: flex; gap: 14px; margin-bottom: 14px;">
            <div style="font-size: 11px; font-weight: 700; color: #111; min-width: 75px;" data-bind="education.${idx}.period">${escapeHtml(edu.period)}</div>
            <div style="flex: 1;">
              <div style="font-size: 12px; font-weight: 700; color: #111;" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
              <div style="font-size: 11px; color: #6b7280;" data-bind="education.${idx}.degree">${escapeHtml(edu.degree)}</div>
            </div>
          </div>
        `).join("")}

        <!-- Experience with Dashed Timeline -->
        <div class="main-sec-title" style="margin-top: 24px;">${isKh ? "\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD\u1780\u17B6\u179A\u1784\u17B6\u179A" : "EXPERIENCE"}</div>
        <div class="dashed-timeline">
          ${(data.experiences || []).map((exp, idx) => `
            <div class="timeline-entry">
              <div style="font-size: 11px; font-weight: 700; color: #111; margin-bottom: 2px;" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)} - <span data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</span></div>
              <div style="font-size: 11.5px; font-weight: 600; color: #fca590;" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
              <p style="font-size: 11px; color: #4b5563; margin-top: 2px;">${(exp.highlights || []).join(". ")}</p>
            </div>
          `).join("")}
        </div>
      </main>
    </div>
  `;
  }
  function renderCobalt(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-cobalt" id="resume-canvas-body">
      <!-- Sidebar Cobalt Blue -->
      <aside class="sidebar">
        <div class="avatar-box">
          <img src="${p.photo || data.photo || "https://via.placeholder.com/150"}" alt="Photo" class="avatar-img" id="cv-avatar-preview">
        </div>

        <div class="sidebar-title">${isKh ? "\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784" : "CONTACTS"}</div>
        ${p.phone ? `<div class="contact-row"><i class="fa-solid fa-phone"></i> <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span></div>` : ""}
        ${p.email ? `<div class="contact-row"><i class="fa-solid fa-envelope"></i> <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span></div>` : ""}
        ${p.website ? `<div class="contact-row"><i class="fa-solid fa-globe"></i> <span data-bind="personalInfo.website">${escapeHtml(p.website)}</span></div>` : ""}
        ${p.address ? `<div class="contact-row"><i class="fa-solid fa-location-dot"></i> <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span></div>` : ""}

        <!-- Skills -->
        <div class="sidebar-title" style="margin-top: 20px;">${isKh ? "\u1787\u17C6\u1793\u17B6\u1789" : "SKILLS"}</div>
        ${(data.skills || []).map((s, idx) => `
          <div class="skill-line-item">
            <div class="skill-line-header">
              <span data-bind="skills.${idx}.name">${escapeHtml(s.name)}</span>
            </div>
            <div class="skill-line-track">
              <div class="skill-line-fill" style="width: ${s.level || 80}%;"></div>
            </div>
          </div>
        `).join("")}

        <!-- Languages -->
        ${data.languages && data.languages.length > 0 ? `
          <div class="sidebar-title" style="margin-top: 20px;">${isKh ? "\u1797\u17B6\u179F\u17B6" : "LANGUAGES"}</div>
          ${data.languages.map((l, idx) => `
            <div class="skill-line-item">
              <div class="skill-line-header">
                <span data-bind="languages.${idx}.name">${escapeHtml(l.name)}</span>
              </div>
              <div class="skill-line-track">
                <div class="skill-line-fill" style="width: 85%;"></div>
              </div>
            </div>
          `).join("")}
        ` : ""}
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "NAME SURNAME")}</h1>
        <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "GRAPHICS DESIGN")}</div>

        <div class="sec-badge-title">${isKh ? "\u17A2\u17C6\u1796\u17B8\u1781\u17D2\u1789\u17BB\u17C6" : "ABOUT ME"}</div>
        <p style="font-size: 11.5px; color: #475569; line-height: 1.5; margin-bottom: 20px;" data-bind="personalInfo.summary">${escapeHtml(p.summary || "")}</p>

        <div class="sec-badge-title">${isKh ? "\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6" : "EDUCATION"}</div>
        <div style="margin-bottom: 20px;">
          ${(data.education || []).map((edu, idx) => `
            <div style="display: flex; gap: 14px; margin-bottom: 12px;">
              <div style="font-size: 11px; font-weight: 700; color: #0f4c81; min-width: 65px;" data-bind="education.${idx}.period">${escapeHtml(edu.period)}</div>
              <div>
                <div style="font-size: 12px; font-weight: 700; color: #111;" data-bind="education.${idx}.degree">${escapeHtml(edu.degree)}</div>
                <div style="font-size: 11px; color: #64748b;" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="sec-badge-title">${isKh ? "\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD\u1780\u17B6\u179A\u1784\u17B6\u179A" : "EXPERIENCE"}</div>
        <div>
          ${(data.experiences || []).map((exp, idx) => `
            <div style="display: flex; gap: 14px; margin-bottom: 14px;">
              <div style="font-size: 11px; font-weight: 700; color: #0f4c81; min-width: 65px;" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</div>
              <div style="flex: 1;">
                <div style="font-size: 12px; font-weight: 700; color: #111;" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)} - <span data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</span></div>
                <p style="font-size: 11px; color: #475569; margin-top: 2px;">${(exp.highlights || []).join(". ")}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </main>
    </div>
  `;
  }
  function renderOrigami(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-origami" id="resume-canvas-body">
      <!-- Sidebar Navy -->
      <aside class="sidebar">
        <div class="avatar-wrapper">
          <img src="${p.photo || data.photo || "https://via.placeholder.com/150"}" alt="Photo" class="avatar-img" id="cv-avatar-preview">
        </div>

        <div class="ribbon-tab-white">${isKh ? "\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784" : "CONTACT"}</div>
        ${p.email ? `<div class="contact-item"><i class="fa-solid fa-envelope"></i> <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span></div>` : ""}
        ${p.phone ? `<div class="contact-item"><i class="fa-solid fa-phone"></i> <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span></div>` : ""}
        ${p.address ? `<div class="contact-item"><i class="fa-solid fa-house"></i> <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span></div>` : ""}
        ${p.website ? `<div class="contact-item"><i class="fa-solid fa-globe"></i> <span data-bind="personalInfo.website">${escapeHtml(p.website)}</span></div>` : ""}

        <div class="ribbon-tab-white" style="margin-top: 20px;">${isKh ? "\u1794\u178E\u17D2\u178F\u17B6\u1789\u179F\u1784\u17D2\u1782\u1798" : "Find Me Online"}</div>
        <div class="contact-item"><i class="fa-brands fa-facebook"></i> <span>facebook.com/profile</span></div>
        <div class="contact-item"><i class="fa-brands fa-telegram"></i> <span data-bind="personalInfo.telegram">${escapeHtml(p.telegram || "085 662 616")}</span></div>
        <div class="contact-item"><i class="fa-brands fa-linkedin"></i> <span data-bind="personalInfo.linkedin">${escapeHtml(p.linkedin || "linkedin/profile")}</span></div>

        <!-- Skills -->
        <div class="ribbon-tab-white" style="margin-top: 20px;">${isKh ? "\u1787\u17C6\u1793\u17B6\u1789" : "SKILLS"}</div>
        <ul style="padding-left: 14px; margin: 0; font-size: 11px; color: #e2e8f0;">
          ${(data.skills || []).map((s, idx) => `<li style="margin-bottom: 4px;" data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>`).join("")}
        </ul>
      </aside>

      <!-- Right Main Content -->
      <main class="main-content">
        <header class="header">
          <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "NAME SURNAME")}</h1>
          <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "JOB POSITION")}</div>
        </header>

        <div class="ribbon-tab-blue">${isKh ? "\u1794\u17D2\u179A\u179C\u178F\u17D2\u178F\u17B7\u179A\u17BC\u1794\u179F\u1784\u17D2\u1781\u17C1\u1794" : "PROFILE"}</div>
        <p style="font-size: 11.5px; color: #475569; line-height: 1.5; margin-bottom: 18px;" data-bind="personalInfo.summary">${escapeHtml(p.summary || "")}</p>

        <div class="ribbon-tab-blue">${isKh ? "\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6" : "EDUCATION"}</div>
        <div style="margin-bottom: 18px;">
          ${(data.education || []).map((edu, idx) => `
            <div style="margin-bottom: 10px;">
              <div style="font-size: 12px; font-weight: 700; color: #1e3a68;" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
              <div style="font-size: 11px; color: #64748b;" data-bind="education.${idx}.degree">${escapeHtml(edu.degree)} (${escapeHtml(edu.period)})</div>
            </div>
          `).join("")}
        </div>

        <div class="ribbon-tab-blue">${isKh ? "\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD" : "EXPERIENCE"}</div>
        <div>
          ${(data.experiences || []).map((exp, idx) => `
            <div style="margin-bottom: 12px;">
              <div style="font-size: 12px; font-weight: 700; color: #1e3a68;" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
              <div style="font-size: 11px; color: #64748b;" data-bind="experiences.${idx}.company">${escapeHtml(exp.company)} (${escapeHtml(exp.period)})</div>
              <p style="font-size: 11px; color: #475569; margin-top: 2px;">${(exp.highlights || []).join(". ")}</p>
            </div>
          `).join("")}
        </div>
      </main>
    </div>
  `;
  }
  function renderExecutiveRight(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-executive-right" id="resume-canvas-body">
      <!-- Left Main Body -->
      <main class="main-content">
        <div class="header">
          <div class="avatar-wrapper">
            <img src="${p.photo || data.photo || "https://via.placeholder.com/150"}" alt="Photo" class="avatar-img" id="cv-avatar-preview">
          </div>
          <div>
            <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "ROSHAN MENDIS")}</h1>
            <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "BANK MANAGER")}</div>
          </div>
        </div>

        <div class="bar-sec-title">${isKh ? "\u1794\u17D2\u179A\u179C\u178F\u17D2\u178F\u17B7\u179A\u17BC\u1794" : "PROFILE"}</div>
        <p style="font-size: 11.5px; color: #334155; line-height: 1.5; margin-bottom: 20px;" data-bind="personalInfo.summary">${escapeHtml(p.summary || "")}</p>

        <div class="bar-sec-title">${isKh ? "\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD" : "EXPERIENCE"}</div>
        <div style="margin-bottom: 20px;">
          ${(data.experiences || []).map((exp, idx) => `
            <div style="margin-bottom: 14px;">
              <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 800; color: #0f172a;">
                <span data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</span>
                <span style="color: #64748b; font-size: 11px;" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</span>
              </div>
              <div style="font-size: 11px; font-weight: 600; color: #0284c7; margin-bottom: 4px;" data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</div>
              <ul style="padding-left: 14px; margin: 0; font-size: 11px; color: #475569;">
                ${(exp.highlights || []).map((hl, hlIdx) => `<li data-bind="experiences.${idx}.highlights.${hlIdx}">${escapeHtml(hl)}</li>`).join("")}
              </ul>
            </div>
          `).join("")}
        </div>

        <div class="bar-sec-title">${isKh ? "\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6" : "EDUCATION"}</div>
        <div>
          ${(data.education || []).map((edu, idx) => `
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <div>
                <div style="font-size: 12px; font-weight: 700; color: #0f172a;" data-bind="education.${idx}.degree">${escapeHtml(edu.degree)}</div>
                <div style="font-size: 11px; color: #64748b;" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
              </div>
              <div style="font-size: 11px; color: #64748b;" data-bind="education.${idx}.period">${escapeHtml(edu.period)}</div>
            </div>
          `).join("")}
        </div>
      </main>

      <!-- Right Navy Sidebar -->
      <aside class="sidebar-right">
        <div class="sidebar-title">${isKh ? "\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784" : "CONTACT"}</div>
        ${p.phone ? `<div class="contact-item"><i class="fa-solid fa-phone contact-icon"></i> <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span></div>` : ""}
        ${p.email ? `<div class="contact-item"><i class="fa-solid fa-envelope contact-icon"></i> <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span></div>` : ""}
        ${p.address ? `<div class="contact-item"><i class="fa-solid fa-location-dot contact-icon"></i> <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span></div>` : ""}

        <!-- Personal Details -->
        <div class="sidebar-title" style="margin-top: 18px;">${isKh ? "\u1796\u17D0\u178F\u17CC\u1798\u17B6\u1793\u179B\u1798\u17D2\u17A2\u17B7\u178F" : "PERSONAL DETAILS"}</div>
        <div style="font-size: 11px; color: #cbd5e1; display: grid; grid-template-columns: 1fr 1fr; gap: 4px 8px; margin-bottom: 18px;">
          <span>${isKh ? "\u1797\u17C1\u1791:" : "Gender:"}</span><strong data-bind="personalInfo.sex">${escapeHtml(p.sex || "Male")}</strong>
          <span>${isKh ? "\u179F\u1789\u17D2\u1787\u17B6\u178F\u17B7:" : "Nationality:"}</span><strong data-bind="personalInfo.nationality">${escapeHtml(p.nationality || "Cambodian")}</strong>
          <span>${isKh ? "\u1780\u17C6\u178E\u17BE\u178F:" : "DOB:"}</span><strong data-bind="personalInfo.dob">${escapeHtml(p.dob || "03/05/2002")}</strong>
        </div>

        <!-- Languages with Dot Ratings -->
        ${data.languages && data.languages.length > 0 ? `
          <div class="sidebar-title">${isKh ? "\u1797\u17B6\u179F\u17B6" : "LANGUAGES"}</div>
          <div style="margin-bottom: 18px;">
            ${data.languages.map((l, idx) => `
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 11px;" data-bind="languages.${idx}.name">${escapeHtml(l.name.split(" ")[0])}</span>
                <div class="rating-dots">
                  <div class="rating-dot active"></div>
                  <div class="rating-dot active"></div>
                  <div class="rating-dot active"></div>
                  <div class="rating-dot ${idx < 2 ? "active" : ""}"></div>
                  <div class="rating-dot"></div>
                </div>
              </div>
            `).join("")}
          </div>
        ` : ""}

        <!-- Skills with Cyan Glowing Bars -->
        <div class="sidebar-title">${isKh ? "\u1787\u17C6\u1793\u17B6\u1789" : "SKILLS"}</div>
        ${(data.skills || []).map((s, idx) => `
          <div style="margin-bottom: 6px;">
            <div style="font-size: 10.5px; color: #e2e8f0; text-transform: uppercase;" data-bind="skills.${idx}.name">${escapeHtml(s.name)}</div>
            <div class="cyan-skill-bar">
              <div class="cyan-skill-fill" style="width: ${s.level || 80}%;"></div>
            </div>
          </div>
        `).join("")}

        <!-- References -->
        ${data.references && data.references.length > 0 ? `
          <div class="sidebar-title" style="margin-top: 18px;">${isKh ? "\u1794\u17BB\u1782\u17D2\u1782\u179B\u1792\u17B6\u1793\u17B6" : "REFERENCES"}</div>
          ${data.references.map((r, idx) => `
            <div style="margin-bottom: 8px;">
              <div style="font-size: 11px; font-weight: 700; color: #fff;" data-bind="references.${idx}.name">${escapeHtml(r.name)}</div>
              <div style="font-size: 10px; color: #94a3b8;" data-bind="references.${idx}.role">${escapeHtml(r.role)}</div>
            </div>
          `).join("")}
        ` : ""}
      </aside>
    </div>
  `;
  }
  function renderRobertJames(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-robert" id="resume-canvas-body">
      <!-- Top Header Banner -->
      <div class="top-header-banner">
        <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "ROBERT JAMES")}</h1>
        <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "GRAPHIC & WEB DESIGNER")}</div>
      </div>

      <!-- Avatar & 2-Column Contact Info Bar -->
      <div class="contact-avatar-bar">
        <div class="contact-left">
          ${p.phone ? `
            <div class="contact-item">
              <i class="fa-solid fa-phone"></i>
              <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
            </div>` : ""}
          ${p.address ? `
            <div class="contact-item">
              <i class="fa-solid fa-location-dot"></i>
              <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
            </div>` : ""}
        </div>

        <div class="avatar-center-wrapper">
          <img src="${p.photo || data.photo || "https://via.placeholder.com/150"}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview" style="background-color: ${data.photoBg || "#ffffff"}">
        </div>

        <div class="contact-right">
          ${p.website ? `
            <div class="contact-item">
              <i class="fa-solid fa-globe"></i>
              <span data-bind="personalInfo.website">${escapeHtml(p.website)}</span>
            </div>` : ""}
          ${p.email ? `
            <div class="contact-item">
              <i class="fa-solid fa-envelope"></i>
              <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
            </div>` : ""}
        </div>
      </div>

      <!-- 2-Column Main Layout -->
      <div class="main-columns-layout">
        <!-- Left Column: About Me, Skills Sliders, Awards -->
        <div class="left-column">
          <!-- About Me -->
          <div class="sec-block">
            <div class="sec-header">
              <i class="fa-solid fa-user icon-badge"></i>
              <span>${isKh ? "\u17A2\u17C6\u1796\u17B8\u1781\u17D2\u1789\u17BB\u17C6" : "ABOUT ME"}</span>
            </div>
            <p class="summary-text" data-bind="personalInfo.summary">${escapeHtml(p.summary || "Enthusiastic professional with deep expertise and passion for delivering excellence.")}</p>
          </div>

          <!-- Skills with progress sliders -->
          <div class="sec-block">
            <div class="sec-header">
              <i class="fa-solid fa-chart-simple icon-badge"></i>
              <span>${isKh ? "\u1787\u17C6\u1793\u17B6\u1789" : "SKILLS"}</span>
            </div>
            ${(data.skills || []).map((s, idx) => `
              <div class="skill-slider-row">
                <div class="skill-slider-header">
                  <span data-bind="skills.${idx}.name">${escapeHtml(s.name)}</span>
                  <span>${s.level || 80}%</span>
                </div>
                <div class="skill-slider-track">
                  <div class="skill-slider-fill" style="width: ${s.level || 80}%;"></div>
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Awards -->
          <div class="sec-block">
            <div class="sec-header">
              <i class="fa-solid fa-trophy icon-badge"></i>
              <span>${isKh ? "\u1796\u17B6\u1793\u179A\u1784\u17D2\u179C\u17B6\u1793\u17CB" : "AWARDS"}</span>
            </div>
            <div class="award-item">
              <div class="award-name">EXCELLENCE ACHIEVEMENT</div>
              <div class="award-meta">Creative Studio / 2022</div>
            </div>
            <div class="award-item">
              <div class="award-name">EMPLOYEE OF THE YEAR</div>
              <div class="award-meta">Tech Digital Inc / 2024</div>
            </div>
          </div>
        </div>

        <!-- Right Column: Education & Experience with Arrow Tags & Hobbies Strip -->
        <div class="right-column">
          <!-- Education -->
          <div class="sec-block">
            <div class="sec-header">
              <i class="fa-solid fa-book-open icon-badge"></i>
              <span>${isKh ? "\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6" : "EDUCATION"}</span>
            </div>
            <div class="timeline-tree">
              ${(data.education || data.educations || []).map((edu, idx) => `
                <div class="tree-node">
                  <div class="node-bullet"></div>
                  <div class="node-left">
                    <div class="node-degree" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</div>
                  </div>
                  <div class="node-right">
                    <div class="node-right-header">
                      <span class="node-school" data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</span>
                      <span class="arrow-badge" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</span>
                    </div>
                    <div class="node-desc" data-bind="educations.${idx}.description">${escapeHtml(edu.description || "")}</div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Experience -->
          <div class="sec-block">
            <div class="sec-header">
              <i class="fa-solid fa-briefcase icon-badge"></i>
              <span>${isKh ? "\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD" : "EXPERIENCE"}</span>
            </div>
            <div class="timeline-tree">
              ${(data.experiences || []).map((exp, idx) => `
                <div class="tree-node">
                  <div class="node-bullet"></div>
                  <div class="node-left">
                    <div class="node-degree" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
                  </div>
                  <div class="node-right">
                    <div class="node-right-header">
                      <span class="node-school" data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</span>
                      <span class="arrow-badge" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</span>
                    </div>
                    <div class="node-desc" data-bind="experiences.${idx}.description">${escapeHtml(exp.description || "")}</div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Hobbies Icon Strip -->
          <div class="sec-block">
            <div class="sec-header">
              <i class="fa-solid fa-star icon-badge"></i>
              <span>${isKh ? "\u1785\u17C6\u178E\u1784\u17CB\u1785\u17C6\u178E\u17BC\u179B\u1785\u17B7\u178F\u17D2\u178F" : "HOBBIES & INTERESTS"}</span>
            </div>
            <div class="hobbies-icon-strip">
              <div class="hobby-icon-item"><i class="fa-solid fa-film"></i><span>Cinema</span></div>
              <div class="hobby-icon-item"><i class="fa-solid fa-headphones"></i><span>Music</span></div>
              <div class="hobby-icon-item"><i class="fa-solid fa-gamepad"></i><span>Games</span></div>
              <div class="hobby-icon-item"><i class="fa-solid fa-book"></i><span>Reading</span></div>
              <div class="hobby-icon-item"><i class="fa-solid fa-plane"></i><span>Travel</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  }
  function renderJonathanPatterson(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-jonathan" id="resume-canvas-body">
      <!-- Left Sidebar with Rounded Arch Top -->
      <aside class="sidebar">
        <div class="arch-avatar-wrapper">
          <img src="${p.photo || data.photo || "https://via.placeholder.com/150"}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview" style="background-color: ${data.photoBg || "#ffffff"}">
        </div>

        <!-- Education -->
        <div class="side-sec">
          <div class="side-title">${isKh ? "\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6" : "EDUCATION"}</div>
          ${(data.education || data.educations || []).map((edu, idx) => `
            <div class="edu-box">
              <div class="edu-period" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</div>
              <div class="edu-degree" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</div>
              <div class="edu-school" data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</div>
            </div>
          `).join("")}
        </div>

        <!-- Skills -->
        <div class="side-sec">
          <div class="side-title">${isKh ? "\u1787\u17C6\u1793\u17B6\u1789" : "SKILLS"}</div>
          <ul class="bullet-list">
            ${(data.skills || []).map((s, idx) => `
              <li data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>
            `).join("")}
          </ul>
        </div>

        <!-- Languages -->
        ${data.languages && data.languages.length > 0 ? `
          <div class="side-sec">
            <div class="side-title">${isKh ? "\u1797\u17B6\u179F\u17B6" : "LANGUAGES"}</div>
            <ul class="bullet-list">
              ${data.languages.map((l, idx) => `
                <li data-bind="languages.${idx}.name">${escapeHtml(l.name)}</li>
              `).join("")}
            </ul>
          </div>
        ` : ""}

        <!-- Contact Info at bottom -->
        <div class="side-sec" style="margin-top: auto;">
          <div class="side-title">${isKh ? "\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784" : "CONTACT"}</div>
          ${p.phone ? `
            <div class="contact-row">
              <i class="fa-solid fa-phone"></i>
              <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
            </div>` : ""}
          ${p.email ? `
            <div class="contact-row">
              <i class="fa-solid fa-envelope"></i>
              <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
            </div>` : ""}
          ${p.address ? `
            <div class="contact-row">
              <i class="fa-solid fa-location-dot"></i>
              <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
            </div>` : ""}
          ${p.website ? `
            <div class="contact-row">
              <i class="fa-solid fa-globe"></i>
              <span data-bind="personalInfo.website">${escapeHtml(p.website)}</span>
            </div>` : ""}
        </div>
      </aside>

      <!-- Right Main Column -->
      <main class="main-content">
        <!-- Charcoal Top Header -->
        <div class="header-box">
          <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "JONATHAN PATTERSON")}</h1>
          <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "Art Director")}</div>
        </div>

        <div class="body-content">
          <!-- Profile Info -->
          <div class="main-sec">
            <div class="main-sec-title">${isKh ? "\u1796\u17D0\u178F\u17CC\u1798\u17B6\u1793\u179F\u1784\u17D2\u1781\u17C1\u1794" : "PROFILE INFO"}</div>
            <p class="summary-text" data-bind="personalInfo.summary">${escapeHtml(p.summary || "Creative and strategic professional with solid track record in design and management.")}</p>
          </div>

          <!-- Experience with Hollow Timeline Nodes -->
          <div class="main-sec">
            <div class="main-sec-title">${isKh ? "\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD\u1780\u17B6\u179A\u1784\u17B6\u179A" : "EXPERIENCE"}</div>
            <div class="hollow-timeline">
              ${(data.experiences || []).map((exp, idx) => `
                <div class="hollow-node">
                  <div class="hollow-dot"></div>
                  <div class="hollow-header">
                    <span class="role-text" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</span>
                    <span class="period-text" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</span>
                  </div>
                  <div class="company-text" data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</div>
                  <div class="desc-text" data-bind="experiences.${idx}.description">${escapeHtml(exp.description || "")}</div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Achievements 2-column highlight -->
          <div class="main-sec">
            <div class="main-sec-title">${isKh ? "\u179F\u1798\u17B7\u1791\u17D2\u1792\u1795\u179B" : "ACHIEVEMENT"}</div>
            <div class="achievement-grid">
              <div class="achieve-card">
                <div class="achieve-period">2020 - 2022</div>
                <div class="achieve-desc">Reduced operating cost by 20% through intelligent automation workflow.</div>
              </div>
              <div class="achieve-card">
                <div class="achieve-period">2023 - 2025</div>
                <div class="achieve-desc">Successfully spearheaded high-impact international portfolio expansion.</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `;
  }
  function renderMatthewConnors(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-matthew" id="resume-canvas-body">
      <!-- Dark Navy Geometric Top Banner -->
      <div class="top-geo-banner">
        <div class="geo-pattern-decor"></div>
        <div class="banner-avatar-wrap">
          <img src="${p.photo || data.photo || "https://via.placeholder.com/150"}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview" style="background-color: ${data.photoBg || "#ffffff"}">
        </div>
        <div class="banner-text-wrap">
          <div class="top-mini-contacts">
            <span>${escapeHtml(p.jobTitle || "Project Manager")}</span> \u2022 
            <span>${escapeHtml(p.phone || "+012 3456 7890")}</span> \u2022 
            <span>${escapeHtml(p.email || "matthew@email.com")}</span>
          </div>
          <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "MATTHEW CONNORS")}</h1>
        </div>
      </div>

      <!-- 2-Column Body Layout -->
      <div class="body-layout">
        <!-- Left Ice-Blue Column -->
        <aside class="sidebar-ice">
          <!-- Profile -->
          <div class="ice-sec">
            <div class="capsule-header">
              <i class="fa-solid fa-user"></i>
              <span>${isKh ? "\u1794\u17D2\u179A\u179C\u178F\u17D2\u178F\u17B7\u179F\u1784\u17D2\u1781\u17C1\u1794" : "PROFILE"}</span>
            </div>
            <p class="summary-text" data-bind="personalInfo.summary">${escapeHtml(p.summary || "Excellence-driven professional with deep experience in driving project milestones.")}</p>
          </div>

          <!-- Skills -->
          <div class="ice-sec">
            <div class="capsule-header">
              <i class="fa-solid fa-gear"></i>
              <span>${isKh ? "\u1787\u17C6\u1793\u17B6\u1789" : "SKILLS"}</span>
            </div>
            <ul class="ice-list">
              ${(data.skills || []).map((s, idx) => `
                <li data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>
              `).join("")}
            </ul>
          </div>

          <!-- Software -->
          <div class="ice-sec">
            <div class="capsule-header">
              <i class="fa-solid fa-laptop-code"></i>
              <span>${isKh ? "\u1780\u1798\u17D2\u1798\u179C\u17B7\u1792\u17B8\u1780\u17BB\u17C6\u1796\u17D2\u1799\u17BC\u1791\u17D0\u179A" : "SOFTWARE"}</span>
            </div>
            <ul class="ice-list">
              <li>MS Office / Excel Advanced</li>
              <li>Figma / Adobe XD</li>
              <li>Project Management Tools</li>
            </ul>
          </div>

          <!-- Languages -->
          <div class="ice-sec">
            <div class="capsule-header">
              <i class="fa-solid fa-comment-dots"></i>
              <span>${isKh ? "\u1797\u17B6\u179F\u17B6" : "LANGUAGES"}</span>
            </div>
            <div class="lang-row">
              ${(data.languages || []).map((l, idx) => `
                <span data-bind="languages.${idx}.name">${escapeHtml(l.name.split(" ")[0])}</span>
              `).join(" | ") || "English | Khmer"}
            </div>
          </div>
        </aside>

        <!-- Right White Column -->
        <main class="main-white">
          <!-- Work Experience -->
          <div class="main-sec">
            <div class="capsule-header-dark">
              <i class="fa-solid fa-briefcase"></i>
              <span>${isKh ? "\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD\u1780\u17B6\u179A\u1784\u17B6\u179A" : "WORK EXPERIENCE"}</span>
            </div>
            <div class="exp-list">
              ${(data.experiences || []).map((exp, idx) => `
                <div class="exp-item">
                  <div class="exp-date" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</div>
                  <div class="exp-company" data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</div>
                  <div class="exp-role" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
                  <div class="exp-desc" data-bind="experiences.${idx}.description">${escapeHtml(exp.description || "")}</div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- References -->
          <div class="main-sec">
            <div class="capsule-header-dark">
              <i class="fa-solid fa-phone"></i>
              <span>${isKh ? "\u1794\u17BB\u1782\u17D2\u1782\u179B\u1792\u17B6\u1793\u17B6" : "REFERENCES"}</span>
            </div>
            <div class="ref-grid">
              ${data.references && data.references.length > 0 ? data.references.map((r, idx) => `
                <div class="ref-box">
                  <div class="ref-name" data-bind="references.${idx}.name">${escapeHtml(r.name)}</div>
                  <div class="ref-role" data-bind="references.${idx}.role">${escapeHtml(r.role)}</div>
                  <div class="ref-contact" data-bind="references.${idx}.contact">${escapeHtml(r.contact)}</div>
                </div>
              `).join("") : `
                <div class="ref-box">
                  <div class="ref-name">John Smith</div>
                  <div class="ref-role">Senior Director, Tech Inc</div>
                  <div class="ref-contact">Tel: 012 345 678</div>
                </div>
                <div class="ref-box">
                  <div class="ref-name">Jane Doe</div>
                  <div class="ref-role">Co-Founder, Agency</div>
                  <div class="ref-contact">Tel: 098 765 432</div>
                </div>
              `}
            </div>
          </div>
        </main>
      </div>
    </div>
  `;
  }
  function renderThomasSmith(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-thomas" id="resume-canvas-body">
      <!-- Left Deep Navy Sidebar -->
      <aside class="sidebar">
        <div class="avatar-box">
          <img src="${p.photo || data.photo || "https://via.placeholder.com/150"}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview" style="background-color: ${data.photoBg || "#ffffff"}">
        </div>

        <!-- Blue Info Bands -->
        <div class="band-stack">
          ${p.phone ? `
            <div class="blue-band">
              <i class="fa-solid fa-phone"></i>
              <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
            </div>` : ""}
          ${p.email ? `
            <div class="blue-band">
              <i class="fa-solid fa-envelope"></i>
              <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
            </div>` : ""}
          ${p.address ? `
            <div class="blue-band">
              <i class="fa-solid fa-location-dot"></i>
              <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
            </div>` : ""}
          ${p.telegram ? `
            <div class="blue-band">
              <i class="fa-brands fa-telegram"></i>
              <span data-bind="personalInfo.telegram">${escapeHtml(p.telegram)}</span>
            </div>` : ""}
        </div>

        <!-- Job Title & Summary -->
        <div class="side-bio-box">
          <div class="bio-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "Job Title")}</div>
          <p class="bio-desc" data-bind="personalInfo.summary">${escapeHtml(p.summary || "Describe your career goals and key achievements.")}</p>
        </div>

        <!-- Languages Banner -->
        <div class="side-section">
          <div class="blue-title-banner">${isKh ? "\u1797\u17B6\u179F\u17B6" : "LANGUAGES"}</div>
          <ul class="side-bullets">
            ${(data.languages || []).map((l, idx) => `
              <li data-bind="languages.${idx}.name">${escapeHtml(l.name)}</li>
            `).join("")}
          </ul>
        </div>

        <!-- Hobbies Banner -->
        <div class="side-section">
          <div class="blue-title-banner">${isKh ? "\u1785\u17C6\u178E\u1784\u17CB\u1785\u17C6\u178E\u17BC\u179B\u1785\u17B7\u178F\u17D2\u178F" : "HOBBIES"}</div>
          <ul class="side-bullets">
            <li>Writing & Blogging</li>
            <li>Sketching & UI Design</li>
            <li>Photography & Music</li>
          </ul>
        </div>
      </aside>

      <!-- Right Main Column -->
      <main class="main-content">
        <!-- Large Header -->
        <div class="header-box">
          <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "THOMAS SMITH")}</h1>
        </div>

        <!-- Experience -->
        <div class="main-sec">
          <div class="sec-banner-title">${isKh ? "\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD" : "EXPERIENCE"}</div>
          ${(data.experiences || []).map((exp, idx) => `
            <div class="exp-node">
              <div class="exp-role" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
              <div class="exp-sub">${escapeHtml(exp.company)} | ${escapeHtml(exp.period)}</div>
              <ul class="duty-bullets">
                <li>Key responsibility or accomplishment delivered effectively</li>
                <li>Led cross-functional communication and execution</li>
              </ul>
            </div>
          `).join("")}
        </div>

        <!-- Education -->
        <div class="main-sec">
          <div class="sec-banner-title">${isKh ? "\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6" : "EDUCATION"}</div>
          ${(data.education || data.educations || []).map((edu, idx) => `
            <div class="edu-node">
              <div class="edu-title" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)} | <span style="font-weight: normal;">${escapeHtml(edu.period)}</span></div>
              <div class="edu-school" data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</div>
            </div>
          `).join("")}
        </div>

        <!-- Skill Highlights -->
        <div class="main-sec">
          <div class="sec-banner-title">${isKh ? "\u1787\u17C6\u1793\u17B6\u1789\u179B\u17C1\u1785\u1792\u17D2\u179B\u17C4" : "SKILL HIGHLIGHTS"}</div>
          <ul class="duty-bullets">
            ${(data.skills || []).map((s, idx) => `
              <li data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>
            `).join("")}
          </ul>
        </div>

        <!-- Courses -->
        <div class="main-sec">
          <div class="sec-banner-title">${isKh ? "\u179C\u1782\u17D2\u1782\u179F\u17B7\u1780\u17D2\u179F\u17B6\u1787\u17C6\u1793\u17B6\u1789" : "COURSES"}</div>
          <ul class="duty-bullets">
            <li>Advanced UI/UX Masterclass & Web Strategy</li>
            <li>Professional Communication & Leadership Certificate</li>
          </ul>
        </div>
      </main>
    </div>
  `;
  }
  function renderStevenTerry(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-steven" id="resume-canvas-body">
      <!-- Top Teal Banner with Avatar on the Right -->
      <div class="top-teal-banner">
        <div class="banner-text">
          <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "STEVEN TERRY")}</h1>
          <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "GRAPHIC DESIGNER")}</div>
        </div>
        <div class="banner-avatar-wrap">
          <img src="${p.photo || data.photo || "https://via.placeholder.com/150"}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview" style="background-color: ${data.photoBg || "#ffffff"}">
        </div>
      </div>

      <!-- 2-Column Body Layout -->
      <div class="body-layout">
        <!-- Left Dark Grey Sidebar -->
        <aside class="sidebar">
          <!-- Personal Meta -->
          <div class="side-sec">
            ${p.gender ? `
              <div class="meta-row">
                <i class="fa-solid fa-user"></i>
                <span data-bind="personalInfo.gender">${escapeHtml(p.gender)}</span>
              </div>` : ""}
            ${p.dob ? `
              <div class="meta-row">
                <i class="fa-solid fa-calendar"></i>
                <span data-bind="personalInfo.dob">${escapeHtml(p.dob)}</span>
              </div>` : ""}
            ${p.phone ? `
              <div class="meta-row">
                <i class="fa-solid fa-phone"></i>
                <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
              </div>` : ""}
            ${p.email ? `
              <div class="meta-row">
                <i class="fa-solid fa-envelope"></i>
                <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
              </div>` : ""}
            ${p.website ? `
              <div class="meta-row">
                <i class="fa-solid fa-globe"></i>
                <span data-bind="personalInfo.website">${escapeHtml(p.website)}</span>
              </div>` : ""}
            ${p.address ? `
              <div class="meta-row">
                <i class="fa-solid fa-location-dot"></i>
                <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
              </div>` : ""}
          </div>

          <div class="side-divider"></div>

          <!-- Skills -->
          <div class="side-sec">
            <div class="side-title">${isKh ? "\u1787\u17C6\u1793\u17B6\u1789" : "SKILLS"}</div>
            ${(data.skills || []).map((s, idx) => `
              <div class="skill-item">
                <div class="skill-head">\u2022 <strong data-bind="skills.${idx}.name">${escapeHtml(s.name)}</strong></div>
                <div class="skill-sub">Proficient & Production Ready</div>
              </div>
            `).join("")}
          </div>

          <div class="side-divider"></div>

          <!-- Honors & Awards -->
          <div class="side-sec">
            <div class="side-title">${isKh ? "\u1780\u17B7\u178F\u17D2\u178F\u17B7\u1799\u179F & \u1796\u17B6\u1793\u179A\u1784\u17D2\u179C\u17B6\u1793\u17CB" : "HONORS & AWARDS"}</div>
            <div class="award-box">
              <strong style="color: #fff;">2024:</strong> Top Performance Award & Annual Scholarship
            </div>
          </div>

          <div class="side-divider"></div>

          <!-- Certifications -->
          <div class="side-sec">
            <div class="side-title">${isKh ? "\u179C\u17B7\u1789\u17D2\u1789\u17B6\u1794\u1793\u1794\u178F\u17D2\u179A" : "CERTIFICATIONS"}</div>
            <div class="cert-box">
              <strong style="color: #fff;">2023:</strong> Professional Certificate of Excellence
            </div>
          </div>
        </aside>

        <!-- Right White Main Column -->
        <main class="main-content">
          <!-- Objective -->
          <div class="main-sec">
            <div class="sec-underline-title">${isKh ? "\u1782\u17C4\u179B\u1794\u17C6\u178E\u1784" : "OBJECTIVE"}</div>
            <p class="summary-text" data-bind="personalInfo.summary">${escapeHtml(p.summary || "To utilize my expertise and dedication to contribute substantial value to team goals.")}</p>
          </div>

          <!-- Education -->
          <div class="main-sec">
            <div class="sec-underline-title">${isKh ? "\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6" : "EDUCATION"}</div>
            ${(data.education || data.educations || []).map((edu, idx) => `
              <div class="edu-item">
                <div class="edu-header">
                  <span class="edu-school">\u2022 <strong data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</strong></span>
                  <span class="edu-date" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</span>
                </div>
                <div class="edu-degree" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</div>
              </div>
            `).join("")}
          </div>

          <!-- Work Experience -->
          <div class="main-sec">
            <div class="sec-underline-title">${isKh ? "\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD\u1780\u17B6\u179A\u1784\u17B6\u179A" : "WORK EXPERIENCE"}</div>
            ${(data.experiences || []).map((exp, idx) => `
              <div class="exp-item">
                <div class="exp-header">
                  <span class="exp-company">\u2022 <strong data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</strong></span>
                  <span class="exp-date" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</span>
                </div>
                <div class="exp-role" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
                <div class="exp-desc" data-bind="experiences.${idx}.description">${escapeHtml(exp.description || "")}</div>
              </div>
            `).join("")}
          </div>

          <!-- Activities -->
          <div class="main-sec">
            <div class="sec-underline-title">${isKh ? "\u179F\u1780\u1798\u17D2\u1798\u1797\u17B6\u1796\u179F\u1784\u17D2\u1782\u1798" : "ACTIVITIES"}</div>
            <div class="activity-item">
              <div class="activity-header">
                <span>\u2022 <strong>EDUCATION & YOUTH FORUM</strong></span>
                <span class="activity-date">2022 - 2024</span>
              </div>
              <div class="activity-desc">Active organizer and mentor for youth digital literacy programs.</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  `;
  }
  function renderKhmerOfficial(data) {
    const p = data.personalInfo || {};
    return `
    <div class="resume-page cv-template-khmer-official" id="resume-canvas-body">
      <!-- Official Kingdom Header -->
      <div class="official-top-row">
        <div class="official-kingdom-center">
          <div class="kingdom-line-1">\u1796\u17D2\u179A\u17C7\u179A\u17B6\u1787\u17B6\u178E\u17B6\u1785\u1780\u17D2\u179A\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6</div>
          <div class="kingdom-line-2">\u1787\u17B6\u178F\u17B7 \u179F\u17B6\u179F\u1793\u17B6 \u1796\u17D2\u179A\u17C7\u1798\u17A0\u17B6\u1780\u17D2\u179F\u178F\u17D2\u179A</div>
          <div class="kingdom-flower">\u2756 \u2756 \u2756</div>
          <h1 class="official-app-title">\u1796\u17B6\u1780\u17D2\u1799\u179F\u17BB\u17C6\u1785\u17BC\u179B\u1794\u1798\u17D2\u179A\u17BE\u1780\u17B6\u179A\u1784\u17B6\u179A</h1>
        </div>

        <!-- 4x6 Passport Photo on Top Right -->
        <div class="official-photo-box">
          <img src="${p.photo || data.photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"}" alt="Photo 4x6" class="official-photo-img" style="background-color: ${data.photoBg || "#1e88e5"}">
          <div class="official-photo-tag">\u17E4 x \u17E6</div>
        </div>
      </div>

      <!-- Section 1: \u1787\u17B8\u179C\u1794\u17D2\u179A\u179C\u178F\u17D2\u178F\u17B7\u1795\u17D2\u1791\u17B6\u179B\u17CB\u1781\u17D2\u179B\u17BD\u1793 -->
      <div class="official-sec">
        <div class="official-sec-title">\u1787\u17B8\u179C\u1794\u17D2\u179A\u179C\u178F\u17D2\u178F\u17B7\u1795\u17D2\u1791\u17B6\u179B\u17CB\u1781\u17D2\u179B\u17BD\u1793</div>
        <table class="official-table">
          <tbody>
            <tr>
              <td class="lbl">\u1782\u17C4\u178F\u17D2\u178F\u1793\u17B6\u1798 \u1793\u17B7\u1784 \u1793\u17B6\u1798</td>
              <td class="cln">:</td>
              <td class="val-bold" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "\u1781\u17C1\u1793 \u179F\u17BB\u1781\u17B6")}</td>
            </tr>
            <tr>
              <td class="lbl">\u179F\u17BB\u17C6\u1794\u1798\u17D2\u179A\u17BE\u1780\u17B6\u179A\u1784\u17B6\u179A\u1795\u17D2\u1793\u17C2\u1780</td>
              <td class="cln">:</td>
              <td class="val-bold" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "\u1782\u17D2\u179A\u17BC\u1794\u1784\u17D2\u179A\u17C0\u1793\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A / \u179A\u178A\u17D2\u178B\u1794\u17B6\u179B")}</td>
            </tr>
            <tr>
              <td class="lbl">\u179B\u17C1\u1781\u1791\u17BC\u179A\u179F\u17D0\u1796\u17D2\u1791</td>
              <td class="cln">:</td>
              <td class="val" data-bind="personalInfo.phone">${escapeHtml(p.phone || "096 826 5506")} ${p.telegram ? `( Telegram )` : ""}</td>
            </tr>
            <tr>
              <td class="lbl">\u1797\u17C1\u1791</td>
              <td class="cln">:</td>
              <td class="val" data-bind="personalInfo.sex">${escapeHtml(p.sex || "\u179F\u17D2\u179A\u17B8")}</td>
            </tr>
            <tr>
              <td class="lbl">\u1790\u17D2\u1784\u17C3\u1781\u17C2\u1786\u17D2\u1793\u17B6\u17C6\u1780\u17C6\u178E\u17BE\u178F</td>
              <td class="cln">:</td>
              <td class="val" data-bind="personalInfo.dob">${escapeHtml(p.dob || "\u1790\u17D2\u1784\u17C3\u1791\u17B8 04 \u1781\u17C2 \u1798\u17B7\u1790\u17BB\u1793\u17B6 \u1786\u17D2\u1793\u17B6\u17C6 2005")}</td>
            </tr>
            <tr>
              <td class="lbl">\u1791\u17B8\u1780\u1793\u17D2\u179B\u17C2\u1784\u1780\u17C6\u178E\u17BE\u178F</td>
              <td class="cln">:</td>
              <td class="val" data-bind="personalInfo.pob">${escapeHtml(p.pob || "\u1797\u17BC\u1798\u17B7\u178F\u17D2\u1793\u17C4\u178F \u1783\u17BB\u17C6\u1796\u17D2\u179A\u17C2\u1780\u178A\u17C6\u1794\u1784 \u179F\u17D2\u179A\u17BB\u1780\u1798\u17BB\u1781\u1780\u17C6\u1796\u17BC\u179B \u1781\u17C1\u178F\u17D2\u178F\u1780\u178E\u17D2\u178F\u17B6\u179B")}</td>
            </tr>
            <tr>
              <td class="lbl">\u1780\u1798\u17D2\u1796\u179F\u17CB</td>
              <td class="cln">:</td>
              <td class="val" data-bind="personalInfo.height">${escapeHtml(p.height || "165 cm")}</td>
            </tr>
            <tr>
              <td class="lbl">\u1787\u1793\u1787\u17B6\u178F\u17B7</td>
              <td class="cln">:</td>
              <td class="val" data-bind="personalInfo.nationality">${escapeHtml(p.nationality || "\u1781\u17D2\u1798\u17C2\u179A")}</td>
            </tr>
            <tr>
              <td class="lbl">\u179F\u17D2\u1790\u17B6\u1793\u1797\u17B6\u1796\u1782\u17D2\u179A\u17BD\u179F\u17B6\u179A</td>
              <td class="cln">:</td>
              <td class="val" data-bind="personalInfo.maritalStatus">${escapeHtml(p.maritalStatus || "\u1793\u17C5\u179B\u17B8\u179C")}</td>
            </tr>
            <tr>
              <td class="lbl">\u1791\u17B8\u179B\u17C6\u1793\u17C5\u1794\u1785\u17D2\u1785\u17BB\u1794\u17D2\u1794\u1793\u17D2\u1793</td>
              <td class="cln">:</td>
              <td class="val" data-bind="personalInfo.address">${escapeHtml(p.address || "\u1797\u17BC\u1798\u17B7\u1796\u17D2\u179A\u17C3\u179F\u17B6\u179B\u17B6\u1780\u17CB \u179F\u1784\u17D2\u1780\u17B6\u178F\u17CB\u1785\u17C4\u1798\u1785\u17C5 \u1781\u178E\u17D2\u178C\u1796\u17C4\u1792\u17B7\u17CD\u179F\u17C2\u1793\u1787\u17D0\u1799 \u179A\u17B6\u1787\u1792\u17B6\u1793\u17B8\u1797\u17D2\u1793\u17C6\u1796\u17C1\u1789")}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Section 2: \u1780\u1798\u17D2\u179A\u17B7\u178F\u179C\u1794\u17D2\u1794\u1792\u1798\u17CC \u17AC \u1780\u17B6\u179A\u179F\u17B7\u1780\u17D2\u179F\u17B6 -->
      <div class="official-sec">
        <div class="official-sec-title">\u1780\u1798\u17D2\u179A\u17B7\u178F\u179C\u1794\u17D2\u1794\u1792\u1798\u17CC \u17AC \u1780\u17B6\u179A\u179F\u17B7\u1780\u17D2\u179F\u17B6</div>
        <table class="official-table">
          <tbody>
            ${(data.education || data.educations || []).map((edu, idx) => `
              <tr>
                <td class="lbl" style="width: 140px;" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</td>
                <td class="cln">:</td>
                <td class="val"><span data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</span> \u1793\u17C5 <strong data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</strong></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <!-- Section 3: \u1787\u17C6\u1793\u17B6\u1789\u1795\u17D2\u179F\u17C1\u1784\u17D7 -->
      <div class="official-sec">
        <div class="official-sec-title">\u1787\u17C6\u1793\u17B6\u1789\u1795\u17D2\u179F\u17C1\u1784\u17D7</div>
        <table class="official-table">
          <tbody>
            <tr>
              <td class="lbl" style="width: 140px;">\u1780\u17BB\u17C6\u1796\u17D2\u1799\u17BC\u1791\u17D0\u179A</td>
              <td class="cln">:</td>
              <td class="val">${(data.skills || []).map((s, idx) => `<span data-bind="skills.${idx}.name">${escapeHtml(s.name)}</span>`).join(", ")}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Section 4: \u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD\u1780\u17B6\u179A\u1784\u17B6\u179A -->
      <div class="official-sec">
        <div class="official-sec-title">\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD\u1780\u17B6\u179A\u1784\u17B6\u179A</div>
        <table class="official-table">
          <tbody>
            ${(data.experiences || []).map((exp, idx) => `
              <tr>
                <td class="lbl" style="width: 140px;" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</td>
                <td class="cln">:</td>
                <td class="val"><span data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</span> \u1793\u17C5 <strong data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</strong></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <!-- Section 5: \u1787\u17C6\u1793\u17B6\u1789\u1797\u17B6\u179F\u17B6 -->
      <div class="official-sec">
        <div class="official-sec-title">\u1787\u17C6\u1793\u17B6\u1789\u1797\u17B6\u179F\u17B6</div>
        <table class="official-table">
          <tbody>
            <tr>
              <td class="lbl" style="width: 140px;">\u1781\u17D2\u1798\u17C2\u179A</td>
              <td class="cln">:</td>
              <td class="val">\u1797\u17B6\u179F\u17B6\u178A\u17BE\u1798\u1780\u17C6\u178E\u17BE\u178F</td>
            </tr>
            <tr>
              <td class="lbl" style="width: 140px;">\u17A2\u1784\u17CB\u1782\u17D2\u179B\u17C1\u179F</td>
              <td class="cln">:</td>
              <td class="val">\u1794\u1784\u17D2\u1782\u17BD\u179A / \u1798\u1792\u17D2\u1799\u1798 (\u17A2\u17B6\u1785\u1794\u17D2\u179A\u17B6\u179F\u17D2\u179A\u17D0\u1799\u1791\u17B6\u1780\u17CB\u1791\u1784\u1794\u17B6\u1793)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
  }
  function renderThyMengleang(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    const nameParts = (p.fullName || "THY MENGLEANG").split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ");
    return `
    <div class="resume-page cv-template-thy-mengleang" id="resume-canvas-body">
      <!-- Top Row: Photo on Left + Huge Bold Name on Right -->
      <div class="thy-top-header">
        <div class="thy-photo-frame">
          <img src="${p.photo || data.photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"}" alt="Photo" class="thy-avatar-img">
        </div>
        <div class="thy-name-block">
          <h1 class="thy-big-name">
            <span class="thy-fname" data-bind="personalInfo.fullName">${escapeHtml(firstName)}</span>
            <span class="thy-lname">${escapeHtml(lastName)}</span>
          </h1>
          <p class="thy-summary-para" data-bind="personalInfo.summary">${escapeHtml(p.summary || "I am a qualified and professional web developer with five years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for detail.")}</p>
        </div>
      </div>

      <!-- Bottom Columns: Dark Navy Sidebar + White Timeline Body -->
      <div class="thy-main-cols">
        <!-- Left Navy Sidebar -->
        <aside class="thy-sidebar">
          <!-- Contacts -->
          <div class="thy-contact-group">
            ${p.phone ? `
              <div class="thy-contact-row">
                <i class="fa-solid fa-phone"></i>
                <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
              </div>` : ""}
            ${p.email ? `
              <div class="thy-contact-row">
                <i class="fa-solid fa-envelope"></i>
                <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
              </div>` : ""}
            ${p.address ? `
              <div class="thy-contact-row">
                <i class="fa-solid fa-location-dot"></i>
                <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
              </div>` : ""}
            ${p.website ? `
              <div class="thy-contact-row">
                <i class="fa-solid fa-globe"></i>
                <span data-bind="personalInfo.website">${escapeHtml(p.website)}</span>
              </div>` : ""}
          </div>

          <!-- Skills -->
          <div class="thy-side-sec">
            <div class="thy-side-title">${isKh ? "\u1787\u17C6\u1793\u17B6\u1789" : "SKILLS"}</div>
            <ul class="thy-side-list">
              ${(data.skills || []).map((s, idx) => `
                <li data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>
              `).join("")}
            </ul>
          </div>

          <!-- Education -->
          <div class="thy-side-sec">
            <div class="thy-side-title">${isKh ? "\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6" : "EDUCATION"}</div>
            ${(data.education || data.educations || []).map((edu, idx) => `
              <div class="thy-side-edu-item">
                <div class="thy-edu-deg" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</div>
                <div class="thy-edu-sch" data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</div>
                <div class="thy-edu-yr" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</div>
              </div>
            `).join("")}
          </div>

          <!-- Language -->
          <div class="thy-side-sec">
            <div class="thy-side-title">${isKh ? "\u1797\u17B6\u179F\u17B6" : "LANGUAGE"}</div>
            <ul class="thy-side-list">
              <li>English (Fluent)</li>
              <li>Khmer (Native)</li>
            </ul>
          </div>
        </aside>

        <!-- Right Timeline Content -->
        <main class="thy-body-content">
          <div class="thy-main-title">${isKh ? "\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD\u1780\u17B6\u179A\u1784\u17B6\u179A" : "EXPERIENCE"}</div>
          
          <div class="thy-timeline-container">
            ${(data.experiences || []).map((exp, idx) => `
              <div class="thy-timeline-item">
                <div class="thy-timeline-circle"></div>
                <div class="thy-exp-header">
                  <div class="thy-exp-role" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
                  <div class="thy-exp-company" data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</div>
                  <div class="thy-exp-period" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</div>
                </div>
                <ul class="thy-exp-bullets">
                  ${exp.highlights && exp.highlights.length > 0 ? exp.highlights.map((hl, hlIdx) => `
                    <li data-bind="experiences.${idx}.highlights.${hlIdx}">${escapeHtml(hl)}</li>
                  `).join("") : `<li>${escapeHtml(exp.description || "Responsible for daily project operations and design implementations.")}</li>`}
                </ul>
              </div>
            `).join("")}
          </div>
        </main>
      </div>
    </div>
  `;
  }
  function renderJamesParas(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-james-paras" id="resume-canvas-body">
      <!-- Background Fluid Corner Accents -->
      <div class="james-blob-top-right"></div>
      <div class="james-blob-bottom-left"></div>

      <!-- Top Header Row -->
      <div class="james-header-row">
        <!-- Organic Droplet Photo Wrapper -->
        <div class="james-photo-droplet">
          <img src="${p.photo || data.photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"}" alt="Photo" class="james-avatar">
        </div>

        <div class="james-title-block">
          <h1 class="james-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "JAMES DANIEL PARAS")}</h1>
          <div class="james-jobtitle" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "WEB DEVELOPER")}</div>
        </div>
      </div>

      <!-- Content 2 Columns -->
      <div class="james-cols">
        <!-- Left Column -->
        <aside class="james-col-left">
          <!-- Contact -->
          <div class="james-sec-box">
            <div class="james-pill-header">${isKh ? "\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784" : "CONTACT"}</div>
            <div class="james-contact-list">
              ${p.phone ? `
                <div class="james-contact-item">
                  <span class="james-icon-circle"><i class="fa-solid fa-phone"></i></span>
                  <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
                </div>` : ""}
              ${p.email ? `
                <div class="james-contact-item">
                  <span class="james-icon-circle"><i class="fa-solid fa-envelope"></i></span>
                  <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
                </div>` : ""}
              ${p.address ? `
                <div class="james-contact-item">
                  <span class="james-icon-circle"><i class="fa-solid fa-house"></i></span>
                  <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
                </div>` : ""}
            </div>
          </div>

          <!-- Skills -->
          <div class="james-sec-box">
            <div class="james-pill-header">${isKh ? "\u1787\u17C6\u1793\u17B6\u1789" : "SKILLS"}</div>
            <ul class="james-bullet-list">
              ${(data.skills || []).map((s, idx) => `
                <li data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>
              `).join("")}
            </ul>
          </div>
        </aside>

        <!-- Right Column -->
        <main class="james-col-right">
          <!-- Personal Information -->
          <div class="james-sec-box">
            <div class="james-pill-header">${isKh ? "\u1796\u17D0\u178F\u17CC\u1798\u17B6\u1793\u1795\u17D2\u1791\u17B6\u179B\u17CB\u1781\u17D2\u179B\u17BD\u1793" : "PERSONAL INFORMATION"}</div>
            <table class="james-info-table">
              <tbody>
                <tr>
                  <td class="lbl">Birthday</td>
                  <td class="val" data-bind="personalInfo.dob">${escapeHtml(p.dob || "November 20, 2002")}</td>
                </tr>
                <tr>
                  <td class="lbl">Birth Place</td>
                  <td class="val" data-bind="personalInfo.pob">${escapeHtml(p.pob || "Kampong Cham / Phnom Penh")}</td>
                </tr>
                <tr>
                  <td class="lbl">Gender</td>
                  <td class="val" data-bind="personalInfo.sex">${escapeHtml(p.sex || "Male")}</td>
                </tr>
                <tr>
                  <td class="lbl">Nationality</td>
                  <td class="val" data-bind="personalInfo.nationality">${escapeHtml(p.nationality || "Cambodian")}</td>
                </tr>
                <tr>
                  <td class="lbl">Civil Status</td>
                  <td class="val">Single</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Career Objectives -->
          <div class="james-sec-box">
            <div class="james-pill-header">${isKh ? "\u1782\u17C4\u179B\u1794\u17C6\u178E\u1784\u17A2\u17B6\u1787\u17B8\u1796" : "CAREER OBJECTIVES"}</div>
            <div class="james-obj-text" data-bind="personalInfo.summary">
              \u2022 To gain experience and knowledge that is relevant to my field.<br>
              \u2022 To grow professionally and seek opportunities.<br>
              \u2022 To hone my technical abilities and contribute to team success.
            </div>
          </div>

          <!-- Education -->
          <div class="james-sec-box">
            <div class="james-pill-header">${isKh ? "\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6" : "EDUCATION"}</div>
            <table class="james-edu-table">
              <tbody>
                ${(data.education || data.educations || []).map((edu, idx) => `
                  <tr>
                    <td class="yr" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</td>
                    <td class="sch"><strong data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</strong><br><span style="font-size: 11px; color: #555;" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</span></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
            <div class="james-bottom-bar"></div>
          </div>
        </main>
      </div>
    </div>
  `;
  }
  function renderGustavoGreen(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-gustavo-green" id="resume-canvas-body">
      <!-- Left Forest Green Sidebar -->
      <aside class="gustavo-sidebar">
        <!-- Photo with Top Right Curve -->
        <div class="gustavo-photo-box">
          <img src="${p.photo || data.photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"}" alt="Photo" class="gustavo-avatar">
        </div>

        <!-- Meta pills -->
        <div class="gustavo-meta-group">
          <div class="gustavo-meta-item"><i class="fa-solid fa-user"></i> <span>22 years</span></div>
          <div class="gustavo-meta-item"><i class="fa-solid fa-flag"></i> <span data-bind="personalInfo.nationality">${escapeHtml(p.nationality || "Cambodian")}</span></div>
          <div class="gustavo-meta-item"><i class="fa-solid fa-cake-candles"></i> <span data-bind="personalInfo.dob">${escapeHtml(p.dob || "September 23, 2001")}</span></div>
        </div>

        <!-- Contact -->
        <div class="gustavo-side-sec">
          <div class="gustavo-sec-head">${isKh ? "\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784" : "CONTACT"}</div>
          ${p.phone ? `<div class="gustavo-contact-row"><i class="fa-solid fa-phone"></i><span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span></div>` : ""}
          ${p.email ? `<div class="gustavo-contact-row"><i class="fa-solid fa-envelope"></i><span data-bind="personalInfo.email">${escapeHtml(p.email)}</span></div>` : ""}
          ${p.address ? `<div class="gustavo-contact-row"><i class="fa-solid fa-house"></i><span data-bind="personalInfo.address">${escapeHtml(p.address)}</span></div>` : ""}
        </div>

        <!-- Knowledge -->
        <div class="gustavo-side-sec">
          <div class="gustavo-sec-head"><i class="fa-solid fa-display"></i> ${isKh ? "\u1785\u17C6\u178E\u17C1\u17C7\u178A\u17B9\u1784" : "KNOWLEDGE"}</div>
          <ul class="gustavo-list">
            <li>Professional Draftsman & CAD</li>
            <li>Topography & 3D Modeling</li>
            <li>Project Designer & Structure</li>
          </ul>
        </div>

        <!-- Skills -->
        <div class="gustavo-side-sec">
          <div class="gustavo-sec-head"><i class="fa-solid fa-brain"></i> ${isKh ? "\u1787\u17C6\u1793\u17B6\u1789" : "SKILLS"}</div>
          <ul class="gustavo-list">
            ${(data.skills || []).map((s, idx) => `
              <li data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>
            `).join("")}
          </ul>
        </div>

        <!-- Languages -->
        <div class="gustavo-side-sec">
          <div class="gustavo-sec-head"><i class="fa-solid fa-globe"></i> ${isKh ? "\u1797\u17B6\u179F\u17B6" : "LANGUAGES"}</div>
          <div style="font-size: 11.5px; font-weight: 700; letter-spacing: 0.5px;">ADVANCED ENGLISH / KHMER</div>
        </div>
      </aside>

      <!-- Right Main Column -->
      <main class="gustavo-main">
        <!-- Top Grey Header Block -->
        <div class="gustavo-header-block">
          <h1 class="gustavo-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "GUSTAVO COBE\xD1AS")}</h1>
          <div class="gustavo-job" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "ARCHITECT")}</div>
        </div>

        <div class="gustavo-body-inner">
          <!-- Profile -->
          <div class="gustavo-main-sec">
            <div class="gustavo-main-head"><i class="fa-solid fa-user"></i> ${isKh ? "\u1794\u17D2\u179A\u179C\u178F\u17D2\u178F\u17B7\u179A\u17BC\u1794\u179F\u1784\u17D2\u1781\u17C1\u1794" : "PERSONAL PROFILE"}</div>
            <p class="gustavo-desc" data-bind="personalInfo.summary">${escapeHtml(p.summary || "Licensed architect with knowledge to carry out architectural projects that satisfy the needs of users according to their context, also willing to continue acquiring knowledge and take advantage of it.")}</p>
          </div>

          <!-- Academic Training -->
          <div class="gustavo-main-sec">
            <div class="gustavo-main-head"><i class="fa-solid fa-graduation-cap"></i> ${isKh ? "\u1780\u17B6\u179A\u179F\u17B7\u1780\u17D2\u179F\u17B6\u17A2\u1794\u17CB\u179A\u17C6" : "ACADEMIC TRAINING"}</div>
            
            ${(data.education || data.educations || []).map((edu, idx) => `
              <div class="gustavo-edu-block">
                <div class="gustavo-edu-title" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</div>
                <div class="gustavo-edu-yr" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</div>
                <ul class="gustavo-edu-bullets">
                  <li><span data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</span></li>
                </ul>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Bottom Right Stepped Geometric Stairs Accent -->
        <div class="gustavo-steps-accent"></div>
      </main>
    </div>
  `;
  }
  function renderSadiqNavy(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    const nameParts = (p.fullName || "SADIQ AMIN").split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ");
    return `
    <div class="resume-page cv-template-sadiq-navy" id="resume-canvas-body">
      <!-- Halftone Circles Texture Background Accents -->
      <div class="sadiq-dots-top-right"></div>
      <div class="sadiq-dots-bottom-left"></div>

      <!-- Top Row Header -->
      <header class="sadiq-header-row">
        <div class="sadiq-photo-navy-box">
          <img src="${p.photo || data.photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"}" alt="Photo" class="sadiq-avatar">
        </div>

        <div class="sadiq-title-center">
          <h1 class="sadiq-huge-name">
            <span class="sadiq-fname" data-bind="personalInfo.fullName">${escapeHtml(firstName)}</span>
            <span class="sadiq-lname">${escapeHtml(lastName)}</span>
          </h1>
          <div class="sadiq-job" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "Office Assistant")}</div>
        </div>
      </header>

      <!-- 2 Columns Body -->
      <div class="sadiq-body-cols">
        <!-- Left Column -->
        <aside class="sadiq-left-col">
          <!-- About Me -->
          <div class="sadiq-sec-block">
            <div class="sadiq-simple-title">${isKh ? "\u17A2\u17C6\u1796\u17B8\u1781\u17D2\u1789\u17BB\u17C6" : "About Me"}</div>
            <p class="sadiq-about-text" data-bind="personalInfo.summary">${escapeHtml(p.summary || "As an Office Assistant, I am dedicated to ensuring efficient operations through meticulous organization and effective communication. Proficient in administrative tasks.")}</p>
          </div>

          <!-- Contacts -->
          <div class="sadiq-contact-block">
            ${p.phone ? `
              <div class="sadiq-contact-row">
                <span class="sadiq-icon-navy"><i class="fa-solid fa-phone"></i></span>
                <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
              </div>` : ""}
            ${p.email ? `
              <div class="sadiq-contact-row">
                <span class="sadiq-icon-navy"><i class="fa-solid fa-envelope"></i></span>
                <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
              </div>` : ""}
            ${p.address ? `
              <div class="sadiq-contact-row">
                <span class="sadiq-icon-navy"><i class="fa-solid fa-house"></i></span>
                <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
              </div>` : ""}
          </div>

          <!-- Language -->
          <div class="sadiq-sec-block">
            <div class="sadiq-pill-title">${isKh ? "\u1797\u17B6\u179F\u17B6" : "LANGUAGE"}</div>
            <ul class="sadiq-side-bullets">
              <li>English (Fluent)</li>
              <li>Khmer (Native)</li>
            </ul>
          </div>

          <!-- Expertise -->
          <div class="sadiq-sec-block">
            <div class="sadiq-pill-title">${isKh ? "\u1787\u17C6\u1793\u17B6\u1789\u17AF\u1780\u1791\u17C1\u179F" : "EXPERTISE"}</div>
            <ul class="sadiq-side-bullets">
              ${(data.skills || []).map((s, idx) => `
                <li data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>
              `).join("")}
            </ul>
          </div>
        </aside>

        <!-- Right Column -->
        <main class="sadiq-right-col">
          <!-- Experience -->
          <div class="sadiq-sec-block">
            <div class="sadiq-pill-title">${isKh ? "\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD\u1780\u17B6\u179A\u1784\u17B6\u179A" : "EXPERIENCE"}</div>
            ${(data.experiences || []).map((exp, idx) => `
              <div class="sadiq-exp-item">
                <div class="sadiq-exp-role-head">
                  <strong data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</strong>
                  <span class="sadiq-exp-date" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</span>
                </div>
                <div class="sadiq-exp-comp" data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</div>
                <p class="sadiq-exp-text">${exp.highlights && exp.highlights.length > 0 ? escapeHtml(exp.highlights[0]) : escapeHtml(exp.description || "")}</p>
              </div>
            `).join("")}
          </div>

          <!-- Education -->
          <div class="sadiq-sec-block">
            <div class="sadiq-pill-title">${isKh ? "\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6" : "EDUCATION"}</div>
            ${(data.education || data.educations || []).map((edu, idx) => `
              <div class="sadiq-edu-item">
                <div class="sadiq-edu-sch" data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</div>
                <div class="sadiq-edu-deg" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</div>
                <div class="sadiq-edu-yr" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</div>
              </div>
            `).join("")}
          </div>

          <!-- Skills Summary Sliders -->
          <div class="sadiq-sec-block">
            <div class="sadiq-pill-title">${isKh ? "\u1780\u1798\u17D2\u179A\u17B7\u178F\u1787\u17C6\u1793\u17B6\u1789" : "SKILLS SUMMARY"}</div>
            <div class="sadiq-skill-bars">
              ${(data.skills || [{ name: "Digital Marketing", level: 78 }, { name: "Graphic Designing", level: 81 }]).slice(0, 3).map((s, idx) => `
                <div class="sadiq-bar-row">
                  <span class="sadiq-bar-name" data-bind="skills.${idx}.name">${escapeHtml(s.name)}</span>
                  <div class="sadiq-bar-track">
                    <div class="sadiq-bar-fill" style="width: ${s.level || 80}%;"></div>
                  </div>
                  <span class="sadiq-bar-pct">${s.level || 80} %</span>
                </div>
              `).join("")}
            </div>
          </div>
        </main>
      </div>
    </div>
  `;
  }
  function renderBlueWave(data) {
    const p = data.personalInfo || {};
    const isKh = data.language === "kh";
    return `
    <div class="resume-page cv-template-blue-wave" id="resume-canvas-body">
      <!-- Top Sweeping Blue Wave Header -->
      <div class="wave-header-container">
        <svg class="wave-svg-top" viewBox="0 0 1000 240" preserveAspectRatio="none">
          <!-- Background Navy -->
          <path d="M0,0 L1000,0 L1000,140 Q700,240 0,110 Z" fill="#0d2f57" />
          <!-- Cyan Ribbon Wave -->
          <path d="M0,110 Q700,240 1000,140 L1000,165 Q650,255 0,140 Z" fill="#00a8ff" />
        </svg>

        <div class="wave-header-content">
          <!-- Left Overlapping Circular Avatar -->
          <div class="wave-avatar-wrapper">
            <img src="${p.photo || data.photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"}" alt="Avatar" class="wave-avatar-img">
          </div>

          <!-- Right Name & Title -->
          <div class="wave-name-block">
            <h1 class="wave-user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || "YOUR NAME")}</h1>
            <div class="wave-job-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || "Software Engineer")}</div>
          </div>
        </div>
      </div>

      <!-- Main 2-Columns Body with Center Divider -->
      <div class="wave-body-container">
        <!-- Left Column -->
        <aside class="wave-left-column">
          <!-- Contact -->
          <div class="wave-sec-group">
            <div class="wave-sec-title-left">${isKh ? "\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784" : "CONTACT"}</div>
            <div class="wave-contact-list">
              ${p.phone ? `
                <div class="wave-contact-pill">
                  <span class="wave-contact-icon"><i class="fa-solid fa-phone"></i></span>
                  <span class="wave-contact-text" data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
                </div>` : ""}
              ${p.address ? `
                <div class="wave-contact-pill">
                  <span class="wave-contact-icon"><i class="fa-solid fa-location-dot"></i></span>
                  <span class="wave-contact-text" data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
                </div>` : ""}
              ${p.email ? `
                <div class="wave-contact-pill">
                  <span class="wave-contact-icon"><i class="fa-solid fa-envelope"></i></span>
                  <span class="wave-contact-text" data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
                </div>` : ""}
              ${p.website ? `
                <div class="wave-contact-pill">
                  <span class="wave-contact-icon"><i class="fa-solid fa-globe"></i></span>
                  <span class="wave-contact-text" data-bind="personalInfo.website">${escapeHtml(p.website)}</span>
                </div>` : ""}
            </div>
          </div>

          <!-- Skills with Cyan Bars -->
          <div class="wave-sec-group">
            <div class="wave-sec-title-left">${isKh ? "\u1787\u17C6\u1793\u17B6\u1789" : "SKILLS"}</div>
            <div class="wave-bar-list">
              ${(data.skills || [
      { name: "MS Word", level: 90 },
      { name: "MS Excel", level: 85 },
      { name: "Drawing", level: 70 },
      { name: "Access", level: 75 }
    ]).map((s, idx) => `
                <div class="wave-bar-row">
                  <span class="wave-bar-label" data-bind="skills.${idx}.name">${escapeHtml(s.name)}</span>
                  <div class="wave-bar-shell">
                    <div class="wave-bar-core" style="width: ${s.level || 80}%;"></div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Languages with Cyan Bars -->
          <div class="wave-sec-group">
            <div class="wave-sec-title-left">${isKh ? "\u1797\u17B6\u179F\u17B6" : "LANGUAGES"}</div>
            <div class="wave-bar-list">
              <div class="wave-bar-row">
                <span class="wave-bar-label">Urdu</span>
                <div class="wave-bar-shell"><div class="wave-bar-core" style="width: 95%;"></div></div>
              </div>
              <div class="wave-bar-row">
                <span class="wave-bar-label">English</span>
                <div class="wave-bar-shell"><div class="wave-bar-core" style="width: 85%;"></div></div>
              </div>
              <div class="wave-bar-row">
                <span class="wave-bar-label">French</span>
                <div class="wave-bar-shell"><div class="wave-bar-core" style="width: 65%;"></div></div>
              </div>
              <div class="wave-bar-row">
                <span class="wave-bar-label">Hindi</span>
                <div class="wave-bar-shell"><div class="wave-bar-core" style="width: 70%;"></div></div>
              </div>
            </div>
          </div>

          <!-- Hobbies Icons -->
          <div class="wave-sec-group">
            <div class="wave-sec-title-left">${isKh ? "\u1785\u17C6\u178E\u1784\u17CB\u1785\u17C6\u178E\u17BC\u179B\u1785\u17B7\u178F\u17D2\u178F" : "HOBBIES"}</div>
            <div class="wave-hobbies-row">
              <div class="wave-hobby-circle"><i class="fa-solid fa-music"></i></div>
              <div class="wave-hobby-circle"><i class="fa-solid fa-camera"></i></div>
              <div class="wave-hobby-circle"><i class="fa-solid fa-pen"></i></div>
              <div class="wave-hobby-circle"><i class="fa-solid fa-book-open"></i></div>
            </div>
          </div>
        </aside>

        <!-- Vertical Divider -->
        <div class="wave-divider-line"></div>

        <!-- Right Column -->
        <main class="wave-right-column">
          <!-- About Me -->
          <div class="wave-main-sec">
            <div class="wave-pill-heading">
              <span class="wave-target-icon"><i class="fa-regular fa-circle-dot"></i></span>
              <span class="wave-pill-text">${isKh ? "\u17A2\u17C6\u1796\u17B8\u1781\u17D2\u1789\u17BB\u17C6" : "ABOUT ME"}</span>
            </div>
            <p class="wave-about-para" data-bind="personalInfo.summary">${escapeHtml(p.summary || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")}</p>
          </div>

          <!-- Education -->
          <div class="wave-main-sec">
            <div class="wave-pill-heading">
              <span class="wave-target-icon"><i class="fa-regular fa-circle-dot"></i></span>
              <span class="wave-pill-text">${isKh ? "\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6" : "EDUCATION"}</span>
            </div>
            <div class="wave-timeline-list">
              ${(data.education || data.educations || [
      { period: "2005-2007", degree: "LOREM IPSUM", school: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
      { period: "2007-2009", degree: "LOREM IPSUM", school: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
      { period: "2009-2011", degree: "LOREM IPSUM", school: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
    ]).map((edu, idx) => `
                <div class="wave-timeline-row">
                  <div class="wave-time-col" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</div>
                  <div class="wave-detail-col">
                    <div class="wave-degree-title" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</div>
                    <p class="wave-detail-desc" data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</p>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Experience -->
          <div class="wave-main-sec">
            <div class="wave-pill-heading">
              <span class="wave-target-icon"><i class="fa-regular fa-circle-dot"></i></span>
              <span class="wave-pill-text">${isKh ? "\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD" : "EXPERIENCE"}</span>
            </div>
            <div class="wave-timeline-list">
              ${(data.experiences || [
      { period: "2005-2007", role: "LOREM IPSUM", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
      { period: "2007-2009", role: "LOREM IPSUM", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
      { period: "2009-2011", role: "LOREM IPSUM", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
    ]).map((exp, idx) => `
                <div class="wave-timeline-row">
                  <div class="wave-time-col" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</div>
                  <div class="wave-detail-col">
                    <div class="wave-degree-title" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
                    <p class="wave-detail-desc" data-bind="experiences.${idx}.description">${escapeHtml(exp.description || (exp.highlights ? exp.highlights[0] : ""))}</p>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </main>
      </div>

      <!-- Bottom Sweeping Blue Wave Footer -->
      <div class="wave-footer-container">
        <svg class="wave-svg-bottom" viewBox="0 0 1000 110" preserveAspectRatio="none">
          <!-- Cyan Ribbon Wave -->
          <path d="M0,50 Q400,-20 1000,50 L1000,110 L0,110 Z" fill="#00a8ff" />
          <!-- Navy Bottom Wave -->
          <path d="M0,70 Q400,0 1000,70 L1000,110 L0,110 Z" fill="#0d2f57" />
        </svg>
      </div>
    </div>
  `;
  }

  // js/payment.js
  var BAKONG_CONFIG = {
    baseUrl: "https://www.payment-system.dev/api/v1/",
    apiToken: "6441057055:J0qQgzaAhnuMrDOh6xnYv68N5DMgI0CNifu",
    account: "sovanmony_soy@bkrt",
    merchantName: "MN DIGITAL STORE",
    coinPerDollar: 100,
    // 10 coins = $0.10, 100 coins = $1.00
    costPerExport: 10,
    // 10 coins per export ($0.10)
    pollIntervalMs: 5e3
    // Optimized: poll every 5s instead of 3s to reduce API spam
  };
  var paymentState = {
    coins: parseInt(localStorage.getItem("cv_studio_coins") || "0", 10),
    activePollInterval: null,
    currentMd5: null,
    pendingActionAfterPay: null,
    // 'pdf' | 'png' | null
    currentTimerInterval: null,
    consecutiveErrors: 0
  };
  var qrCache = /* @__PURE__ */ new Map();
  var QR_CACHE_DURATION_MS = 3.5 * 60 * 1e3;
  function updateCoinBalance(amountToAdd = 0) {
    paymentState.coins = Math.max(0, paymentState.coins + amountToAdd);
    localStorage.setItem("cv_studio_coins", paymentState.coins.toString());
    const coinElements = document.querySelectorAll(".user-coin-val");
    coinElements.forEach((el) => {
      el.innerText = paymentState.coins;
    });
  }
  async function generateBakongQR(amountUsd) {
    const cacheKey = amountUsd.toFixed(2);
    const cached = qrCache.get(cacheKey);
    if (cached && Date.now() < cached.expiresAt) {
      return cached.data;
    }
    const url = `${BAKONG_CONFIG.baseUrl}?type=generate_qr&api_token=${encodeURIComponent(BAKONG_CONFIG.apiToken)}&amount=${cacheKey}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      if (json.code === 201 && json.data && json.data.length > 0) {
        const qrData = json.data[0];
        qrCache.set(cacheKey, {
          data: qrData,
          expiresAt: Date.now() + QR_CACHE_DURATION_MS
        });
        return qrData;
      } else {
        throw new Error(json.message || "Failed to generate QR code");
      }
    } catch (err) {
      console.error("QR Generation Error:", err);
      throw err;
    }
  }
  async function checkPaymentStatus(md5) {
    const url = `${BAKONG_CONFIG.baseUrl}?type=check_md5&api_token=${encodeURIComponent(BAKONG_CONFIG.apiToken)}&md5=${encodeURIComponent(md5)}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      paymentState.consecutiveErrors = 0;
      return json;
    } catch (err) {
      paymentState.consecutiveErrors++;
      console.warn(`Payment check warning (${paymentState.consecutiveErrors}):`, err);
      return { status: "pending" };
    }
  }
  function startPaymentPolling(md5, coinsPurchased, onSuccessCallback) {
    stopPaymentPolling();
    paymentState.currentMd5 = md5;
    paymentState.consecutiveErrors = 0;
    paymentState.activePollInterval = setInterval(async () => {
      if (document.hidden) {
        return;
      }
      if (paymentState.consecutiveErrors >= 5) {
        console.warn("Paused payment polling due to repeated network errors");
        return;
      }
      try {
        const result = await checkPaymentStatus(md5);
        if (result.status === "success") {
          stopPaymentPolling();
          for (const [key, val] of qrCache.entries()) {
            if (val.data.md5 === md5) qrCache.delete(key);
          }
          updateCoinBalance(coinsPurchased);
          if (onSuccessCallback) {
            onSuccessCallback(result);
          }
        } else if (result.status === "expired" || result.status === "failed") {
          stopPaymentPolling();
          const statusEl = document.getElementById("qr-payment-status-text");
          if (statusEl) {
            statusEl.innerHTML = `<span style="color: #ef4444;"><i class="fa-solid fa-circle-xmark"></i> QR Code \u1793\u17C1\u17C7\u1794\u17B6\u1793\u1795\u17BB\u178F\u1780\u17C6\u178E\u178F\u17CB \u17AC\u1794\u179A\u17B6\u1787\u17D0\u1799</span>`;
          }
        }
      } catch (e) {
        console.error("Polling error:", e);
      }
    }, BAKONG_CONFIG.pollIntervalMs);
  }
  function stopPaymentPolling() {
    if (paymentState.activePollInterval) {
      clearInterval(paymentState.activePollInterval);
      paymentState.activePollInterval = null;
    }
    if (paymentState.currentTimerInterval) {
      clearInterval(paymentState.currentTimerInterval);
      paymentState.currentTimerInterval = null;
    }
  }
  document.addEventListener("visibilitychange", async () => {
    if (!document.hidden && paymentState.activePollInterval && paymentState.currentMd5) {
      try {
        await checkPaymentStatus(paymentState.currentMd5);
      } catch (_) {
      }
    }
  });

  // js/app.js
  var state = {
    activeTemplate: "charcoal",
    directEditMode: false,
    zoomLevel: 100,
    data: JSON.parse(JSON.stringify(sampleProfiles.cambodian))
  };
  var templateRenderers = {
    charcoal: renderCharcoal,
    timeline: renderTimeline,
    executive: renderExecutive,
    cambodian: renderCambodian,
    infographic: renderInfographic,
    blackgold: renderBlackGold,
    geometric: renderGeometric,
    cobalt: renderCobalt,
    origami: renderOrigami,
    executive_right: renderExecutiveRight,
    robert: renderRobertJames,
    jonathan: renderJonathanPatterson,
    matthew: renderMatthewConnors,
    thomas: renderThomasSmith,
    steven: renderStevenTerry,
    khmer_official: renderKhmerOfficial,
    thy_mengleang: renderThyMengleang,
    james_paras: renderJamesParas,
    gustavo_green: renderGustavoGreen,
    sadiq_navy: renderSadiqNavy,
    blue_wave: renderBlueWave
  };
  function setNestedValue(obj, path, value) {
    const parts = path.split(".");
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (!(part in current)) {
        current[part] = /^\d+$/.test(parts[i + 1]) ? [] : {};
      }
      current = current[part];
    }
    current[parts[parts.length - 1]] = value;
  }
  function showToast(message, icon = "fa-check") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid ${icon}" style="color: #3b82f6;"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3e3);
  }
  function renderCanvas() {
    const container = document.getElementById("resume-canvas-container");
    if (!container) return;
    const renderer = templateRenderers[state.activeTemplate] || renderCharcoal;
    try {
      container.innerHTML = renderer(state.data);
    } catch (err) {
      console.error("Error rendering template:", state.activeTemplate, err);
      container.innerHTML = renderCharcoal(state.data);
    }
    const editableElements = container.querySelectorAll("[data-bind]");
    editableElements.forEach((el) => {
      el.setAttribute("contenteditable", state.directEditMode ? "true" : "false");
      el.addEventListener("input", (e) => {
        const bindPath = el.getAttribute("data-bind");
        const text = el.innerText.trim();
        setNestedValue(state.data, bindPath, text);
        syncFormDataToUI();
      });
    });
  }
  function syncStateToForm() {
    const p = state.data.personalInfo || {};
    document.getElementById("input-fullname").value = p.fullName || "";
    document.getElementById("input-jobtitle").value = p.jobTitle || "";
    document.getElementById("input-phone").value = p.phone || "";
    document.getElementById("input-email").value = p.email || "";
    document.getElementById("input-telegram").value = p.telegram || "";
    document.getElementById("input-linkedin").value = p.linkedin || "";
    document.getElementById("input-sex").value = p.sex || "";
    document.getElementById("input-nationality").value = p.nationality || "";
    document.getElementById("input-dob").value = p.dob || "";
    document.getElementById("input-pob").value = p.pob || "";
    document.getElementById("input-address").value = p.address || "";
    document.getElementById("input-summary").value = p.summary || "";
    if (state.data.photo) {
      document.getElementById("form-photo-thumb").src = state.data.photo;
    }
    if (state.data.photoBg) {
      document.getElementById("input-photo-bg").value = state.data.photoBg;
    }
    document.getElementById("select-language").value = state.data.language || "kh";
    renderExperienceFormItems();
    renderEducationFormItems();
    renderSkillsFormItems();
    renderLanguagesFormItems();
    renderReferencesFormItems();
    const prefInput = document.getElementById("input-preferences");
    if (prefInput && state.data.preferences) {
      prefInput.value = state.data.preferences.join(", ");
    }
  }
  function syncFormDataToUI() {
    const p = state.data.personalInfo || {};
    const nameInput = document.getElementById("input-fullname");
    if (nameInput && document.activeElement !== nameInput) nameInput.value = p.fullName || "";
  }
  function renderExperienceFormItems() {
    const container = document.getElementById("experience-items-container");
    container.innerHTML = "";
    (state.data.experiences || []).forEach((exp, idx) => {
      const card = document.createElement("div");
      card.className = "item-card";
      card.innerHTML = `
      <div class="item-card-header">
        <span class="item-card-title">\u1794\u1791\u1796\u17B7\u179F\u17C4\u1792\u1793\u17CD #${idx + 1}</span>
        <button class="btn-icon-danger btn-remove-exp" data-index="${idx}" title="\u179B\u17BB\u1794\u1785\u17C4\u179B"><i class="fa-solid fa-trash"></i></button>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">\u178F\u17BD\u1793\u17B6\u1791\u17B8 (Role / Position)</label>
          <input type="text" class="form-input exp-role" data-idx="${idx}" value="${exp.role || ""}">
        </div>
        <div class="form-group">
          <label class="form-label">\u1780\u17D2\u179A\u17BB\u1798\u17A0\u17CA\u17BB\u1793 / \u179F\u17D2\u1790\u17B6\u1794\u17D0\u1793 (Company)</label>
          <input type="text" class="form-input exp-company" data-idx="${idx}" value="${exp.company || ""}">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 (Period)</label>
          <input type="text" class="form-input exp-period" data-idx="${idx}" value="${exp.period || ""}">
        </div>
        <div class="form-group">
          <label class="form-label">\u1791\u17B8\u178F\u17B6\u17C6\u1784 (Location)</label>
          <input type="text" class="form-input exp-location" data-idx="${idx}" value="${exp.location || ""}">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">\u1785\u17C6\u178E\u17BB\u1785\u1780\u17B6\u179A\u1784\u17B6\u179A\u179F\u17C6\u1781\u17B6\u1793\u17CB\u17D7 (Highlights - \u1798\u17BD\u1799\u1794\u1793\u17D2\u1791\u17B6\u178F\u17CB\u1798\u17BD\u1799\u1785\u17C6\u178E\u17BB\u1785)</label>
        <textarea class="form-textarea exp-highlights" data-idx="${idx}">${(exp.highlights || []).join("\n")}</textarea>
      </div>
    `;
      container.appendChild(card);
    });
    container.querySelectorAll(".exp-role").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.data.experiences[e.target.dataset.idx].role = e.target.value;
        renderCanvas();
      });
    });
    container.querySelectorAll(".exp-company").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.data.experiences[e.target.dataset.idx].company = e.target.value;
        renderCanvas();
      });
    });
    container.querySelectorAll(".exp-period").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.data.experiences[e.target.dataset.idx].period = e.target.value;
        renderCanvas();
      });
    });
    container.querySelectorAll(".exp-location").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.data.experiences[e.target.dataset.idx].location = e.target.value;
        renderCanvas();
      });
    });
    container.querySelectorAll(".exp-highlights").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.data.experiences[e.target.dataset.idx].highlights = e.target.value.split("\n").filter((s) => s.trim().length > 0);
        renderCanvas();
      });
    });
    container.querySelectorAll(".btn-remove-exp").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const idx = parseInt(btn.dataset.index, 10);
        state.data.experiences.splice(idx, 1);
        renderExperienceFormItems();
        renderCanvas();
      });
    });
  }
  function renderEducationFormItems() {
    const container = document.getElementById("education-items-container");
    container.innerHTML = "";
    (state.data.education || []).forEach((edu, idx) => {
      const card = document.createElement("div");
      card.className = "item-card";
      card.innerHTML = `
      <div class="item-card-header">
        <span class="item-card-title">\u1780\u17B6\u179A\u17A2\u1794\u17CB\u179A\u17C6 #${idx + 1}</span>
        <button class="btn-icon-danger btn-remove-edu" data-index="${idx}" title="\u179B\u17BB\u1794\u1785\u17C4\u179B"><i class="fa-solid fa-trash"></i></button>
      </div>
      <div class="form-group">
        <label class="form-label">\u179F\u1789\u17D2\u1789\u17B6\u1794\u178F\u17D2\u179A / \u1780\u1798\u17D2\u179A\u17B7\u178F (Degree / Certificate)</label>
        <input type="text" class="form-input edu-degree" data-idx="${idx}" value="${edu.degree || ""}">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">\u179F\u17B6\u179B\u17B6 / \u179F\u17B6\u1780\u179B\u179C\u17B7\u1791\u17D2\u1799\u17B6\u179B\u17D0\u1799 (School / University)</label>
          <input type="text" class="form-input edu-school" data-idx="${idx}" value="${edu.school || ""}">
        </div>
        <div class="form-group">
          <label class="form-label">\u1786\u17D2\u1793\u17B6\u17C6\u179F\u17B7\u1780\u17D2\u179F\u17B6 (Period)</label>
          <input type="text" class="form-input edu-period" data-idx="${idx}" value="${edu.period || ""}">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">\u1780\u17B6\u179A\u1796\u17B7\u1796\u178E\u17CC\u1793\u17B6\u1794\u1793\u17D2\u1790\u17C2\u1798 (Description / GPA)</label>
        <input type="text" class="form-input edu-desc" data-idx="${idx}" value="${edu.description || ""}">
      </div>
    `;
      container.appendChild(card);
    });
    container.querySelectorAll(".edu-degree").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.data.education[e.target.dataset.idx].degree = e.target.value;
        renderCanvas();
      });
    });
    container.querySelectorAll(".edu-school").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.data.education[e.target.dataset.idx].school = e.target.value;
        renderCanvas();
      });
    });
    container.querySelectorAll(".edu-period").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.data.education[e.target.dataset.idx].period = e.target.value;
        renderCanvas();
      });
    });
    container.querySelectorAll(".edu-desc").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.data.education[e.target.dataset.idx].description = e.target.value;
        renderCanvas();
      });
    });
    container.querySelectorAll(".btn-remove-edu").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const idx = parseInt(btn.dataset.index, 10);
        state.data.education.splice(idx, 1);
        renderEducationFormItems();
        renderCanvas();
      });
    });
  }
  function renderSkillsFormItems() {
    const container = document.getElementById("skills-items-container");
    container.innerHTML = "";
    (state.data.skills || []).forEach((skill, idx) => {
      const card = document.createElement("div");
      card.className = "item-card";
      card.style.padding = "10px 14px";
      card.innerHTML = `
      <div style="display: flex; gap: 10px; align-items: center;">
        <input type="text" class="form-input skill-name" data-idx="${idx}" value="${skill.name || ""}" placeholder="\u1788\u17D2\u1798\u17C4\u17C7\u1787\u17C6\u1793\u17B6\u1789 (Skill Name)" style="flex: 2;">
        <input type="number" min="10" max="100" class="form-input skill-level" data-idx="${idx}" value="${skill.level || 85}" style="width: 70px;" placeholder="%">
        <button class="btn-icon-danger btn-remove-skill" data-index="${idx}" title="\u179B\u17BB\u1794"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
      container.appendChild(card);
    });
    container.querySelectorAll(".skill-name").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.data.skills[e.target.dataset.idx].name = e.target.value;
        renderCanvas();
      });
    });
    container.querySelectorAll(".skill-level").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.data.skills[e.target.dataset.idx].level = parseInt(e.target.value || 0, 10);
        renderCanvas();
      });
    });
    container.querySelectorAll(".btn-remove-skill").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const idx = parseInt(btn.dataset.index, 10);
        state.data.skills.splice(idx, 1);
        renderSkillsFormItems();
        renderCanvas();
      });
    });
  }
  function renderLanguagesFormItems() {
    const container = document.getElementById("languages-items-container");
    container.innerHTML = "";
    (state.data.languages || []).forEach((lang, idx) => {
      const card = document.createElement("div");
      card.className = "item-card";
      card.style.padding = "10px 14px";
      card.innerHTML = `
      <div style="display: flex; gap: 10px; align-items: center;">
        <input type="text" class="form-input lang-name" data-idx="${idx}" value="${lang.name || ""}" placeholder="\u1797\u17B6\u179F\u17B6 (Language)" style="flex: 1;">
        <input type="text" class="form-input lang-level" data-idx="${idx}" value="${lang.level || ""}" placeholder="\u1780\u1798\u17D2\u179A\u17B7\u178F (Level / Fluent)" style="flex: 1;">
        <button class="btn-icon-danger btn-remove-lang" data-index="${idx}" title="\u179B\u17BB\u1794"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
      container.appendChild(card);
    });
    container.querySelectorAll(".lang-name").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.data.languages[e.target.dataset.idx].name = e.target.value;
        renderCanvas();
      });
    });
    container.querySelectorAll(".lang-level").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.data.languages[e.target.dataset.idx].level = e.target.value;
        renderCanvas();
      });
    });
    container.querySelectorAll(".btn-remove-lang").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const idx = parseInt(btn.dataset.index, 10);
        state.data.languages.splice(idx, 1);
        renderLanguagesFormItems();
        renderCanvas();
      });
    });
  }
  function renderReferencesFormItems() {
    const container = document.getElementById("references-items-container");
    container.innerHTML = "";
    (state.data.references || []).forEach((ref, idx) => {
      const card = document.createElement("div");
      card.className = "item-card";
      card.innerHTML = `
      <div class="item-card-header">
        <span class="item-card-title">\u1794\u17BB\u1782\u17D2\u1782\u179B\u1792\u17B6\u1793\u17B6 #${idx + 1}</span>
        <button class="btn-icon-danger btn-remove-ref" data-index="${idx}" title="\u179B\u17BB\u1794"><i class="fa-solid fa-trash"></i></button>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">\u1788\u17D2\u1798\u17C4\u17C7 (Name)</label>
          <input type="text" class="form-input ref-name" data-idx="${idx}" value="${ref.name || ""}">
        </div>
        <div class="form-group">
          <label class="form-label">\u1798\u17BB\u1781\u178F\u17C6\u178E\u17C2\u1784 & \u179F\u17D2\u1790\u17B6\u1794\u17D0\u1793 (Role & Company)</label>
          <input type="text" class="form-input ref-role" data-idx="${idx}" value="${ref.role || ""}">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">\u1796\u17D0\u178F\u17CC\u1798\u17B6\u1793\u1791\u17C6\u1793\u17B6\u1780\u17CB\u1791\u17C6\u1793\u1784 (Contact Details)</label>
        <input type="text" class="form-input ref-contact" data-idx="${idx}" value="${ref.contact || ""}">
      </div>
    `;
      container.appendChild(card);
    });
    container.querySelectorAll(".ref-name").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.data.references[e.target.dataset.idx].name = e.target.value;
        renderCanvas();
      });
    });
    container.querySelectorAll(".ref-role").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.data.references[e.target.dataset.idx].role = e.target.value;
        renderCanvas();
      });
    });
    container.querySelectorAll(".ref-contact").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.data.references[e.target.dataset.idx].contact = e.target.value;
        renderCanvas();
      });
    });
    container.querySelectorAll(".btn-remove-ref").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const idx = parseInt(btn.dataset.index, 10);
        state.data.references.splice(idx, 1);
        renderReferencesFormItems();
        renderCanvas();
      });
    });
  }
  function initApp() {
    const navTabs = document.querySelectorAll(".nav-tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");
    navTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        navTabs.forEach((t) => t.classList.remove("active"));
        tabPanes.forEach((p) => p.classList.remove("active"));
        tab.classList.add("active");
        const targetId = tab.getAttribute("data-tab");
        document.getElementById(targetId)?.classList.add("active");
      });
    });
    const templateCards = document.querySelectorAll(".template-card");
    templateCards.forEach((card) => {
      card.addEventListener("click", () => {
        templateCards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
        state.activeTemplate = card.getAttribute("data-template");
        renderCanvas();
        showToast(`\u1794\u17B6\u1793\u1794\u17D2\u178F\u17BC\u179A\u1791\u17C5 Template: ${card.querySelector(".template-title").innerText}`);
      });
    });
    const toggleEditBtn = document.getElementById("btn-toggle-edit-mode");
    const editModeLabel = document.getElementById("edit-mode-label");
    const canvasModeBadge = document.getElementById("canvas-mode-badge");
    toggleEditBtn.addEventListener("click", () => {
      state.directEditMode = !state.directEditMode;
      if (state.directEditMode) {
        toggleEditBtn.className = "btn btn-success";
        editModeLabel.innerText = "\u1785\u17BB\u1785\u179F\u179A\u179F\u17C1\u179A\u1795\u17D2\u1791\u17B6\u179B\u17CB\u179B\u17BE\u1780\u17D2\u179A\u178A\u17B6\u179F: \u1794\u17BE\u1780";
        canvasModeBadge.className = "mode-badge direct-active";
        canvasModeBadge.innerHTML = '<i class="fa-solid fa-pen-nib"></i> Direct Edit Mode (\u17A2\u17B6\u1785\u1785\u17BB\u1785\u179F\u179A\u179F\u17C1\u179A\u1795\u17D2\u1791\u17B6\u179B\u17CB\u1794\u17B6\u1793)';
        showToast("\u179A\u1794\u17C0\u1794\u179F\u179A\u179F\u17C1\u179A\u1795\u17D2\u1791\u17B6\u179B\u17CB\u179B\u17BE\u1780\u17D2\u179A\u178A\u17B6\u179F A4 \u178F\u17D2\u179A\u17BC\u179C\u1794\u17B6\u1793\u1794\u17BE\u1780\u178A\u17C6\u178E\u17BE\u179A\u1780\u17B6\u179A! \u1785\u17BB\u1785\u179B\u17BE\u17A2\u178F\u17D2\u1790\u1794\u1791\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1780\u17C2\u179F\u1798\u17D2\u179A\u17BD\u179B");
      } else {
        toggleEditBtn.className = "btn btn-secondary";
        editModeLabel.innerText = "\u1785\u17BB\u1785\u179F\u179A\u179F\u17C1\u179A\u1795\u17D2\u1791\u17B6\u179B\u17CB\u179B\u17BE\u1780\u17D2\u179A\u178A\u17B6\u179F: \u1794\u17B7\u1791";
        canvasModeBadge.className = "mode-badge";
        canvasModeBadge.innerHTML = '<i class="fa-solid fa-eye"></i> Form Sync Preview';
        showToast("\u1794\u17B6\u1793\u1794\u17D2\u178F\u17BC\u179A\u1798\u1780\u1780\u17B6\u1793\u17CB\u179A\u1794\u17C0\u1794 Form View");
      }
      renderCanvas();
    });
    document.getElementById("select-language").addEventListener("change", (e) => {
      state.data.language = e.target.value;
      renderCanvas();
    });
    document.getElementById("select-sample-profile").addEventListener("change", (e) => {
      const val = e.target.value;
      if (val && sampleProfiles[val]) {
        state.data = JSON.parse(JSON.stringify(sampleProfiles[val]));
        state.activeTemplate = state.data.templateId || "cambodian";
        templateCards.forEach((c) => {
          c.classList.toggle("active", c.getAttribute("data-template") === state.activeTemplate);
        });
        syncStateToForm();
        renderCanvas();
        showToast("\u1794\u17B6\u1793\u1791\u17B6\u1789\u1799\u1780\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1782\u17C6\u179A\u17BC\u178A\u17C4\u1799\u1787\u17C4\u1782\u1787\u17D0\u1799!");
      }
      e.target.value = "";
    });
    document.querySelectorAll("[data-model]").forEach((input) => {
      input.addEventListener("input", (e) => {
        const modelPath = e.target.getAttribute("data-model");
        setNestedValue(state.data, modelPath, e.target.value);
        renderCanvas();
      });
    });
    document.getElementById("input-preferences").addEventListener("input", (e) => {
      state.data.preferences = e.target.value.split(",").map((s) => s.trim()).filter((s) => s.length > 0);
      renderCanvas();
    });
    const avatarInput = document.getElementById("input-avatar-file");
    avatarInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (loadEvt) => {
          state.data.photo = loadEvt.target.result;
          document.getElementById("form-photo-thumb").src = state.data.photo;
          renderCanvas();
          showToast("\u1794\u17B6\u1793\u1794\u17D2\u178F\u17BC\u179A\u179A\u17BC\u1794\u1790\u178F Profile \u178A\u17C4\u1799\u1787\u17C4\u1782\u1787\u17D0\u1799!");
        };
        reader.readAsDataURL(file);
      }
    });
    document.getElementById("input-photo-bg").addEventListener("input", (e) => {
      state.data.photoBg = e.target.value;
      renderCanvas();
    });
    document.getElementById("btn-add-experience").addEventListener("click", () => {
      if (!state.data.experiences) state.data.experiences = [];
      state.data.experiences.push({
        role: "\u1798\u17BB\u1781\u178F\u17C6\u178E\u17C2\u1784\u1790\u17D2\u1798\u17B8 (New Role)",
        company: "\u1788\u17D2\u1798\u17C4\u17C7\u1780\u17D2\u179A\u17BB\u1798\u17A0\u17CA\u17BB\u1793 (Company Name)",
        location: "\u1797\u17D2\u1793\u17C6\u1796\u17C1\u1789 (Phnom Penh)",
        period: "2023 - Present",
        highlights: ["\u1796\u17B7\u1796\u178E\u17CC\u1793\u17B6\u1780\u17B6\u179A\u1784\u17B6\u179A\u179F\u17C6\u1781\u17B6\u1793\u17CB\u17D7\u1793\u17C5\u1791\u17B8\u1793\u17C1\u17C7..."]
      });
      renderExperienceFormItems();
      renderCanvas();
    });
    document.getElementById("btn-add-education").addEventListener("click", () => {
      if (!state.data.education) state.data.education = [];
      state.data.education.push({
        degree: "\u1794\u179A\u17B7\u1789\u17D2\u1789\u17B6\u1794\u178F\u17D2\u179A\u1790\u17D2\u1798\u17B8 (New Degree)",
        school: "\u179F\u17B6\u1780\u179B\u179C\u17B7\u1791\u17D2\u1799\u17B6\u179B\u17D0\u1799 / \u179F\u17B6\u179B\u17B6",
        period: "2020 - 2024",
        description: "\u1780\u17B6\u179A\u1796\u17B7\u1796\u178E\u17CC\u1793\u17B6 \u17AC GPA..."
      });
      renderEducationFormItems();
      renderCanvas();
    });
    document.getElementById("btn-add-skill").addEventListener("click", () => {
      if (!state.data.skills) state.data.skills = [];
      state.data.skills.push({ name: "\u1787\u17C6\u1793\u17B6\u1789\u1790\u17D2\u1798\u17B8 (New Skill)", level: 80 });
      renderSkillsFormItems();
      renderCanvas();
    });
    document.getElementById("btn-add-language").addEventListener("click", () => {
      if (!state.data.languages) state.data.languages = [];
      state.data.languages.push({ name: "\u1797\u17B6\u179F\u17B6\u1790\u17D2\u1798\u17B8 (New Language)", level: "Fluent", percent: 80 });
      renderLanguagesFormItems();
      renderCanvas();
    });
    document.getElementById("btn-add-reference").addEventListener("click", () => {
      if (!state.data.references) state.data.references = [];
      state.data.references.push({
        name: "\u1788\u17D2\u1798\u17C4\u17C7\u1794\u17BB\u1782\u17D2\u1782\u179B\u1792\u17B6\u1793\u17B6 (Reference Name)",
        role: "\u1798\u17BB\u1781\u178F\u17C6\u178E\u17C2\u1784 & \u1780\u17D2\u179A\u17BB\u1798\u17A0\u17CA\u17BB\u1793",
        contact: "Phone: 012 345 678 | Email: example@gmail.com"
      });
      renderReferencesFormItems();
      renderCanvas();
    });
    const wrapper = document.getElementById("resume-page-wrapper");
    const zoomText = document.getElementById("zoom-value-text");
    const updateZoom = (newZoom) => {
      state.zoomLevel = Math.min(Math.max(newZoom, 50), 150);
      zoomText.innerText = `${state.zoomLevel}%`;
      wrapper.style.transform = `scale(${state.zoomLevel / 100})`;
    };
    const autoFitZoom = () => {
      const canvasEl = document.getElementById("main-canvas");
      if (canvasEl) {
        const availH = canvasEl.clientHeight - 130;
        const a4H = 1122.5;
        const bestScale = Math.min(Math.max(Math.round(availH / a4H * 100), 55), 100);
        updateZoom(bestScale);
      } else {
        updateZoom(75);
      }
    };
    document.getElementById("btn-zoom-in").addEventListener("click", () => updateZoom(state.zoomLevel + 5));
    document.getElementById("btn-zoom-out").addEventListener("click", () => updateZoom(state.zoomLevel - 5));
    document.getElementById("btn-zoom-reset").addEventListener("click", () => updateZoom(100));
    const fitBtn = document.getElementById("btn-zoom-fit");
    if (fitBtn) {
      fitBtn.addEventListener("click", autoFitZoom);
    }
    window.addEventListener("resize", () => {
    });
    const paymentModal = document.getElementById("modal-bakong-payment");
    const closePaymentModalBtn = document.getElementById("btn-close-payment-modal");
    const openTopupBtn = document.getElementById("btn-open-topup");
    const packageCards = document.querySelectorAll(".coin-pkg-card");
    let selectedCoins = 10;
    let selectedAmount = 0.1;
    function formatTime(seconds) {
      const m = Math.floor(seconds / 60).toString().padStart(2, "0");
      const s = (seconds % 60).toString().padStart(2, "0");
      return `${m}:${s}`;
    }
    async function loadBakongQR(amount, coins) {
      const qrImg = document.getElementById("khqr-img-element");
      const spinner = document.getElementById("qr-loading-spinner");
      const amountDisplay = document.getElementById("khqr-amount-display");
      const billNumberEl = document.getElementById("khqr-bill-number");
      const deeplinkBtn = document.getElementById("khqr-deeplink-btn");
      const statusText = document.getElementById("qr-payment-status-text");
      const timerEl = document.getElementById("qr-countdown-timer");
      qrImg.style.display = "none";
      spinner.style.display = "block";
      amountDisplay.innerText = `$${amount.toFixed(2)} USD`;
      statusText.innerHTML = `<div class="pulse-dot"></div><span>\u1780\u17C6\u1796\u17BB\u1784\u179A\u1784\u17CB\u1785\u17B6\u17C6\u1780\u17B6\u179A\u179F\u17D2\u1780\u17C1\u1793\u1791\u17BC\u1791\u17B6\u178F\u17CB\u1794\u17D2\u179A\u17B6\u1780\u17CB (Auto Check)...</span>`;
      try {
        const qrData = await generateBakongQR(amount);
        qrImg.src = qrData.link_qr_code;
        qrImg.onload = () => {
          spinner.style.display = "none";
          qrImg.style.display = "inline-block";
        };
        billNumberEl.innerText = `Bill: ${qrData.bill_number}`;
        if (qrData.deeplink_by_qr) {
          deeplinkBtn.href = qrData.deeplink_by_qr;
          deeplinkBtn.style.display = "inline-flex";
        } else {
          deeplinkBtn.style.display = "none";
        }
        let timeLeft = 300;
        timerEl.innerText = formatTime(timeLeft);
        if (paymentState.currentTimerInterval) clearInterval(paymentState.currentTimerInterval);
        paymentState.currentTimerInterval = setInterval(() => {
          timeLeft--;
          timerEl.innerText = formatTime(timeLeft);
          if (timeLeft <= 0) {
            clearInterval(paymentState.currentTimerInterval);
            stopPaymentPolling();
            statusText.innerHTML = `<span style="color: #ef4444;"><i class="fa-solid fa-clock"></i> QR Code \u1794\u17B6\u1793\u1795\u17BB\u178F\u1780\u17C6\u178E\u178F\u17CB\u17A0\u17BE\u1799</span>`;
          }
        }, 1e3);
        startPaymentPolling(qrData.md5, coins, (successRes) => {
          paymentModal.classList.remove("active");
          showToast(`\u{1F389} \u17A2\u1794\u17A2\u179A\u179F\u17B6\u1791\u179A! \u1794\u17B6\u1793\u1791\u17BC\u1791\u17B6\u178F\u17CB\u1794\u17D2\u179A\u17B6\u1780\u17CB\u1787\u17C4\u1782\u1787\u17D0\u1799! \u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${coins} \u1780\u17B6\u1780\u17CB (Coins)`, "fa-circle-check");
          if (paymentState.pendingActionAfterPay === "pdf") {
            paymentState.pendingActionAfterPay = null;
            setTimeout(() => executePdfExport(), 500);
          } else if (paymentState.pendingActionAfterPay === "png") {
            paymentState.pendingActionAfterPay = null;
            setTimeout(() => executePngExport(), 500);
          }
        });
      } catch (err) {
        spinner.style.display = "none";
        statusText.innerHTML = `<span style="color: #ef4444;">\u1798\u17B7\u1793\u17A2\u17B6\u1785\u1794\u1784\u17D2\u1780\u17BE\u178F QR Code \u1794\u17B6\u1793\u1791\u17C1: ${err.message}</span>`;
      }
    }
    function openPaymentModal(initialAction = null) {
      paymentState.pendingActionAfterPay = initialAction;
      paymentModal.classList.add("active");
      loadBakongQR(selectedAmount, selectedCoins);
    }
    function closePaymentModal() {
      paymentModal.classList.remove("active");
      stopPaymentPolling();
    }
    openTopupBtn.addEventListener("click", () => openPaymentModal(null));
    closePaymentModalBtn.addEventListener("click", closePaymentModal);
    paymentModal.addEventListener("click", (e) => {
      if (e.target === paymentModal) closePaymentModal();
    });
    packageCards.forEach((card) => {
      card.addEventListener("click", () => {
        packageCards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");
        selectedCoins = parseInt(card.dataset.coins, 10);
        selectedAmount = parseFloat(card.dataset.amount);
        loadBakongQR(selectedAmount, selectedCoins);
      });
    });
    function executePdfExport() {
      if (paymentState.coins < BAKONG_CONFIG.costPerExport) {
        showToast(`\u26A0\uFE0F \u17A2\u17D2\u1793\u1780\u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${BAKONG_CONFIG.costPerExport} \u1780\u17B6\u1780\u17CB\u178A\u17BE\u1798\u17D2\u1794\u17B8 Export PDF`, "fa-circle-exclamation");
        openPaymentModal("pdf");
        return;
      }
      updateCoinBalance(-BAKONG_CONFIG.costPerExport);
      showToast(`\u2705 \u1794\u17B6\u1793\u1780\u17B6\u178F\u17CB ${BAKONG_CONFIG.costPerExport} \u1780\u17B6\u1780\u17CB! \u1780\u17C6\u1796\u17BB\u1784\u1794\u17BE\u1780\u1795\u17D2\u1791\u17B6\u17C6\u1784 Print PDF...`, "fa-coins");
      const prevZoom = state.zoomLevel;
      updateZoom(100);
      setTimeout(() => {
        window.print();
        updateZoom(prevZoom);
      }, 200);
    }
    document.getElementById("btn-print-pdf").addEventListener("click", () => {
      executePdfExport();
    });
    function executePngExport() {
      if (paymentState.coins < BAKONG_CONFIG.costPerExport) {
        showToast(`\u26A0\uFE0F \u17A2\u17D2\u1793\u1780\u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${BAKONG_CONFIG.costPerExport} \u1780\u17B6\u1780\u17CB\u178A\u17BE\u1798\u17D2\u1794\u17B8 Export PNG`, "fa-circle-exclamation");
        openPaymentModal("png");
        return;
      }
      const canvasTarget = document.getElementById("resume-canvas-body");
      if (!canvasTarget) {
        showToast("\u179A\u1780\u1798\u17B7\u1793\u1783\u17BE\u1789\u1780\u17D2\u179A\u178A\u17B6\u179F CV \u1791\u17C1!", "fa-triangle-exclamation");
        return;
      }
      updateCoinBalance(-BAKONG_CONFIG.costPerExport);
      showToast(`\u2705 \u1794\u17B6\u1793\u1780\u17B6\u178F\u17CB ${BAKONG_CONFIG.costPerExport} \u1780\u17B6\u1780\u17CB! \u1780\u17C6\u1796\u17BB\u1784\u1794\u1784\u17D2\u1780\u17BE\u178F\u179A\u17BC\u1794\u1797\u17B6\u1796 PNG...`, "fa-image");
      const prevZoom = state.zoomLevel;
      updateZoom(100);
      setTimeout(() => {
        if (typeof html2canvas !== "undefined") {
          html2canvas(canvasTarget, {
            scale: 2,
            // High resolution (2x retina)
            useCORS: true,
            allowTaint: true,
            backgroundColor: "#ffffff"
          }).then((canvas) => {
            updateZoom(prevZoom);
            const link = document.createElement("a");
            const fileName = `CV_${(state.data.personalInfo?.fullName || "resume").replace(/\s+/g, "_")}.png`;
            link.download = fileName;
            link.href = canvas.toDataURL("image/png");
            document.body.appendChild(link);
            link.click();
            link.remove();
            showToast("\u{1F389} \u1791\u17B6\u1789\u1799\u1780\u179A\u17BC\u1794\u1797\u17B6\u1796 PNG \u1794\u17B6\u1793\u178A\u17C4\u1799\u1787\u17C4\u1782\u1787\u17D0\u1799!", "fa-circle-check");
          }).catch((err) => {
            updateZoom(prevZoom);
            console.error(err);
            showToast("\u1798\u17B6\u1793\u1794\u1789\u17D2\u17A0\u17B6\u1780\u17D2\u1793\u17BB\u1784\u1780\u17B6\u179A\u1794\u1784\u17D2\u1780\u17BE\u178F PNG!", "fa-circle-xmark");
          });
        } else {
          updateZoom(prevZoom);
          alert("html2canvas library is not loaded!");
        }
      }, 250);
    }
    document.getElementById("btn-export-png").addEventListener("click", () => {
      executePngExport();
    });
    document.getElementById("btn-export-json").addEventListener("click", () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.data, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `resume_${(state.data.personalInfo?.fullName || "cv").replace(/\s+/g, "_")}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast("\u1794\u17B6\u1793\u1791\u17B6\u1789\u1799\u1780\u17AF\u1780\u179F\u17B6\u179A Backup JSON \u178A\u17C4\u1799\u1787\u17C4\u1782\u1787\u17D0\u1799!");
    });
    document.getElementById("input-import-json").addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (loadEvt) => {
          try {
            const imported = JSON.parse(loadEvt.target.result);
            state.data = imported;
            if (imported.templateId) state.activeTemplate = imported.templateId;
            templateCards.forEach((c) => {
              c.classList.toggle("active", c.getAttribute("data-template") === state.activeTemplate);
            });
            syncStateToForm();
            renderCanvas();
            showToast("\u1794\u17B6\u1793\u1794\u1789\u17D2\u1785\u17BC\u179B\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1796\u17B8 JSON \u178A\u17C4\u1799\u1787\u17C4\u1782\u1787\u17D0\u1799!");
          } catch (err) {
            alert("\u17AF\u1780\u179F\u17B6\u179A JSON \u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1791\u17C1!");
          }
        };
        reader.readAsText(file);
      }
    });
    updateCoinBalance(0);
    syncStateToForm();
    renderCanvas();
    setTimeout(autoFitZoom, 150);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
