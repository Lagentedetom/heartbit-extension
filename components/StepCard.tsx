import React from 'react';
import { FeatureStep } from '../types';

interface StepCardProps {
  step: FeatureStep;
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-card-light dark:bg-card-dark rounded-xl shadow-lg border border-border-light dark:border-border-dark hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center bg-primary/10 text-primary w-20 h-20 rounded-full mb-6">
        <span className="material-icons text-4xl">{step.icon}</span>
      </div>
      <h3 className="font-display text-3xl mb-2 text-primary">
        {step.id}. {step.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
};

export default StepCard;