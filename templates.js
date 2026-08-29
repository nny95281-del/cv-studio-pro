// Template renderers for all 5 CV Designs

// Helper to escape HTML characters
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ==========================================================================
   TEMPLATE 1: CHARCOAL MODERN (Siobhan Simmons Style)
   ========================================================================== */
export function renderCharcoal(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

  return `
    <div class="resume-page cv-template-charcoal" id="resume-canvas-body">
      <!-- Left Sidebar -->
      <aside class="sidebar">
        <div class="avatar-container">
          <img src="${p.photo || data.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400'}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview" style="background-color: ${data.photoBg || '#ffffff'}">
        </div>

        <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'SIOBHAN SIMMONS')}</h1>

        <!-- Contact Details -->
        <div class="sidebar-section">
          <div class="sidebar-title">${isKh ? 'ព័ត៌មានទំនាក់ទំនង' : 'CONTACT'}</div>
          ${p.phone ? `
            <div class="contact-item">
              <span class="contact-icon"><i class="fa-solid fa-phone"></i></span>
              <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
            </div>` : ''}
          ${p.email ? `
            <div class="contact-item">
              <span class="contact-icon"><i class="fa-solid fa-envelope"></i></span>
              <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
            </div>` : ''}
          ${p.address ? `
            <div class="contact-item">
              <span class="contact-icon"><i class="fa-solid fa-location-dot"></i></span>
              <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
            </div>` : ''}
          ${p.telegram ? `
            <div class="contact-item">
              <span class="contact-icon"><i class="fa-brands fa-telegram"></i></span>
              <span data-bind="personalInfo.telegram">${escapeHtml(p.telegram)}</span>
            </div>` : ''}
          ${p.linkedin ? `
            <div class="contact-item">
              <span class="contact-icon"><i class="fa-brands fa-linkedin-in"></i></span>
              <span data-bind="personalInfo.linkedin">${escapeHtml(p.linkedin)}</span>
            </div>` : ''}
        </div>

        <!-- Skills -->
        <div class="sidebar-section">
          <div class="sidebar-title">${isKh ? 'ជំនាញ' : 'SKILLS'}</div>
          <ul class="skill-list">
            ${(data.skills || []).map((s, idx) => `
              <li data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>
            `).join('')}
          </ul>
        </div>

        <!-- Languages -->
        ${(data.languages && data.languages.length > 0) ? `
          <div class="sidebar-section">
            <div class="sidebar-title">${isKh ? 'ភាសា' : 'LANGUAGES'}</div>
            <ul class="sidebar-list">
              ${data.languages.map((l, idx) => `
                <li data-bind="languages.${idx}.name"><strong>${escapeHtml(l.name.split(' ')[0])}</strong> - ${escapeHtml(l.level)}</li>
              `).join('')}
            </ul>
          </div>
        ` : ''}
      </aside>

      <!-- Right Main Content -->
      <main class="main-content">
        <!-- Personal Statement -->
        <section class="main-section">
          <div class="section-title">${isKh ? 'គោលបំណង និងសេចក្តីសង្ខេប' : 'PERSONAL STATEMENT'}</div>
          <p class="summary-text" data-bind="personalInfo.summary">${escapeHtml(p.summary || 'Enthusiastic professional with deep expertise and passion for delivering high-impact results. Adept at cross-functional collaboration and strategic planning.')}</p>
        </section>

        <!-- Work History -->
        <section class="main-section">
          <div class="section-title">${isKh ? 'បទពិសោធន៍ការងារ' : 'WORK HISTORY'}</div>
          ${(data.experiences || []).map((exp, idx) => `
            <div class="timeline-item">
              <div class="timeline-period" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</div>
              <div class="timeline-role" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
              <div class="timeline-company">${escapeHtml(exp.company)} ${exp.location ? `• ${escapeHtml(exp.location)}` : ''}</div>
              <ul class="timeline-highlights">
                ${(exp.highlights || []).map((hl, hlIdx) => `
                  <li data-bind="experiences.${idx}.highlights.${hlIdx}">${escapeHtml(hl)}</li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </section>

        <!-- Education -->
        ${(data.education && data.education.length > 0) ? `
          <section class="main-section">
            <div class="section-title">${isKh ? 'ប្រវត្តិការសិក្សា' : 'EDUCATION'}</div>
            ${data.education.map((edu, idx) => `
              <div class="timeline-item">
                <div class="timeline-period" data-bind="education.${idx}.period">${escapeHtml(edu.period)}</div>
                <div class="timeline-role" data-bind="education.${idx}.degree">${escapeHtml(edu.degree)}</div>
                <div class="timeline-company" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
                ${edu.description ? `<p style="font-size: 11.5px; color: #64748b; margin-top: 2px;" data-bind="education.${idx}.description">${escapeHtml(edu.description)}</p>` : ''}
              </div>
            `).join('')}
          </section>
        ` : ''}
      </main>
    </div>
  `;
}

/* ==========================================================================
   TEMPLATE 2: MINIMAL TIMELINE (Jane Smith Style)
   ========================================================================== */
export function renderTimeline(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

  return `
    <div class="resume-page cv-template-timeline" id="resume-canvas-body">
      <!-- Left Sidebar -->
      <aside class="sidebar">
        <div class="avatar-container">
          <img src="${p.photo || data.photo || 'https://via.placeholder.com/150'}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview">
        </div>

        <div class="sidebar-section">
          <div class="sidebar-title">${isKh ? 'ទំនាក់ទំនង' : 'CONTACT'}</div>
          ${p.address ? `
            <div class="contact-item">
              <span class="contact-icon"><i class="fa-solid fa-location-dot"></i></span>
              <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
            </div>` : ''}
          ${p.phone ? `
            <div class="contact-item">
              <span class="contact-icon"><i class="fa-solid fa-phone"></i></span>
              <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
            </div>` : ''}
          ${p.email ? `
            <div class="contact-item">
              <span class="contact-icon"><i class="fa-solid fa-envelope"></i></span>
              <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
            </div>` : ''}
        </div>

        <div class="sidebar-section">
          <div class="sidebar-title">${isKh ? 'ការអប់រំ' : 'EDUCATION'}</div>
          ${(data.education || []).map((edu, idx) => `
            <div class="education-item">
              <div class="edu-school" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
              <div class="edu-period" data-bind="education.${idx}.period">${escapeHtml(edu.period)}</div>
              <div class="edu-degree" data-bind="education.${idx}.degree">${escapeHtml(edu.degree)}</div>
            </div>
          `).join('')}
        </div>

        <!-- References -->
        ${(data.references && data.references.length > 0) ? `
          <div class="sidebar-section">
            <div class="sidebar-title">${isKh ? 'បុគ្គលធានា' : 'REFERENCES'}</div>
            ${data.references.map((ref, idx) => `
              <div class="reference-item">
                <div class="ref-name" data-bind="references.${idx}.name">${escapeHtml(ref.name)}</div>
                <div class="ref-role" data-bind="references.${idx}.role">${escapeHtml(ref.role)}</div>
                <div class="ref-contact" data-bind="references.${idx}.contact">${escapeHtml(ref.contact)}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </aside>

      <!-- Right Main Content -->
      <main class="main-content">
        <header class="header">
          <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'JANE SMITH')}</h1>
          <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'PROFESSIONAL TITLE')}</div>
        </header>

        <!-- Work Experience with Timeline Connector -->
        <div class="section-header-box">
          <span class="section-header-icon"><i class="fa-solid fa-briefcase"></i></span>
          <span>${isKh ? 'បទពិសោធន៍ការងារ' : 'WORK EXPERIENCE'}</span>
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
                ${(exp.highlights && exp.highlights.length > 0) ? exp.highlights.map((hl, hlIdx) => `
                  <div data-bind="experiences.${idx}.highlights.${hlIdx}">• ${escapeHtml(hl)}</div>
                `).join('') : `<div data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>`}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Skills & Expertise Grid Box -->
        <div class="section-header-box" style="margin-top: 10px;">
          <span class="section-header-icon"><i class="fa-solid fa-wrench"></i></span>
          <span>${isKh ? 'ជំនាញ និងបទពិសោធន៍' : 'SKILLS & EXPERTISE'}</span>
        </div>

        <div class="skills-box">
          <div class="skills-grid">
            ${(data.skills || []).map((skill, idx) => `
              <div class="skills-grid-item" data-bind="skills.${idx}.name">${escapeHtml(skill.name)}</div>
            `).join('')}
          </div>
        </div>
      </main>
    </div>
  `;
}

/* ==========================================================================
   TEMPLATE 3: EXECUTIVE TEAL & GOLD (Larry Tibbetts Style)
   ========================================================================== */
export function renderExecutive(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';
  const nameParts = (p.fullName || 'LARRY TIBBETTS').split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ') || (isKh ? '' : 'TIBBETTS');

  return `
    <div class="resume-page cv-template-executive" id="resume-canvas-body">
      <!-- Top Banner with Large Avatar and 3D Gold Ribbon -->
      <header class="header-banner">
        <div class="avatar-wrapper">
          <img src="${p.photo || data.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400'}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview">
        </div>
        
        <div class="header-text-block">
          <h1 class="header-name">
            <span class="name-gold" data-bind="personalInfo.fullName">${escapeHtml(firstName)}</span>
            <span class="name-white">${escapeHtml(lastName)}</span>
          </h1>
          <div class="header-job-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'J o b  t i t l e')}</div>
          <p class="header-summary" data-bind="personalInfo.summary">${escapeHtml(p.summary || 'Describe in a few lines your career path, your key skills for the position and your career goals. This is actually an introduction to your cover letter.')}</p>
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
              </div>` : ''}
            ${p.email ? `
              <div class="contact-item">
                <span class="contact-icon"><i class="fa-solid fa-envelope"></i></span>
                <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
              </div>` : ''}
            ${p.address ? `
              <div class="contact-item">
                <span class="contact-icon"><i class="fa-solid fa-location-dot"></i></span>
                <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
              </div>` : ''}
            ${p.linkedin ? `
              <div class="contact-item">
                <span class="contact-icon"><i class="fa-brands fa-linkedin-in"></i></span>
                <span data-bind="personalInfo.linkedin">${escapeHtml(p.linkedin.startsWith('/') ? p.linkedin : `/${p.linkedin}`)}</span>
              </div>` : ''}
          </div>

          <!-- SKILLS Pill -->
          <div class="sidebar-section">
            <div class="sidebar-pill-title">${isKh ? 'S K I L L S' : 'S K I L L S'}</div>
            <ul class="sidebar-list">
              ${(data.skills || []).map((skill, idx) => `
                <li data-bind="skills.${idx}.name">${escapeHtml(skill.name)}</li>
              `).join('')}
            </ul>
          </div>

          <!-- LANGUAGES Pill -->
          ${(data.languages && data.languages.length > 0) ? `
            <div class="sidebar-section">
              <div class="sidebar-pill-title">${isKh ? 'L A N G U A G E S' : 'L A N G U A G E S'}</div>
              <ul class="sidebar-list">
                ${data.languages.map((l, idx) => `
                  <li><span data-bind="languages.${idx}.name">${escapeHtml(l.name.split(' ')[0])}</span> – <span data-bind="languages.${idx}.level">${escapeHtml(l.level)}</span></li>
                `).join('')}
              </ul>
            </div>
          ` : ''}

          <!-- HOBBIES Pill -->
          <div class="sidebar-section" style="margin-bottom: 0;">
            <div class="sidebar-pill-title">${isKh ? 'H O B B I E S' : 'H O B B I E S'}</div>
            <ul class="sidebar-list">
              ${(data.preferences && data.preferences.length > 0) ? data.preferences.map((item, idx) => `
                <li data-bind="preferences.${idx}">${escapeHtml(item)}</li>
              `).join('') : `
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
            <div class="main-gold-pill">${isKh ? 'E X P E R I E N C E' : 'E X P E R I E N C E'}</div>
          </div>

          ${(data.experiences || []).map((exp, idx) => `
            <div class="job-item">
              <div class="job-role" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
              <div class="job-meta">
                <span data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</span>, 
                <span data-bind="experiences.${idx}.location">${escapeHtml(exp.location || 'Location')}</span> | 
                <span data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</span>
              </div>
              <ul class="job-duties">
                ${(exp.highlights && exp.highlights.length > 0) ? exp.highlights.map((hl, hlIdx) => `
                  <li data-bind="experiences.${idx}.highlights.${hlIdx}">${escapeHtml(hl)}</li>
                `).join('') : `
                  <li>Key responsibility or achievement</li>
                  <li>Key responsibility or achievement</li>
                  <li>Key responsibility or achievement</li>
                `}
              </ul>
            </div>
          `).join('')}

          <!-- EDUCATION Pill -->
          <div class="main-pill-header" style="margin-top: 14px;">
            <div class="main-gold-pill">${isKh ? 'E D U C A T I O N' : 'E D U C A T I O N'}</div>
          </div>

          ${(data.education || data.educations || []).map((edu, idx) => `
            <div class="edu-item">
              <div class="edu-title">
                <strong data-bind="education.${idx}.degree">${escapeHtml(edu.degree)}</strong> | 
                <span data-bind="education.${idx}.period">${escapeHtml(edu.period)}</span>
              </div>
              <div class="edu-sub" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
            </div>
          `).join('')}
        </main>
      </div>

      <!-- Bottom Gold Stripe Accent -->
      <div class="bottom-gold-accent"></div>
    </div>
  `;
}

/* ==========================================================================
   TEMPLATE 4: CAMBODIAN CLASSIC STANDARD (Kaing Songlay / SETEC Style)
   ========================================================================== */
export function renderCambodian(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

  return `
    <div class="resume-page cv-template-cambodian" id="resume-canvas-body">
      <div class="border-frame">
        <h1 class="main-title">CURRICULUM VITAE</h1>

        <!-- 1. PERSONAL DATA -->
        <div class="section-block">
          <div class="section-ribbon">${isKh ? 'PERSONAL DATA' : 'PERSONAL DATA'}</div>
          <div class="personal-data-row">
            <table class="personal-table">
              <tbody>
                <tr>
                  <td class="lbl">Name</td>
                  <td class="cln">:</td>
                  <td class="val" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'Kaing SongLay')}</td>
                  <td class="lbl-r">Sex</td>
                  <td class="cln">:</td>
                  <td class="val-r" data-bind="personalInfo.sex">${escapeHtml(p.sex || 'Male')}</td>
                </tr>
                <tr>
                  <td class="lbl">Nationality</td>
                  <td class="cln">:</td>
                  <td class="val" data-bind="personalInfo.nationality">${escapeHtml(p.nationality || 'Cambodian')}</td>
                  <td class="lbl-r">Date of Birth</td>
                  <td class="cln">:</td>
                  <td class="val-r" data-bind="personalInfo.dob">${escapeHtml(p.dob || '03, May, 2002')}</td>
                </tr>
                <tr>
                  <td class="lbl">Place of Birth</td>
                  <td class="cln">:</td>
                  <td class="val" data-bind="personalInfo.pob">${escapeHtml(p.pob || 'Kampong Cham Province')}</td>
                  <td class="lbl-r">Phone Number</td>
                  <td class="cln">:</td>
                  <td class="val-r" data-bind="personalInfo.phone">${escapeHtml(p.phone || '085 662 616')}</td>
                </tr>
                <tr>
                  <td class="lbl">Email</td>
                  <td class="cln">:</td>
                  <td class="val"><a href="mailto:${escapeHtml(p.email || 'laykaing458@gmail.com')}" class="email-link" data-bind="personalInfo.email">${escapeHtml(p.email || 'laykaing458@gmail.com')}</a></td>
                  <td class="lbl-r">Telegram</td>
                  <td class="cln">:</td>
                  <td class="val-r" data-bind="personalInfo.telegram">${escapeHtml(p.telegram || p.phone || '085 662 616')}</td>
                </tr>
              </tbody>
            </table>

            <div class="passport-photo-wrapper">
              <img src="${p.photo || data.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400'}" alt="Passport Photo" class="passport-photo" id="cv-avatar-preview" style="background-color: ${data.photoBg || '#1e88e5'}">
            </div>
          </div>
        </div>

        <!-- 2. EDUCATION -->
        <div class="section-block">
          <div class="section-ribbon">${isKh ? 'EDUCATION' : 'EDUCATION'}</div>
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
          <div class="section-ribbon">${isKh ? 'EXPERIENCE' : 'EXPERIENCE'}</div>
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
          <div class="section-ribbon">${isKh ? 'SKILL' : 'SKILL'}</div>
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
          <div class="section-ribbon">${isKh ? 'LANGUAGES' : 'LANGUAGES'}</div>
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
          <div class="section-ribbon">${isKh ? 'PREFERENCES' : 'PREFERENCES'}</div>
          <div class="preferences-row">
            ${(data.preferences && data.preferences.length > 0) ? data.preferences.join(', ') : 'Soccer, E-Sport, Music, Conversation, Travel'}
          </div>
        </div>

      </div>
    </div>
  `;
}

/* ==========================================================================
   TEMPLATE 5: CREATIVE INFOGRAPHIC NAVY (Juliana Silva Style)
   ========================================================================== */
export function renderInfographic(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

  return `
    <div class="resume-page cv-template-infographic" id="resume-canvas-body">
      <!-- Left Navy Column -->
      <aside class="sidebar">
        <div class="avatar-container">
          <div class="avatar-ring">
            <img src="${p.photo || data.photo || 'https://via.placeholder.com/150'}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview">
          </div>
        </div>

        <!-- About Me Capsule -->
        <div class="sidebar-section">
          <div class="sidebar-capsule-title">${isKh ? 'អំពីខ្ញុំ' : 'ABOUT ME'}</div>
          <p class="about-text" data-bind="personalInfo.summary">${escapeHtml(p.summary || '')}</p>
        </div>

        <!-- Skill Progress Bars -->
        <div class="sidebar-section">
          <div class="sidebar-capsule-title">${isKh ? 'ជំនាញ' : 'SKILL'}</div>
          ${(data.skills || []).slice(0, 5).map((skill, idx) => `
            <div class="skill-bar-item">
              <div class="skill-bar-label">
                <span data-bind="skills.${idx}.name">${escapeHtml(skill.name)}</span>
              </div>
              <div class="skill-bar-track">
                <div class="skill-bar-fill" style="width: ${skill.level || 80}%;"></div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Languages Gauge Arcs -->
        ${(data.languages && data.languages.length > 0) ? `
          <div class="sidebar-section">
            <div class="sidebar-capsule-title">${isKh ? 'ភាសា' : 'LANGUAGE'}</div>
            <div class="languages-gauge-grid">
              ${data.languages.slice(0, 3).map((l, idx) => `
                <div class="gauge-item">
                  <div class="gauge-arc" style="border-color: ${idx === 0 ? '#d4af37' : '#e2e8f0'}"></div>
                  <div class="gauge-name" data-bind="languages.${idx}.name">${escapeHtml(l.name.split(' ')[0])}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Awards with Trophy Icons -->
        ${(data.awards && data.awards.length > 0) ? `
          <div class="sidebar-section">
            <div class="sidebar-capsule-title">${isKh ? 'ពានរង្វាន់' : 'AWARD'}</div>
            ${data.awards.map((aw, idx) => `
              <div class="award-item">
                <div class="award-icon"><i class="fa-solid fa-trophy"></i></div>
                <div>
                  <div class="award-title" data-bind="awards.${idx}.title">${escapeHtml(aw.title)} (${escapeHtml(aw.year)})</div>
                  <div class="award-sub" data-bind="awards.${idx}.issuer">${escapeHtml(aw.issuer)}</div>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </aside>

      <!-- Right Column -->
      <main class="main-content">
        <header class="header">
          <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'JULIANA SILVA')}</h1>
          <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'GRAPHIC DESIGNER')}</div>
        </header>

        <!-- Contact Capsule -->
        <div class="main-capsule-title">${isKh ? 'ទំនាក់ទំនង' : 'CONTACT'}</div>
        <div class="contact-grid">
          ${p.phone ? `<div class="contact-grid-item"><i class="fa-solid fa-phone"></i> <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span></div>` : ''}
          ${p.email ? `<div class="contact-grid-item"><i class="fa-solid fa-envelope"></i> <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span></div>` : ''}
          ${p.address ? `<div class="contact-grid-item"><i class="fa-solid fa-location-dot"></i> <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span></div>` : ''}
          ${p.website ? `<div class="contact-grid-item"><i class="fa-solid fa-globe"></i> <span data-bind="personalInfo.website">${escapeHtml(p.website)}</span></div>` : ''}
        </div>

        <!-- Experience Capsule -->
        <div class="main-capsule-title">${isKh ? 'បទពិសោធន៍ការងារ' : 'EXPERIENCE'}</div>
        ${(data.experiences || []).map((exp, idx) => `
          <div class="timeline-item">
            <div class="timeline-date" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</div>
            <div class="timeline-info">
              <div class="timeline-role" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
              <div class="timeline-company" data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</div>
              <div class="timeline-desc">
                ${(exp.highlights || []).join('. ')}
              </div>
            </div>
          </div>
        `).join('')}

        <!-- Education Capsule -->
        <div class="main-capsule-title" style="margin-top: 20px;">${isKh ? 'ការអប់រំ' : 'EDUCATION'}</div>
        ${(data.education || []).map((edu, idx) => `
          <div class="timeline-item">
            <div class="timeline-date" data-bind="education.${idx}.period">${escapeHtml(edu.period)}</div>
            <div class="timeline-info">
              <div class="timeline-role" data-bind="education.${idx}.degree">${escapeHtml(edu.degree)}</div>
              <div class="timeline-company" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
            </div>
          </div>
        `).join('')}
      </main>
    </div>
  `;
}

/* ==========================================================================
   TEMPLATE 6: BLACK & GOLD CONTRAST (Modern Bold)
   ========================================================================== */
export function renderBlackGold(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

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
          <img src="${p.photo || data.photo || 'https://via.placeholder.com/150'}" alt="Photo" class="avatar-img" id="cv-avatar-preview">
        </div>

        <!-- Contact Section -->
        <div style="margin-bottom: 24px;">
          <div class="sec-title-white"><i class="fa-solid fa-user"></i> ${isKh ? 'ទំនាក់ទំនង' : 'Contact'}</div>
          ${p.phone ? `<div class="contact-item"><i class="fa-solid fa-phone" style="color: #f59e0b;"></i> <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span></div>` : ''}
          ${p.email ? `<div class="contact-item"><i class="fa-solid fa-envelope" style="color: #f59e0b;"></i> <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span></div>` : ''}
          ${p.telegram ? `<div class="contact-item"><i class="fa-brands fa-telegram" style="color: #f59e0b;"></i> <span data-bind="personalInfo.telegram">${escapeHtml(p.telegram)}</span></div>` : ''}
          ${p.address ? `<div class="contact-item"><i class="fa-solid fa-location-dot" style="color: #f59e0b;"></i> <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span></div>` : ''}
        </div>

        <!-- Education Section -->
        <div style="margin-bottom: 24px;">
          <div class="sec-title-white"><i class="fa-solid fa-graduation-cap"></i> ${isKh ? 'ការអប់រំ' : 'Education'}</div>
          ${(data.education || []).map((edu, idx) => `
            <div class="edu-node">
              <div class="node-dot"></div>
              <div class="node-year" data-bind="education.${idx}.period">${escapeHtml(edu.period)}</div>
              <div class="node-content">
                <div class="node-title" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
                <div class="node-sub" data-bind="education.${idx}.degree">${escapeHtml(edu.degree)}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Work Experience Section -->
        <div>
          <div class="sec-title-white"><i class="fa-solid fa-briefcase"></i> ${isKh ? 'បទពិសោធន៍ការងារ' : 'Work Experience'}</div>
          ${(data.experiences || []).map((exp, idx) => `
            <div class="exp-node">
              <div class="node-dot"></div>
              <div class="node-year" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</div>
              <div class="node-content">
                <div class="node-title" data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</div>
                <div class="node-sub" data-bind="experiences.${idx}.role"><strong>${escapeHtml(exp.role)}</strong></div>
                ${(exp.highlights && exp.highlights.length > 0) ? `<div style="font-size: 11px; color: #4b5563; margin-top: 2px;">${escapeHtml(exp.highlights[0])}</div>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Right Column (Black) -->
      <div class="right-col">
        <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'NAME HERE')}</h1>
        <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'Your Designation Here')}</div>

        <div class="sec-title-black">${isKh ? 'អំពីខ្ញុំ' : 'About Me'}</div>
        <p class="about-desc" data-bind="personalInfo.summary">${escapeHtml(p.summary || '')}</p>

        <!-- Languages -->
        ${(data.languages && data.languages.length > 0) ? `
          <div class="sec-title-black">${isKh ? 'ភាសា' : 'Languages'}</div>
          <div style="margin-bottom: 20px;">
            ${data.languages.map((l, idx) => `
              <div class="skill-bar-row">
                <span class="skill-name" data-bind="languages.${idx}.name">${escapeHtml(l.name.split(' ')[0])}</span>
                <div class="skill-track"><div class="skill-fill-gold"></div></div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Skills -->
        <div class="sec-title-black">${isKh ? 'ជំនាញ' : 'Skills'}</div>
        <div style="margin-bottom: 20px;">
          ${(data.skills || []).map((s, idx) => `
            <div class="skill-bar-row">
              <span class="skill-name" data-bind="skills.${idx}.name">${escapeHtml(s.name)}</span>
              <div class="skill-track"><div class="skill-fill-gold"></div></div>
            </div>
          `).join('')}
        </div>

        <!-- Hobbies & Preferences -->
        ${(data.preferences && data.preferences.length > 0) ? `
          <div class="sec-title-black">${isKh ? 'ចំណង់ចំណូលចិត្ត' : 'Hobbies'}</div>
          <p style="font-size: 11px; color: #cbd5e1; margin-bottom: 14px;">${data.preferences.join(' , ')}</p>
        ` : ''}
      </div>
    </div>
  `;
}

/* ==========================================================================
   TEMPLATE 7: PEACH & CHARCOAL GEOMETRIC (Katie Slater Style)
   ========================================================================== */
export function renderGeometric(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

  return `
    <div class="resume-page cv-template-geometric" id="resume-canvas-body">
      <div class="top-diag-banner"></div>

      <!-- Left Sidebar -->
      <aside class="sidebar">
        <div class="avatar-wrapper">
          <img src="${p.photo || data.photo || 'https://via.placeholder.com/150'}" alt="Photo" class="avatar-img" id="cv-avatar-preview">
        </div>

        <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'KATIE SLATER')}</h1>
        <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'DIGITAL MARKETING')}</div>

        <div class="sidebar-sec-title">${isKh ? 'អំពីខ្ញុំ' : 'WHO AM I'}</div>
        <p class="sidebar-text" data-bind="personalInfo.summary">${escapeHtml(p.summary || '')}</p>

        <!-- Segmented Skills -->
        <div class="sidebar-sec-title">${isKh ? 'ជំនាញ' : 'SKILLS'}</div>
        ${(data.skills || []).slice(0, 5).map((s, idx) => `
          <div style="font-size: 11px; color: #374151; margin-bottom: 2px;" data-bind="skills.${idx}.name">${escapeHtml(s.name)}</div>
          <div class="seg-skill-bar">
            <div class="seg-block filled"></div>
            <div class="seg-block filled"></div>
            <div class="seg-block filled"></div>
            <div class="seg-block filled"></div>
            <div class="seg-block ${ (s.level || 80) > 85 ? 'filled' : ''}"></div>
          </div>
        `).join('')}

        <!-- Contact Section -->
        <div class="sidebar-sec-title" style="margin-top: 16px;">${isKh ? 'ទំនាក់ទំនង' : 'CONTACT'}</div>
        ${p.phone ? `<div style="font-size: 11px; color: #4b5563; margin-bottom: 6px;"><i class="fa-solid fa-phone" style="color: #fca590;"></i> <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span></div>` : ''}
        ${p.email ? `<div style="font-size: 11px; color: #4b5563; margin-bottom: 6px;"><i class="fa-solid fa-envelope" style="color: #fca590;"></i> <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span></div>` : ''}
        ${p.address ? `<div style="font-size: 11px; color: #4b5563; margin-bottom: 6px;"><i class="fa-solid fa-location-dot" style="color: #fca590;"></i> <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span></div>` : ''}
      </aside>

      <!-- Right Main Content -->
      <main class="main-content">
        <!-- Education -->
        <div class="main-sec-title">${isKh ? 'ការអប់រំ' : 'EDUCATION'}</div>
        ${(data.education || []).map((edu, idx) => `
          <div style="display: flex; gap: 14px; margin-bottom: 14px;">
            <div style="font-size: 11px; font-weight: 700; color: #111; min-width: 75px;" data-bind="education.${idx}.period">${escapeHtml(edu.period)}</div>
            <div style="flex: 1;">
              <div style="font-size: 12px; font-weight: 700; color: #111;" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
              <div style="font-size: 11px; color: #6b7280;" data-bind="education.${idx}.degree">${escapeHtml(edu.degree)}</div>
            </div>
          </div>
        `).join('')}

        <!-- Experience with Dashed Timeline -->
        <div class="main-sec-title" style="margin-top: 24px;">${isKh ? 'បទពិសោធន៍ការងារ' : 'EXPERIENCE'}</div>
        <div class="dashed-timeline">
          ${(data.experiences || []).map((exp, idx) => `
            <div class="timeline-entry">
              <div style="font-size: 11px; font-weight: 700; color: #111; margin-bottom: 2px;" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)} - <span data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</span></div>
              <div style="font-size: 11.5px; font-weight: 600; color: #fca590;" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
              <p style="font-size: 11px; color: #4b5563; margin-top: 2px;">${(exp.highlights || []).join('. ')}</p>
            </div>
          `).join('')}
        </div>
      </main>
    </div>
  `;
}

/* ==========================================================================
   TEMPLATE 8: COBALT BLUE MODERN (Travis Anderson Style)
   ========================================================================== */
export function renderCobalt(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

  return `
    <div class="resume-page cv-template-cobalt" id="resume-canvas-body">
      <!-- Sidebar Cobalt Blue -->
      <aside class="sidebar">
        <div class="avatar-box">
          <img src="${p.photo || data.photo || 'https://via.placeholder.com/150'}" alt="Photo" class="avatar-img" id="cv-avatar-preview">
        </div>

        <div class="sidebar-title">${isKh ? 'ទំនាក់ទំនង' : 'CONTACTS'}</div>
        ${p.phone ? `<div class="contact-row"><i class="fa-solid fa-phone"></i> <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span></div>` : ''}
        ${p.email ? `<div class="contact-row"><i class="fa-solid fa-envelope"></i> <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span></div>` : ''}
        ${p.website ? `<div class="contact-row"><i class="fa-solid fa-globe"></i> <span data-bind="personalInfo.website">${escapeHtml(p.website)}</span></div>` : ''}
        ${p.address ? `<div class="contact-row"><i class="fa-solid fa-location-dot"></i> <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span></div>` : ''}

        <!-- Skills -->
        <div class="sidebar-title" style="margin-top: 20px;">${isKh ? 'ជំនាញ' : 'SKILLS'}</div>
        ${(data.skills || []).map((s, idx) => `
          <div class="skill-line-item">
            <div class="skill-line-header">
              <span data-bind="skills.${idx}.name">${escapeHtml(s.name)}</span>
            </div>
            <div class="skill-line-track">
              <div class="skill-line-fill" style="width: ${s.level || 80}%;"></div>
            </div>
          </div>
        `).join('')}

        <!-- Languages -->
        ${(data.languages && data.languages.length > 0) ? `
          <div class="sidebar-title" style="margin-top: 20px;">${isKh ? 'ភាសា' : 'LANGUAGES'}</div>
          ${data.languages.map((l, idx) => `
            <div class="skill-line-item">
              <div class="skill-line-header">
                <span data-bind="languages.${idx}.name">${escapeHtml(l.name)}</span>
              </div>
              <div class="skill-line-track">
                <div class="skill-line-fill" style="width: 85%;"></div>
              </div>
            </div>
          `).join('')}
        ` : ''}
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'NAME SURNAME')}</h1>
        <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'GRAPHICS DESIGN')}</div>

        <div class="sec-badge-title">${isKh ? 'អំពីខ្ញុំ' : 'ABOUT ME'}</div>
        <p style="font-size: 11.5px; color: #475569; line-height: 1.5; margin-bottom: 20px;" data-bind="personalInfo.summary">${escapeHtml(p.summary || '')}</p>

        <div class="sec-badge-title">${isKh ? 'ការអប់រំ' : 'EDUCATION'}</div>
        <div style="margin-bottom: 20px;">
          ${(data.education || []).map((edu, idx) => `
            <div style="display: flex; gap: 14px; margin-bottom: 12px;">
              <div style="font-size: 11px; font-weight: 700; color: #0f4c81; min-width: 65px;" data-bind="education.${idx}.period">${escapeHtml(edu.period)}</div>
              <div>
                <div style="font-size: 12px; font-weight: 700; color: #111;" data-bind="education.${idx}.degree">${escapeHtml(edu.degree)}</div>
                <div style="font-size: 11px; color: #64748b;" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="sec-badge-title">${isKh ? 'បទពិសោធន៍ការងារ' : 'EXPERIENCE'}</div>
        <div>
          ${(data.experiences || []).map((exp, idx) => `
            <div style="display: flex; gap: 14px; margin-bottom: 14px;">
              <div style="font-size: 11px; font-weight: 700; color: #0f4c81; min-width: 65px;" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</div>
              <div style="flex: 1;">
                <div style="font-size: 12px; font-weight: 700; color: #111;" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)} - <span data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</span></div>
                <p style="font-size: 11px; color: #475569; margin-top: 2px;">${(exp.highlights || []).join('. ')}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </main>
    </div>
  `;
}

/* ==========================================================================
   TEMPLATE 9: GEOMETRIC ORIGAMI RIBBONS
   ========================================================================== */
export function renderOrigami(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

  return `
    <div class="resume-page cv-template-origami" id="resume-canvas-body">
      <!-- Sidebar Navy -->
      <aside class="sidebar">
        <div class="avatar-wrapper">
          <img src="${p.photo || data.photo || 'https://via.placeholder.com/150'}" alt="Photo" class="avatar-img" id="cv-avatar-preview">
        </div>

        <div class="ribbon-tab-white">${isKh ? 'ទំនាក់ទំនង' : 'CONTACT'}</div>
        ${p.email ? `<div class="contact-item"><i class="fa-solid fa-envelope"></i> <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span></div>` : ''}
        ${p.phone ? `<div class="contact-item"><i class="fa-solid fa-phone"></i> <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span></div>` : ''}
        ${p.address ? `<div class="contact-item"><i class="fa-solid fa-house"></i> <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span></div>` : ''}
        ${p.website ? `<div class="contact-item"><i class="fa-solid fa-globe"></i> <span data-bind="personalInfo.website">${escapeHtml(p.website)}</span></div>` : ''}

        <div class="ribbon-tab-white" style="margin-top: 20px;">${isKh ? 'បណ្តាញសង្គម' : 'Find Me Online'}</div>
        <div class="contact-item"><i class="fa-brands fa-facebook"></i> <span>facebook.com/profile</span></div>
        <div class="contact-item"><i class="fa-brands fa-telegram"></i> <span data-bind="personalInfo.telegram">${escapeHtml(p.telegram || '085 662 616')}</span></div>
        <div class="contact-item"><i class="fa-brands fa-linkedin"></i> <span data-bind="personalInfo.linkedin">${escapeHtml(p.linkedin || 'linkedin/profile')}</span></div>

        <!-- Skills -->
        <div class="ribbon-tab-white" style="margin-top: 20px;">${isKh ? 'ជំនាញ' : 'SKILLS'}</div>
        <ul style="padding-left: 14px; margin: 0; font-size: 11px; color: #e2e8f0;">
          ${(data.skills || []).map((s, idx) => `<li style="margin-bottom: 4px;" data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>`).join('')}
        </ul>
      </aside>

      <!-- Right Main Content -->
      <main class="main-content">
        <header class="header">
          <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'NAME SURNAME')}</h1>
          <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'JOB POSITION')}</div>
        </header>

        <div class="ribbon-tab-blue">${isKh ? 'ប្រវត្តិរូបសង្ខេប' : 'PROFILE'}</div>
        <p style="font-size: 11.5px; color: #475569; line-height: 1.5; margin-bottom: 18px;" data-bind="personalInfo.summary">${escapeHtml(p.summary || '')}</p>

        <div class="ribbon-tab-blue">${isKh ? 'ការអប់រំ' : 'EDUCATION'}</div>
        <div style="margin-bottom: 18px;">
          ${(data.education || []).map((edu, idx) => `
            <div style="margin-bottom: 10px;">
              <div style="font-size: 12px; font-weight: 700; color: #1e3a68;" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
              <div style="font-size: 11px; color: #64748b;" data-bind="education.${idx}.degree">${escapeHtml(edu.degree)} (${escapeHtml(edu.period)})</div>
            </div>
          `).join('')}
        </div>

        <div class="ribbon-tab-blue">${isKh ? 'បទពិសោធន៍' : 'EXPERIENCE'}</div>
        <div>
          ${(data.experiences || []).map((exp, idx) => `
            <div style="margin-bottom: 12px;">
              <div style="font-size: 12px; font-weight: 700; color: #1e3a68;" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
              <div style="font-size: 11px; color: #64748b;" data-bind="experiences.${idx}.company">${escapeHtml(exp.company)} (${escapeHtml(exp.period)})</div>
              <p style="font-size: 11px; color: #475569; margin-top: 2px;">${(exp.highlights || []).join('. ')}</p>
            </div>
          `).join('')}
        </div>
      </main>
    </div>
  `;
}

/* ==========================================================================
   TEMPLATE 10: EXECUTIVE RIGHT SIDEBAR (Roshan Mendis Style)
   ========================================================================== */
export function renderExecutiveRight(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

  return `
    <div class="resume-page cv-template-executive-right" id="resume-canvas-body">
      <!-- Left Main Body -->
      <main class="main-content">
        <div class="header">
          <div class="avatar-wrapper">
            <img src="${p.photo || data.photo || 'https://via.placeholder.com/150'}" alt="Photo" class="avatar-img" id="cv-avatar-preview">
          </div>
          <div>
            <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'ROSHAN MENDIS')}</h1>
            <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'BANK MANAGER')}</div>
          </div>
        </div>

        <div class="bar-sec-title">${isKh ? 'ប្រវត្តិរូប' : 'PROFILE'}</div>
        <p style="font-size: 11.5px; color: #334155; line-height: 1.5; margin-bottom: 20px;" data-bind="personalInfo.summary">${escapeHtml(p.summary || '')}</p>

        <div class="bar-sec-title">${isKh ? 'បទពិសោធន៍' : 'EXPERIENCE'}</div>
        <div style="margin-bottom: 20px;">
          ${(data.experiences || []).map((exp, idx) => `
            <div style="margin-bottom: 14px;">
              <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 800; color: #0f172a;">
                <span data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</span>
                <span style="color: #64748b; font-size: 11px;" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</span>
              </div>
              <div style="font-size: 11px; font-weight: 600; color: #0284c7; margin-bottom: 4px;" data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</div>
              <ul style="padding-left: 14px; margin: 0; font-size: 11px; color: #475569;">
                ${(exp.highlights || []).map((hl, hlIdx) => `<li data-bind="experiences.${idx}.highlights.${hlIdx}">${escapeHtml(hl)}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <div class="bar-sec-title">${isKh ? 'ការអប់រំ' : 'EDUCATION'}</div>
        <div>
          ${(data.education || []).map((edu, idx) => `
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <div>
                <div style="font-size: 12px; font-weight: 700; color: #0f172a;" data-bind="education.${idx}.degree">${escapeHtml(edu.degree)}</div>
                <div style="font-size: 11px; color: #64748b;" data-bind="education.${idx}.school">${escapeHtml(edu.school)}</div>
              </div>
              <div style="font-size: 11px; color: #64748b;" data-bind="education.${idx}.period">${escapeHtml(edu.period)}</div>
            </div>
          `).join('')}
        </div>
      </main>

      <!-- Right Navy Sidebar -->
      <aside class="sidebar-right">
        <div class="sidebar-title">${isKh ? 'ទំនាក់ទំនង' : 'CONTACT'}</div>
        ${p.phone ? `<div class="contact-item"><i class="fa-solid fa-phone contact-icon"></i> <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span></div>` : ''}
        ${p.email ? `<div class="contact-item"><i class="fa-solid fa-envelope contact-icon"></i> <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span></div>` : ''}
        ${p.address ? `<div class="contact-item"><i class="fa-solid fa-location-dot contact-icon"></i> <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span></div>` : ''}

        <!-- Personal Details -->
        <div class="sidebar-title" style="margin-top: 18px;">${isKh ? 'ព័ត៌មានលម្អិត' : 'PERSONAL DETAILS'}</div>
        <div style="font-size: 11px; color: #cbd5e1; display: grid; grid-template-columns: 1fr 1fr; gap: 4px 8px; margin-bottom: 18px;">
          <span>${isKh ? 'ភេទ:' : 'Gender:'}</span><strong data-bind="personalInfo.sex">${escapeHtml(p.sex || 'Male')}</strong>
          <span>${isKh ? 'សញ្ជាតិ:' : 'Nationality:'}</span><strong data-bind="personalInfo.nationality">${escapeHtml(p.nationality || 'Cambodian')}</strong>
          <span>${isKh ? 'កំណើត:' : 'DOB:'}</span><strong data-bind="personalInfo.dob">${escapeHtml(p.dob || '03/05/2002')}</strong>
        </div>

        <!-- Languages with Dot Ratings -->
        ${(data.languages && data.languages.length > 0) ? `
          <div class="sidebar-title">${isKh ? 'ភាសា' : 'LANGUAGES'}</div>
          <div style="margin-bottom: 18px;">
            ${data.languages.map((l, idx) => `
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 11px;" data-bind="languages.${idx}.name">${escapeHtml(l.name.split(' ')[0])}</span>
                <div class="rating-dots">
                  <div class="rating-dot active"></div>
                  <div class="rating-dot active"></div>
                  <div class="rating-dot active"></div>
                  <div class="rating-dot ${idx < 2 ? 'active' : ''}"></div>
                  <div class="rating-dot"></div>
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Skills with Cyan Glowing Bars -->
        <div class="sidebar-title">${isKh ? 'ជំនាញ' : 'SKILLS'}</div>
        ${(data.skills || []).map((s, idx) => `
          <div style="margin-bottom: 6px;">
            <div style="font-size: 10.5px; color: #e2e8f0; text-transform: uppercase;" data-bind="skills.${idx}.name">${escapeHtml(s.name)}</div>
            <div class="cyan-skill-bar">
              <div class="cyan-skill-fill" style="width: ${s.level || 80}%;"></div>
            </div>
          </div>
        `).join('')}

        <!-- References -->
        ${(data.references && data.references.length > 0) ? `
          <div class="sidebar-title" style="margin-top: 18px;">${isKh ? 'បុគ្គលធានា' : 'REFERENCES'}</div>
          ${data.references.map((r, idx) => `
            <div style="margin-bottom: 8px;">
              <div style="font-size: 11px; font-weight: 700; color: #fff;" data-bind="references.${idx}.name">${escapeHtml(r.name)}</div>
              <div style="font-size: 10px; color: #94a3b8;" data-bind="references.${idx}.role">${escapeHtml(r.role)}</div>
            </div>
          `).join('')}
        ` : ''}
      </aside>
    </div>
  `;
}

/* ==========================================================================
   TEMPLATE 11: CENTERED PROFILE MODERN (Robert James Style)
   ========================================================================== */
export function renderRobertJames(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

  return `
    <div class="resume-page cv-template-robert" id="resume-canvas-body">
      <!-- Top Header Banner -->
      <div class="top-header-banner">
        <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'ROBERT JAMES')}</h1>
        <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'GRAPHIC & WEB DESIGNER')}</div>
      </div>

      <!-- Avatar & 2-Column Contact Info Bar -->
      <div class="contact-avatar-bar">
        <div class="contact-left">
          ${p.phone ? `
            <div class="contact-item">
              <i class="fa-solid fa-phone"></i>
              <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
            </div>` : ''}
          ${p.address ? `
            <div class="contact-item">
              <i class="fa-solid fa-location-dot"></i>
              <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
            </div>` : ''}
        </div>

        <div class="avatar-center-wrapper">
          <img src="${p.photo || data.photo || 'https://via.placeholder.com/150'}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview" style="background-color: ${data.photoBg || '#ffffff'}">
        </div>

        <div class="contact-right">
          ${p.website ? `
            <div class="contact-item">
              <i class="fa-solid fa-globe"></i>
              <span data-bind="personalInfo.website">${escapeHtml(p.website)}</span>
            </div>` : ''}
          ${p.email ? `
            <div class="contact-item">
              <i class="fa-solid fa-envelope"></i>
              <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
            </div>` : ''}
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
              <span>${isKh ? 'អំពីខ្ញុំ' : 'ABOUT ME'}</span>
            </div>
            <p class="summary-text" data-bind="personalInfo.summary">${escapeHtml(p.summary || 'Enthusiastic professional with deep expertise and passion for delivering excellence.')}</p>
          </div>

          <!-- Skills with progress sliders -->
          <div class="sec-block">
            <div class="sec-header">
              <i class="fa-solid fa-chart-simple icon-badge"></i>
              <span>${isKh ? 'ជំនាញ' : 'SKILLS'}</span>
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
            `).join('')}
          </div>

          <!-- Awards -->
          <div class="sec-block">
            <div class="sec-header">
              <i class="fa-solid fa-trophy icon-badge"></i>
              <span>${isKh ? 'ពានរង្វាន់' : 'AWARDS'}</span>
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
              <span>${isKh ? 'ការអប់រំ' : 'EDUCATION'}</span>
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
                    <div class="node-desc" data-bind="educations.${idx}.description">${escapeHtml(edu.description || '')}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Experience -->
          <div class="sec-block">
            <div class="sec-header">
              <i class="fa-solid fa-briefcase icon-badge"></i>
              <span>${isKh ? 'បទពិសោធន៍' : 'EXPERIENCE'}</span>
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
                    <div class="node-desc" data-bind="experiences.${idx}.description">${escapeHtml(exp.description || '')}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Hobbies Icon Strip -->
          <div class="sec-block">
            <div class="sec-header">
              <i class="fa-solid fa-star icon-badge"></i>
              <span>${isKh ? 'ចំណង់ចំណូលចិត្ត' : 'HOBBIES & INTERESTS'}</span>
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

/* ==========================================================================
   TEMPLATE 12: MINIMAL GREY ARCH (Jonathan Patterson Style)
   ========================================================================== */
export function renderJonathanPatterson(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

  return `
    <div class="resume-page cv-template-jonathan" id="resume-canvas-body">
      <!-- Left Sidebar with Rounded Arch Top -->
      <aside class="sidebar">
        <div class="arch-avatar-wrapper">
          <img src="${p.photo || data.photo || 'https://via.placeholder.com/150'}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview" style="background-color: ${data.photoBg || '#ffffff'}">
        </div>

        <!-- Education -->
        <div class="side-sec">
          <div class="side-title">${isKh ? 'ការអប់រំ' : 'EDUCATION'}</div>
          ${(data.education || data.educations || []).map((edu, idx) => `
            <div class="edu-box">
              <div class="edu-period" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</div>
              <div class="edu-degree" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</div>
              <div class="edu-school" data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</div>
            </div>
          `).join('')}
        </div>

        <!-- Skills -->
        <div class="side-sec">
          <div class="side-title">${isKh ? 'ជំនាញ' : 'SKILLS'}</div>
          <ul class="bullet-list">
            ${(data.skills || []).map((s, idx) => `
              <li data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>
            `).join('')}
          </ul>
        </div>

        <!-- Languages -->
        ${(data.languages && data.languages.length > 0) ? `
          <div class="side-sec">
            <div class="side-title">${isKh ? 'ភាសា' : 'LANGUAGES'}</div>
            <ul class="bullet-list">
              ${data.languages.map((l, idx) => `
                <li data-bind="languages.${idx}.name">${escapeHtml(l.name)}</li>
              `).join('')}
            </ul>
          </div>
        ` : ''}

        <!-- Contact Info at bottom -->
        <div class="side-sec" style="margin-top: auto;">
          <div class="side-title">${isKh ? 'ទំនាក់ទំនង' : 'CONTACT'}</div>
          ${p.phone ? `
            <div class="contact-row">
              <i class="fa-solid fa-phone"></i>
              <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
            </div>` : ''}
          ${p.email ? `
            <div class="contact-row">
              <i class="fa-solid fa-envelope"></i>
              <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
            </div>` : ''}
          ${p.address ? `
            <div class="contact-row">
              <i class="fa-solid fa-location-dot"></i>
              <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
            </div>` : ''}
          ${p.website ? `
            <div class="contact-row">
              <i class="fa-solid fa-globe"></i>
              <span data-bind="personalInfo.website">${escapeHtml(p.website)}</span>
            </div>` : ''}
        </div>
      </aside>

      <!-- Right Main Column -->
      <main class="main-content">
        <!-- Charcoal Top Header -->
        <div class="header-box">
          <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'JONATHAN PATTERSON')}</h1>
          <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'Art Director')}</div>
        </div>

        <div class="body-content">
          <!-- Profile Info -->
          <div class="main-sec">
            <div class="main-sec-title">${isKh ? 'ព័ត៌មានសង្ខេប' : 'PROFILE INFO'}</div>
            <p class="summary-text" data-bind="personalInfo.summary">${escapeHtml(p.summary || 'Creative and strategic professional with solid track record in design and management.')}</p>
          </div>

          <!-- Experience with Hollow Timeline Nodes -->
          <div class="main-sec">
            <div class="main-sec-title">${isKh ? 'បទពិសោធន៍ការងារ' : 'EXPERIENCE'}</div>
            <div class="hollow-timeline">
              ${(data.experiences || []).map((exp, idx) => `
                <div class="hollow-node">
                  <div class="hollow-dot"></div>
                  <div class="hollow-header">
                    <span class="role-text" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</span>
                    <span class="period-text" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</span>
                  </div>
                  <div class="company-text" data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</div>
                  <div class="desc-text" data-bind="experiences.${idx}.description">${escapeHtml(exp.description || '')}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Achievements 2-column highlight -->
          <div class="main-sec">
            <div class="main-sec-title">${isKh ? 'សមិទ្ធផល' : 'ACHIEVEMENT'}</div>
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

/* ==========================================================================
   TEMPLATE 13: GEOMETRIC NAVY & CYAN TECH (Matthew Connors Style)
   ========================================================================== */
export function renderMatthewConnors(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

  return `
    <div class="resume-page cv-template-matthew" id="resume-canvas-body">
      <!-- Dark Navy Geometric Top Banner -->
      <div class="top-geo-banner">
        <div class="geo-pattern-decor"></div>
        <div class="banner-avatar-wrap">
          <img src="${p.photo || data.photo || 'https://via.placeholder.com/150'}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview" style="background-color: ${data.photoBg || '#ffffff'}">
        </div>
        <div class="banner-text-wrap">
          <div class="top-mini-contacts">
            <span>${escapeHtml(p.jobTitle || 'Project Manager')}</span> • 
            <span>${escapeHtml(p.phone || '+012 3456 7890')}</span> • 
            <span>${escapeHtml(p.email || 'matthew@email.com')}</span>
          </div>
          <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'MATTHEW CONNORS')}</h1>
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
              <span>${isKh ? 'ប្រវត្តិសង្ខេប' : 'PROFILE'}</span>
            </div>
            <p class="summary-text" data-bind="personalInfo.summary">${escapeHtml(p.summary || 'Excellence-driven professional with deep experience in driving project milestones.')}</p>
          </div>

          <!-- Skills -->
          <div class="ice-sec">
            <div class="capsule-header">
              <i class="fa-solid fa-gear"></i>
              <span>${isKh ? 'ជំនាញ' : 'SKILLS'}</span>
            </div>
            <ul class="ice-list">
              ${(data.skills || []).map((s, idx) => `
                <li data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>
              `).join('')}
            </ul>
          </div>

          <!-- Software -->
          <div class="ice-sec">
            <div class="capsule-header">
              <i class="fa-solid fa-laptop-code"></i>
              <span>${isKh ? 'កម្មវិធីកុំព្យូទ័រ' : 'SOFTWARE'}</span>
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
              <span>${isKh ? 'ភាសា' : 'LANGUAGES'}</span>
            </div>
            <div class="lang-row">
              ${(data.languages || []).map((l, idx) => `
                <span data-bind="languages.${idx}.name">${escapeHtml(l.name.split(' ')[0])}</span>
              `).join(' | ') || 'English | Khmer'}
            </div>
          </div>
        </aside>

        <!-- Right White Column -->
        <main class="main-white">
          <!-- Work Experience -->
          <div class="main-sec">
            <div class="capsule-header-dark">
              <i class="fa-solid fa-briefcase"></i>
              <span>${isKh ? 'បទពិសោធន៍ការងារ' : 'WORK EXPERIENCE'}</span>
            </div>
            <div class="exp-list">
              ${(data.experiences || []).map((exp, idx) => `
                <div class="exp-item">
                  <div class="exp-date" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</div>
                  <div class="exp-company" data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</div>
                  <div class="exp-role" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
                  <div class="exp-desc" data-bind="experiences.${idx}.description">${escapeHtml(exp.description || '')}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- References -->
          <div class="main-sec">
            <div class="capsule-header-dark">
              <i class="fa-solid fa-phone"></i>
              <span>${isKh ? 'បុគ្គលធានា' : 'REFERENCES'}</span>
            </div>
            <div class="ref-grid">
              ${(data.references && data.references.length > 0) ? data.references.map((r, idx) => `
                <div class="ref-box">
                  <div class="ref-name" data-bind="references.${idx}.name">${escapeHtml(r.name)}</div>
                  <div class="ref-role" data-bind="references.${idx}.role">${escapeHtml(r.role)}</div>
                  <div class="ref-contact" data-bind="references.${idx}.contact">${escapeHtml(r.contact)}</div>
                </div>
              `).join('') : `
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

/* ==========================================================================
   TEMPLATE 14: DEEP NAVY & BLUE BANDS (Thomas Smith Style)
   ========================================================================== */
export function renderThomasSmith(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

  return `
    <div class="resume-page cv-template-thomas" id="resume-canvas-body">
      <!-- Left Deep Navy Sidebar -->
      <aside class="sidebar">
        <div class="avatar-box">
          <img src="${p.photo || data.photo || 'https://via.placeholder.com/150'}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview" style="background-color: ${data.photoBg || '#ffffff'}">
        </div>

        <!-- Blue Info Bands -->
        <div class="band-stack">
          ${p.phone ? `
            <div class="blue-band">
              <i class="fa-solid fa-phone"></i>
              <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
            </div>` : ''}
          ${p.email ? `
            <div class="blue-band">
              <i class="fa-solid fa-envelope"></i>
              <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
            </div>` : ''}
          ${p.address ? `
            <div class="blue-band">
              <i class="fa-solid fa-location-dot"></i>
              <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
            </div>` : ''}
          ${p.telegram ? `
            <div class="blue-band">
              <i class="fa-brands fa-telegram"></i>
              <span data-bind="personalInfo.telegram">${escapeHtml(p.telegram)}</span>
            </div>` : ''}
        </div>

        <!-- Job Title & Summary -->
        <div class="side-bio-box">
          <div class="bio-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'Job Title')}</div>
          <p class="bio-desc" data-bind="personalInfo.summary">${escapeHtml(p.summary || 'Describe your career goals and key achievements.')}</p>
        </div>

        <!-- Languages Banner -->
        <div class="side-section">
          <div class="blue-title-banner">${isKh ? 'ភាសា' : 'LANGUAGES'}</div>
          <ul class="side-bullets">
            ${(data.languages || []).map((l, idx) => `
              <li data-bind="languages.${idx}.name">${escapeHtml(l.name)}</li>
            `).join('')}
          </ul>
        </div>

        <!-- Hobbies Banner -->
        <div class="side-section">
          <div class="blue-title-banner">${isKh ? 'ចំណង់ចំណូលចិត្ត' : 'HOBBIES'}</div>
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
          <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'THOMAS SMITH')}</h1>
        </div>

        <!-- Experience -->
        <div class="main-sec">
          <div class="sec-banner-title">${isKh ? 'បទពិសោធន៍' : 'EXPERIENCE'}</div>
          ${(data.experiences || []).map((exp, idx) => `
            <div class="exp-node">
              <div class="exp-role" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
              <div class="exp-sub">${escapeHtml(exp.company)} | ${escapeHtml(exp.period)}</div>
              <ul class="duty-bullets">
                <li>Key responsibility or accomplishment delivered effectively</li>
                <li>Led cross-functional communication and execution</li>
              </ul>
            </div>
          `).join('')}
        </div>

        <!-- Education -->
        <div class="main-sec">
          <div class="sec-banner-title">${isKh ? 'ការអប់រំ' : 'EDUCATION'}</div>
          ${(data.education || data.educations || []).map((edu, idx) => `
            <div class="edu-node">
              <div class="edu-title" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)} | <span style="font-weight: normal;">${escapeHtml(edu.period)}</span></div>
              <div class="edu-school" data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</div>
            </div>
          `).join('')}
        </div>

        <!-- Skill Highlights -->
        <div class="main-sec">
          <div class="sec-banner-title">${isKh ? 'ជំនាញលេចធ្លោ' : 'SKILL HIGHLIGHTS'}</div>
          <ul class="duty-bullets">
            ${(data.skills || []).map((s, idx) => `
              <li data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>
            `).join('')}
          </ul>
        </div>

        <!-- Courses -->
        <div class="main-sec">
          <div class="sec-banner-title">${isKh ? 'វគ្គសិក្សាជំនាញ' : 'COURSES'}</div>
          <ul class="duty-bullets">
            <li>Advanced UI/UX Masterclass & Web Strategy</li>
            <li>Professional Communication & Leadership Certificate</li>
          </ul>
        </div>
      </main>
    </div>
  `;
}

