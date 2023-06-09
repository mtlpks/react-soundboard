import { useEffect } from 'react';

function useKeyboard(key, func) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === key) {
        event.preventDefault();
        func();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, func]);
}

export default useKeyboard;