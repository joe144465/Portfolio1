import LDownloadPDF from "./Ldownload.jsx";
export default function Projectcard2({
  Logo,
  title,
  description,
  pdfUrl,
  fileName,
  buttonText,
}) {
  return (
    <div className="bg-transparent lg:w-200 rounded-lg border-1 border-gray-200 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow shadow-white duration-300">
      <img
        src={Logo}
        alt={title}
        className="w-auto h-85 object-cover rounded-t-lg mx-auto p-20 mt-10 bg-white"
      />

      <h3 className="text-white text-3xl font-regular mt-4 font-inter text-center">
        {title}
      </h3>
      <p className="text-white text-lg mb-4 text-center p-8">{description}</p>
      <div className="text-center mb-20">
        <LDownloadPDF
          pdfUrl={pdfUrl}
          fileName={fileName}
          buttonText={buttonText}
        />
      </div>
    </div>
  );
}
