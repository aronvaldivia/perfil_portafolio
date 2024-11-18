import React from 'react';

const TechStack: React.FC = () => {
  const technologies = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    }
  ];

  return (
    <div className="flex justify-center items-center gap-12 flex-wrap">
      {technologies.map((tech, index) => (
        <div key={index} className="text-center">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-20 h-20 mb-2 mx-auto transition-transform hover:scale-110"
          />
          <p className="text-gray-700 font-medium">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStack;