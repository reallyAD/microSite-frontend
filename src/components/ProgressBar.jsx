import React from 'react';

function ProgressBar({ currentStep, totalSteps }) {
  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div className="sticky top-0 left-0 w-full z-50">
      <div className="w-2/5 h-4 bg-white/20 rounded-full overflow-hidden mx-auto mt-4">
        <div
          className="h-full bg-lime-300 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;