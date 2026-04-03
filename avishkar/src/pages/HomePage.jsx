import { useState, useEffect } from "react";
import "./HomePage.css";

const CD_TARGET = new Date("2025-06-06T09:00:00");

function useCountdown() {
  const [time, setTime] = useState({ d: "00", h: "00", m: "00", s: "00" });
  useEffect(() => {
    function tick() {
      const diff = CD_TARGET - new Date();
      if (diff <= 0) {
        setTime({ d: "00", h: "00", m: "00", s: "00" });
        return;
      }
      setTime({
        d: String(Math.floor(diff / 86400000)).padStart(2, "0"),
        h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0"),
        m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"),
        s: String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function HomePage({ onNav }) {
  const time = useCountdown();

  return (
    <div>
      {/* HERO */}
      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-moon"></div>
        <div className="hero-body">
          <p className="hero-eyebrow">Annual Cultural Event</p>
          <h1 className="hero-name">Avishkar</h1>
          <div className="hero-year">2 0 2 6</div>
          <p className="hero-line">
            More than just a story — <em>it's a legacy</em>
          </p>
          <div className="hero-actions">
            <button className="btn btn-ghost" onClick={() => onNav("events")}>
              🎭 Explore Events
            </button>
            <button className="btn btn-solid" onClick={() => onNav("register")}>
              🚀 Register Now
            </button>
            <div className="chip">06 / 06 / 2026</div>
          </div>
          <div className="hero-cd">
            <p className="cd-label">Event starts in</p>
            <div className="cd-row">
              {[
                ["d", "Days"],
                ["h", "Hours"],
                ["m", "Mins"],
                ["s", "Secs"],
              ].map(([key, label]) => (
                <div className="cd-box" key={key}>
                  <span className="cd-num">{time[key]}</span>
                  <span className="cd-unit">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="home-about">
        <div className="ha-wrap">
          <div className="card ha-card">
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div className="vlogo">
                <div>
                  <div className="vlogo-text">Avishkar</div>
                  <div className="vlogo-yr">2026</div>
                </div>
              </div>
            </div>
            <p className="section-tag">Who We Are</p>
            <h2 className="section-title">About Avishkar 2026</h2>
            <div className="section-rule"></div>
            <p className="section-body">
              Avishkar, the annual cultural event of KBJIIT, is a highly
              anticipated celebration that showcases the talents of students,
              faculty, and staff. This iconic event has been a legacy of
              creativity, passion, and unity.
            </p>
            <p className="section-body" style={{ marginTop: 12 }}>
              At our college, we believe that growth comes not just from
              academics, but also from shared experiences, challenges, and
              learning beyond the classroom.
            </p>
            <a href="#" className="read-link">
              Read More →
            </a>

            <div className="profiles-row">
              <div className="pcard">
                <div className="pimg">👨‍⚕️</div>
                <div className="ptitle">Dean's Message</div>
                <p className="ptext">
                  At our college, we believe that growth comes not just from
                  academics, but also from shared experiences and learning
                  beyond the classroom…
                </p>
                <a href="#" className="read-link">
                  Read More →
                </a>
              </div>
              <div className="pcard">
                <div className="pimg">🩺</div>
                <div className="ptitle">MS's Message</div>
                <p className="ptext">
                  College life is more than lectures and textbooks — it's about
                  finding balance, building connections, and growing into
                  well-rounded individuals…
                </p>
                <a href="#" className="read-link">
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="home-footer">
        <div className="footer-moon"></div>
        <div className="footer-main">
          <div className="footer-mmm">
            Myth
            <br />
            <span>Maya</span>
            <br />
            Mystery!
          </div>
          <p className="footer-sub">Avishkar 2026 · KBJIIT</p>
          <div className="footer-links">
            <a
              href="https://instagram.com/aavishkar_.2025"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              📸
            </a>
            <a
              href="https://wa.me/917620804566?text=Hello%20Aavishkar%20Team"
              target="_blank"
              rel="noreferrer"
              title="WhatsApp"
            >
              💬
            </a>
            <a href="preetipokale06@gmail.com" title="Email">
              ✉
            </a>
            <a
              href="https://maharshikarvebcapune.org/"
              target="_blank"
              rel="noreferrer"
              title="Website"
            >
              🌐
            </a>
          </div>
          <button className="btn btn-solid" onClick={() => onNav("events")}>
            🎭 Explore All Events
          </button>
        </div>
        <div className="footer-bar">
          <p className="footer-copy">
            © 2025 Avishkar, All rights reserved; Designed &amp; Development by
            Preeti Pokale &amp; Komal Margale
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <a
              href="https://instagram.com/aavishkar_.2025"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "var(--text-muted)",
                fontSize: 17,
                textDecoration: "none",
              }}
            >
              📸
            </a>
            <a
              href="https://wa.me/917620804566?text=Hello%20Aavishkar%20Team"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "var(--text-muted)",
                fontSize: 17,
                textDecoration: "none",
              }}
            >
              💬
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
