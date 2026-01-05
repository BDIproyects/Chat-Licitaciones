import { Bell } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    producto: [
      { label: "Características", href: "#features" },
      { label: "Precios", href: "#pricing" },
      { label: "Integraciones", href: "#" },
      { label: "API", href: "#" },
    ],
    empresa: [
      { label: "Sobre nosotros", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carreras", href: "#" },
      { label: "Contacto", href: "#" },
    ],
    legal: [
      { label: "Privacidad", href: "#" },
      { label: "Términos", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 gradient-hero rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                LicitaBot
              </span>
            </a>
            <p className="text-muted-foreground text-sm">
              Alertas inteligentes de licitaciones públicas para hacer crecer tu negocio.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Producto</h4>
            <ul className="space-y-3">
              {links.producto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {links.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} LicitaBot. Todos los derechos reservados - Proyecto BDI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;