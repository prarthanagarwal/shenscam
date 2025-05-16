import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from '../lib/ThemeContext';
import { pageStyles, themeColors } from '../lib/utils';

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={pageStyles.mainBackground}>
      <div className="text-center p-12 bg-white/80 rounded-2xl shadow-lg">
        <h1 className="font-['Montserrat'] text-6xl font-bold mb-4 text-[#d1385b]">404</h1>
        <p className={pageStyles.subheading}>Oops! Page not found</p>
        <a 
          href="/" 
          className={pageStyles.button}
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
