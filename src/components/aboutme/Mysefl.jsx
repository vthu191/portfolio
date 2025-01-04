const aboutMeSections = [
    {
      title: "Front End Developer",
      description:
        "I am skilled at designing and developing user-friendly, interactive, and responsive interfaces. I focus on creating experiences that are visually appealing and easy to use.",
      icon: <CiPlay1 size={30} color="#FED33C" className="ml-auto" />,
    },
    {
      title: "Back End Developer",
      description:
        "I have the ability to build and manage server-side systems that are efficient and secure. My work ensures seamless communication between databases, servers, and applications.",
      icon: <CiBellOn size={30} color="#FED33C" className="ml-auto" />,
    },
    {
      title: "Full Stack Developer",
      description:
        "I can handle both front-end and back-end tasks, enabling me to deliver complete and functional web solutions. I excel at integrating user interfaces with server-side systems to create seamless applications.",
      icon: <CiChat1 size={30} color="#FED33C" className="ml-auto" />,
    },
  ];
  
  const AboutMeSection = ({ title, description, icon }) => (
    <div className="px-6 py-4 bg-gradient-to-r bg-gray-800 bg-opacity-60 backdrop-blur-md shadow-lg rounded-lg mb-6">
      <h2 className="text-yellow-400 text-2xl font-bold mb-2">{title}</h2>
      <p className="text-white text-xl">{description}</p>
      {icon}
    </div>
  );
  import { CiPlay1, CiBellOn, CiChat1 } from "react-icons/ci";
  const Myself = () => (
    <div className="col-span-2">
      <div className="inline-block text-center group mb-5">
      <h2 className="inline-block text-center mb-5">
                    <span>About me</span>
                </h2>
      </div>
  
      {aboutMeSections.map((section, index) => (
        <AboutMeSection key={index} {...section} />
      ))}
    </div>
  );
  
  export default Myself;
  