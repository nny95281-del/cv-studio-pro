// CV Studio Pro - AI & Smart Cover Letter Generator

export function generateCoverLetter(profileData, targetCompany = 'ក្រុមហ៊ុន / Company Name', targetJobTitle = '') {
  const pi = profileData.personalInfo || {};
  const experiences = profileData.experiences || [];
  const skills = profileData.skills || [];
  const educations = profileData.educations || [];

  const jobTitle = targetJobTitle || pi.title || 'មុខតំណែងការងារ';
  const name = pi.fullName || 'ឈ្មោះបេក្ខជន';
  const email = pi.email || 'email@example.com';
  const phone = pi.phone || '012 345 678';
  const today = new Date().toLocaleDateString('km-KH', { year: 'numeric', month: 'long', day: 'numeric' });

  const recentExp = experiences.length > 0 ? experiences[0] : null;
  const recentEdu = educations.length > 0 ? educations[0] : null;
  const topSkills = skills.slice(0, 4).map(s => s.name).join(', ') || 'ជំនាញទំនាក់ទំនង និងការងារជាក្រុម';

  // Khmer Template
  const coverLetterKhmer = `ថ្ងៃទី ${today}

ផ្ញើជូន៖ នាយកដ្ឋានធនធានមនុស្ស (HR Department)
ស្ថាប័ន/ក្រុមហ៊ុន៖ ${targetCompany}

កម្មវត្ថុ៖ ពាក្យស្នើសុំបម្រើការងារក្នុងមុខតំណែង "${jobTitle}"

គោរពលោក/លោកស្រីប្រធានផ្នែកជ្រើសរើសបុគ្គលិក,

ខ្ញុំបាទ/នាងខ្ញុំឈ្មោះ ${name} មានសេចក្តីសោមនស្សរីករាយជាខ្លាំងក្នុងការដាក់ពាក្យស្នើសុំបម្រើការងារជា "${jobTitle}" នៅ ${targetCompany} បន្ទាប់ពីបានឃើញការប្រកាសជ្រើសរើសបុគ្គលិករបស់ក្រុមហ៊ុន។

ផ្អែកលើប្រវត្តិរូប និងបទពិសោធន៍របស់ខ្ញុំ ${recentExp ? `កន្លងមកក្នុងនាមជា ${recentExp.role} នៅ ${recentExp.company}` : `ក្នុងការសិក្សាផ្នែក ${recentEdu ? recentEdu.degree : 'ជំនាញវិជ្ជាជីវៈ'}`} ខ្ញុំបានពង្រឹងសមត្ថភាពស្នូលលើ ${topSkills}។ ខ្ញុំជឿជាក់យ៉ាងមុតមាំថា ចំណេះដឹង និងការប្តេជ្ញាចិត្តខ្ពស់របស់ខ្ញុំ នឹងអាចចូលរួមចំណែកយ៉ាងសកម្មក្នុងការអភិវឌ្ឍ និងសម្រេចគោលដៅរបស់ស្ថាប័ន។

ខ្ញុំមានក្តីរំភើប និងត្រៀមខ្លួនរួចជាស្រេចសម្រាប់ការសម្ភាសន៍ផ្ទាល់ ដើម្បីបង្ហាញបន្ថែមអំពីសមត្ថភាព និងចំណង់ចំណូលចិត្តរបស់ខ្ញុំចំពោះតួនាទីនេះ។

សូមលោក/លោកស្រី ទទួលនូវការគោរពដ៏ខ្ពង់ខ្ពស់អំពីខ្ញុំបាទ/នាងខ្ញុំ។

ដោយសេចក្តីគោរព,

${name}
ទូរស័ព្ទ៖ ${phone}
អ៊ីមែល៖ ${email}`;

  // English Template
  const todayEn = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const coverLetterEnglish = `${todayEn}

Hiring Manager
${targetCompany}

Subject: Application for the position of "${jobTitle}"

Dear Hiring Team,

I am writing to express my strong interest in the "${jobTitle}" position at ${targetCompany}. With my proven background ${recentExp ? `as a ${recentExp.role} at ${recentExp.company}` : `in ${recentEdu ? recentEdu.degree : 'my field'}`}, combined with key proficiencies in ${topSkills}, I am confident in my ability to make an immediate, positive contribution to your team.

Throughout my career, I have demonstrated a strong commitment to excellence, problem-solving, and continuous learning. I admire ${targetCompany}'s achievements and would be thrilled to bring my passion and dedication to your organization.

Thank you for your time and consideration. I welcome the opportunity to discuss how my skillset aligns with your team's goals in an interview.

Sincerely,

${name}
Phone: ${phone}
Email: ${email}`;

  return {
    khmer: coverLetterKhmer,
    english: coverLetterEnglish
  };
}
