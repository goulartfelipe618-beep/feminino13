import { Link, useLocation } from "react-router-dom";
import { Menu, X, Circle } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Início" },
    { to: "/grupos", label: "Frota" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <>
      {/* Floating glassmorphism nav — desktop */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 silk-glass px-3 py-2 items-center gap-1">
        <Link to="/" className="text-primary text-lg px-4 italic" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
          Pérola
        </Link>
        <div className="w-px h-5 bg-border mx-1" />
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`px-4 py-2 text-sm rounded-xl transition-all duration-300 ${
              location.pathname === l.to
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      {/* Mobile header */}
      <header className="md:hidden fixed top-0 w-full z-50 silk-glass" style={{ borderRadius: 0 }}>
        <div className="px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-primary text-lg italic" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>Pérola</Link>
          <button className="text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[57px] left-0 right-0 z-40 overflow-hidden silk-glass"
            style={{ borderRadius: 0 }}
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm py-2 px-3 rounded-xl ${
                    location.pathname === l.to ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Pearl anchor button */}
      <a
        href="#cotacao"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center pearl-glow transition-transform hover:scale-110"
        aria-label="Cotação"
      >
        <Circle size={16} className="text-primary-foreground" fill="currentColor" />
      </a>
    </>
  );
};
