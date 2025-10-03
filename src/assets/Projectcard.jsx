import LDownloadPDF from "./Ldownload.jsx";
export default function Projectcard({
  Logo,
  title,
  description,
  pdfUrl1,
  fileName1,
  buttonText1,
  pdfUrl2,
  fileName2,
  buttonText2,
}) {
  return (
    <div className="bg-transparent lg:w-200 rounded-lg border-1 border-gray-200 shadow-lg overflow-hidden hover:shadow-2xl shadow-white transition-shadow duration-300">
      <img
        src={Logo}
        alt={title}
        className="w-auto h-auto object-cover rounded-t-lg mx-auto p-20 mt-10 bg-white"
      />

      <h3 className="text-white text-3xl font-regular mt-4 font-inter text-center">
        {title}
      </h3>
      <p className="text-white text-lg mb-4 text-center p-4">{description}</p>
      <div className="lg:ml-40 md:ml-30 flex lg:gap-10 p-2 lg:flex-row md:flex-row flex-col text-center gap-5">
        <LDownloadPDF
          pdfUrl={pdfUrl1}
          fileName={fileName1}
          buttonText={buttonText1}
        />

        <LDownloadPDF
          pdfUrl={pdfUrl2}
          fileName={fileName2}
          buttonText={buttonText2}
        />
      </div>
    </div>
  );
}
