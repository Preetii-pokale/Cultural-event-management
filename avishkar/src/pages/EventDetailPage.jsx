import { EVENTS, openWA } from '../data/events';
import './EventDetailPage.css';

export default function EventDetailPage({ eventId, onBack }) {
  const e = EVENTS.find((x) => x.id === eventId);
  if (!e) return null;

  return (
    <div className="detail-inner">
      <button className="det-back" onClick={onBack}>
        ← Back to Events
      </button>
      <h1 className="det-name">{e.name}</h1>
      <p className="det-cat">{e.cat}</p>
      <p className="det-desc">{e.desc}</p>
      <p className="det-rules-title">Rules &amp; Guidelines</p>
      <ul className="det-rules">
        {e.rules.map((rule, i) => (
          <li key={i}>{rule}</li>
        ))}
      </ul>
      <p className="det-winner">🏆 {e.winner}</p>
      <div className="det-reg">
        <button className="btn btn-solid" onClick={() => openWA(e.id)}>
          📲 Register via WhatsApp
        </button>
        <button className="btn btn-ghost" onClick={onBack}>
          ← All Events
        </button>
      </div>
    </div>
  );
}
