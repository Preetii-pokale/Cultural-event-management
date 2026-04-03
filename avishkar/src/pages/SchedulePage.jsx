import { useState } from 'react';
import './SchedulePage.css';

const DAYS = [
  {
    label: 'Day 1 — 6 June',
    date: '6th June 2026',
    items: [
      { time: 'Morning',           ev: '🎉 Inauguration',                desc: 'Marking the grand beginning with tradition & pride. Join us as we unveil the start of something extraordinary.' },
      { time: 'After Inauguration',ev: '🔥 Deep Prajwalan',              desc: 'Igniting the flame of wisdom and prosperity. A sacred start to illuminate our journey ahead.' },
      { time: 'Mid Morning',       ev: '🎙️ Speech by Dignitaries',       desc: 'Words that inspire, stories that ignite. Voices shaping the spirit of the event.' },
      { time: 'Afternoon',         ev: '💃 Opening Dance Performance',   desc: 'A rhythmic tribute to tradition and joy. Let the stage come alive with music and movement.' },
      { time: 'Evening',           ev: '🌟 Interview of Chief Guest',    desc: 'Insights from a visionary mind. A conversation that enlightens and inspires.' },
      { time: 'Night',             ev: '🎭 Dance, Singing & Drama',      desc: 'Expressions that move the soul. A vibrant showcase of talent and culture.' },
    ],
  },
  {
    label: 'Day 2 — 7 June',
    date: '7th June 2026',
    items: [
      { time: '10:00 AM', ev: '🎤 SWARSANGAM — Singing Competition', desc: 'Solo and duet singing. Step up to the mic and let your voice do the magic.' },
      { time: '11:30 AM', ev: '💃 NRITYATARANG — Dance Competition', desc: 'Solo, duet, and group dance. Let every beat tell a story.' },
      { time: '2:00 PM',  ev: '🥁 VADYAVISHWA — Music Competition',  desc: 'Battle of bands and instruments. Let the music shake the stage.' },
      { time: '4:00 PM',  ev: '🎙️ ANTARNAAD — Open Mic',             desc: 'Poetry, spoken word, comedy. Let the voice of your mind be heard.' },
      { time: '6:00 PM',  ev: '🎨 Fine Arts Exhibition',             desc: 'Canvas, color, creativity — express your vision in strokes.' },
    ],
  },
  {
    label: 'Day 3 — 8 June',
    date: '8th June 2026',
    items: [
      { time: '10:00 AM', ev: '🧠 Core Brainworkout — Quiz',          desc: 'All students eligible. Test your tech knowledge and intellect.' },
      { time: '11:00 AM', ev: '🎭 NATYAGANDH — Drama Competition',    desc: 'Solo, duet, and group drama. Bring your story to life on stage.' },
      { time: '2:00 PM',  ev: '🎬 Short Film Screening',              desc: 'Lights, camera, action — cinematic stories told by students.' },
      { time: '4:00 PM',  ev: '👗 Fashion Show',                      desc: 'Style, elegance, and flair — walk the ramp and own the stage.' },
      { time: '7:00 PM',  ev: '🏆 Prize Distribution & Valedictory',  desc: 'Champions crowned. Memories made. Until next Vismay!' },
    ],
  },
];

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div>
      <div className="page-hdr">
        <h1 className="ph-h1">Run of Show</h1>
        <p className="ph-p">
          Three days of electrifying performances, competitions, and celebrations.
          Celebrate culture, talent, and innovation at Avishkar 2026.
        </p>
      </div>
      <div className="sched-body">
        <div className="sched-inner">
          <div className="day-tabs">
            {DAYS.map((day, i) => (
              <button
                key={i}
                className={`day-tab${activeDay === i ? ' on' : ''}`}
                onClick={() => setActiveDay(i)}
              >
                {day.label}
              </button>
            ))}
          </div>
          <div className="day-date">{DAYS[activeDay].date}</div>
          <div className="timeline">
            {DAYS[activeDay].items.map((item, i) => (
              <div className="tl-item" key={i}>
                <div className="tl-dot"></div>
                <div className="tl-time">{item.time}</div>
                <div className="tl-ev">{item.ev}</div>
                <div className="tl-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
