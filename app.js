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

// UI Localization Dictionary
const UI_TRANSLATIONS = {
  kh: {
    brandSubtitle: 'កម្មវិធីបង្កើត និងរចនា CV អាជីព',
    editModeOn: 'សរសេរលើក្រដាស: បើក',
    editModeOff: 'សរសេរលើក្រដាស: បិទ',
    sampleProfileDefault: '📂 គំរូទិន្នន័យ',
    sampleProfileKh: '🇰🇭 CV កម្ពុជា',
    sampleProfileEn: '🇬🇧 CV អន្តរជាតិ',
    btnExportPng: 'ទាញយក PNG <small style="color: #fbbf24; font-weight: bold;">(10🪙)</small>',
    btnPrintPdf: 'ទាញយក PDF <small style="color: #fbbf24; font-weight: bold;">(10🪙)</small>',
    tabTemplates: '<i class="fa-solid fa-palette"></i> ស្ទីល CV',
    tabPersonal: '<i class="fa-solid fa-user"></i> ព័ត៌មាន',
    tabExperience: '<i class="fa-solid fa-briefcase"></i> បទពិសោធន៍',
    tabEducation: '<i class="fa-solid fa-graduation-cap"></i> ការសិក្សា',
    tabSkills: '<i class="fa-solid fa-star"></i> ជំនាញ/ភាសា',
    tabExtras: '<i class="fa-solid fa-award"></i> ផ្សេងៗ',
    templateHint: 'ជ្រើសរើសទម្រង់ Template ទាំង ២០ (20 Pro Templates) ដែលសមស្របបំផុតសម្រាប់អ្នក',
    uploadPhotoBtn: '<i class="fa-solid fa-camera"></i> ប្តូររូបភាព (Upload Photo)',
    photoBgLabel: 'ពណ៌ផ្ទៃក្រោយរូប:',
    labelFullName: 'ឈ្មោះពេញ (Full Name)',
    labelJobTitle: 'មុខតំណែង / អាជីព (Job Title)',
    labelPhone: 'លេខទូរស័ព្ទ (Phone Number)',
    labelEmail: 'Email',
    labelTelegram: 'Telegram',
    labelLinkedin: 'LinkedIn / Portfolio Link',
    labelSex: 'ភេទ (Sex)',
    labelNationality: 'សញ្ជាតិ (Nationality)',
    labelDob: 'ថ្ងៃខែឆ្នាំកំណើត (Date of Birth)',
    labelPob: 'ទីកន្លែងកំណើត (Place of Birth)',
    labelAddress: 'អាសយដ្ឋានបច្ចុប្បន្ន (Current Address)',
    labelSummary: 'គោលបំណង ឬសេចក្តីសង្ខេប (Summary / Objective)',
    placeholderSummary: 'សរសេរពិពណ៌នាអំពីគោលដៅការងារ និងចំណុចខ្លាំងរបស់អ្នក...',
    btnAddExp: '<i class="fa-solid fa-plus"></i> បន្ថែមបទពិសោធន៍ការងារ (Add Experience)',
    btnAddEdu: '<i class="fa-solid fa-plus"></i> បន្ថែមប្រវត្តិការសិក្សា (Add Education)',
    skillsSectionTitle: 'ជំនាញបច្ចេកទេស & ទន់ (Skills)',
    btnAddSkill: '<i class="fa-solid fa-plus"></i> បន្ថែមជំនាញ (Add Skill)',
    langsSectionTitle: 'ភាសាបរទេស (Languages)',
    btnAddLang: '<i class="fa-solid fa-plus"></i> បន្ថែមភាសា (Add Language)',
    refsSectionTitle: 'បុគ្គលធានា (References)',
    btnAddRef: '<i class="fa-solid fa-plus"></i> បន្ថែមបុគ្គលធានា (Add Reference)',
    prefSectionTitle: 'ចំណង់ចំណូលចិត្ត (Preferences / Hobbies)',
    labelPreferences: 'បញ្ចូលចំណង់ចំណូលចិត្ត (បំបែកដោយសញ្ញាក្បៀស , )',
    placeholderPreferences: 'បាល់ទាត់, តន្ត្រី, ការអាន...',
    canvasPreviewBadge: '<i class="fa-solid fa-eye"></i> Form Sync Preview',
    canvasDirectBadge: '<i class="fa-solid fa-pen-nib"></i> Direct Edit Mode (អាចចុចសរសេរផ្ទាល់បាន)',
    mobileLabelEditor: 'កែទម្រង់ (Editor)',
    mobileLabelPreview: 'មើល CV (Preview)',
    mobileLabelExport: 'ទាញយក (Export)',
    toastSwitchedLang: 'បានប្តូរភាសាទៅជា ភាសាខ្មែរ (Khmer)',
    toastDirectEditOn: 'របៀបសរសេរផ្ទាល់លើក្រដាស A4 ត្រូវបានបើកដំណើរការ! ចុចលើអត្ថបទដើម្បីកែសម្រួល',
    toastDirectEditOff: 'បានប្តូរមកកាន់របៀប Form View',
    toastSampleLoaded: 'បានទាញយកទិន្នន័យគំរូដោយជោគជ័យ!',
    toastPhotoUpdated: 'បានប្តូររូបថត Profile ដោយជោគជ័យ!',
    toastJsonSaved: 'បានទាញយកឯកសារ Backup JSON ដោយជោគជ័យ!',
    toastJsonImported: 'បានបញ្ចូលទិន្នន័យពី JSON ដោយជោគជ័យ!'
  },
  en: {
    brandSubtitle: 'Professional CV Maker & Designer',
    editModeOn: 'Direct Edit: ON',
    editModeOff: 'Direct Edit: OFF',
    sampleProfileDefault: '📂 Sample Profiles',
    sampleProfileKh: '🇰🇭 Cambodian CV',
    sampleProfileEn: '🇬🇧 International CV',
    btnExportPng: 'Download PNG <small style="color: #fbbf24; font-weight: bold;">(10🪙)</small>',
    btnPrintPdf: 'Download PDF <small style="color: #fbbf24; font-weight: bold;">(10🪙)</small>',
    tabTemplates: '<i class="fa-solid fa-palette"></i> Templates',
    tabPersonal: '<i class="fa-solid fa-user"></i> Personal',
    tabExperience: '<i class="fa-solid fa-briefcase"></i> Experience',
    tabEducation: '<i class="fa-solid fa-graduation-cap"></i> Education',
    tabSkills: '<i class="fa-solid fa-star"></i> Skills/Langs',
    tabExtras: '<i class="fa-solid fa-award"></i> Extras',
    templateHint: 'Choose from 20 Pro Templates best suited for your career',
    uploadPhotoBtn: '<i class="fa-solid fa-camera"></i> Upload Photo',
    photoBgLabel: 'Photo Background:',
    labelFullName: 'Full Name',
    labelJobTitle: 'Job Title / Profession',
    labelPhone: 'Phone Number',
    labelEmail: 'Email Address',
    labelTelegram: 'Telegram',
    labelLinkedin: 'LinkedIn / Portfolio Link',
    labelSex: 'Gender / Sex',
    labelNationality: 'Nationality',
    labelDob: 'Date of Birth',
    labelPob: 'Place of Birth',
    labelAddress: 'Current Address',
    labelSummary: 'Professional Summary / Objective',
    placeholderSummary: 'Briefly describe your career background and key strengths...',
    btnAddExp: '<i class="fa-solid fa-plus"></i> Add Work Experience',
    btnAddEdu: '<i class="fa-solid fa-plus"></i> Add Education',
    skillsSectionTitle: 'Technical & Soft Skills',
    btnAddSkill: '<i class="fa-solid fa-plus"></i> Add Skill',
    langsSectionTitle: 'Languages',
    btnAddLang: '<i class="fa-solid fa-plus"></i> Add Language',
    refsSectionTitle: 'References',
    btnAddRef: '<i class="fa-solid fa-plus"></i> Add Reference',
    prefSectionTitle: 'Interests & Hobbies',
    labelPreferences: 'Interests & Hobbies (comma-separated)',
    placeholderPreferences: 'Football, Music, Reading books, Travel...',
    canvasPreviewBadge: '<i class="fa-solid fa-eye"></i> Form Sync Preview',
    canvasDirectBadge: '<i class="fa-solid fa-pen-nib"></i> Direct Edit Mode (Click to type)',
    mobileLabelEditor: 'Editor (Form)',
    mobileLabelPreview: 'Preview (CV)',
    mobileLabelExport: 'Export (Download)',
    toastSwitchedLang: 'Switched language to English (🇬🇧)',
    toastDirectEditOn: 'Direct edit mode activated! Click on canvas text to edit.',
    toastDirectEditOff: 'Switched back to Form View mode.',
    toastSampleLoaded: 'Sample profile loaded successfully!',
    toastPhotoUpdated: 'Profile photo updated successfully!',
    toastJsonSaved: 'JSON backup file downloaded successfully!',
    toastJsonImported: 'Data restored from JSON successfully!'
  }
};

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
  const elFullName = document.getElementById('input-fullname');
  if (elFullName) elFullName.value = p.fullName || '';
  const elJobTitle = document.getElementById('input-jobtitle');
  if (elJobTitle) elJobTitle.value = p.jobTitle || '';
  const elPhone = document.getElementById('input-phone');
  if (elPhone) elPhone.value = p.phone || '';
  const elEmail = document.getElementById('input-email');
  if (elEmail) elEmail.value = p.email || '';
  const elTelegram = document.getElementById('input-telegram');
  if (elTelegram) elTelegram.value = p.telegram || '';
  const elLinkedin = document.getElementById('input-linkedin');
  if (elLinkedin) elLinkedin.value = p.linkedin || '';
  const elSex = document.getElementById('input-sex');
  if (elSex) elSex.value = p.sex || '';
  const elNationality = document.getElementById('input-nationality');
  if (elNationality) elNationality.value = p.nationality || '';
  const elDob = document.getElementById('input-dob');
  if (elDob) elDob.value = p.dob || '';
  const elPob = document.getElementById('input-pob');
  if (elPob) elPob.value = p.pob || '';
  const elAddress = document.getElementById('input-address');
  if (elAddress) elAddress.value = p.address || '';
  const elSummary = document.getElementById('input-summary');
  if (elSummary) elSummary.value = p.summary || '';
  
  if (state.data.photo) {
    const thumb = document.getElementById('form-photo-thumb');
    if (thumb) thumb.src = state.data.photo;
  }
  if (state.data.photoBg) {
    const bgInp = document.getElementById('input-photo-bg');
    if (bgInp) bgInp.value = state.data.photoBg;
  }

  // 2. Language Selector
  const selLang = document.getElementById('select-language');
  if (selLang) selLang.value = state.data.language || 'kh';

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