/* ==========================================================================
   TEMPLATE 15: CLEAN TOPCV SPLIT (Steven Terry Style)
   ========================================================================== */
export function renderStevenTerry(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

  return `
    <div class="resume-page cv-template-steven" id="resume-canvas-body">
      <!-- Top Teal Banner with Avatar on the Right -->
      <div class="top-teal-banner">
        <div class="banner-text">
          <h1 class="user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'STEVEN TERRY')}</h1>
          <div class="user-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'GRAPHIC DESIGNER')}</div>
        </div>
        <div class="banner-avatar-wrap">
          <img src="${p.photo || data.photo || 'https://via.placeholder.com/150'}" alt="Profile Photo" class="avatar-img" id="cv-avatar-preview" style="background-color: ${data.photoBg || '#ffffff'}">
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
              </div>` : ''}
            ${p.dob ? `
              <div class="meta-row">
                <i class="fa-solid fa-calendar"></i>
                <span data-bind="personalInfo.dob">${escapeHtml(p.dob)}</span>
              </div>` : ''}
            ${p.phone ? `
              <div class="meta-row">
                <i class="fa-solid fa-phone"></i>
                <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
              </div>` : ''}
            ${p.email ? `
              <div class="meta-row">
                <i class="fa-solid fa-envelope"></i>
                <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
              </div>` : ''}
            ${p.website ? `
              <div class="meta-row">
                <i class="fa-solid fa-globe"></i>
                <span data-bind="personalInfo.website">${escapeHtml(p.website)}</span>
              </div>` : ''}
            ${p.address ? `
              <div class="meta-row">
                <i class="fa-solid fa-location-dot"></i>
                <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
              </div>` : ''}
          </div>

          <div class="side-divider"></div>

          <!-- Skills -->
          <div class="side-sec">
            <div class="side-title">${isKh ? 'ជំនាញ' : 'SKILLS'}</div>
            ${(data.skills || []).map((s, idx) => `
              <div class="skill-item">
                <div class="skill-head">• <strong data-bind="skills.${idx}.name">${escapeHtml(s.name)}</strong></div>
                <div class="skill-sub">Proficient & Production Ready</div>
              </div>
            `).join('')}
          </div>

          <div class="side-divider"></div>

          <!-- Honors & Awards -->
          <div class="side-sec">
            <div class="side-title">${isKh ? 'កិត្តិយស & ពានរង្វាន់' : 'HONORS & AWARDS'}</div>
            <div class="award-box">
              <strong style="color: #fff;">2024:</strong> Top Performance Award & Annual Scholarship
            </div>
          </div>

          <div class="side-divider"></div>

          <!-- Certifications -->
          <div class="side-sec">
            <div class="side-title">${isKh ? 'វិញ្ញាបនបត្រ' : 'CERTIFICATIONS'}</div>
            <div class="cert-box">
              <strong style="color: #fff;">2023:</strong> Professional Certificate of Excellence
            </div>
          </div>
        </aside>

        <!-- Right White Main Column -->
        <main class="main-content">
          <!-- Objective -->
          <div class="main-sec">
            <div class="sec-underline-title">${isKh ? 'គោលបំណង' : 'OBJECTIVE'}</div>
            <p class="summary-text" data-bind="personalInfo.summary">${escapeHtml(p.summary || 'To utilize my expertise and dedication to contribute substantial value to team goals.')}</p>
          </div>

          <!-- Education -->
          <div class="main-sec">
            <div class="sec-underline-title">${isKh ? 'ការអប់រំ' : 'EDUCATION'}</div>
            ${(data.education || data.educations || []).map((edu, idx) => `
              <div class="edu-item">
                <div class="edu-header">
                  <span class="edu-school">• <strong data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</strong></span>
                  <span class="edu-date" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</span>
                </div>
                <div class="edu-degree" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</div>
              </div>
            `).join('')}
          </div>

          <!-- Work Experience -->
          <div class="main-sec">
            <div class="sec-underline-title">${isKh ? 'បទពិសោធន៍ការងារ' : 'WORK EXPERIENCE'}</div>
            ${(data.experiences || []).map((exp, idx) => `
              <div class="exp-item">
                <div class="exp-header">
                  <span class="exp-company">• <strong data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</strong></span>
                  <span class="exp-date" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</span>
                </div>
                <div class="exp-role" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
                <div class="exp-desc" data-bind="experiences.${idx}.description">${escapeHtml(exp.description || '')}</div>
              </div>
            `).join('')}
          </div>

          <!-- Activities -->
          <div class="main-sec">
            <div class="sec-underline-title">${isKh ? 'សកម្មភាពសង្គម' : 'ACTIVITIES'}</div>
            <div class="activity-item">
              <div class="activity-header">
                <span>• <strong>EDUCATION & YOUTH FORUM</strong></span>
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

