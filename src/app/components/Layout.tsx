import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useApp } from '../AppContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export function Layout() {
  const { lang, setLang, t } = useApp();
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main className="flex flex-col flex-1">
        <Outlet />
      </main>
      <Footer t={t} />
    </div>
  );
}
