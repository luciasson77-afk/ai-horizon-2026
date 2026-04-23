import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Speakers from './components/Speakers';
import Highlights from './components/Highlights';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './components/About';
import Program from './components/Program';
import Venue from './components/Venue';
import RegistrationForm from './components/RegistrationForm';
import SideEvents from './components/SideEvents';

export type Page = 'home' | 'about' | 'program' | 'venue' | 'registration' | 'events';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'program':
        return <Program />;
      case 'venue':
        return <Venue />;
      case 'registration':
        return <RegistrationForm />;
      case 'events':
        return <SideEvents />;
      default:
        return (
          <>
            <Hero onRegister={() => setCurrentPage('registration')} />
            <BentoGrid />
            <Speakers />
            <Highlights />
            <CTA onRegister={() => setCurrentPage('registration')} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="pt-16">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

