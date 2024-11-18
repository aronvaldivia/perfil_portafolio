import React from 'react';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <Briefcase className="text-blue-700 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Experiencia Profesional</h3>
            <p className="text-gray-600">
              Desarrollador web con más de 5 años de experiencia en la creación de aplicaciones web modernas y escalables.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Code className="text-blue-700 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Especialización</h3>
            <p className="text-gray-600">
              Especializado en desarrollo frontend con React y TypeScript, creando interfaces intuitivas y responsivas.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <GraduationCap className="text-blue-700 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Formación</h3>
            <p className="text-gray-600">
              Graduado en Ingeniería de Software con un enfoque en desarrollo web y arquitectura de aplicaciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;