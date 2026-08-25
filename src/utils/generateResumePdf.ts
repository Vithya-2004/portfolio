import { jsPDF } from 'jspdf';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const downloadResumePdf = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 18;

  // Header background subtle bar
  doc.setFillColor(247, 249, 251);
  doc.roundedRect(margin - 4, y - 4, contentWidth + 8, 30, 2, 2, 'F');

  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(0, 31, 63); // #001F3F
  doc.text('VITHYA S', margin, y + 6);

  // Subtitle
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(58, 100, 112); // #3A6470
  doc.text('MCA Student | Aspiring Software Developer', margin, y + 13);

  // Contact details right aligned
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(67, 71, 78);
  const contactText = [
    `Email: ${PORTFOLIO_DATA.contact.email}`,
    `Phone: +91 ${PORTFOLIO_DATA.contact.phone}`,
    `Location: ${PORTFOLIO_DATA.contact.location}`,
    `GitHub: ${PORTFOLIO_DATA.contact.github} | LinkedIn: ${PORTFOLIO_DATA.contact.linkedin}`,
  ];
  let contactY = y + 3;
  contactText.forEach((line) => {
    doc.text(line, pageWidth - margin, contactY, { align: 'right' });
    contactY += 4.5;
  });

  y += 34;

  const renderSectionHeader = (title: string) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(0, 31, 63);
    doc.text(title.toUpperCase(), margin, y);
    doc.setDrawColor(196, 198, 207);
    doc.setLineWidth(0.3);
    doc.line(margin, y + 2, pageWidth - margin, y + 2);
    y += 7;
  };

  // PROFILE SUMMARY
  renderSectionHeader('Professional Profile');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(50, 50, 50);
  const bioLines = doc.splitTextToSize(PORTFOLIO_DATA.about, contentWidth);
  doc.text(bioLines, margin, y);
  y += bioLines.length * 4.5 + 4;

  // EDUCATION
  renderSectionHeader('Education');
  PORTFOLIO_DATA.education.forEach((edu) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(0, 6, 19);
    doc.text(edu.degree, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(58, 100, 112);
    doc.text(edu.period, pageWidth - margin, y, { align: 'right' });
    y += 4.5;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(70, 70, 70);
    const instText = edu.grade ? `${edu.institution}  (CGPA: ${edu.grade})` : `${edu.institution} (${edu.status})`;
    doc.text(instText, margin, y);
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(90, 90, 90);
    doc.text(`Key Subjects: ${edu.highlights.join(' • ')}`, margin, y);
    y += 6;
  });
  y += 1;

  // INTERNSHIPS
  renderSectionHeader('Internships');
  PORTFOLIO_DATA.internships.forEach((intern) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(0, 6, 19);
    doc.text(intern.company, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(58, 100, 112);
    doc.text(intern.year, pageWidth - margin, y, { align: 'right' });
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(60, 60, 60);
    doc.text(`${intern.domain} – ${intern.year}`, margin, y);
    y += 5.5;
  });
  y += 1;

  // PREFERRED INTERESTS
  renderSectionHeader('Preferred Interests');
  const colW = (contentWidth - 6) / 3;
  PORTFOLIO_DATA.preferredInterests.forEach((pref, idx) => {
    const colX = margin + idx * (colW + 3);
    doc.setFillColor(242, 244, 246);
    doc.roundedRect(colX, y - 2, colW, 18, 1.5, 1.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(0, 31, 63);
    doc.text(pref.title, colX + 3, y + 3);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(67, 71, 78);
    doc.text(pref.category, colX + 3, y + 7.5);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7);
    doc.setTextColor(100, 100, 100);
    doc.text(pref.tools.slice(0, 3).join(', '), colX + 3, y + 12);
  });
  y += 23;

  // TECHNICAL PROJECTS
  renderSectionHeader('Key Technical Projects');
  PORTFOLIO_DATA.projects.forEach((proj) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(0, 6, 19);
    doc.text(proj.title, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(58, 100, 112);
    doc.text(proj.tags.slice(0, 3).join(' | '), pageWidth - margin, y, { align: 'right' });
    y += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(50, 50, 50);
    const descLines = doc.splitTextToSize(proj.longDescription, contentWidth);
    doc.text(descLines, margin, y);
    y += descLines.length * 4 + 2;

    // Bullets
    proj.features.slice(0, 2).forEach((feat) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(70, 70, 70);
      doc.text(`• ${feat}`, margin + 3, y);
      y += 3.8;
    });
    y += 3;
  });

  // TECHNICAL SKILLS
  renderSectionHeader('Technical Skills & Tools');
  doc.setFontSize(8.5);
  PORTFOLIO_DATA.skillsCategories.forEach((cat) => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 31, 63);
    doc.text(`${cat.title}:`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    const skillList = cat.skills.map((s) => s.name).join(', ');
    doc.text(skillList, margin + 28, y);
    y += 4.5;
  });

  // Footer note
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(130, 130, 130);
  doc.text(`Portfolio: ${PORTFOLIO_DATA.deployedUrl} | Updated: 2024-2025`, pageWidth / 2, 287, { align: 'center' });

  // Save the document
  doc.save('Vithya_S_Resume.pdf');
};
