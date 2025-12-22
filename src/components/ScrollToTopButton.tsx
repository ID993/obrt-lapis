import { useState, useEffect } from 'react';
import { ChevronsUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#3c62a3] text-white rounded shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-110 border-2 border-white"
          aria-label="Scroll to top"
        >
          <ChevronsUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
