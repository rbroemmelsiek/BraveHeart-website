import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { activeLocationHash, scrollToHashTarget } from '../lib/scrollToHashTarget';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollForActiveHash = () => {
      const activeHash = activeLocationHash(hash);
      if (!activeHash) return false;

      const id = activeHash.replace('#', '');
      return scrollToHashTarget(id);
    };

    if (!activeLocationHash(hash)) {
      window.scrollTo(0, 0);
      return;
    }

    scrollForActiveHash();
    const timers = [50, 200, 500, 1000, 1500, 2000].map((delay) =>
      window.setTimeout(scrollForActiveHash, delay)
    );
    window.addEventListener('hashchange', scrollForActiveHash);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener('hashchange', scrollForActiveHash);
    };
  }, [pathname, hash]);

  return null;
}
