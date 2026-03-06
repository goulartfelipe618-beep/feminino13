import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="py-16">
    <div className="container mx-auto px-6">
      <div className="silk-card p-10">
        <div className="rose-line mb-10 max-w-xs" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-primary text-2xl italic mb-1" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>Pérola</p>
            <p className="text-sm text-muted-foreground">Experiência de Cuidado</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Navegação</p>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Início" },
                { to: "/grupos", label: "Frota" },
                { to: "/sobre", label: "Sobre" },
                { to: "/contato", label: "Contato" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Contato</p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>hello@perolatransfer.com.br</span>
              <span>+55 11 99999-9999</span>
            </div>
          </div>
        </div>

        <div className="rose-line mt-10 mb-6 max-w-xs" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pérola Transfer — Todos os direitos reservados
        </p>
      </div>
    </div>
  </footer>
);
