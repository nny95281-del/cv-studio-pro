// CV Studio Pro - ATS Resume Score Analyzer & Optimizer Engine

export function calculateAtsScore(profileData) {
  let score = 0;
  const maxScore = 100;
  const feedback = [];
  const strengths = [];

  const pi = profileData.personalInfo || {};
  const experiences = profileData.experiences || [];
  const educations = profileData.educations || [];
  const skills = profileData.skills || [];
  const languages = profileData.languages || [];

  // 1. Personal Info & Contacts (Max 25 pts)
  let contactScore = 0;
  if (pi.fullName && pi.fullName.trim().length >= 3) contactScore += 5;
  if (pi.title && pi.title.trim().length >= 3) contactScore += 5;
  if (pi.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(pi.email.trim())) contactScore += 5;
  if (pi.phone && pi.phone.trim().length >= 8) contactScore += 5;
  if (pi.address && pi.address.trim().length >= 4) contactScore += 5;
  score += contactScore;

  if (contactScore === 25) {
    strengths.push('ព័ត៌មានទំនាក់ទំនងពេញលេញ និងត្រឹមត្រូវ (100% Complete Contact Info)');
  } else {
    feedback.push('សូមបំពេញព័ត៌មានទំនាក់ទំនងឱ្យបានពេញលេញ (Email, Phone, Address, Title)');
  }

  // 2. Profile Summary / Career Objective (Max 15 pts)
  if (pi.summary && pi.summary.trim().length >= 80) {
    score += 15;
    strengths.push('សេចក្តីសង្ខេបប្រវត្តិរូបមានលក្ខណៈទាក់ទាញ និងវែងល្មម (Strong Summary Statement)');
  } else if (pi.summary && pi.summary.trim().length >= 30) {
    score += 8;
    feedback.push('សេចក្តីសង្ខេប (Summary) គួរមានយ៉ាងតិច 2 ទៅ 3 ប្រយោគដើម្បីបង្ហាញពីចំណុចខ្លាំងរបស់អ្នក');
  } else {
    feedback.push('ខ្វះសេចក្តីសង្ខេបអំពីខ្លួនឯង (Professional Summary) សម្រាប់ទាក់ទាញ HR');
  }

  // 3. Work Experience Quality (Max 30 pts)
  if (experiences.length >= 2) {
    score += 15;
    let hasDetailedTasks = true;
    for (const exp of experiences) {
      if (!exp.description || exp.description.trim().length < 40) {
        hasDetailedTasks = false;
        break;
      }
    }
    if (hasDetailedTasks) {
      score += 15;
      strengths.push('បទពិសោធន៍ការងារត្រូវបានរៀបរាប់យ៉ាងលម្អិត (Actionable Experience Descriptions)');
    } else {
      score += 8;
      feedback.push('បន្ថែមសមិទ្ធផល (Achievements/Bullet Points) ក្នុងបទពិសោធន៍ការងារនីមួយៗ');
    }
  } else if (experiences.length === 1) {
    score += 15;
    feedback.push('ប្រសិនបើមាន សូមបន្ថែមបទពិសោធន៍ ឬគម្រោងផ្សេងៗទៀត');
  } else {
    feedback.push('គួរតែមានបទពិសោធន៍ការងារ ឬការងារស្ម័គ្រចិត្តយ៉ាងហោច ១ កន្លែង');
  }

  // 4. Education & Qualifications (Max 15 pts)
  if (educations.length >= 1 && educations[0].degree && educations[0].school) {
    score += 15;
    strengths.push('កម្រិតវប្បធម៌ និងការសិក្សាមានភាពច្បាស់លាស់ (Clear Education Credentials)');
  } else {
    feedback.push('សូមបំពេញកម្រិតសញ្ញាបត្រ និងឈ្មោះគ្រឹះស្ថានសិក្សា');
  }

  // 5. Skills & Languages (Max 15 pts)
  let skillScore = 0;
  if (skills.length >= 4) {
    skillScore += 10;
    strengths.push(`មានជំនាញសំខាន់ៗចំនួន ${skills.length} (Key Industry Skills)`);
  } else if (skills.length >= 1) {
    skillScore += 5;
    feedback.push('គួរដាក់ជំនាញបច្ចេកទេស ឬ Soft Skills យ៉ាងតិចពី 4 ទៅ 6');
  } else {
    feedback.push('សូមបន្ថែមជំនាញ (Skills) សំខាន់ៗរបស់អ្នក');
  }

  if (languages.length >= 1) {
    skillScore += 5;
  } else {
    feedback.push('សូមបន្ថែមភាសាដែលអ្នកចេះ (Languages)');
  }
  score += skillScore;

  // Grade categorization
  let grade = 'A';
  let badgeColor = '#10b981';
  let label = 'ល្អឥតខ្ចោះ (Excellent)';

  if (score < 50) {
    grade = 'Needs Work';
    badgeColor = '#ef4444';
    label = 'ត្រូវការបំពេញបន្ថែម (Needs Work)';
  } else if (score < 75) {
    grade = 'Good';
    badgeColor = '#f59e0b';
    label = 'ល្អមធ្យម (Good)';
  } else if (score < 90) {
    grade = 'Very Good';
    badgeColor = '#3b82f6';
    label = 'ល្អប្រសើរ (Very Good)';
  }

  return {
    score: Math.min(score, maxScore),
    grade,
    label,
    badgeColor,
    feedback,
    strengths
  };
}
