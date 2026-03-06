import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contato = () => {
  const info = [
    { icon: Mail, label: "E-mail", value: "hello@perolatransfer.com.br", href: "mailto:hello@perolatransfer.com.br" },
    { icon: Phone, label: "Telefone", value: "+55 11 99999-9999", href: "tel:+5511999999999" },
    { icon: MessageCircle, label: "WhatsApp", value: "+55 11 99999-9999", href: "https://wa.me/5511999999999" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Fale Conosco</span>
            <h1 className="text-4xl md:text-5xl text-foreground italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              <span className="text-primary">Contato</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-lg">
          <div className="silk-card p-8 md:p-12">
            <div className="space-y-4">
              {info.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/40 transition-all group"
                  style={{ textDecoration: 'none' }}
                >
                  <item.icon size={20} className="text-primary flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-foreground text-sm font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="rose-line my-8" />

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="silk-btn block text-center w-full"
            >
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
