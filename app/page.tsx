import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Globe2,
  Quote,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";
import Link from "next/link";

const expertAccess = [
  "Former and current operators with direct category expertise",
  "Competitors, suppliers, distributors, and channel-side voices",
  "Functional leaders across pricing, growth, product, and operations",
  "Regional specialists for market-entry and expansion work",
  "Difficult-to-reach executive profiles and niche subject experts",
  "Interview-ready experts screened for signal quality and relevance",
];

const deliveryModel = [
  {
    title: "Rapid project intake",
    copy: "A focused kickoff aligns the brief, urgency, and exact expert profile from the start.",
    icon: Timer,
  },
  {
    title: "Precision sourcing",
    copy: "We shortlist for direct relevance instead of flooding teams with loosely matched profiles.",
    icon: Briefcase,
  },
  {
    title: "Protected execution",
    copy: "Compliance review, discreet coordination, and clean documentation stay built into every step.",
    icon: ShieldCheck,
  },
];

const operatingSteps = [
  "Define the commercial question, audience, and decision context.",
  "Source and screen experts for direct, first-hand relevance.",
  "Run conflict and compliance checks before scheduling.",
  "Coordinate interviews and support discussion guide development.",
  "Deliver fast follow-through for follow-up calls or multi-expert workstreams.",
];

const proofMetrics = [
  {
    value: "85+",
    label: "consulting-led strategy and diligence projects supported",
  },
  {
    value: "60+",
    label: "private equity and investment cases executed",
  },
  {
    value: "45+",
    label: "corporate strategy mandates across multiple sectors",
  },
];

const feedbackCards = [
  {
    quote:
      "Replace this with a verified client quote about speed, expert quality, or responsiveness.",
    source: "Placeholder: Consulting Client",
  },
  {
    quote:
      "Replace this with a verified client quote focused on diligence support, precision matching, or communication quality.",
    source: "Placeholder: Investment Client",
  },
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="hero-banner">
        <div className="hero-content stack-lg">
          <div className="hero-copy">
            <p className="eyebrow">Release-Ready Expert Network Partner</p>
            <h1>Saga Connect+</h1>
            <p className="lead">
              We connect consulting firms, private equity teams, and corporate strategy
              leaders with carefully matched experts for urgent, high-stakes decisions.
            </p>
            <p className="lead">
              The model is built for speed, discretion, and interview quality, so your team
              gets decision-grade insight without operational drag.
            </p>
          </div>
          <div className="hero-cta-row">
            <Link href="/contact" className="btn-primary">
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-secondary">
              Review Solutions
            </Link>
          </div>
        </div>

        <div className="hero-stats">
          <div className="mini-card">
            <Sparkles size={18} />
            <div>
              <strong>Senior-led</strong>
              <span>Hands-on execution from experienced research operators.</span>
            </div>
          </div>
          <div className="mini-card">
            <Timer size={18} />
            <div>
              <strong>Fast turnaround</strong>
              <span>Built to support live deal, diligence, and strategy timelines.</span>
            </div>
          </div>
          <div className="mini-card">
            <Globe2 size={18} />
            <div>
              <strong>Global coverage</strong>
              <span>Cross-border sourcing for niche sectors and local market context.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="card stack-lg">
        <div className="section-head">
          <Sparkles size={18} />
          <div>
            <p className="section-kicker">What Makes The Platform Effective</p>
            <h2>Designed for sharper expert access</h2>
          </div>
        </div>
        <p>
          Saga Connect+ is an independent expert-network agency founded by strategy and
          consulting veterans. We focus on precision execution for teams that need clean,
          relevant insight fast.
        </p>
        <div className="card-grid">
          {deliveryModel.map(({ title, copy, icon: Icon }) => (
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
          <Briefcase size={18} />
          <div>
            <p className="section-kicker">Coverage</p>
            <h2>Expert access built around commercial relevance</h2>
          </div>
        </div>
        <ul className="icon-list">
          {expertAccess.map((item) => (
            <li key={item}>
              <CheckCircle2 size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="card stack-lg">
        <div className="section-head">
          <ShieldCheck size={18} />
          <div>
            <p className="section-kicker">Operating Model</p>
            <h2>Clear, controlled execution from brief to call</h2>
          </div>
        </div>
        <ul className="timeline-list">
          {operatingSteps.map((step, index) => (
            <li key={step}>
              <span className="timeline-step">{index + 1}</span>
              <span className="timeline-title">{step}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="card stack-lg">
        <div className="section-head">
          <Quote size={18} />
          <div>
            <p className="section-kicker">Proof & Client Feedback</p>
            <h2>Track record visible at a glance</h2>
          </div>
        </div>
        <div className="stats-strip">
          {proofMetrics.map((metric) => (
            <div className="stat-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <p>{metric.label}</p>
            </div>
          ))}
        </div>
        <div className="card-grid two-up">
          {feedbackCards.map((item) => (
            <div className="quote-card" key={item.source}>
              <span className="quote-mark" aria-hidden>
                &ldquo;
              </span>
              <blockquote>{item.quote}</blockquote>
              <cite>{item.source}</cite>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-panel">
        <div className="stack-md">
          <p className="section-kicker">Ready For Launch</p>
          <h2>Move from open questions to validated expert insight</h2>
          <p>
            Share the sector, geography, and timeline. We will structure the search and
            begin sourcing against the right brief immediately.
          </p>
        </div>
        <Link href="/contact" className="btn-primary">
          Contact Saga Connect+ <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
