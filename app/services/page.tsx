import { Headset, Layers3, SearchCheck, Users } from "lucide-react";

const services = [
  {
    title: "Expert Calls (1:1 Consultations)",
    copy: "Direct conversations with carefully screened industry professionals matched to a defined brief.",
    icon: Users,
  },
  {
    title: "Multi-Expert Workstreams",
    copy: "Structured interview programs across customer segments, channels, geographies, or competitor sets.",
    icon: Layers3,
  },
  {
    title: "Embedded Research Support",
    copy: "Ongoing sourcing coverage for teams that need consistent throughput, fast iteration, and dependable QA.",
    icon: SearchCheck,
  },
];

const deliveryPoints = [
  "Single accountable point of contact for scoping, updates, and execution",
  "Fast turnaround calibrated to live diligence and strategy deadlines",
  "Profile screening with a clear quality threshold before client review",
  "Support for discussion guides and interview coordination when needed",
];

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <section className="sub-banner">
        <Headset size={18} />
        <div>
          <h1>Services</h1>
          <p>
            Flexible expert-network solutions built for quality, speed, and cleaner
            commercial signal.
          </p>
        </div>
      </section>

      <section className="card stack-lg">
        <div className="section-head">
          <Headset size={18} />
          <div>
            <p className="section-kicker">Solutions</p>
            <h2>Service models that adapt to the pace of your project</h2>
          </div>
        </div>
        <div className="card-grid">
          {services.map(({ title, copy, icon: Icon }) => (
            <div className="detail-card" key={title}>
              <Icon size={18} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card stack-lg">
        <div className="section-head">
          <SearchCheck size={18} />
          <div>
            <p className="section-kicker">Delivery Standard</p>
            <h2>What clients can expect in every engagement</h2>
          </div>
        </div>
        <ul className="icon-list">
          {deliveryPoints.map((item) => (
            <li key={item}>
              <SearchCheck size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
