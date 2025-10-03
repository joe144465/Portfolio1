import React from "react";

const LDownloadPDF = ({ pdfUrl, fileName,buttonText }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName || "download.pdf";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-400 text-white font-bold rounded-xl 
                 lg:px-1 lg:py-4 px-1 py-2  text-sm sm:text-md md:text-md 
                 hover:bg-blue-600 
                 shadow hover:shadow-lg transition-shadow duration-300 "
    >
        {buttonText || "Download Project Book"}
    </button>
  );
};

export default LDownloadPDF;
