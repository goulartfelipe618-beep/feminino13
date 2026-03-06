import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TransferForm } from "@/components/TransferForm";
import { motion } from "framer-motion";
import { Heart, Flower2, Sparkles, Shield } from "lucide-react";
import silkSedan from "@/assets/silk-sedan.jpg";
import silkInterior from "@/assets/silk-interior.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={silkSedan} alt="Sedan premium em ambiente elegante" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsla(30,30%,96%,0.2) 0%, hsla(30,30%,96%,0.65) 50%, hsla(30,30%,96%,0.97) 100%)' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative container mx-auto px-6"
        >
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-8"
            >
              <Heart size={14} className="text-primary" />
              <span className="text-xs tracking-widest uppercase text-muted-foreground">Experiência de Cuidado</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-foreground italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Cada detalhe<br />
              pensado para<br />
              <span className="text-primary">você</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
              Mimos a bordo, conforto excepcional e atenção exclusiva em cada trajeto. Uma experiência que você merece.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#cotacao" className="silk-btn inline-block">Solicitar Transfer</a>
              <a href="#cuidados" className="silk-btn-outline inline-block">Nossos Cuidados</a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Care features */}
      <section id="cuidados" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            {[
              { icon: Heart, title: "Mimos a Bordo", desc: "Água aromatizada, lenços perfumados e chocolates artesanais" },
              { icon: Flower2, title: "Aromaterapia", desc: "Essências calmantes personalizadas no veículo" },
              { icon: Sparkles, title: "Conforto Premium", desc: "Bancos com massagem, climatização perfeita" },
              { icon: Shield, title: "Segurança Discreta", desc: "Motoristas treinadas e veículos monitorados" },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="silk-card p-6 text-center"
              >
                <f.icon size={28} className="text-primary mx-auto mb-4" strokeWidth={1.5} />
                <p className="text-sm text-foreground font-semibold mb-1">{f.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Nossa Frota</span>
            <h2 className="text-3xl md:text-4xl text-foreground mb-12 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Veículos preparados com <span className="text-primary">carinho</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="silk-card overflow-hidden">
              <img src={silkSedan} alt="Sedan premium" className="w-full aspect-[16/10] object-cover rounded-t-[1.5rem]" />
              <div className="p-6">
                <h3 className="text-xl text-foreground mb-2 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Sedan Premium</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Interior em couro creme, climatização perfeita, kit de bem-estar e aromaterapia inclusa.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="silk-card overflow-hidden">
              <img src={silkInterior} alt="Interior luxuoso" className="w-full aspect-[16/10] object-cover rounded-t-[1.5rem]" />
              <div className="p-6">
                <h3 className="text-xl text-foreground mb-2 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Interior de Seda</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Detalhes em ouro rosé, almofadas de seda, carregador sem fio e espumante à disposição.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="cotacao" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <TransferForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
