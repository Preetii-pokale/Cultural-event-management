import './GalleryPage.css';

const GALLERY_ITEMS = [
  { src: 'drama.jpg',   h: '200px', c: '#1a2a18' },
  { src: 'singing.jpg', h: '155px', c: '#18201a' },
  { src: 'drum.jpeg',   h: '175px', c: '#0a1828' },
  { src: 'mime.jpg',    h: '215px', c: '#1e1008' },
  { src: 'art.jpg',     h: '158px', c: '#1a1a08' },
  { src: 'drama2.jpg',  h: '192px', c: '#08181a' },
  { src: 'fest.jpg',    h: '168px', c: '#12082a' },
  { src: 'all.jpg',     h: '200px', c: '#1c0808' },
  { src: 'drama3.jpg',  h: '152px', c: '#081018' },
  { src: 'fest2.jpg',   h: '185px', c: '#0a1820' },
  { src: 'ramp.jpg',    h: '162px', c: '#18120a' },
  { src: 'concert.jpg', h: '195px', c: '#0a1a10' },
];

export default function GalleryPage() {
  return (
    <div>
      <div className="page-hdr">
        <h1 className="ph-h1 gallery-h1">Gallery</h1>
        <p className="ph-p">
          Explore unforgettable moments from fest at K.B. Joshi Institute. Dive
          into the world of creativity, experience groundbreaking innovations,
          and get inspired.
        </p>
      </div>
      <div className="gallery-body">
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, i) => (
            <div className="g-item" key={i}>
              <div
                className="g-ph"
                style={{ '--h': item.h, '--c': item.c }}
              >
                <img src={item.src} alt={`Gallery ${i + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
