import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div>
      <div className="page-hdr">
        <h1 className="ph-h1">Contact Us</h1>
        <p className="ph-p">
          Reach out to the Avishkar 2026 team for any queries or support.
        </p>
      </div>
      <div className="contact-body">
        <p className="contact-info">📧 avishkar@kbjiit.in</p>
        <p className="contact-info">
          📸{" "}
          <a
            href="https://instagram.com/aavishkar_.2025"
            target="_blank"
            rel="noreferrer"
          >
            @Aavishkar2026
          </a>
        </p>
        <p className="contact-info">
          💬{" "}
          <a
            href="https://wa.me/917887688858?text=Hello%20Avishkar%20Team"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp us
          </a>
        </p>
        <p className="contact-info">
          🌐{" "}
          <a
            href="https://maharshikarvebcapune.org/"
            target="_blank"
            rel="noreferrer"
          >
            kbjiit.in
          </a>
        </p>
      </div>
    </div>
  );
}
