import { useEffect } from 'react';

export const useCursorTracker = () => {
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', e.clientX.toString());
      document.documentElement.style.setProperty('--cursor-y', e.clientY.toString());
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);
};
