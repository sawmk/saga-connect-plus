import Link from "next/link";
import { Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="stack-xl">
      <section className="sub-banner">
        <Mail size={18} />
        <div>
          <h1>Get in Touch</h1>
          <p>Send your project scope and timeline — we will respond quickly.</p>
        </div>
      </section>

      <section className="card stack-md">
        <p>Please include: industry/sector, geography, expert profile type, and timeline.</p>
        <ul className="icon-list">
          <li>
            <Mail size={16} />
            Email: <Link href="mailto:info@sagaconnectplus.com">info@sagaconnectplus.com</Link>
          </li>
          <li><Phone size={16} />Phone: +66 632034688</li>
          <li><Globe size={16} />Domain: sagaconnectplus.com</li>
          <li>
            <Linkedin size={16} />
            LinkedIn:
            <Link href="https://www.linkedin.com/company/saga-connect-plus/">Saga Connect+ LinkedIn</Link>
          </li>
          <li><MapPin size={16} />Location: Unit 2A 17/F, Glenealy Tower, No.1 Glenealy, Central, Hong Kong S.A.R</li>
        </ul>
      </section>
    </div>
  );
}
