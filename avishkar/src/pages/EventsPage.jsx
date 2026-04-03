import { EVENTS, openWA } from "../data/events";
import "./EventsPage.css";

export default function EventsPage({ onNav, onDetail }) {
  return (
    <div>
      <div className="page-hdr">
        <p className="ph-kicker">KBJIIT · Avishkar 2026</p>
        <h1 className="ph-h1">Avishkar Events.</h1>
        <p className="ph-p">
          Explore all competitions — click <em>Know More</em> for rules &amp;
          details, then hit <em>Register</em> to join via WhatsApp.
        </p>
        <button
          className="btn btn-ghost"
          onClick={() => alert("Brochure coming soon!")}
        >
          📄 Download Brochure
        </button>
      </div>
      <div className="events-body">
        <div className="events-grid">
          {EVENTS.map((e) => (
            <div className="ev-card" key={e.id}>
              <div className="ev-thumb" style={{ background: e.color }}>
                <span style={{ position: "relative", zIndex: 2 }}>
                  {e.icon}
                </span>
                <div className="ev-thumb-overlay"></div>
              </div>
              <div className="ev-body">
                <div className="ev-name">{e.name}</div>
                <div className="ev-cat">{e.cat}</div>
                <div className="ev-desc">{e.sub}</div>
                <div className="ev-btns">
                  <button
                    className="btn-sm btn-sm-ghost"
                    onClick={() => onDetail(e.id)}
                  >
                    🔍 Know More
                  </button>
                  <button
                    className="btn-sm btn-sm-solid"
                    onClick={() => openWA(e.id)}
                  >
                    ✏️ Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
