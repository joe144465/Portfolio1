import { useEffect, useState } from "react";
import {
  FaFigma,
  FaHtml5,
  FaCss3,
  FaReact,
  FaMicrosoft,
  FaLinux,
  FaServer,
} from "react-icons/fa";

export default function Skills() {
  const [figmaWidth, setFigmaWidth] = useState("0%");
  const [reactWidth, setReactWidth] = useState("0%");
  const [htmlWidth, setHtmlWidth] = useState("0%");
  const [cssWidth, setCssWidth] = useState("0%");
  const [microsoftWidth, setMicrosoftWidth] = useState("0%");
  const [linuxWidth, setLinuxWidth] = useState("0%");
  const [serverWidth, setServerWidth] = useState("0%");

  useEffect(() => {
    setTimeout(() => setFigmaWidth("85%"), 1200);
    setTimeout(() => setReactWidth("75%"), 1200);
    setTimeout(() => setHtmlWidth("90%"), 1200);
    setTimeout(() => setCssWidth("90%"), 1200);
    setTimeout(() => setMicrosoftWidth("90%"), 1200);
    setTimeout(() => setLinuxWidth("90%"), 1200);
    setTimeout(() => setServerWidth("90%"), 1200);
  }, []);

  return (
    <div className="w-full max-w-lg space-y-4 mt-20  ">
      <div className="flex items-center space-x-4">
        <FaFigma className="text-5xl mt-8 text-blue-500" />

        <div className="flex-1">
          <div className="flex justify-between mb-1">
            <span className="text-md font-medium text-white">Figma</span>
            <span className="text-md text-gray-500">85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: figmaWidth }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaHtml5 className="text-5xl mt-8 text-orange-600" />

        <div className="flex-1">
          <div className="flex justify-between mb-1">
            <span className="text-md font-medium text-white">HTML5</span>
            <span className="text-md text-gray-500">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-orange-600 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: htmlWidth }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaCss3 className="text-5xl mt-8 text-blue-600" />

        <div className="flex-1">
          <div className="flex justify-between mb-1">
            <span className="text-md font-medium text-white">CSS3</span>
            <span className="text-md text-gray-500">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: cssWidth }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaReact className="text-5xl mt-8 text-sky-400" />

        <div className="flex-1">
          <div className="flex justify-between mb-1">
            <span className="text-md font-medium text-white">React</span>
            <span className="text-md text-gray-500">75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-sky-400 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: reactWidth }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaLinux className="text-5xl mt-8 text-yellow-400" />

        <div className="flex-1">
          <div className="flex justify-between mb-1">
            <span className="text-md font-medium text-white">Linux</span>
            <span className="text-md text-yellow-500">100%</span>
          </div>
          <div className="w-full bg-yellow-400 rounded-full h-3 overflow-hidden">
            <div
              className="bg-yellow-400 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: linuxWidth }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <FaMicrosoft className="text-5xl mt-8 text-red-500" />

        <div className="flex-1">
          <div className="flex justify-between mb-1">
            <span className="text-md font-medium text-white">Microsoft</span>
            <span className="text-md text-gray-500">75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-red-500 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: microsoftWidth }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
