import DownloadPDF from "./download.jsx";
import SocialIcons from "./icons.jsx";
import profilePic from "./whimsyrift.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { FaFigma, FaGripfire, FaAngellist } from "react-icons/fa";
import LCANMS from "../assets/LCANMS.png";
import SATA from "../assets/SATA.png";
import portfolio from "../assets/portfolio.png";
import "./index.css";
import { TypeAnimation } from "react-type-animation";
import Skills from "./Skills.jsx";
import Circle from "./Circle.jsx";
import img from "./hi.gif";
import { FaBoltLightning } from "react-icons/fa6";
import uni from "./uni.png";
import youth from "./youth.png";
import Expcard from "./Expcard.jsx";
import card from "./NEX4.png";
import mom from "./mom.png";
import mglay from "./mglay.png";
import Projectcard from "./Projectcard.jsx";
import Projectcard2 from "./Projectcard2.jsx";
import Projectcard3 from "./Projectcard3.jsx";
import ContactIcons from "./contacticons.jsx";

function Home() {
  return (
    <>
      <section id="home">
        <div className="flex flex-col lg:flex-row w-full bg-gray-900 gap-10 p-6 sm:p-8 md:p-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=" flex rounded-lg flex flex-col md:mt-20 bg-gray-900 lg:ml-30 lg:w-1/2 md:w-1/2 md:ml-40"
          >
            <p className="text-white text-lg md:text-3xl font-extrabold font-inter md:mt-20 text-center lg:text-left text-center">
              Hello! I'm
            </p>
            <h1 className="text-white text-[30px] lg:text-[65px] font-extrabold font-sen lg:text-left text-center">
              MIN HTET MOE YAN
            </h1>
            <p className="text-white text-lg md:text-3xl font-extrabold font-inter text-center md:text-left">
              I am a{" "}
              <TypeAnimation
                sequence={[
                  "UI/UX Designer",
                  2000,
                  "Front-end Developer",
                  2000,
                  "Microsoft Power Platform Developer",
                  2000,
                  "System Administrator",
                  2000,
                ]}
                wrapper="span"
                speed={150}
                style={{ display: "inline-block" }}
                repeat={Infinity}
                className="text-blue-300"
              />
            </p>
            <p className="text-white text-[16px] md:text-xl font-regular font-roboto text-center lg:text-left">
              Motivated IT and UI/UX professional with hands-on experience in
              front-end development, server administration, and business
              productivity tools. Skilled in creating responsive web
              applications, managing enterprise environments, and building
              automated workflows that improve efficiency. Strong technical
              foundation in both Windows and Linux servers, with expertise in
              Microsoft 365 ecosystem, data visualization, and process
              automation.
            </p>

            <div className="mt-6">
              <SocialIcons />
            </div>
            <div className="mt-6">
              <DownloadPDF />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="bg-gray-900 flex p-6 sm:p-8 md:p-8 rounded-lg flex justify-center md:mt-20 md:mr-30"
          >
            <img
              src={profilePic}
              alt="Profile"
              className="w-48 sm:w-56 md:w-64 lg:w-64 xl:w-130 object-cover border-4 border-white shadow-lg lg:ml-40 shadow-gray-900 rounded-full"
            />
          </motion.div>
        </div>
      </section>
      <section id="about">
        <div className="bg-gray-900 flex-1 p-6 sm:p-8 md:p-10 flex flex-col items-center text-center">
          <div className="flex flex-col lg:flex-row w-full gap-10">
            <div className=" flex-1 p-6 sm:p-8 md:p-10 rounded-lg flex flex-col lg:ml-20">
              <h1 className="text-white text-[30px]  lg:text-[65px] font-extrabold font-sen text-left  ">
                What I Do?{" "}
                <FaGripfire className="inline-block  text-red-400 lg:text-6xl md:text-4xl text-4xl" />
              </h1>
              <p className="text-white text-[16px] md:text-xl font-regular font-roboto text-left">
                <FaBoltLightning className="inline-block text-yellow-400 lg:text-2xl md:text-2xl text-2xl mr-2" />{" "}
                A cazy front-end developer and I really like Linux OS a lot.I
                love to play guitar and listen to music.
              </p>
              <img
                src={img}
                alt="speaking"
                className="lg:w-140 lg:h-140 w-60 h-60 object-cover shadow-lg  shadow-gray-900 rounded-lg "
              />
              <p className="text-white text-[16px] md:text-xl font-regular font-roboto text-left mt-4">
                <FaBoltLightning className="inline-block text-yellow-400 lg:text-2xl md:text-2xl text-2xl mr-2" />
                Develop highly interactive Front end / User Interfaces for your
                web and mobile applications
              </p>
            </div>
            <div className=" flex-1 p-4 sm:p-8 md:p-10 rounded-lg flex flex-col lg:mr-20"
            >
              <h1 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-semiblold font-sans text-left  ">
                Skills{" "}
                <FaAngellist
                  size={40}
                  className="inline-block ml-2 text-blue-400"
                />
              </h1>
              <div className="flex flex-col lg:flex-row  gap-10 md:gap-30">
                <Skills />
                <Circle />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="education">
        <div className="bg-gray-900 p-6 sm:p-8 md:p-10">
          <h1 className="text-white lg:text-6xl md:text-6xl text-[30px] font-sen  md:ml-10 lg:ml-30 ">
            Education
          </h1>

          <div className="flex items-center md:ml-10 lg:ml-30 mt-10 gap-8 flex-col lg:flex-row md:flex-row relative cursor-pointer after:absolute after:bottom-[-20px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-3/4 ">
            <img
              src={uni}
              alt="University"
              className="w-auto h-auto rounded-lg shadow-lg shadow-gray-900"
            />

            <h1 className="text-white lg:text-3xl text-2xl font-regular font-inter">
              University of Computer Studies, Hinthada
              <p className="text-white text-xl  font-regular font-inter">
                Beachelor of Computer Technology (B.C.Tech) (2016 - 2025)
              </p>
              <p className="text-white text-xl  font-regular font-inter">
                {" "}
                Participated in the ICT project show and won the 4th prize among
                50 teams.
              </p>
              <ul className="text-gray-400 text-xl  font-regular font-inter list-disc list-inside mt-2 ml-6">
                <li>Education too requires patience and struggle</li>
                <li>Knowledge is more valuable than wealth</li>
              </ul>
            </h1>
          </div>

          <div className="flex items-center md:ml-10 lg:ml-30 mt-10 gap-8 flex-col lg:flex-row md:flex-row relative cursor-pointer after:absolute after:bottom-[-20px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-3/4 ">
            <img
              src={youth}
              alt="University"
              className="w-35 h-35 rounded-full shadow-lg shadow-gray-900 "
            />

            <h1 className="text-white lg:text-3xl text-2xl font-regular font-inter">
              YOUTH Traning Center
              <p className="text-white text-xl  font-regular font-inter">
                Advance Network Engineering (ANE) (2020-2021)
              </p>
              <p className="text-white text-xl  font-regular font-inter">
                Covered networking from basic to advanced levels
              </p>
              <ul className="text-gray-400 text-xl  font-regular font-inter list-disc list-inside mt-2 ml-6">
                <li>If you don’t learn the basics, you can’t progress.</li>
                <li>Asking questions is the first step to knowledge.</li>
              </ul>
            </h1>
          </div>
        </div>
      </section>
      <section id="experiences">
        <div className="bg-gray-900 p-6 sm:p-8 md:p-10">
          <h1 className="text-white lg:text-6xl text-[30px] font-sen md:ml-10 lg:ml-30  ">
            Experiences
          </h1>
          <div className="flex flex-col lg:flex-row lg:gap-10  md:ml-10 lg:ml-30 ">
            <Expcard
              logo={card}
              company="NEX4 ICT Solution"
              role="Microsoft Internship"
              period="2025 (May-July)"
              description="During my internship,I had experience with Microsft System Administartion and Power Platform Developement."
              bgColor="bg-blue-500"
            />
            <Expcard
              logo={mom}
              company="Moe Moe Industry and Manufacturing"
              role="IT Supporter"
              period="2019-2020"
              description="I supported the whole IT related issues."
              bgColor="bg-gray-500"
            />
            <Expcard
              logo={mglay}
              company="Mg Lay Machenical Workshop"
              role="Supporter"
              period="2015-2016"
              description="I supported inventory management by tracking parts,supplies, and tools."
              bgColor="bg-yellow-700"
            />
          </div>
        </div>
      </section>
      <section id="project">
        <div className="bg-gray-900 p-6 sm:p-8 md:p-10">
          <h1 className="text-white lg:text-6xl text-[30px] font-sen md:ml-10 lg:ml-30  ">
            Projects
          </h1>
          <div className="flex flex-col lg:flex-row gap-10 md:ml-10 lg:ml-30 mt-20">
            <Projectcard
              Logo={LCANMS}
              title="Local Campus Area Network Management System"
              description="Implemented with Windows Server 2022 (AD DS, DHCP, DNS, GPO); hosted internal website via IIS, set up role-based file sharing, automated policies with GPO/PowerShell, and enabled RDP & Wireshark for monitoring."
              pdfUrl1="/src/assets/Local Campus Area Network Management System.pdf"
              fileName1="Local Campus Area Network Management System.pdf"
              buttonText1="Download Project Book(part 1)"
              pdfUrl2="/src/assets/2.pdf"
              fileName2="2.pdf"
              buttonText2="Download Project Book(part 2)"
            />

            <Projectcard2
              Logo={SATA}
              title="Student Attendance Tracker App"
              description="Built with SharePoint, Power Apps, Power Automate; designed UI in Figma, automated workflows, and enabled real-time tracking with secure data storage"
              pdfUrl="/src/assets/Student Attendance Tracker App.pdf"
              fileName="Student Attendance Tracker App.pdf"
              buttonText="Download Project Book"
            />
          </div>
          <div className="flex mt-10 lg:ml-30 mx-auto">
            <Projectcard3
              Logo={portfolio}
              title="My Portfolio "
              description="Built Responsive portfolio  with Html,Css,Javascript,Tailwind Css,React and Framer Motion; designed UI in Figma"
            />
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="bg-gray-900 p-6 sm:p-8 md:p-10 flex flex-col ">
          <h1 className="text-white text-6xl text-[30px] font-sen lg:ml-30 ">Contact Me</h1>
          <p className="text-white text-lg md:text-2xl font-regular font-roboto lg:ml-30 mt-20">
            I am open to job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience, contact me.
          </p>
          <p className="text-white text-lg md:text-2xl font-regular font-roboto lg:ml-30 mt-4">
            Discuss a project or just want to say hi? My Inbox is open for all.
          </p>
          <div className="lg:mt-20 md:mt-20 mt-10 lg:ml-30">
            <ContactIcons />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