/* ==========================================================================
   TEMPLATE 16: KHMER OFFICIAL JOB APPLICATION (ពាក្យសុំចូលបម្រើការងារ)
   ========================================================================== */
export function renderKhmerOfficial(data) {
  const p = data.personalInfo || {};

  return `
    <div class="resume-page cv-template-khmer-official" id="resume-canvas-body">
      <!-- Official Kingdom Header -->
      <div class="official-top-row">
        <div class="official-kingdom-center">
          <div class="kingdom-line-1">ព្រះរាជាណាចក្រកម្ពុជា</div>
          <div class="kingdom-line-2">ជាតិ សាសនា ព្រះមហាក្សត្រ</div>
          <div class="kingdom-flower">❖ ❖ ❖</div>
          <h1 class="official-app-title">ពាក្យសុំចូលបម្រើការងារ</h1>
        </div>

        <!-- 4x6 Passport Photo on Top Right -->
        <div class="official-photo-box">
          <img src="${p.photo || data.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400'}" alt="Photo 4x6" class="official-photo-img" style="background-color: ${data.photoBg || '#1e88e5'}">
          <div class="official-photo-tag">៤ x ៦</div>
        </div>
      </div>

      <!-- Section 1: ជីវប្រវត្តិផ្ទាល់ខ្លួន -->
      <div class="official-sec">
        <div class="official-sec-title">ជីវប្រវត្តិផ្ទាល់ខ្លួន</div>
        <table class="official-table">
          <tbody>
            <tr>
              <td class="lbl">គោត្តនាម និង នាម</td>
              <td class="cln">:</td>
              <td class="val-bold" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'ខេន សុខា')}</td>
            </tr>
            <tr>
              <td class="lbl">សុំបម្រើការងារផ្នែក</td>
              <td class="cln">:</td>
              <td class="val-bold" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'គ្រូបង្រៀនភាសាខ្មែរ / រដ្ឋបាល')}</td>
            </tr>
            <tr>
              <td class="lbl">លេខទូរស័ព្ទ</td>
              <td class="cln">:</td>
              <td class="val" data-bind="personalInfo.phone">${escapeHtml(p.phone || '096 826 5506')} ${p.telegram ? `( Telegram )` : ''}</td>
            </tr>
            <tr>
              <td class="lbl">ភេទ</td>
              <td class="cln">:</td>
              <td class="val" data-bind="personalInfo.sex">${escapeHtml(p.sex || 'ស្រី')}</td>
            </tr>
            <tr>
              <td class="lbl">ថ្ងៃខែឆ្នាំកំណើត</td>
              <td class="cln">:</td>
              <td class="val" data-bind="personalInfo.dob">${escapeHtml(p.dob || 'ថ្ងៃទី 04 ខែ មិថុនា ឆ្នាំ 2005')}</td>
            </tr>
            <tr>
              <td class="lbl">ទីកន្លែងកំណើត</td>
              <td class="cln">:</td>
              <td class="val" data-bind="personalInfo.pob">${escapeHtml(p.pob || 'ភូមិត្នោត ឃុំព្រែកដំបង ស្រុកមុខកំពូល ខេត្តកណ្តាល')}</td>
            </tr>
            <tr>
              <td class="lbl">កម្ពស់</td>
              <td class="cln">:</td>
              <td class="val" data-bind="personalInfo.height">${escapeHtml(p.height || '165 cm')}</td>
            </tr>
            <tr>
              <td class="lbl">ជនជាតិ</td>
              <td class="cln">:</td>
              <td class="val" data-bind="personalInfo.nationality">${escapeHtml(p.nationality || 'ខ្មែរ')}</td>
            </tr>
            <tr>
              <td class="lbl">ស្ថានភាពគ្រួសារ</td>
              <td class="cln">:</td>
              <td class="val" data-bind="personalInfo.maritalStatus">${escapeHtml(p.maritalStatus || 'នៅលីវ')}</td>
            </tr>
            <tr>
              <td class="lbl">ទីលំនៅបច្ចុប្បន្ន</td>
              <td class="cln">:</td>
              <td class="val" data-bind="personalInfo.address">${escapeHtml(p.address || 'ភូមិព្រៃសាលាក់ សង្កាត់ចោមចៅ ខណ្ឌពោធិ៍សែនជ័យ រាជធានីភ្នំពេញ')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Section 2: កម្រិតវប្បធម៌ ឬ ការសិក្សា -->
      <div class="official-sec">
        <div class="official-sec-title">កម្រិតវប្បធម៌ ឬ ការសិក្សា</div>
        <table class="official-table">
          <tbody>
            ${(data.education || data.educations || []).map((edu, idx) => `
              <tr>
                <td class="lbl" style="width: 140px;" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</td>
                <td class="cln">:</td>
                <td class="val"><span data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</span> នៅ <strong data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</strong></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Section 3: ជំនាញផ្សេងៗ -->
      <div class="official-sec">
        <div class="official-sec-title">ជំនាញផ្សេងៗ</div>
        <table class="official-table">
          <tbody>
            <tr>
              <td class="lbl" style="width: 140px;">កុំព្យូទ័រ</td>
              <td class="cln">:</td>
              <td class="val">${(data.skills || []).map((s, idx) => `<span data-bind="skills.${idx}.name">${escapeHtml(s.name)}</span>`).join(', ')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Section 4: បទពិសោធន៍ការងារ -->
      <div class="official-sec">
        <div class="official-sec-title">បទពិសោធន៍ការងារ</div>
        <table class="official-table">
          <tbody>
            ${(data.experiences || []).map((exp, idx) => `
              <tr>
                <td class="lbl" style="width: 140px;" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</td>
                <td class="cln">:</td>
                <td class="val"><span data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</span> នៅ <strong data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</strong></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Section 5: ជំនាញភាសា -->
      <div class="official-sec">
        <div class="official-sec-title">ជំនាញភាសា</div>
        <table class="official-table">
          <tbody>
            <tr>
              <td class="lbl" style="width: 140px;">ខ្មែរ</td>
              <td class="cln">:</td>
              <td class="val">ភាសាដើមកំណើត</td>
            </tr>
            <tr>
              <td class="lbl" style="width: 140px;">អង់គ្លេស</td>
              <td class="cln">:</td>
              <td class="val">បង្គួរ / មធ្យម (អាចប្រាស្រ័យទាក់ទងបាន)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

/* ==========================================================================
   TEMPLATE 17: THY MENGLEANG (Tech Minimalist Hollow Timeline)
   ========================================================================== */
export function renderThyMengleang(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';
  const nameParts = (p.fullName || 'THY MENGLEANG').split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return `
    <div class="resume-page cv-template-thy-mengleang" id="resume-canvas-body">
      <!-- Top Row: Photo on Left + Huge Bold Name on Right -->
      <div class="thy-top-header">
        <div class="thy-photo-frame">
          <img src="${p.photo || data.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400'}" alt="Photo" class="thy-avatar-img">
        </div>
        <div class="thy-name-block">
          <h1 class="thy-big-name">
            <span class="thy-fname" data-bind="personalInfo.fullName">${escapeHtml(firstName)}</span>
            <span class="thy-lname">${escapeHtml(lastName)}</span>
          </h1>
          <p class="thy-summary-para" data-bind="personalInfo.summary">${escapeHtml(p.summary || 'I am a qualified and professional web developer with five years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for detail.')}</p>
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
              </div>` : ''}
            ${p.email ? `
              <div class="thy-contact-row">
                <i class="fa-solid fa-envelope"></i>
                <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
              </div>` : ''}
            ${p.address ? `
              <div class="thy-contact-row">
                <i class="fa-solid fa-location-dot"></i>
                <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
              </div>` : ''}
            ${p.website ? `
              <div class="thy-contact-row">
                <i class="fa-solid fa-globe"></i>
                <span data-bind="personalInfo.website">${escapeHtml(p.website)}</span>
              </div>` : ''}
          </div>

          <!-- Skills -->
          <div class="thy-side-sec">
            <div class="thy-side-title">${isKh ? 'ជំនាញ' : 'SKILLS'}</div>
            <ul class="thy-side-list">
              ${(data.skills || []).map((s, idx) => `
                <li data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>
              `).join('')}
            </ul>
          </div>

          <!-- Education -->
          <div class="thy-side-sec">
            <div class="thy-side-title">${isKh ? 'ការអប់រំ' : 'EDUCATION'}</div>
            ${(data.education || data.educations || []).map((edu, idx) => `
              <div class="thy-side-edu-item">
                <div class="thy-edu-deg" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</div>
                <div class="thy-edu-sch" data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</div>
                <div class="thy-edu-yr" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</div>
              </div>
            `).join('')}
          </div>

          <!-- Language -->
          <div class="thy-side-sec">
            <div class="thy-side-title">${isKh ? 'ភាសា' : 'LANGUAGE'}</div>
            <ul class="thy-side-list">
              <li>English (Fluent)</li>
              <li>Khmer (Native)</li>
            </ul>
          </div>
        </aside>

        <!-- Right Timeline Content -->
        <main class="thy-body-content">
          <div class="thy-main-title">${isKh ? 'បទពិសោធន៍ការងារ' : 'EXPERIENCE'}</div>
          
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
                  ${(exp.highlights && exp.highlights.length > 0) ? exp.highlights.map((hl, hlIdx) => `
                    <li data-bind="experiences.${idx}.highlights.${hlIdx}">${escapeHtml(hl)}</li>
                  `).join('') : `<li>${escapeHtml(exp.description || 'Responsible for daily project operations and design implementations.')}</li>`}
                </ul>
              </div>
            `).join('')}
          </div>
        </main>
      </div>
    </div>
  `;
}

/* ==========================================================================
   TEMPLATE 18: JAMES DANIEL PARAS (Modern Black Organic Oval Curves)
   ========================================================================== */
export function renderJamesParas(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

  return `
    <div class="resume-page cv-template-james-paras" id="resume-canvas-body">
      <!-- Background Fluid Corner Accents -->
      <div class="james-blob-top-right"></div>
      <div class="james-blob-bottom-left"></div>

      <!-- Top Header Row -->
      <div class="james-header-row">
        <!-- Organic Droplet Photo Wrapper -->
        <div class="james-photo-droplet">
          <img src="${p.photo || data.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400'}" alt="Photo" class="james-avatar">
        </div>

        <div class="james-title-block">
          <h1 class="james-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'JAMES DANIEL PARAS')}</h1>
          <div class="james-jobtitle" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'WEB DEVELOPER')}</div>
        </div>
      </div>

      <!-- Content 2 Columns -->
      <div class="james-cols">
        <!-- Left Column -->
        <aside class="james-col-left">
          <!-- Contact -->
          <div class="james-sec-box">
            <div class="james-pill-header">${isKh ? 'ទំនាក់ទំនង' : 'CONTACT'}</div>
            <div class="james-contact-list">
              ${p.phone ? `
                <div class="james-contact-item">
                  <span class="james-icon-circle"><i class="fa-solid fa-phone"></i></span>
                  <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
                </div>` : ''}
              ${p.email ? `
                <div class="james-contact-item">
                  <span class="james-icon-circle"><i class="fa-solid fa-envelope"></i></span>
                  <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
                </div>` : ''}
              ${p.address ? `
                <div class="james-contact-item">
                  <span class="james-icon-circle"><i class="fa-solid fa-house"></i></span>
                  <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
                </div>` : ''}
            </div>
          </div>

          <!-- Skills -->
          <div class="james-sec-box">
            <div class="james-pill-header">${isKh ? 'ជំនាញ' : 'SKILLS'}</div>
            <ul class="james-bullet-list">
              ${(data.skills || []).map((s, idx) => `
                <li data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>
              `).join('')}
            </ul>
          </div>
        </aside>

        <!-- Right Column -->
        <main class="james-col-right">
          <!-- Personal Information -->
          <div class="james-sec-box">
            <div class="james-pill-header">${isKh ? 'ព័ត៌មានផ្ទាល់ខ្លួន' : 'PERSONAL INFORMATION'}</div>
            <table class="james-info-table">
              <tbody>
                <tr>
                  <td class="lbl">Birthday</td>
                  <td class="val" data-bind="personalInfo.dob">${escapeHtml(p.dob || 'November 20, 2002')}</td>
                </tr>
                <tr>
                  <td class="lbl">Birth Place</td>
                  <td class="val" data-bind="personalInfo.pob">${escapeHtml(p.pob || 'Kampong Cham / Phnom Penh')}</td>
                </tr>
                <tr>
                  <td class="lbl">Gender</td>
                  <td class="val" data-bind="personalInfo.sex">${escapeHtml(p.sex || 'Male')}</td>
                </tr>
                <tr>
                  <td class="lbl">Nationality</td>
                  <td class="val" data-bind="personalInfo.nationality">${escapeHtml(p.nationality || 'Cambodian')}</td>
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
            <div class="james-pill-header">${isKh ? 'គោលបំណងអាជីព' : 'CAREER OBJECTIVES'}</div>
            <div class="james-obj-text" data-bind="personalInfo.summary">
              • To gain experience and knowledge that is relevant to my field.<br>
              • To grow professionally and seek opportunities.<br>
              • To hone my technical abilities and contribute to team success.
            </div>
          </div>

          <!-- Education -->
          <div class="james-sec-box">
            <div class="james-pill-header">${isKh ? 'ការអប់រំ' : 'EDUCATION'}</div>
            <table class="james-edu-table">
              <tbody>
                ${(data.education || data.educations || []).map((edu, idx) => `
                  <tr>
                    <td class="yr" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</td>
                    <td class="sch"><strong data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</strong><br><span style="font-size: 11px; color: #555;" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
            <div class="james-bottom-bar"></div>
          </div>
        </main>
      </div>
    </div>
  `;
}

/* ==========================================================================
   TEMPLATE 19: GUSTAVO COBEÑAS (Forest Green Architecture & Stepped Accents)
   ========================================================================== */
export function renderGustavoGreen(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

  return `
    <div class="resume-page cv-template-gustavo-green" id="resume-canvas-body">
      <!-- Left Forest Green Sidebar -->
      <aside class="gustavo-sidebar">
        <!-- Photo with Top Right Curve -->
        <div class="gustavo-photo-box">
          <img src="${p.photo || data.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400'}" alt="Photo" class="gustavo-avatar">
        </div>

        <!-- Meta pills -->
        <div class="gustavo-meta-group">
          <div class="gustavo-meta-item"><i class="fa-solid fa-user"></i> <span>22 years</span></div>
          <div class="gustavo-meta-item"><i class="fa-solid fa-flag"></i> <span data-bind="personalInfo.nationality">${escapeHtml(p.nationality || 'Cambodian')}</span></div>
          <div class="gustavo-meta-item"><i class="fa-solid fa-cake-candles"></i> <span data-bind="personalInfo.dob">${escapeHtml(p.dob || 'September 23, 2001')}</span></div>
        </div>

        <!-- Contact -->
        <div class="gustavo-side-sec">
          <div class="gustavo-sec-head">${isKh ? 'ទំនាក់ទំនង' : 'CONTACT'}</div>
          ${p.phone ? `<div class="gustavo-contact-row"><i class="fa-solid fa-phone"></i><span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span></div>` : ''}
          ${p.email ? `<div class="gustavo-contact-row"><i class="fa-solid fa-envelope"></i><span data-bind="personalInfo.email">${escapeHtml(p.email)}</span></div>` : ''}
          ${p.address ? `<div class="gustavo-contact-row"><i class="fa-solid fa-house"></i><span data-bind="personalInfo.address">${escapeHtml(p.address)}</span></div>` : ''}
        </div>

        <!-- Knowledge -->
        <div class="gustavo-side-sec">
          <div class="gustavo-sec-head"><i class="fa-solid fa-display"></i> ${isKh ? 'ចំណេះដឹង' : 'KNOWLEDGE'}</div>
          <ul class="gustavo-list">
            <li>Professional Draftsman & CAD</li>
            <li>Topography & 3D Modeling</li>
            <li>Project Designer & Structure</li>
          </ul>
        </div>

        <!-- Skills -->
        <div class="gustavo-side-sec">
          <div class="gustavo-sec-head"><i class="fa-solid fa-brain"></i> ${isKh ? 'ជំនាញ' : 'SKILLS'}</div>
          <ul class="gustavo-list">
            ${(data.skills || []).map((s, idx) => `
              <li data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>
            `).join('')}
          </ul>
        </div>

        <!-- Languages -->
        <div class="gustavo-side-sec">
          <div class="gustavo-sec-head"><i class="fa-solid fa-globe"></i> ${isKh ? 'ភាសា' : 'LANGUAGES'}</div>
          <div style="font-size: 11.5px; font-weight: 700; letter-spacing: 0.5px;">ADVANCED ENGLISH / KHMER</div>
        </div>
      </aside>

      <!-- Right Main Column -->
      <main class="gustavo-main">
        <!-- Top Grey Header Block -->
        <div class="gustavo-header-block">
          <h1 class="gustavo-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'GUSTAVO COBEÑAS')}</h1>
          <div class="gustavo-job" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'ARCHITECT')}</div>
        </div>

        <div class="gustavo-body-inner">
          <!-- Profile -->
          <div class="gustavo-main-sec">
            <div class="gustavo-main-head"><i class="fa-solid fa-user"></i> ${isKh ? 'ប្រវត្តិរូបសង្ខេប' : 'PERSONAL PROFILE'}</div>
            <p class="gustavo-desc" data-bind="personalInfo.summary">${escapeHtml(p.summary || 'Licensed architect with knowledge to carry out architectural projects that satisfy the needs of users according to their context, also willing to continue acquiring knowledge and take advantage of it.')}</p>
          </div>

          <!-- Academic Training -->
          <div class="gustavo-main-sec">
            <div class="gustavo-main-head"><i class="fa-solid fa-graduation-cap"></i> ${isKh ? 'ការសិក្សាអប់រំ' : 'ACADEMIC TRAINING'}</div>
            
            ${(data.education || data.educations || []).map((edu, idx) => `
              <div class="gustavo-edu-block">
                <div class="gustavo-edu-title" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</div>
                <div class="gustavo-edu-yr" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</div>
                <ul class="gustavo-edu-bullets">
                  <li><span data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</span></li>
                </ul>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Bottom Right Stepped Geometric Stairs Accent -->
        <div class="gustavo-steps-accent"></div>
      </main>
    </div>
  `;
}

/* ==========================================================================
   TEMPLATE 20: SADIQ AMIN (Executive Halftone Dot Navy & Skill Sliders)
   ========================================================================== */
export function renderSadiqNavy(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';
  const nameParts = (p.fullName || 'SADIQ AMIN').split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return `
    <div class="resume-page cv-template-sadiq-navy" id="resume-canvas-body">
      <!-- Halftone Circles Texture Background Accents -->
      <div class="sadiq-dots-top-right"></div>
      <div class="sadiq-dots-bottom-left"></div>

      <!-- Top Row Header -->
      <header class="sadiq-header-row">
        <div class="sadiq-photo-navy-box">
          <img src="${p.photo || data.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400'}" alt="Photo" class="sadiq-avatar">
        </div>

        <div class="sadiq-title-center">
          <h1 class="sadiq-huge-name">
            <span class="sadiq-fname" data-bind="personalInfo.fullName">${escapeHtml(firstName)}</span>
            <span class="sadiq-lname">${escapeHtml(lastName)}</span>
          </h1>
          <div class="sadiq-job" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'Office Assistant')}</div>
        </div>
      </header>

      <!-- 2 Columns Body -->
      <div class="sadiq-body-cols">
        <!-- Left Column -->
        <aside class="sadiq-left-col">
          <!-- About Me -->
          <div class="sadiq-sec-block">
            <div class="sadiq-simple-title">${isKh ? 'អំពីខ្ញុំ' : 'About Me'}</div>
            <p class="sadiq-about-text" data-bind="personalInfo.summary">${escapeHtml(p.summary || 'As an Office Assistant, I am dedicated to ensuring efficient operations through meticulous organization and effective communication. Proficient in administrative tasks.')}</p>
          </div>

          <!-- Contacts -->
          <div class="sadiq-contact-block">
            ${p.phone ? `
              <div class="sadiq-contact-row">
                <span class="sadiq-icon-navy"><i class="fa-solid fa-phone"></i></span>
                <span data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
              </div>` : ''}
            ${p.email ? `
              <div class="sadiq-contact-row">
                <span class="sadiq-icon-navy"><i class="fa-solid fa-envelope"></i></span>
                <span data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
              </div>` : ''}
            ${p.address ? `
              <div class="sadiq-contact-row">
                <span class="sadiq-icon-navy"><i class="fa-solid fa-house"></i></span>
                <span data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
              </div>` : ''}
          </div>

          <!-- Language -->
          <div class="sadiq-sec-block">
            <div class="sadiq-pill-title">${isKh ? 'ភាសា' : 'LANGUAGE'}</div>
            <ul class="sadiq-side-bullets">
              <li>English (Fluent)</li>
              <li>Khmer (Native)</li>
            </ul>
          </div>

          <!-- Expertise -->
          <div class="sadiq-sec-block">
            <div class="sadiq-pill-title">${isKh ? 'ជំនាញឯកទេស' : 'EXPERTISE'}</div>
            <ul class="sadiq-side-bullets">
              ${(data.skills || []).map((s, idx) => `
                <li data-bind="skills.${idx}.name">${escapeHtml(s.name)}</li>
              `).join('')}
            </ul>
          </div>
        </aside>

        <!-- Right Column -->
        <main class="sadiq-right-col">
          <!-- Experience -->
          <div class="sadiq-sec-block">
            <div class="sadiq-pill-title">${isKh ? 'បទពិសោធន៍ការងារ' : 'EXPERIENCE'}</div>
            ${(data.experiences || []).map((exp, idx) => `
              <div class="sadiq-exp-item">
                <div class="sadiq-exp-role-head">
                  <strong data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</strong>
                  <span class="sadiq-exp-date" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</span>
                </div>
                <div class="sadiq-exp-comp" data-bind="experiences.${idx}.company">${escapeHtml(exp.company)}</div>
                <p class="sadiq-exp-text">${(exp.highlights && exp.highlights.length > 0) ? escapeHtml(exp.highlights[0]) : escapeHtml(exp.description || '')}</p>
              </div>
            `).join('')}
          </div>

          <!-- Education -->
          <div class="sadiq-sec-block">
            <div class="sadiq-pill-title">${isKh ? 'ការអប់រំ' : 'EDUCATION'}</div>
            ${(data.education || data.educations || []).map((edu, idx) => `
              <div class="sadiq-edu-item">
                <div class="sadiq-edu-sch" data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</div>
                <div class="sadiq-edu-deg" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</div>
                <div class="sadiq-edu-yr" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</div>
              </div>
            `).join('')}
          </div>

          <!-- Skills Summary Sliders -->
          <div class="sadiq-sec-block">
            <div class="sadiq-pill-title">${isKh ? 'កម្រិតជំនាញ' : 'SKILLS SUMMARY'}</div>
            <div class="sadiq-skill-bars">
              ${(data.skills || [{name: 'Digital Marketing', level: 78}, {name: 'Graphic Designing', level: 81}]).slice(0, 3).map((s, idx) => `
                <div class="sadiq-bar-row">
                  <span class="sadiq-bar-name" data-bind="skills.${idx}.name">${escapeHtml(s.name)}</span>
                  <div class="sadiq-bar-track">
                    <div class="sadiq-bar-fill" style="width: ${s.level || 80}%;"></div>
                  </div>
                  <span class="sadiq-bar-pct">${s.level || 80} %</span>
                </div>
              `).join('')}
            </div>
          </div>
        </main>
      </div>
    </div>
  `;
}

/* ==========================================================================
   TEMPLATE 21: BLUE WAVE DYNAMIC CURVES (Tahir Imtiaz / Software Engineer Style)
   ========================================================================== */
export function renderBlueWave(data) {
  const p = data.personalInfo || {};
  const isKh = data.language === 'kh';

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
            <img src="${p.photo || data.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400'}" alt="Avatar" class="wave-avatar-img">
          </div>

          <!-- Right Name & Title -->
          <div class="wave-name-block">
            <h1 class="wave-user-name" data-bind="personalInfo.fullName">${escapeHtml(p.fullName || 'YOUR NAME')}</h1>
            <div class="wave-job-title" data-bind="personalInfo.jobTitle">${escapeHtml(p.jobTitle || 'Software Engineer')}</div>
          </div>
        </div>
      </div>

      <!-- Main 2-Columns Body with Center Divider -->
      <div class="wave-body-container">
        <!-- Left Column -->
        <aside class="wave-left-column">
          <!-- Contact -->
          <div class="wave-sec-group">
            <div class="wave-sec-title-left">${isKh ? 'ទំនាក់ទំនង' : 'CONTACT'}</div>
            <div class="wave-contact-list">
              ${p.phone ? `
                <div class="wave-contact-pill">
                  <span class="wave-contact-icon"><i class="fa-solid fa-phone"></i></span>
                  <span class="wave-contact-text" data-bind="personalInfo.phone">${escapeHtml(p.phone)}</span>
                </div>` : ''}
              ${p.address ? `
                <div class="wave-contact-pill">
                  <span class="wave-contact-icon"><i class="fa-solid fa-location-dot"></i></span>
                  <span class="wave-contact-text" data-bind="personalInfo.address">${escapeHtml(p.address)}</span>
                </div>` : ''}
              ${p.email ? `
                <div class="wave-contact-pill">
                  <span class="wave-contact-icon"><i class="fa-solid fa-envelope"></i></span>
                  <span class="wave-contact-text" data-bind="personalInfo.email">${escapeHtml(p.email)}</span>
                </div>` : ''}
              ${p.website ? `
                <div class="wave-contact-pill">
                  <span class="wave-contact-icon"><i class="fa-solid fa-globe"></i></span>
                  <span class="wave-contact-text" data-bind="personalInfo.website">${escapeHtml(p.website)}</span>
                </div>` : ''}
            </div>
          </div>

          <!-- Skills with Cyan Bars -->
          <div class="wave-sec-group">
            <div class="wave-sec-title-left">${isKh ? 'ជំនាញ' : 'SKILLS'}</div>
            <div class="wave-bar-list">
              ${(data.skills || [
                { name: 'MS Word', level: 90 },
                { name: 'MS Excel', level: 85 },
                { name: 'Drawing', level: 70 },
                { name: 'Access', level: 75 }
              ]).map((s, idx) => `
                <div class="wave-bar-row">
                  <span class="wave-bar-label" data-bind="skills.${idx}.name">${escapeHtml(s.name)}</span>
                  <div class="wave-bar-shell">
                    <div class="wave-bar-core" style="width: ${s.level || 80}%;"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Languages with Cyan Bars -->
          <div class="wave-sec-group">
            <div class="wave-sec-title-left">${isKh ? 'ភាសា' : 'LANGUAGES'}</div>
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
            <div class="wave-sec-title-left">${isKh ? 'ចំណង់ចំណូលចិត្ត' : 'HOBBIES'}</div>
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
              <span class="wave-pill-text">${isKh ? 'អំពីខ្ញុំ' : 'ABOUT ME'}</span>
            </div>
            <p class="wave-about-para" data-bind="personalInfo.summary">${escapeHtml(p.summary || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')}</p>
          </div>

          <!-- Education -->
          <div class="wave-main-sec">
            <div class="wave-pill-heading">
              <span class="wave-target-icon"><i class="fa-regular fa-circle-dot"></i></span>
              <span class="wave-pill-text">${isKh ? 'ការអប់រំ' : 'EDUCATION'}</span>
            </div>
            <div class="wave-timeline-list">
              ${(data.education || data.educations || [
                { period: '2005-2007', degree: 'LOREM IPSUM', school: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { period: '2007-2009', degree: 'LOREM IPSUM', school: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { period: '2009-2011', degree: 'LOREM IPSUM', school: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
              ]).map((edu, idx) => `
                <div class="wave-timeline-row">
                  <div class="wave-time-col" data-bind="educations.${idx}.period">${escapeHtml(edu.period)}</div>
                  <div class="wave-detail-col">
                    <div class="wave-degree-title" data-bind="educations.${idx}.degree">${escapeHtml(edu.degree)}</div>
                    <p class="wave-detail-desc" data-bind="educations.${idx}.school">${escapeHtml(edu.school)}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Experience -->
          <div class="wave-main-sec">
            <div class="wave-pill-heading">
              <span class="wave-target-icon"><i class="fa-regular fa-circle-dot"></i></span>
              <span class="wave-pill-text">${isKh ? 'បទពិសោធន៍' : 'EXPERIENCE'}</span>
            </div>
            <div class="wave-timeline-list">
              ${(data.experiences || [
                { period: '2005-2007', role: 'LOREM IPSUM', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { period: '2007-2009', role: 'LOREM IPSUM', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
                { period: '2009-2011', role: 'LOREM IPSUM', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
              ]).map((exp, idx) => `
                <div class="wave-timeline-row">
                  <div class="wave-time-col" data-bind="experiences.${idx}.period">${escapeHtml(exp.period)}</div>
                  <div class="wave-detail-col">
                    <div class="wave-degree-title" data-bind="experiences.${idx}.role">${escapeHtml(exp.role)}</div>
                    <p class="wave-detail-desc" data-bind="experiences.${idx}.description">${escapeHtml(exp.description || (exp.highlights ? exp.highlights[0] : ''))}</p>
                  </div>
                </div>
              `).join('')}
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