// Apply Language function to translate UI and sync
function applyLanguage(lang, autoSwitchSample = false) {
  const isEn = lang === 'en';
  state.data.language = lang;
  document.documentElement.lang = isEn ? 'en' : 'km';

  // If auto-switching sample data when language changes
  if (autoSwitchSample) {
    const currentName = (state.data.personalInfo?.fullName || '');
    const isKhmerProfile = currentName.includes('កែវ') || currentName.includes('Kaing') || currentName.includes('សុងឡាយ');
    const isEnglishProfile = currentName.toUpperCase().includes('SIOBHAN') || currentName.toUpperCase().includes('SIMMONS');

    if (isEn && isKhmerProfile) {
      const activeTpl = state.activeTemplate;
      state.data = JSON.parse(JSON.stringify(sampleProfiles.english));
      state.data.templateId = activeTpl;
      state.data.language = 'en';
    } else if (!isEn && isEnglishProfile) {
      const activeTpl = state.activeTemplate;
      state.data = JSON.parse(JSON.stringify(sampleProfiles.cambodian));
      state.data.templateId = activeTpl;
      state.data.language = 'kh';
    }
  }

  const t = UI_TRANSLATIONS[isEn ? 'en' : 'kh'];

  // Header Subtitle
  const brandSub = document.querySelector('.brand-text span');
  if (brandSub) brandSub.innerText = t.brandSubtitle;

  // Edit mode label
  const editModeLabel = document.getElementById('edit-mode-label');
  if (editModeLabel) {
    editModeLabel.innerText = state.directEditMode ? t.editModeOn : t.editModeOff;
  }

  // Language Select
  const selectLang = document.getElementById('select-language');
  if (selectLang) selectLang.value = lang;

  // Sample Profile Select
  const sampleSelect = document.getElementById('select-sample-profile');
  if (sampleSelect && sampleSelect.options.length >= 3) {
    sampleSelect.options[0].innerText = t.sampleProfileDefault;
    sampleSelect.options[1].innerText = t.sampleProfileKh;
    sampleSelect.options[2].innerText = t.sampleProfileEn;
  }

  // Export Buttons
  const btnExportPng = document.getElementById('btn-export-png');
  if (btnExportPng) {
    const span = btnExportPng.querySelector('span');
    if (span) span.innerHTML = t.btnExportPng;
  }

  const btnPrintPdf = document.getElementById('btn-print-pdf');
  if (btnPrintPdf) {
    const span = btnPrintPdf.querySelector('span');
    if (span) span.innerHTML = t.btnPrintPdf;
  }

  // Tabs
  const tabBtns = document.querySelectorAll('.editor-nav-tabs .nav-tab-btn');
  tabBtns.forEach(tab => {
    const tabName = tab.getAttribute('data-tab');
    if (tabName === 'tab-templates') tab.innerHTML = t.tabTemplates;
    if (tabName === 'tab-personal') tab.innerHTML = t.tabPersonal;
    if (tabName === 'tab-experience') tab.innerHTML = t.tabExperience;
    if (tabName === 'tab-education') tab.innerHTML = t.tabEducation;
    if (tabName === 'tab-skills') tab.innerHTML = t.tabSkills;
    if (tabName === 'tab-extras') tab.innerHTML = t.tabExtras;
  });

  // Template hint
  const templateHint = document.querySelector('.direct-edit-hint span');
  if (templateHint) templateHint.innerText = t.templateHint;

  // Photo actions
  const photoUploadBtn = document.querySelector('.photo-uploader-box label.btn');
  if (photoUploadBtn) {
    photoUploadBtn.childNodes[0].nodeValue = '';
    photoUploadBtn.innerHTML = `${t.uploadPhotoBtn} <input type="file" id="input-avatar-file" accept="image/*" style="display: none;">`;
    const newAvatarInput = document.getElementById('input-avatar-file');
    if (newAvatarInput) {
      newAvatarInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (loadEvt) => {
            state.data.photo = loadEvt.target.result;
            document.getElementById('form-photo-thumb').src = state.data.photo;
            renderCanvas();
            showToast(t.toastPhotoUpdated);
          };
          reader.readAsDataURL(file);
        }
      });
    }
  }

  const photoBgLabel = document.querySelector('.photo-upload-actions div label');
  if (photoBgLabel) photoBgLabel.innerText = t.photoBgLabel;

  // Personal Info Form Labels
  const personalLabels = document.querySelectorAll('#tab-personal .form-group > label.form-label');
  personalLabels.forEach(lbl => {
    const nextInput = lbl.nextElementSibling;
    if (!nextInput) return;
    const model = nextInput.getAttribute('data-model');
    if (model === 'personalInfo.fullName') lbl.innerText = t.labelFullName;
    else if (model === 'personalInfo.jobTitle') lbl.innerText = t.labelJobTitle;
    else if (model === 'personalInfo.phone') lbl.innerText = t.labelPhone;
    else if (model === 'personalInfo.email') lbl.innerText = t.labelEmail;
    else if (model === 'personalInfo.telegram') lbl.innerText = t.labelTelegram;
    else if (model === 'personalInfo.linkedin') lbl.innerText = t.labelLinkedin;
    else if (model === 'personalInfo.sex') lbl.innerText = t.labelSex;
    else if (model === 'personalInfo.nationality') lbl.innerText = t.labelNationality;
    else if (model === 'personalInfo.dob') lbl.innerText = t.labelDob;
    else if (model === 'personalInfo.pob') lbl.innerText = t.labelPob;
    else if (model === 'personalInfo.address') lbl.innerText = t.labelAddress;
    else if (model === 'personalInfo.summary') lbl.innerText = t.labelSummary;
  });

  const summaryInput = document.getElementById('input-summary');
  if (summaryInput) summaryInput.placeholder = t.placeholderSummary;

  // Experience button
  const btnAddExp = document.getElementById('btn-add-experience');
  if (btnAddExp) btnAddExp.innerHTML = t.btnAddExp;

  // Education button
  const btnAddEdu = document.getElementById('btn-add-education');
  if (btnAddEdu) btnAddEdu.innerHTML = t.btnAddEdu;

  // Skills & Languages section headers and buttons
  const skillHeaders = document.querySelectorAll('#tab-skills h3');
  if (skillHeaders.length >= 2) {
    skillHeaders[0].innerText = t.skillsSectionTitle;
    skillHeaders[1].innerText = t.langsSectionTitle;
  }
  const btnAddSkill = document.getElementById('btn-add-skill');
  if (btnAddSkill) btnAddSkill.innerHTML = t.btnAddSkill;
  const btnAddLang = document.getElementById('btn-add-language');
  if (btnAddLang) btnAddLang.innerHTML = t.btnAddLang;

  // Extras
  const extraHeaders = document.querySelectorAll('#tab-extras h3');
  if (extraHeaders.length >= 2) {
    extraHeaders[0].innerText = t.refsSectionTitle;
    extraHeaders[1].innerText = t.prefSectionTitle;
  }
  const btnAddRef = document.getElementById('btn-add-reference');
  if (btnAddRef) btnAddRef.innerHTML = t.btnAddRef;
  const prefLabel = document.querySelector('#tab-extras .form-group label.form-label');
  if (prefLabel) prefLabel.innerText = t.labelPreferences;
  const prefInput = document.getElementById('input-preferences');
  if (prefInput) prefInput.placeholder = t.placeholderPreferences;

  // Floating canvas badge
  const canvasModeBadge = document.getElementById('canvas-mode-badge');
  if (canvasModeBadge) {
    canvasModeBadge.innerHTML = state.directEditMode ? t.canvasDirectBadge : t.canvasPreviewBadge;
  }

  // Mobile Bottom Navigation Labels
  const mobLblEdit = document.getElementById('mobile-label-editor');
  if (mobLblEdit) mobLblEdit.innerText = t.mobileLabelEditor;
  const mobLblPrev = document.getElementById('mobile-label-preview');
  if (mobLblPrev) mobLblPrev.innerText = t.mobileLabelPreview;
  const mobLblExp = document.getElementById('mobile-label-export');
  if (mobLblExp) mobLblExp.innerText = t.mobileLabelExport;

  syncStateToForm();
  renderCanvas();
}

