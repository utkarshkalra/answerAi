import React from "react";

interface KpiCardProps {
  title: string;
  value: string;
  description: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, description }) => {
  return (
    <div className="bg-graph-background p-6 rounded-lg border border-card-border relative">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium font-sans">{title}</h3>
        <span>
          <img src=" icons/info.svg" alt="info" />
        </span>
      </div>
      <p className="text-xs text-text-secondary-color">{description}</p>
      <p className="text-3xl font-bold roobert-font absolute bottom-6 right-6">
        {value}
      </p>
    </div>
  );
};

export default KpiCard;
