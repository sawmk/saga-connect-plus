import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="card stack-md">
      <h1>Get in Touch</h1>
      <p>
        If you are working on a time-sensitive project and require expert insights, our team
        is ready to support.
      </p>
      <p>Please include your industry/sector, geography, expert type, and timeline.</p>

      <ul>
        <li>
          Email: <Link href="mailto:info@sagaconnectplus.com">info@sagaconnectplus.com</Link>
        </li>
        <li>Phone: +66 632034688</li>
        <li>Domain: sagaconnectplus.com</li>
        <li>
          LinkedIn:{" "}
          <Link href="https://www.linkedin.com/company/saga-connect-plus/">
            Saga Connect+ LinkedIn
          </Link>
        </li>
        <li>Location: Unit 2A 17/F, Glenealy Tower, No.1 Glenealy, Central, Hong Kong S.A.R</li>
      </ul>
    </div>
  );
}
