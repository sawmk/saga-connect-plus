import { BarChart3, Building, Factory, Landmark } from "lucide-react";

export default function ClientsPage() {
  return (
    <div className="stack-xl">
      <section className="sub-banner">
        <BarChart3 size={18} />
        <div>
          <h1>Client Sectors &amp; Experience</h1>
          <p>Strong track record supporting strategy, investment, and corporate teams.</p>
        </div>
      </section>

      <section className="card stack-md">
        <h2><Building size={18} /> Strategy &amp; Management Consulting</h2>
        <ul>
          <li>85+ projects supported</li>
          <li>Commercial due diligence, market entry strategy, growth planning</li>
        </ul>

        <h2><Landmark size={18} /> Private Equity &amp; Investment Firms</h2>
        <ul>
          <li>60+ investment cases supported</li>
          <li>Mid-market and large-cap funds, VC and growth equity investors</li>
        </ul>

        <h2><Factory size={18} /> Corporate Strategy Teams</h2>
        <ul>
          <li>45+ corporate engagements</li>
          <li>Market evaluation, partnerships, and operational benchmarking</li>
        </ul>
      </section>
    </div>
  );
}
