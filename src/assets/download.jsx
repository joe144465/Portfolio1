import React from "react";

const DownloadPDF = () => {
  const handleDownload = () => {
    const pdfUrl = "/src/assets/MHMY CV.pdf"; 
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "MHMY CV.pdf";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
     className="bg-blue-300 text-white font-bold rounded-xl 
                px-4 py-2 text-sm sm:text-lg md:text-lg 
                hover:bg-blue-600 
                shadow hover:shadow-lg transition-shadow duration-300
                lg:ml-0 ml-26
                mt-4 sm:mt-6 md:mt-8 lg:mt-8
                ">
      Download PDF
    </button>
  );
};

export default DownloadPDF;