/* ==========================================================================
   DYNAMIC FORM LIST RENDERERS (Experience, Education, Skills, Languages, etc)
   ========================================================================== */

function renderExperienceFormItems() {
  const isEn = state.data.language === 'en';
  const container = document.getElementById('experience-items-container');
  if (!container) return;
  container.innerHTML = '';
  (state.data.experiences || []).forEach((exp, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="item-card-header">
        <span class="item-card-title">${isEn ? `Experience #${idx + 1}` : `បទពិសោធន៍ #${idx + 1}`}</span>
        <button class="btn-icon-danger btn-remove-exp" data-index="${idx}" title="${isEn ? 'Delete' : 'លុបចោល'}"><i class="fa-solid fa-trash"></i></button>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${isEn ? 'Role / Position' : 'តួនាទី (Role / Position)'}</label>
          <input type="text" class="form-input exp-role" data-idx="${idx}" value="${exp.role || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">${isEn ? 'Company' : 'ក្រុមហ៊ុន / ស្ថាប័ន (Company)'}</label>
          <input type="text" class="form-input exp-company" data-idx="${idx}" value="${exp.company || ''}">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${isEn ? 'Period / Date' : 'កាលបរិច្ឆេទ (Period)'}</label>
          <input type="text" class="form-input exp-period" data-idx="${idx}" value="${exp.period || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">${isEn ? 'Location' : 'ទីតាំង (Location)'}</label>
          <input type="text" class="form-input exp-location" data-idx="${idx}" value="${exp.location || ''}">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">${isEn ? 'Key Highlights (1 per line)' : 'ចំណុចការងារសំខាន់ៗ (Highlights - មួយបន្ទាត់មួយចំណុច)'}</label>
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
  const isEn = state.data.language === 'en';
  const container = document.getElementById('education-items-container');
  if (!container) return;
  container.innerHTML = '';
  (state.data.education || []).forEach((edu, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="item-card-header">
        <span class="item-card-title">${isEn ? `Education #${idx + 1}` : `ការអប់រំ #${idx + 1}`}</span>
        <button class="btn-icon-danger btn-remove-edu" data-index="${idx}" title="${isEn ? 'Delete' : 'លុបចោល'}"><i class="fa-solid fa-trash"></i></button>
      </div>
      <div class="form-group">
        <label class="form-label">${isEn ? 'Degree / Certificate' : 'សញ្ញាបត្រ / កម្រិត (Degree / Certificate)'}</label>
        <input type="text" class="form-input edu-degree" data-idx="${idx}" value="${edu.degree || ''}">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${isEn ? 'School / University' : 'សាលា / សាកលវិទ្យាល័យ (School / University)'}</label>
          <input type="text" class="form-input edu-school" data-idx="${idx}" value="${edu.school || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">${isEn ? 'Academic Period' : 'ឆ្នាំសិក្សា (Period)'}</label>
          <input type="text" class="form-input edu-period" data-idx="${idx}" value="${edu.period || ''}">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">${isEn ? 'Description / Honors / GPA' : 'ការពិពណ៌នាបន្ថែម (Description / GPA)'}</label>
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
  const isEn = state.data.language === 'en';
  const container = document.getElementById('skills-items-container');
  if (!container) return;
  container.innerHTML = '';
  (state.data.skills || []).forEach((skill, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.style.padding = '10px 14px';
    card.innerHTML = `
      <div style="display: flex; gap: 10px; align-items: center;">
        <input type="text" class="form-input skill-name" data-idx="${idx}" value="${skill.name || ''}" placeholder="${isEn ? 'Skill Name' : 'ឈ្មោះជំនាញ (Skill Name)'}" style="flex: 2;">
        <input type="number" min="10" max="100" class="form-input skill-level" data-idx="${idx}" value="${skill.level || 85}" style="width: 70px;" placeholder="%">
        <button class="btn-icon-danger btn-remove-skill" data-index="${idx}" title="${isEn ? 'Delete' : 'លុប'}"><i class="fa-solid fa-trash"></i></button>
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
  const isEn = state.data.language === 'en';
  const container = document.getElementById('languages-items-container');
  if (!container) return;
  container.innerHTML = '';
  (state.data.languages || []).forEach((lang, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.style.padding = '10px 14px';
    card.innerHTML = `
      <div style="display: flex; gap: 10px; align-items: center;">
        <input type="text" class="form-input lang-name" data-idx="${idx}" value="${lang.name || ''}" placeholder="${isEn ? 'Language (e.g. English)' : 'ភាសា (Language)'}" style="flex: 1;">
        <input type="text" class="form-input lang-level" data-idx="${idx}" value="${lang.level || ''}" placeholder="${isEn ? 'Level (e.g. Fluent, Native)' : 'កម្រិត (Level)'}" style="flex: 1;">
        <button class="btn-icon-danger btn-remove-lang" data-index="${idx}" title="${isEn ? 'Delete' : 'លុប'}"><i class="fa-solid fa-trash"></i></button>
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
  const isEn = state.data.language === 'en';
  const container = document.getElementById('references-items-container');
  if (!container) return;
  container.innerHTML = '';
  (state.data.references || []).forEach((ref, idx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="item-card-header">
        <span class="item-card-title">${isEn ? `Reference #${idx + 1}` : `បុគ្គលធានា #${idx + 1}`}</span>
        <button class="btn-icon-danger btn-remove-ref" data-index="${idx}" title="${isEn ? 'Delete' : 'លុប'}"><i class="fa-solid fa-trash"></i></button>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">${isEn ? 'Referee Full Name' : 'ឈ្មោះ (Name)'}</label>
          <input type="text" class="form-input ref-name" data-idx="${idx}" value="${ref.name || ''}">
        </div>
        <div class="form-group">
          <label class="form-label">${isEn ? 'Job Title & Organization' : 'មុខតំណែង & ស្ថាប័ន (Role & Company)'}</label>
          <input type="text" class="form-input ref-role" data-idx="${idx}" value="${ref.role || ''}">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">${isEn ? 'Phone or Email' : 'ព័ត៌មានទំនាក់ទំនង (Contact Details)'}</label>
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
      const tplTitle = card.querySelector('.template-title')?.innerText || '';
      showToast(state.data.language === 'en' ? `Switched to Template: ${tplTitle}` : `បានប្តូរទៅ Template: ${tplTitle}`);
    });
  });

  // 3. Direct Edit on Paper Mode Toggle
  const toggleEditBtn = document.getElementById('btn-toggle-edit-mode');
  const editModeLabel = document.getElementById('edit-mode-label');
  const canvasModeBadge = document.getElementById('canvas-mode-badge');

  toggleEditBtn.addEventListener('click', () => {
    state.directEditMode = !state.directEditMode;
    const isEn = state.data.language === 'en';
    const t = UI_TRANSLATIONS[isEn ? 'en' : 'kh'];
    if (state.directEditMode) {
      toggleEditBtn.className = 'btn btn-success';
      editModeLabel.innerText = t.editModeOn;
      canvasModeBadge.className = 'mode-badge direct-active';
      canvasModeBadge.innerHTML = t.canvasDirectBadge;
      showToast(t.toastDirectEditOn);
    } else {
      toggleEditBtn.className = 'btn btn-secondary';
      editModeLabel.innerText = t.editModeOff;
      canvasModeBadge.className = 'mode-badge';
      canvasModeBadge.innerHTML = t.canvasPreviewBadge;
      showToast(t.toastDirectEditOff);
    }
    renderCanvas();
  });

  // 4. Language Selector
  document.getElementById('select-language').addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    applyLanguage(selectedLang, true);
    showToast(UI_TRANSLATIONS[selectedLang === 'en' ? 'en' : 'kh'].toastSwitchedLang);
  });

  // 5. Sample Profile Loader
  document.getElementById('select-sample-profile').addEventListener('change', (e) => {
    const val = e.target.value;
    if (val && sampleProfiles[val]) {
      const targetLang = val === 'english' ? 'en' : 'kh';
      state.data = JSON.parse(JSON.stringify(sampleProfiles[val]));
      state.data.language = targetLang;
      state.activeTemplate = state.data.templateId || 'charcoal';

      // Update active template card
      templateCards.forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-template') === state.activeTemplate);
      });

      applyLanguage(targetLang, false);
      showToast(UI_TRANSLATIONS[targetLang === 'en' ? 'en' : 'kh'].toastSampleLoaded);
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
  const prefInput = document.getElementById('input-preferences');
  if (prefInput) {
    prefInput.addEventListener('input', (e) => {
      state.data.preferences = e.target.value.split(',').map(s => s.trim()).filter(s => s.length > 0);
      renderCanvas();
    });
  }

  // 7. Profile Photo Uploader
  const avatarInput = document.getElementById('input-avatar-file');
  if (avatarInput) {
    avatarInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (loadEvt) => {
          state.data.photo = loadEvt.target.result;
          document.getElementById('form-photo-thumb').src = state.data.photo;
          renderCanvas();
          showToast(state.data.language === 'en' ? 'Profile photo updated!' : 'បានប្តូររូបថត Profile ដោយជោគជ័យ!');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Photo background color picker
  const photoBgInput = document.getElementById('input-photo-bg');
  if (photoBgInput) {
    photoBgInput.addEventListener('input', (e) => {
      state.data.photoBg = e.target.value;
      renderCanvas();
    });
  }

  // 8. Add Item Buttons
  document.getElementById('btn-add-experience').addEventListener('click', () => {
    const isEn = state.data.language === 'en';
    if (!state.data.experiences) state.data.experiences = [];
    state.data.experiences.push({
      role: isEn ? 'New Role / Position' : 'មុខតំណែងថ្មី (New Role)',
      company: isEn ? 'Company Name' : 'ឈ្មោះក្រុមហ៊ុន (Company Name)',
      location: isEn ? 'Phnom Penh, Cambodia' : 'ភ្នំពេញ (Phnom Penh)',
      period: isEn ? '2023 - Present' : '2023 - បច្ចុប្បន្ន',
      highlights: [isEn ? 'Key responsibility or achievement here...' : 'ពិពណ៌នាការងារសំខាន់ៗនៅទីនេះ...']
    });
    renderExperienceFormItems();
    renderCanvas();
  });

  document.getElementById('btn-add-education').addEventListener('click', () => {
    const isEn = state.data.language === 'en';
    if (!state.data.education) state.data.education = [];
    state.data.education.push({
      degree: isEn ? 'Bachelor Degree in MIS' : 'បរិញ្ញាបត្រថ្មី (New Degree)',
      school: isEn ? 'University / Institution' : 'សាកលវិទ្យាល័យ / សាលា',
      period: isEn ? '2020 - 2024' : '2020 - 2024',
      description: isEn ? 'Description or GPA...' : 'ការពិពណ៌នា ឬ GPA...'
    });
    renderEducationFormItems();
    renderCanvas();
  });

  document.getElementById('btn-add-skill').addEventListener('click', () => {
    const isEn = state.data.language === 'en';
    if (!state.data.skills) state.data.skills = [];
    state.data.skills.push({ name: isEn ? 'New Skill' : 'ជំនាញថ្មី (New Skill)', level: 80 });
    renderSkillsFormItems();
    renderCanvas();
  });

  document.getElementById('btn-add-language').addEventListener('click', () => {
    const isEn = state.data.language === 'en';
    if (!state.data.languages) state.data.languages = [];
    state.data.languages.push({ name: isEn ? 'English' : 'ភាសាថ្មី (New Language)', level: isEn ? 'Fluent' : 'កម្រិតមធ្យម', percent: 80 });
    renderLanguagesFormItems();
    renderCanvas();
  });

  document.getElementById('btn-add-reference').addEventListener('click', () => {
    const isEn = state.data.language === 'en';
    if (!state.data.references) state.data.references = [];
    state.data.references.push({
      name: isEn ? 'Referee Full Name' : 'ឈ្មោះបុគ្គលធានា (Reference Name)',
      role: isEn ? 'Senior Manager at Borcelle' : 'មុខតំណែង & ក្រុមហ៊ុន',
      contact: isEn ? 'Phone: +855 12 345 678 | Email: ref@example.com' : 'Phone: 012 345 678 | Email: example@gmail.com'
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
      const isMobile = window.innerWidth <= 900;
      const availW = isMobile ? (window.innerWidth - 20) : (canvasEl.clientWidth - 40);
      const availH = isMobile ? (window.innerHeight - 170) : (canvasEl.clientHeight - 130);
      const a4W = 794; // 210mm in 96dpi pixels
      const a4H = 1122.5; // 297mm height in 96dpi pixels

      let scaleW = Math.round((availW / a4W) * 100);
      let scaleH = Math.round((availH / a4H) * 100);

      let bestScale;
      if (isMobile) {
        bestScale = Math.min(Math.max(scaleW, 35), 90);
      } else {
        bestScale = Math.min(Math.max(scaleH, 50), 100);
      }
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

  // Mobile Bottom Navigation Buttons
  const appContainer = document.getElementById('app-container');
  const btnMobShowEditor = document.getElementById('btn-mobile-show-editor');
  const btnMobShowPreview = document.getElementById('btn-mobile-show-preview');
  const btnMobQuickExport = document.getElementById('btn-mobile-quick-export');

  if (btnMobShowEditor && appContainer) {
    btnMobShowEditor.addEventListener('click', () => {
      appContainer.classList.remove('mobile-mode-preview');
      appContainer.classList.add('mobile-mode-editor');
      btnMobShowEditor.classList.add('active');
      btnMobShowPreview?.classList.remove('active');
    });
  }

  if (btnMobShowPreview && appContainer) {
    btnMobShowPreview.addEventListener('click', () => {
      appContainer.classList.remove('mobile-mode-editor');
      appContainer.classList.add('mobile-mode-preview');
      btnMobShowPreview.classList.add('active');
      btnMobShowEditor?.classList.remove('active');
      setTimeout(autoFitZoom, 50);
    });
  }

  if (btnMobQuickExport) {
    btnMobQuickExport.addEventListener('click', () => {
      executePdfExport();
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 900 && appContainer?.classList.contains('mobile-mode-preview')) {
      autoFitZoom();
    }
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
