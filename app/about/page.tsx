import { Compass, Gem, Handshake, Shield, Sparkles } from "lucide-react";

const differentiators = [
  {
    title: "Focused delivery",
    copy: "Projects are run for relevance and responsiveness, not volume.",
    icon: Gem,
  },
  {
    title: "Experienced operators",
    copy: "Senior team members stay close to the brief and the candidate quality bar.",
    icon: Handshake,
  },
  {
    title: "Commercial precision",
    copy: "Every shortlist is shaped around the decision being made, not generic credentials.",
    icon: Compass,
  },
  {
    title: "High-integrity controls",
    copy: "Confidentiality, compliance, and expert screening remain non-negotiable.",
    icon: Shield,
  },
];

const approach = [
  "Clarify the exact business question and define the expert profile.",
  "Source professionals with direct experience in the relevant market, function, or value chain.",
  "Screen for signal quality, relevance, and communication strength before introducing candidates.",
  "Manage scheduling, compliance, and stakeholder coordination with minimal client friction.",
  "Support discussion design and interview execution for more structured workstreams.",
];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="sub-banner">
        <Sparkles size={18} />
        <div>
          <h1>About Saga Connect+</h1>
          <p>
            A specialist partner for expert-led research supporting diligence, growth, and
            strategic decision-making.
          </p>
        </div>
      </section>

      <section className="card stack-lg">
        <div className="section-head">
          <Sparkles size={18} />
          <div>
            <p className="section-kicker">Positioning</p>
            <h2>Built to operate like a high-trust research partner</h2>
          </div>
        </div>
        <p>
          Saga Connect+ was created to give consulting, investment, and strategy teams a
          more disciplined option for expert access. The operating style is boutique,
          responsive, and quality-controlled from intake through interview delivery.
        </p>
        <div className="card-grid">
          {differentiators.map(({ title, copy, icon: Icon }) => (
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
          <Compass size={18} />
          <div>
            <p className="section-kicker">Method</p>
            <h2>How engagements are executed</h2>
          </div>
        </div>
        <ul className="timeline-list">
          {approach.map((step, index) => (
            <li key={step}>
              <span className="timeline-step">{index + 1}</span>
              <span className="timeline-title">{step}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
