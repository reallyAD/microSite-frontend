import React from 'react';

function ProgressBar({ currentStep, totalSteps }) {
  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="w-2/5 h-7 bg-white/20 mt-8 rounded-full overflow-hidden mx-auto outlined border-4">
        <div
          className="h-full bg-green rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
