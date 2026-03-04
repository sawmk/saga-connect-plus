"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, BadgeCheck, Building2, Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="navbar-shell">
      <div className="container navbar">
        <Link className="brand" href="/" aria-label="Saga Connect+ home" onClick={closeMenu}>
          <span className="brand-logo" aria-hidden>
            <Building2 size={18} />
          </span>
          <span>
            Saga Connect+ <BadgeCheck size={16} className="brand-check" />
          </span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        <nav
          id="main-navigation"
          className={`nav-shell${isOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={isActive(item.href) ? "active" : undefined}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="nav-cta mobile-nav-cta" onClick={closeMenu}>
            Book Intro Call <ArrowRight size={16} />
          </Link>
        </nav>
        <Link href="/contact" className="nav-cta desktop-nav-cta">
          Book Intro Call <ArrowRight size={16} />
        </Link>
      </div>
    </header>
  );
}
