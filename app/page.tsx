const expertAccess = [
  "First-hand insights from former or current industry professionals",
  "Company-specific perspectives (former employees, competitors, suppliers, distributors)",
  "Market landscape understanding from experienced operators",
  "Functional expertise (sales, operations, supply chain, product, pricing)",
  "Geographic-specific industry knowledge",
  "Channel checks and ecosystem perspectives",
  "Validation of market assumptions and industry trends",
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
      <section className="hero card">
        <p className="eyebrow">Fast, Reliable Expert Insights</p>
        <h1>Saga Connect+</h1>
        <p className="lead">
          We connect consulting firms, private equity investors, and corporate strategy teams
          with carefully selected industry experts — quickly, discreetly, and with precision.
        </p>
      </section>

      <section className="card stack-md">
        <h2>About Saga Connect+</h2>
        <p>
          Saga Connect+ is an independent expert network agency founded by seasoned
          management and strategy consulting veterans. We support consulting firms,
          investment teams, and corporate leaders during high-stakes decisions.
        </p>
        <p>
          We manage the full process from understanding your research objective to expert
          matching, scheduling, discussion guide development, compliance oversight, and
          conducting interviews.
        </p>
      </section>

      <section className="card stack-md">
        <h2>What We Do</h2>
        <p>
          Saga Connect+ is an end-to-end expert networking agency that facilitates access to
          carefully selected industry professionals for structured, one-on-one consultations.
        </p>
        <h3>We Facilitate Expert Access For</h3>
        <ul>{expertAccess.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="card stack-md">
        <h2>Our Role</h2>
        <ul>{role.map((item) => <li key={item}>{item}</li>)}</ul>
        <p className="highlight">
          Saga Connect+ facilitates the connection and interviewing. The client receives
          ready-to-use validated insights.
        </p>
      </section>

      <section className="card stack-md">
        <h2>Why Clients Work With Us</h2>
        <ul>
          <li>Precision Matching — Carefully screened experts aligned to your objective.</li>
          <li>Speed Without Compromise — Short turnaround times with maintained quality.</li>
          <li>Senior-Led Process — Direct communication and accountability.</li>
          <li>Confidential &amp; Compliant — Structured compliance for professional engagements.</li>
        </ul>
        <h3>Who We Serve</h3>
        <ul>
          <li>Strategy consulting firms</li>
          <li>Private equity and investment firms</li>
          <li>Corporate strategy and business development teams</li>
        </ul>
      </section>
    </div>
  );
}
