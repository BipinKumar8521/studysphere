"use client";

const CertificatePage = () => {
  const handleView = async () => {
    const data = await fetch("/api/certificate");
    const response = await data.json();
    window.open(response.pdfBytes, "_blank");
  };

  const handleDownload = async () => {
    const data = await fetch("/api/certificate");
    const response = await data.json();
    const link = document.createElement("a");
    link.setAttribute("href", response.pdfBytes);
    link.setAttribute("download", "certificateOfCompletion.pdf");
    link.click();
  };

  return (
    <div>
      <h1>Certificate Page</h1>
      <p>Here you can view your certificates</p>
      <div>
        <button onClick={handleView}>View</button>
        <button onClick={handleDownload}>download</button>
      </div>
    </div>
  );
};

export default CertificatePage;
