import Link from "next/link";
import { Globe, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

const contactItems = [
  {
    label: "Email",
    value: "info@sagaconnectplus.com",
    href: "mailto:info@sagaconnectplus.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+66 632034688",
    icon: Phone,
  },
  {
    label: "Website",
    value: "sagaconnectplus.com",
    href: "https://sagaconnectplus.com",
    icon: Globe,
  },
  {
    label: "LinkedIn",
    value: "Saga Connect+ LinkedIn",
    href: "https://www.linkedin.com/company/saga-connect-plus/",
    icon: Linkedin,
  },
  {
    label: "Location",
    value: "Unit 2A 17/F, Glenealy Tower, No.1 Glenealy, Central, Hong Kong S.A.R",
    icon: MapPin,
  },
];

const projectChecklist = [
  "Industry or sub-sector",
  "Target geography or market coverage",
  "Type of expert profile needed",
  "Timeline and call volume",
];

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="sub-banner">
        <Mail size={18} />
        <div>
          <h1>Get in Touch</h1>
          <p>
            Send the project scope, target expert profile, and timing. We will respond
            quickly with the right next step.
          </p>
        </div>
      </section>

      <section className="card">
        <div className="contact-grid">
          <div className="stack-lg">
            <div className="section-head">
              <Send size={18} />
              <div>
                <p className="section-kicker">Project Intake</p>
                <h2>Share a concise brief to start sourcing faster</h2>
              </div>
            </div>
            <p>
              For the quickest response, include the core business question and the type
              of expert perspective required. We can refine the scope from there.
            </p>
            <ul className="icon-list">
              {projectChecklist.map((item) => (
                <li key={item}>
                  <Send size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <form
              className="form-shell"
              action="mailto:info@sagaconnectplus.com"
              method="post"
              encType="text/plain"
            >
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="fullName">Full Name</label>
                  <input id="fullName" name="Full Name" type="text" placeholder="Your name" required />
                </div>
                <div className="field">
                  <label htmlFor="workEmail">Work Email</label>
                  <input
                    id="workEmail"
                    name="Work Email"
                    type="email"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="Company" type="text" placeholder="Company name" />
                </div>
                <div className="field">
                  <label htmlFor="timeline">Project Timeline</label>
                  <select id="timeline" name="Project Timeline" defaultValue="">
                    <option value="" disabled>
                      Select timeline
                    </option>
                    <option>Immediate (24-48 hours)</option>
                    <option>This week</option>
                    <option>This month</option>
                    <option>Exploratory</option>
                  </select>
                </div>
                <div className="field full-width">
                  <label htmlFor="projectBrief">Project Brief</label>
                  <textarea
                    id="projectBrief"
                    name="Project Brief"
                    placeholder="Describe the industry, expert profile, geography, and key questions."
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary">
                Send Inquiry <Send size={16} />
              </button>
              <p className="form-note">
                This opens your email client with the inquiry details prefilled. If you want,
                I can connect this to a direct submission endpoint next.
              </p>
            </form>
          </div>

          <div className="info-panel stack-md">
            <h3>Direct Contact</h3>
            <ul className="contact-list">
              {contactItems.map(({ label, value, href, icon: Icon }) => (
                <li className="contact-item" key={label}>
                  <Icon size={16} />
                  <div>
                    <strong>{label}</strong>
                    {href ? (
                      <Link href={href} target={href.startsWith("https") ? "_blank" : undefined}>
                        {value}
                      </Link>
                    ) : (
                      <span>{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
