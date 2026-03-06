import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GroupForm } from "@/components/GroupForm";
import { motion } from "framer-motion";
import { Heart, Calendar, Plane, Users } from "lucide-react";
import silkFleet from "@/assets/silk-fleet.jpg";
import silkSedan from "@/assets/silk-sedan.jpg";
import silkInterior from "@/assets/silk-interior.jpg";

const experiences = [
  { icon: Calendar, title: "Eventos & Encontros", desc: "Frotas coordenadas com kit de boas-vindas, água aromatizada e chocolates para cada convidada.", img: silkFleet },
  { icon: Heart, title: "Dia da Noiva", desc: "Veículo decorado, espumante gelado, música ambiente e motorista atenciosa para o dia mais especial.", img: silkSedan },
  { icon: Plane, title: "Aeroporto VIP", desc: "Recepção com placa personalizada, auxílio com bagagem e mimos refrescantes na chegada.", img: silkInterior },
];

const Grupos = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Frota Exclusiva</span>
            <h1 className="text-4xl md:text-5xl text-foreground max-w-lg italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Experiências que <span className="text-primary">encantam</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-md">
              Cada ocasião merece um cuidado especial. Descubra como transformamos deslocamentos em momentos inesquecíveis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience cards */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-8">
            {experiences.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="silk-card overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 flex-shrink-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover aspect-[4/3] md:aspect-auto" style={{ borderRadius: '1.5rem 0 0 1.5rem' }} />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <item.icon size={18} className="text-primary" />
                    <span className="text-xs tracking-widest uppercase text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="text-xl text-foreground mb-3 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle options */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            {[
              { name: "Sedan Premium", pax: "1-3" },
              { name: "SUV Executivo", pax: "1-5" },
              { name: "Van VIP", pax: "6-14" },
              { name: "Micro-ônibus", pax: "15-40" },
            ].map((v, i) => (
              <motion.div key={v.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="silk-card p-5 text-center">
                <Users size={22} className="text-primary mx-auto mb-3" strokeWidth={1.5} />
                <p className="text-sm text-foreground font-semibold mb-1">{v.name}</p>
                <p className="text-xs text-muted-foreground">{v.pax} passageiras</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="cotacao" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <GroupForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grupos;
