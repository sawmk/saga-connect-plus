import { ArrowRight, Briefcase, CheckCircle2, ShieldCheck, Timer } from "lucide-react";
import Link from "next/link";

const expertAccess = [
  "First-hand insights from former or current industry professionals",
  "Company-specific perspectives (former employees, competitors, suppliers, distributors)",
  "Market landscape understanding from experienced operators",
  "Functional expertise (sales, operations, supply chain, product, pricing)",
  "Geographic-specific industry knowledge",
  "Hard-to-access executive profiles and niche specialists",
];

const role = [
  "Understand your research objective",
  "Identify and approach relevant expert profiles",
  "Screen for relevance and communication quality",
  "Conduct conflict and compliance checks",
  "Arrange confidential 1:1 consultations",
  "Manage scheduling and coordination",
  "Conduct interviews when needed on behalf of clients",
];

export default function HomePage() {
  return (
    <div className="stack-xl">
      <section className="hero-banner">
        <div className="hero-content">
          <p className="eyebrow">Fast, Reliable Expert Insights</p>
          <h1>Saga Connect+</h1>
          <p className="lead">
            Expert insights and connections for critical business decisions. We connect
            consulting firms, private equity investors, and corporate strategy teams with
            carefully selected industry experts — quickly, discreetly, and with precision.
          </p>
          <div className="hero-cta-row">
            <Link href="/contact" className="btn-primary">
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
        <div className="hero-stats">
          <div className="mini-card">
            <Timer size={18} />
            <span>Speed without compromise</span>
          </div>
          <div className="mini-card">
            <ShieldCheck size={18} />
            <span>Confidential & compliant process</span>
          </div>
          <div className="mini-card">
            <Briefcase size={18} />
            <span>Senior-led project execution</span>
          </div>
        </div>
      </section>

      <section className="card stack-md">
        <h2>About Saga Connect+</h2>
        <p>
          Saga Connect+ is an independent expert network agency founded by seasoned
          management and strategy consulting veterans. We support consulting firms,
          investment teams, and corporate leaders during high-stakes decisions.
        </p>
      </section>

      <section className="card stack-md">
        <h2>What We Do</h2>
        <p>
          We provide end-to-end support from expert sourcing to interview execution, helping
          clients extract validated insights without friction.
        </p>
        <h3>We Facilitate Expert Access For</h3>
        <ul className="icon-list">
          {expertAccess.map((item) => (
            <li key={item}>
              <CheckCircle2 size={16} />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="card stack-md">
        <h2>Our Role</h2>
        <ul className="icon-list">
          {role.map((item) => (
            <li key={item}>
              <CheckCircle2 size={16} />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
