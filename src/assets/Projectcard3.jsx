import LDownloadPDF from "./Ldownload.jsx";
export default function Projectcard3({ Logo, title, description }) {
  return (
    <div className=" lg:w-410 lg:h-200 md:w-210 md:h-150 w-80 h-120 md:ml-10 ml-0 lg:ml-0 bg-transparent rounded-lg border-1 border-gray-200 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow shadow-white duration-300 ">
      <img
        src={Logo}
        alt={title}
        className=" w-300 h-auto object-cover rounded-t-lg mx-auto lg:p-5 p-2 mt-10 bg-gray-800 "
      />

      <h3 className="text-white text-3xl font-regular mt-4 font-inter text-center">
        {title}
      </h3>
      <p className="text-white text-lg mb-4 text-center p-4">{description}</p>
    </div>
  );
}
