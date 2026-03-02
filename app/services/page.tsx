import { Headset, Layers3, SearchCheck, Users } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="stack-xl">
      <section className="sub-banner">
        <Headset size={18} />
        <div>
          <h1>Services</h1>
          <p>Flexible expert-network solutions designed for speed, quality, and precision.</p>
        </div>
      </section>

      <section className="card stack-md">
        <h2><Users size={18} /> Expert Calls (1:1 Consultations)</h2>
        <p>One-on-one calls with carefully selected industry professionals.</p>

        <h2><Layers3 size={18} /> Multi-Expert Projects</h2>
        <p>Structured interview programs across segments or geographies.</p>

        <h2><SearchCheck size={18} /> Ongoing Research Support</h2>
        <ul>
          <li>Dedicated point of contact</li>
          <li>Fast turnaround</li>
          <li>Consistent quality standards</li>
        </ul>
      </section>
    </div>
  );
}
