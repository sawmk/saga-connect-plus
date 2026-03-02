import { Compass, Gem, Handshake, Shield, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="stack-xl">
      <section className="sub-banner">
        <Sparkles size={18} />
        <div>
          <h1>About Saga Connect+</h1>
          <p>Trusted expert-network partner for high-stakes consulting and investment work.</p>
        </div>
      </section>

      <section className="card stack-md">
        <h2>How Saga Connect+ Is Different</h2>
        <ul className="icon-list">
          <li><Gem size={16} />Focused, not volume-driven project execution.</li>
          <li><Handshake size={16} />Senior-led engagement with experienced team members.</li>
          <li><Compass size={16} />Precision over quantity in every profile shortlist.</li>
          <li><Shield size={16} />High-integrity compliance and confidentiality process.</li>
        </ul>
      </section>

      <section className="card stack-md">
        <h2>Our Approach</h2>
        <ol>
          <li>Understand the objective and exact expert profile required.</li>
          <li>Source professionals with direct, relevant experience.</li>
          <li>Screen for relevance, credibility, and communication quality.</li>
          <li>Manage coordination, scheduling, and compliance documentation.</li>
          <li>Develop discussion guides and conduct interviews as needed.</li>
        </ol>
      </section>
    </div>
  );
}
