import { sampleProfiles } from './sampleData.js';
import {
  renderCharcoal,
  renderTimeline,
  renderExecutive,
  renderCambodian,
  renderInfographic,
  renderBlackGold,
  renderGeometric,
  renderCobalt,
  renderOrigami,
  renderExecutiveRight,
  renderRobertJames,
  renderJonathanPatterson,
  renderMatthewConnors,
  renderThomasSmith,
  renderStevenTerry,
  renderKhmerOfficial,
  renderThyMengleang,
  renderJamesParas,
  renderGustavoGreen,
  renderSadiqNavy,
  renderBlueWave
} from './templates.js';
import {
  paymentState,
  updateCoinBalance,
  generateBakongQR,
  startPaymentPolling,
  stopPaymentPolling,
  BAKONG_CONFIG
} from './payment.js';

// Application State
const state = {
  activeTemplate: 'charcoal',
  directEditMode: false,
  zoomLevel: 100,
  data: JSON.parse(JSON.stringify(sampleProfiles.cambodian))
};

// Template Render Registry
const templateRenderers = {
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

// Deep getter/setter for nested object paths (e.g. "personalInfo.fullName", "experiences.0.role")
function getNestedValue(obj, path) {
  const parts = path.split('.');
  let current = obj;
  for (const part of parts) {
    if (current === undefined || current === null) return undefined;
    current = current[part];
  }
  return current;
}

function setNestedValue(obj, path, value) {
  const parts = path.split('.');
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

// Toast Notifications Helper
function showToast(message, icon = 'fa-check') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid ${icon}" style="color: #3b82f6;"></i> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Render the active CV template onto the canvas
function renderCanvas() {
  const container = document.getElementById('resume-canvas-container');
  if (!container) return;
  const renderer = templateRenderers[state.activeTemplate] || renderCharcoal;
  try {
    container.innerHTML = renderer(state.data);
  } catch (err) {
    console.error('Error rendering template:', state.activeTemplate, err);
    container.innerHTML = renderCharcoal(state.data);
  }

  // Apply contenteditable if direct-editing mode is turned on
  const editableElements = container.querySelectorAll('[data-bind]');
  editableElements.forEach(el => {
    el.setAttribute('contenteditable', state.directEditMode ? 'true' : 'false');

    // Attach inline editing listeners
    el.addEventListener('input', (e) => {
      const bindPath = el.getAttribute('data-bind');
      const text = el.innerText.trim();
      setNestedValue(state.data, bindPath, text);
      syncFormDataToUI();
    });
  });
}

// Sync State Data into the Left Form Fields
function syncStateToForm() {
  // 1. Personal Info
  const p = state.data.personalInfo || {};
  document.getElementById('input-fullname').value = p.fullName || '';
  document.getElementById('input-jobtitle').value = p.jobTitle || '';
  document.getElementById('input-phone').value = p.phone || '';
  document.getElementById('input-email').value = p.email || '';
  document.getElementById('input-telegram').value = p.telegram || '';
  document.getElementById('input-linkedin').value = p.linkedin || '';
  document.getElementById('input-sex').value = p.sex || '';
  document.getElementById('input-nationality').value = p.nationality || '';
  document.getElementById('input-dob').value = p.dob || '';
  document.getElementById('input-pob').value = p.pob || '';
  document.getElementById('input-address').value = p.address || '';
  document.getElementById('input-summary').value = p.summary || '';
  
  if (state.data.photo) {
    document.getElementById('form-photo-thumb').src = state.data.photo;
  }
  if (state.data.photoBg) {
    document.getElementById('input-photo-bg').value = state.data.photoBg;
  }

  // 2. Language Selector
  document.getElementById('select-language').value = state.data.language || 'kh';

  // 3. Dynamic Lists
  renderExperienceFormItems();
  renderEducationFormItems();
  renderSkillsFormItems();
  renderLanguagesFormItems();
  renderReferencesFormItems();

  // Preferences
  const prefInput = document.getElementById('input-preferences');
  if (prefInput && state.data.preferences) {
    prefInput.value = state.data.preferences.join(', ');
  }
}

// Light sync when typing directly on canvas
function syncFormDataToUI() {
  const p = state.data.personalInfo || {};
  const nameInput = document.getElementById('input-fullname');
  if (nameInput && document.activeElement !== nameInput) nameInput.value = p.fullName || '';
}

/* ==========================================================================
   DYNAMIC FORM LIST RENDERERS (Experience, Education, Skills, Languages, etc)
   ========================================================================== */

function renderExperienceFormItems() {
  const container = document.getElementById('experience-items-container');
  container.innerHTML = '';
  (state.data.experiences || []).forEach((exp, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="item-card-header">
        <span class="item-card-title">បទពិសោធន៍ #${idx + 1}</span>
        <button class="btn-icon-danger btn-remove-exp" data-index="${idx}" title="លុបចោល"><i class="fa-solid fa-trash"></i></button>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">តួនាទី (Role / Position)</label>
          <input type="text" class="form-input exp-role" data-idx="${idx}" value="${exp.role || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">ក្រុមហ៊ុន / ស្ថាប័ន (Company)</label>
          <input type="text" class="form-input exp-company" data-idx="${idx}" value="${exp.company || ''}">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">កាលបរិច្ឆេទ (Period)</label>
          <input type="text" class="form-input exp-period" data-idx="${idx}" value="${exp.period || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">ទីតាំង (Location)</label>
          <input type="text" class="form-input exp-location" data-idx="${idx}" value="${exp.location || ''}">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">ចំណុចការងារសំខាន់ៗ (Highlights - មួយបន្ទាត់មួយចំណុច)</label>
        <textarea class="form-textarea exp-highlights" data-idx="${idx}">${(exp.highlights || []).join('\n')}</textarea>
      </div>
    `;
    container.appendChild(card);
  });

  // Attach input listeners
  container.querySelectorAll('.exp-role').forEach(input => {
    input.addEventListener('input', (e) => {
      state.data.experiences[e.target.dataset.idx].role = e.target.value;
      renderCanvas();
    });
  });
  container.querySelectorAll('.exp-company').forEach(input => {
    input.addEventListener('input', (e) => {
      state.data.experiences[e.target.dataset.idx].company = e.target.value;
      renderCanvas();
    });
  });
  container.querySelectorAll('.exp-period').forEach(input => {
    input.addEventListener('input', (e) => {
      state.data.experiences[e.target.dataset.idx].period = e.target.value;
      renderCanvas();
    });
  });
  container.querySelectorAll('.exp-location').forEach(input => {
    input.addEventListener('input', (e) => {
      state.data.experiences[e.target.dataset.idx].location = e.target.value;
      renderCanvas();
    });
  });
  container.querySelectorAll('.exp-highlights').forEach(input => {
    input.addEventListener('input', (e) => {
      state.data.experiences[e.target.dataset.idx].highlights = e.target.value.split('\n').filter(s => s.trim().length > 0);
      renderCanvas();
    });
  });
  container.querySelectorAll('.btn-remove-exp').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(btn.dataset.index, 10);
      state.data.experiences.splice(idx, 1);
      renderExperienceFormItems();
      renderCanvas();
    });
  });
}

function renderEducationFormItems() {
  const container = document.getElementById('education-items-container');
  container.innerHTML = '';
  (state.data.education || []).forEach((edu, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="item-card-header">
        <span class="item-card-title">ការអប់រំ #${idx + 1}</span>
        <button class="btn-icon-danger btn-remove-edu" data-index="${idx}" title="លុបចោល"><i class="fa-solid fa-trash"></i></button>
      </div>
      <div class="form-group">
        <label class="form-label">សញ្ញាបត្រ / កម្រិត (Degree / Certificate)</label>
        <input type="text" class="form-input edu-degree" data-idx="${idx}" value="${edu.degree || ''}">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">សាលា / សាកលវិទ្យាល័យ (School / University)</label>
          <input type="text" class="form-input edu-school" data-idx="${idx}" value="${edu.school || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">ឆ្នាំសិក្សា (Period)</label>
          <input type="text" class="form-input edu-period" data-idx="${idx}" value="${edu.period || ''}">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">ការពិពណ៌នាបន្ថែម (Description / GPA)</label>
        <input type="text" class="form-input edu-desc" data-idx="${idx}" value="${edu.description || ''}">
      </div>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll('.edu-degree').forEach(input => {
    input.addEventListener('input', (e) => {
      state.data.education[e.target.dataset.idx].degree = e.target.value;
      renderCanvas();
    });
  });
  container.querySelectorAll('.edu-school').forEach(input => {
    input.addEventListener('input', (e) => {
      state.data.education[e.target.dataset.idx].school = e.target.value;
      renderCanvas();
    });
  });
  container.querySelectorAll('.edu-period').forEach(input => {
    input.addEventListener('input', (e) => {
      state.data.education[e.target.dataset.idx].period = e.target.value;
      renderCanvas();
    });
  });
  container.querySelectorAll('.edu-desc').forEach(input => {
    input.addEventListener('input', (e) => {
      state.data.education[e.target.dataset.idx].description = e.target.value;
      renderCanvas();
    });
  });
  container.querySelectorAll('.btn-remove-edu').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(btn.dataset.index, 10);
      state.data.education.splice(idx, 1);
      renderEducationFormItems();
      renderCanvas();
    });
  });
}

function renderSkillsFormItems() {
  const container = document.getElementById('skills-items-container');
  container.innerHTML = '';
  (state.data.skills || []).forEach((skill, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.style.padding = '10px 14px';
    card.innerHTML = `
      <div style="display: flex; gap: 10px; align-items: center;">
        <input type="text" class="form-input skill-name" data-idx="${idx}" value="${skill.name || ''}" placeholder="ឈ្មោះជំនាញ (Skill Name)" style="flex: 2;">
        <input type="number" min="10" max="100" class="form-input skill-level" data-idx="${idx}" value="${skill.level || 85}" style="width: 70px;" placeholder="%">
        <button class="btn-icon-danger btn-remove-skill" data-index="${idx}" title="លុប"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll('.skill-name').forEach(input => {
    input.addEventListener('input', (e) => {
      state.data.skills[e.target.dataset.idx].name = e.target.value;
      renderCanvas();
    });
  });
  container.querySelectorAll('.skill-level').forEach(input => {
    input.addEventListener('input', (e) => {
      state.data.skills[e.target.dataset.idx].level = parseInt(e.target.value || 0, 10);
      renderCanvas();
    });
  });
  container.querySelectorAll('.btn-remove-skill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(btn.dataset.index, 10);
      state.data.skills.splice(idx, 1);
      renderSkillsFormItems();
      renderCanvas();
    });
  });
}

function renderLanguagesFormItems() {
  const container = document.getElementById('languages-items-container');
  container.innerHTML = '';
  (state.data.languages || []).forEach((lang, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.style.padding = '10px 14px';
    card.innerHTML = `
      <div style="display: flex; gap: 10px; align-items: center;">
        <input type="text" class="form-input lang-name" data-idx="${idx}" value="${lang.name || ''}" placeholder="ភាសា (Language)" style="flex: 1;">
        <input type="text" class="form-input lang-level" data-idx="${idx}" value="${lang.level || ''}" placeholder="កម្រិត (Level / Fluent)" style="flex: 1;">
        <button class="btn-icon-danger btn-remove-lang" data-index="${idx}" title="លុប"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll('.lang-name').forEach(input => {
    input.addEventListener('input', (e) => {
      state.data.languages[e.target.dataset.idx].name = e.target.value;
      renderCanvas();
    });
  });
  container.querySelectorAll('.lang-level').forEach(input => {
    input.addEventListener('input', (e) => {
      state.data.languages[e.target.dataset.idx].level = e.target.value;
      renderCanvas();
    });
  });
  container.querySelectorAll('.btn-remove-lang').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(btn.dataset.index, 10);
      state.data.languages.splice(idx, 1);
      renderLanguagesFormItems();
      renderCanvas();
    });
  });
}

function renderReferencesFormItems() {
  const container = document.getElementById('references-items-container');
  container.innerHTML = '';
  (state.data.references || []).forEach((ref, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="item-card-header">
        <span class="item-card-title">បុគ្គលធានា #${idx + 1}</span>
        <button class="btn-icon-danger btn-remove-ref" data-index="${idx}" title="លុប"><i class="fa-solid fa-trash"></i></button>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">ឈ្មោះ (Name)</label>
          <input type="text" class="form-input ref-name" data-idx="${idx}" value="${ref.name || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">មុខតំណែង & ស្ថាប័ន (Role & Company)</label>
          <input type="text" class="form-input ref-role" data-idx="${idx}" value="${ref.role || ''}">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">ព័ត៌មានទំនាក់ទំនង (Contact Details)</label>
        <input type="text" class="form-input ref-contact" data-idx="${idx}" value="${ref.contact || ''}">
      </div>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll('.ref-name').forEach(input => {
    input.addEventListener('input', (e) => {
      state.data.references[e.target.dataset.idx].name = e.target.value;
      renderCanvas();
    });
  });
  container.querySelectorAll('.ref-role').forEach(input => {
    input.addEventListener('input', (e) => {
      state.data.references[e.target.dataset.idx].role = e.target.value;
      renderCanvas();
    });
  });
  container.querySelectorAll('.ref-contact').forEach(input => {
    input.addEventListener('input', (e) => {
      state.data.references[e.target.dataset.idx].contact = e.target.value;
      renderCanvas();
    });
  });
  container.querySelectorAll('.btn-remove-ref').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(btn.dataset.index, 10);
      state.data.references.splice(idx, 1);
      renderReferencesFormItems();
      renderCanvas();
    });
  });
}

/* ==========================================================================
   EVENT LISTENERS & APP INITIALIZATION
   ========================================================================== */

function initApp() {

  // 1. Tab Switching
  const navTabs = document.querySelectorAll('.nav-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      navTabs.forEach(t => t.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const targetId = tab.getAttribute('data-tab');
      document.getElementById(targetId)?.classList.add('active');
    });
  });

  // 2. Template Selection Cards
  const templateCards = document.querySelectorAll('.template-card');
  templateCards.forEach(card => {
    card.addEventListener('click', () => {
      templateCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      state.activeTemplate = card.getAttribute('data-template');
      renderCanvas();
      showToast(`បានប្តូរទៅ Template: ${card.querySelector('.template-title').innerText}`);
    });
  });

  // 3. Direct Edit on Paper Mode Toggle
  const toggleEditBtn = document.getElementById('btn-toggle-edit-mode');
  const editModeLabel = document.getElementById('edit-mode-label');
  const canvasModeBadge = document.getElementById('canvas-mode-badge');

  toggleEditBtn.addEventListener('click', () => {
    state.directEditMode = !state.directEditMode;
    if (state.directEditMode) {
      toggleEditBtn.className = 'btn btn-success';
      editModeLabel.innerText = 'ចុចសរសេរផ្ទាល់លើក្រដាស: បើក';
      canvasModeBadge.className = 'mode-badge direct-active';
      canvasModeBadge.innerHTML = '<i class="fa-solid fa-pen-nib"></i> Direct Edit Mode (អាចចុចសរសេរផ្ទាល់បាន)';
      showToast('របៀបសរសេរផ្ទាល់លើក្រដាស A4 ត្រូវបានបើកដំណើរការ! ចុចលើអត្ថបទដើម្បីកែសម្រួល');
    } else {
      toggleEditBtn.className = 'btn btn-secondary';
      editModeLabel.innerText = 'ចុចសរសេរផ្ទាល់លើក្រដាស: បិទ';
      canvasModeBadge.className = 'mode-badge';
      canvasModeBadge.innerHTML = '<i class="fa-solid fa-eye"></i> Form Sync Preview';
      showToast('បានប្តូរមកកាន់របៀប Form View');
    }
    renderCanvas();
  });

  // 4. Language Selector
  document.getElementById('select-language').addEventListener('change', (e) => {
    state.data.language = e.target.value;
    renderCanvas();
  });

  // 5. Sample Profile Loader
  document.getElementById('select-sample-profile').addEventListener('change', (e) => {
    const val = e.target.value;
    if (val && sampleProfiles[val]) {
      state.data = JSON.parse(JSON.stringify(sampleProfiles[val]));
      state.activeTemplate = state.data.templateId || 'cambodian';

      // Update active template card
      templateCards.forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-template') === state.activeTemplate);
      });

      syncStateToForm();
      renderCanvas();
      showToast('បានទាញយកទិន្នន័យគំរូដោយជោគជ័យ!');
    }
    e.target.value = '';
  });

  // 6. Form Input Real-time Binding
  document.querySelectorAll('[data-model]').forEach(input => {
    input.addEventListener('input', (e) => {
      const modelPath = e.target.getAttribute('data-model');
      setNestedValue(state.data, modelPath, e.target.value);
      renderCanvas();
    });
  });

  // Preferences Input
  document.getElementById('input-preferences').addEventListener('input', (e) => {
    state.data.preferences = e.target.value.split(',').map(s => s.trim()).filter(s => s.length > 0);
    renderCanvas();
  });

  // 7. Profile Photo Uploader
  const avatarInput = document.getElementById('input-avatar-file');
  avatarInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvt) => {
        state.data.photo = loadEvt.target.result;
        document.getElementById('form-photo-thumb').src = state.data.photo;
        renderCanvas();
        showToast('បានប្តូររូបថត Profile ដោយជោគជ័យ!');
      };
      reader.readAsDataURL(file);
    }
  });

  // Photo background color picker
  document.getElementById('input-photo-bg').addEventListener('input', (e) => {
    state.data.photoBg = e.target.value;
    renderCanvas();
  });

  // 8. Add Item Buttons
  document.getElementById('btn-add-experience').addEventListener('click', () => {
    if (!state.data.experiences) state.data.experiences = [];
    state.data.experiences.push({
      role: 'មុខតំណែងថ្មី (New Role)',
      company: 'ឈ្មោះក្រុមហ៊ុន (Company Name)',
      location: 'ភ្នំពេញ (Phnom Penh)',
      period: '2023 - Present',
      highlights: ['ពិពណ៌នាការងារសំខាន់ៗនៅទីនេះ...']
    });
    renderExperienceFormItems();
    renderCanvas();
  });

  document.getElementById('btn-add-education').addEventListener('click', () => {
    if (!state.data.education) state.data.education = [];
    state.data.education.push({
      degree: 'បរិញ្ញាបត្រថ្មី (New Degree)',
      school: 'សាកលវិទ្យាល័យ / សាលា',
      period: '2020 - 2024',
      description: 'ការពិពណ៌នា ឬ GPA...'
    });
    renderEducationFormItems();
    renderCanvas();
  });

  document.getElementById('btn-add-skill').addEventListener('click', () => {
    if (!state.data.skills) state.data.skills = [];
    state.data.skills.push({ name: 'ជំនាញថ្មី (New Skill)', level: 80 });
    renderSkillsFormItems();
    renderCanvas();
  });

  document.getElementById('btn-add-language').addEventListener('click', () => {
    if (!state.data.languages) state.data.languages = [];
    state.data.languages.push({ name: 'ភាសាថ្មី (New Language)', level: 'Fluent', percent: 80 });
    renderLanguagesFormItems();
    renderCanvas();
  });

  document.getElementById('btn-add-reference').addEventListener('click', () => {
    if (!state.data.references) state.data.references = [];
    state.data.references.push({
      name: 'ឈ្មោះបុគ្គលធានា (Reference Name)',
      role: 'មុខតំណែង & ក្រុមហ៊ុន',
      contact: 'Phone: 012 345 678 | Email: example@gmail.com'
    });
    renderReferencesFormItems();
    renderCanvas();
  });

  // 9. Zoom Controls (Smart A4 Fit)
  const wrapper = document.getElementById('resume-page-wrapper');
  const zoomText = document.getElementById('zoom-value-text');

  const updateZoom = (newZoom) => {
    state.zoomLevel = Math.min(Math.max(newZoom, 50), 150);
    zoomText.innerText = `${state.zoomLevel}%`;
    wrapper.style.transform = `scale(${state.zoomLevel / 100})`;
  };

  const autoFitZoom = () => {
    const canvasEl = document.getElementById('main-canvas');
    if (canvasEl) {
      const availH = canvasEl.clientHeight - 130;
      const a4H = 1122.5; // 297mm height in 96dpi pixels
      const bestScale = Math.min(Math.max(Math.round((availH / a4H) * 100), 55), 100);
      updateZoom(bestScale);
    } else {
      updateZoom(75);
    }
  };

  document.getElementById('btn-zoom-in').addEventListener('click', () => updateZoom(state.zoomLevel + 5));
  document.getElementById('btn-zoom-out').addEventListener('click', () => updateZoom(state.zoomLevel - 5));
  document.getElementById('btn-zoom-reset').addEventListener('click', () => updateZoom(100));
  const fitBtn = document.getElementById('btn-zoom-fit');
  if (fitBtn) {
    fitBtn.addEventListener('click', autoFitZoom);
  }
  window.addEventListener('resize', () => {
    // optional auto-adjust if at fit zoom
  });

  // 10. Bakong KHQR Payment Modal & Packages Logic
  const paymentModal = document.getElementById('modal-bakong-payment');
  const closePaymentModalBtn = document.getElementById('btn-close-payment-modal');
  const openTopupBtn = document.getElementById('btn-open-topup');
  const packageCards = document.querySelectorAll('.coin-pkg-card');

  let selectedCoins = 10;
  let selectedAmount = 0.10;

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  async function loadBakongQR(amount, coins) {
    const qrImg = document.getElementById('khqr-img-element');
    const spinner = document.getElementById('qr-loading-spinner');
    const amountDisplay = document.getElementById('khqr-amount-display');
    const billNumberEl = document.getElementById('khqr-bill-number');
    const deeplinkBtn = document.getElementById('khqr-deeplink-btn');
    const statusText = document.getElementById('qr-payment-status-text');
    const timerEl = document.getElementById('qr-countdown-timer');

    qrImg.style.display = 'none';
    spinner.style.display = 'block';
    amountDisplay.innerText = `$${amount.toFixed(2)} USD`;
    statusText.innerHTML = `<div class="pulse-dot"></div><span>កំពុងរង់ចាំការស្កេនទូទាត់ប្រាក់ (Auto Check)...</span>`;

    try {
      const qrData = await generateBakongQR(amount);
      qrImg.src = qrData.link_qr_code;
      qrImg.onload = () => {
        spinner.style.display = 'none';
        qrImg.style.display = 'inline-block';
      };

      billNumberEl.innerText = `Bill: ${qrData.bill_number}`;
      if (qrData.deeplink_by_qr) {
        deeplinkBtn.href = qrData.deeplink_by_qr;
        deeplinkBtn.style.display = 'inline-flex';
      } else {
        deeplinkBtn.style.display = 'none';
      }

      // Countdown 5 minutes (300s)
      let timeLeft = 300;
      timerEl.innerText = formatTime(timeLeft);
      if (paymentState.currentTimerInterval) clearInterval(paymentState.currentTimerInterval);
      paymentState.currentTimerInterval = setInterval(() => {
        timeLeft--;
        timerEl.innerText = formatTime(timeLeft);
        if (timeLeft <= 0) {
          clearInterval(paymentState.currentTimerInterval);
          stopPaymentPolling();
          statusText.innerHTML = `<span style="color: #ef4444;"><i class="fa-solid fa-clock"></i> QR Code បានផុតកំណត់ហើយ</span>`;
        }
      }, 1000);

      // Start live status polling
      startPaymentPolling(qrData.md5, coins, (successRes) => {
        paymentModal.classList.remove('active');
        showToast(`🎉 អបអរសាទរ! បានទូទាត់ប្រាក់ជោគជ័យ! ទទួលបាន ${coins} កាក់ (Coins)`, 'fa-circle-check');

        // Check if there was a pending export action
        if (paymentState.pendingActionAfterPay === 'pdf') {
          paymentState.pendingActionAfterPay = null;
          setTimeout(() => executePdfExport(), 500);
        } else if (paymentState.pendingActionAfterPay === 'png') {
          paymentState.pendingActionAfterPay = null;
          setTimeout(() => executePngExport(), 500);
        }
      });

    } catch (err) {
      spinner.style.display = 'none';
      statusText.innerHTML = `<span style="color: #ef4444;">មិនអាចបង្កើត QR Code បានទេ: ${err.message}</span>`;
    }
  }

  function openPaymentModal(initialAction = null) {
    paymentState.pendingActionAfterPay = initialAction;
    paymentModal.classList.add('active');
    loadBakongQR(selectedAmount, selectedCoins);
  }

  function closePaymentModal() {
    paymentModal.classList.remove('active');
    stopPaymentPolling();
  }

  openTopupBtn.addEventListener('click', () => openPaymentModal(null));
  closePaymentModalBtn.addEventListener('click', closePaymentModal);
  paymentModal.addEventListener('click', (e) => {
    if (e.target === paymentModal) closePaymentModal();
  });

  packageCards.forEach(card => {
    card.addEventListener('click', () => {
      packageCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectedCoins = parseInt(card.dataset.coins, 10);
      selectedAmount = parseFloat(card.dataset.amount);
      loadBakongQR(selectedAmount, selectedCoins);
    });
  });

  // 11. PDF Export with Coin Guard
  function executePdfExport() {
    if (paymentState.coins < BAKONG_CONFIG.costPerExport) {
      showToast(`⚠️ អ្នកត្រូវការ ${BAKONG_CONFIG.costPerExport} កាក់ដើម្បី Export PDF`, 'fa-circle-exclamation');
      openPaymentModal('pdf');
      return;
    }

    // Deduct coins
    updateCoinBalance(-BAKONG_CONFIG.costPerExport);
    showToast(`✅ បានកាត់ ${BAKONG_CONFIG.costPerExport} កាក់! កំពុងបើកផ្ទាំង Print PDF...`, 'fa-coins');

    const prevZoom = state.zoomLevel;
    updateZoom(100);
    setTimeout(() => {
      window.print();
      updateZoom(prevZoom);
    }, 200);
  }

  document.getElementById('btn-print-pdf').addEventListener('click', () => {
    executePdfExport();
  });

  // 12. PNG Export with Coin Guard & html2canvas
  function executePngExport() {
    if (paymentState.coins < BAKONG_CONFIG.costPerExport) {
      showToast(`⚠️ អ្នកត្រូវការ ${BAKONG_CONFIG.costPerExport} កាក់ដើម្បី Export PNG`, 'fa-circle-exclamation');
      openPaymentModal('png');
      return;
    }

    const canvasTarget = document.getElementById('resume-canvas-body');
    if (!canvasTarget) {
      showToast('រកមិនឃើញក្រដាស CV ទេ!', 'fa-triangle-exclamation');
      return;
    }

    // Deduct coins
    updateCoinBalance(-BAKONG_CONFIG.costPerExport);
    showToast(`✅ បានកាត់ ${BAKONG_CONFIG.costPerExport} កាក់! កំពុងបង្កើតរូបភាព PNG...`, 'fa-image');

    const prevZoom = state.zoomLevel;
    updateZoom(100);

    setTimeout(() => {
      if (typeof html2canvas !== 'undefined') {
        html2canvas(canvasTarget, {
          scale: 2, // High resolution (2x retina)
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff'
        }).then(canvas => {
          updateZoom(prevZoom);
          const link = document.createElement('a');
          const fileName = `CV_${(state.data.personalInfo?.fullName || 'resume').replace(/\s+/g, '_')}.png`;
          link.download = fileName;
          link.href = canvas.toDataURL('image/png');
          document.body.appendChild(link);
          link.click();
          link.remove();
          showToast('🎉 ទាញយករូបភាព PNG បានដោយជោគជ័យ!', 'fa-circle-check');
        }).catch(err => {
          updateZoom(prevZoom);
          console.error(err);
          showToast('មានបញ្ហាក្នុងការបង្កើត PNG!', 'fa-circle-xmark');
        });
      } else {
        updateZoom(prevZoom);
        alert('html2canvas library is not loaded!');
      }
    }, 250);
  }

  document.getElementById('btn-export-png').addEventListener('click', () => {
    executePngExport();
  });

  // 13. JSON Export & Import
  document.getElementById('btn-export-json').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.data, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `resume_${(state.data.personalInfo?.fullName || 'cv').replace(/\s+/g, '_')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('បានទាញយកឯកសារ Backup JSON ដោយជោគជ័យ!');
  });

  document.getElementById('input-import-json').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvt) => {
        try {
          const imported = JSON.parse(loadEvt.target.result);
          state.data = imported;
          if (imported.templateId) state.activeTemplate = imported.templateId;
          templateCards.forEach(c => {
            c.classList.toggle('active', c.getAttribute('data-template') === state.activeTemplate);
          });
          syncStateToForm();
          renderCanvas();
          showToast('បានបញ្ចូលទិន្នន័យពី JSON ដោយជោគជ័យ!');
        } catch (err) {
          alert('ឯកសារ JSON មិនត្រឹមត្រូវទេ!');
        }
      };
      reader.readAsText(file);
    }
  });

  // Initial Boot
  updateCoinBalance(0); // sync initial coins
  syncStateToForm();
  renderCanvas();
  setTimeout(autoFitZoom, 150);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
