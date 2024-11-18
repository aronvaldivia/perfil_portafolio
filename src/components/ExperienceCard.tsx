import React from 'react';

interface ExperienceCardProps {
  title: string;
  company?: string;
  institution?: string;
  period: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  institution,
  period,
  description
}) => {
  return (
    <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-semibold text-gray-800 mb-1">{title}</h4>
      <p className="text-blue-700 font-medium mb-2">{company || institution}</p>
      <p className="text-gray-600 text-sm mb-3">{period}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ExperienceCard;