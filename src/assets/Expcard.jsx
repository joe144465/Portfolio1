export default function Expcard({
  logo,
  company,
  role,
  period,
  description,
  bgColor,
}) {
  return (
    <div className="bg-transparent lg:w-130 h-130  rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 mt-20 relative border-1 border-gray-200">
      <div className={`lg:w-130 h-50 ${bgColor}`}>
        <h2 className="text-white text-2xl font-semibold text-center p-12 font-inter">
          {company}
        </h2>
      </div>
      <img
        src={logo}
        alt={company}
        className="w-40 h-40 top-12 -translate-y-1/2 mx-auto rounded-full "
      />
      <div className="text-center -mt-12">
        <p className="text-white text-xl ">{role}</p>
        <p className="text-white text-xl mt-1">{period}</p>
        <p className="text-white text-lg mt-1 p-4">{description}</p>
      </div>
    </div>
  );
}
