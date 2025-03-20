import React from 'react';

const SkillBar = ({ skill, delay, animate }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-300">{skill.name}</span>
        <span className="text-indigo-400">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-1000 ease-in-out"
          style={{
            width: animate ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`,
            boxShadow: '0 0 8px rgba(99, 102, 241, 0.3)'
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;