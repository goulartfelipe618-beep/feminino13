import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Flower2, Sparkles, Shield, Eye, Star } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Sobre Nós</span>
            <h1 className="text-4xl md:text-5xl text-foreground max-w-lg italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Nascemos do <span className="text-primary">cuidado</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="silk-card p-8 md:p-12">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-[1.8]">
                  A Pérola Transfer nasceu da certeza de que executivas merecem mais do que um simples deslocamento. Merecem atenção, mimos e uma experiência que respeite sua rotina e seu tempo.
                </p>
                <p className="text-muted-foreground leading-[1.8]">
                  Cada veículo é preparado com carinho: aromas calmantes, água aromatizada, chocolates artesanais e a temperatura perfeita esperando por você.
                </p>
                <p className="text-muted-foreground leading-[1.8]">
                  Nossas motoristas são selecionadas pela empatia, discrição e profissionalismo. Porque o cuidado começa antes mesmo de você entrar no veículo.
                </p>
              </div>

              <div className="rose-line my-10 max-w-xs" />

              <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                {[
                  { icon: Heart, label: "Cuidado" },
                  { icon: Flower2, label: "Aromas" },
                  { icon: Sparkles, label: "Conforto" },
                  { icon: Shield, label: "Segurança" },
                  { icon: Eye, label: "Atenção" },
                  { icon: Star, label: "Excelência" },
                ].map((d) => (
                  <div key={d.label} className="text-center">
                    <d.icon size={22} className="text-primary mx-auto mb-2" strokeWidth={1.5} />
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{d.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
