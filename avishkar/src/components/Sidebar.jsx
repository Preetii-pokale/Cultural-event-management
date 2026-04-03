import './Sidebar.css';

const NAV_ITEMS = [
  { key: 'home',     icon: '🏠', label: 'Home' },
  { key: 'gallery',  icon: '🖼',  label: 'Gallery' },
  { key: 'events',   icon: '🏆', label: 'Events' },
  { key: 'schedule', icon: '📅', label: 'Schedule' },
  { key: 'register', icon: '✍️', label: 'Register' },
  { key: 'contact',  icon: '✉',  label: 'Contact' },
];

export default function Sidebar({ currentPage, onNav }) {
  return (
    <nav id="sidebar">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.key}
          className={`sb-btn${currentPage === item.key ? ' on' : ''}`}
          onClick={() => onNav(item.key)}
        >
          {item.icon}
          <span className="sb-tip">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
