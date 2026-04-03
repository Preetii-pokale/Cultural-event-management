import { useState } from 'react';
import './index.css';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import RegisterPage from './pages/RegisterPage';
import GalleryPage from './pages/GalleryPage';
import SchedulePage from './pages/SchedulePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState(null);

  function nav(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function openDetail(eventId) {
    setSelectedEvent(eventId);
    nav('detail');
  }

  // Sidebar highlights 'events' when on detail page too
  const sidebarPage = currentPage === 'detail' ? 'events' : currentPage;

  return (
    <>
      <Topbar />
      <Sidebar currentPage={sidebarPage} onNav={nav} />

      <div id="pg-home" className={`pg${currentPage === 'home' ? ' show' : ''}`}>
        <HomePage onNav={nav} />
      </div>

      <div id="pg-events" className={`pg${currentPage === 'events' ? ' show' : ''}`}>
        <EventsPage onNav={nav} onDetail={openDetail} />
      </div>

      <div id="pg-detail" className={`pg${currentPage === 'detail' ? ' show' : ''}`}>
        <EventDetailPage eventId={selectedEvent} onBack={() => nav('events')} />
      </div>

      <div id="pg-register" className={`pg${currentPage === 'register' ? ' show' : ''}`}>
        <RegisterPage />
      </div>

      <div id="pg-gallery" className={`pg${currentPage === 'gallery' ? ' show' : ''}`}>
        <GalleryPage />
      </div>

      <div id="pg-schedule" className={`pg${currentPage === 'schedule' ? ' show' : ''}`}>
        <SchedulePage />
      </div>

      <div id="pg-contact" className={`pg${currentPage === 'contact' ? ' show' : ''}`}>
        <ContactPage />
      </div>
    </>
  );
}
