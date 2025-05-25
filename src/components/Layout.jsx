import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const routeSteps = {
  '/home': 1,
  '/personal-details': 2,
  '/drink-purpose': 3,
  '/drink-base': 4,
  '/flavour-profile': 5,
  '/drink-result-confirmation': 6,
  '/drink-result-label': 7,
  '/drink-result': 8,
};

function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  useEffect( () => {
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
      if (path !== '/home'){
        navigate('/home', { replace: true });
      }
    }
  },[])

  const showProgressBar = path !== '/home' && path !== '/drink-result' && path !== '/drink-result-confirmation/refine';
  const currentStep = routeSteps[path] || 1;

  console.log('Current Path:', path);

  return (
    <div className="h-screen overflow-hidden relative">
      {showProgressBar && (
        <ProgressBar currentStep={currentStep} totalSteps={8} />
      )}
      <div className="h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

export default Layout;