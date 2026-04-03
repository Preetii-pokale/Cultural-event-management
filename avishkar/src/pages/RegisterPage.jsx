import { EVENTS, openWA } from "../data/events";
import "./RegisterPage.css";

export default function RegisterPage() {
  return (
    <div>
      <div className="page-hdr">
        <p className="ph-kicker">Avishkar 2026</p>
        <h1 className="ph-h1">Register Now</h1>
        <p className="ph-p">
          Choose your event below. You'll be taken directly to WhatsApp with a
          pre-filled message to the event coordinator.
        </p>
      </div>
      <div className="reg-body">
        <div className="reg-inner">
          <p className="reg-intro">
            Tap any event to instantly open WhatsApp with the registration
            message ready to send. Each event has a dedicated coordinator.
          </p>
          <div className="reg-list">
            {EVENTS.map((e) => (
              <div className="reg-item" key={e.id} onClick={() => openWA(e.id)}>
                <div className="ri-icon">{e.icon}</div>
                <div className="ri-info">
                  <div className="ri-name">{e.name}</div>
                  <div className="ri-sub">{e.cat}</div>
                </div>
                <div className="ri-arr">→</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
