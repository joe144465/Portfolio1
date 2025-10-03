
import { useState, useEffect } from "react";

const skills = [
  { label: "Teamwork", percentage: 85, color: "#3B82F6" },
  { label: "Fast Learning", percentage: 90, color: "#0cff18" },
  { label: "Personal", percentage: 60, color: "#10B981" },
  { label: "Music", percentage: 90, color: "#EF4444" },
];

export default function Circle() {
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skills.map(skill => skill.percentage));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
<div className="grid grid-cols-2 lg:grid-cols-1 gap-6 mt-8">
          {skills.map((skill, index) => {
        const strokeDashoffset =
          circumference - (progress[index] / 100) * circumference;
        return (
          <div key={index} className="flex flex-col items-center">
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="#E5E7EB"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
              <circle
                stroke={skill.color}
                fill="transparent"
                strokeWidth={stroke}
                strokeLinecap="round"
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <span className="text-md font-medium text-white mt-2">
              {skill.label}
            </span>
            <span className="text-md text-white">{skill.percentage}%</span>
          </div>
        );
      })}
    </div>
  );
}
