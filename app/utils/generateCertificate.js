import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";

export default async function generateCertificate(name, verificationLink) {
  const url = "http://localhost:3000/certificate.pdf";
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  pdfDoc.setTitle("Certificate of Completion 🏆");
  pdfDoc.setAuthor("Study Sphere");
  pdfDoc.setSubject("Confirming the completion of a course 🎉");
  pdfDoc.setKeywords([
    "certificate",
    "PDF",
    "course",
    "completion",
    "digital",
    "study",
    "sphere",
  ]);
  pdfDoc.setProducer("Study Sphere (https://studysphere.com)");
  pdfDoc.setCreator("Study Sphere (https://studysphere.com)");
  pdfDoc.setCreationDate(new Date());
  pdfDoc.setModificationDate(new Date());

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();
  firstPage.drawText(name, {
    x: width / 4,
    y: height / 2 - 30,
    size: 50,
    font: helveticaFont,
    color: rgb(0.95, 0.1, 0.1),
    rotate: degrees(0),
  });

  firstPage.drawText(verificationLink, {
    x: width / 5,
    y: height / 10,
    size: 7,
    font: helveticaFont,
    color: rgb(0.95, 0.1, 0.1),
    rotate: degrees(0),
  });

  const uri = await pdfDoc.saveAsBase64({ dataUri: true });

  return uri;
}
