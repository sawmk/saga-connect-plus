import Link from "next/link";
import { BadgeCheck, Building2 } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="navbar-shell">
      <div className="container navbar">
        <Link className="brand" href="/" aria-label="Saga Connect+ home">
          <span className="brand-logo" aria-hidden>
            <Building2 size={18} />
          </span>
          <span>
            Saga Connect+ <BadgeCheck size={16} className="brand-check" />
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
