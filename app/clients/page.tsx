import { BarChart3, Building, Factory, Landmark } from "lucide-react";

const sectors = [
  {
    title: "Strategy & Management Consulting",
    metric: "85+",
    summary: "Projects spanning commercial due diligence, growth strategy, market entry, and portfolio value creation.",
    icon: Building,
  },
  {
    title: "Private Equity & Investment Firms",
    metric: "60+",
    summary: "Support across mid-market, large-cap, growth equity, and venture-led investment processes.",
    icon: Landmark,
  },
  {
    title: "Corporate Strategy Teams",
    metric: "45+",
    summary: "Internal strategic work including market evaluation, operating benchmarks, and partnership assessment.",
    icon: Factory,
  },
];

export default function ClientsPage() {
  return (
    <div className="page-shell">
      <section className="sub-banner">
        <BarChart3 size={18} />
        <div>
          <h1>Client Sectors &amp; Experience</h1>
          <p>
            Proven support across consulting, investing, and in-house strategy mandates.
          </p>
        </div>
      </section>

      <section className="card stack-lg">
        <div className="section-head">
          <BarChart3 size={18} />
          <div>
            <p className="section-kicker">Track Record</p>
            <h2>Experience aligned with the most demanding use cases</h2>
          </div>
        </div>
        <div className="stats-strip">
          {sectors.map(({ title, metric, summary, icon: Icon }) => (
            <div className="stat-card" key={title}>
              <Icon size={18} />
              <strong>{metric}</strong>
              <h3>{title}</h3>
              <p>{summary}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
