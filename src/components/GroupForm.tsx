import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const GroupForm = () => {
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "♡ Solicitação registrada", description: "Nossa equipe entrará em contato." });
    setStep(1);
  };

  const labelClass = "text-xs text-muted-foreground mb-2 block font-medium";

  return (
    <div className="silk-card p-8 md:p-12">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Frota Exclusiva</span>
      </div>
      <h3 className="text-2xl text-foreground mb-8 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
        Solicitar Frota
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>Veículo</label>
                <select className="silk-input">
                  <option value="">Selecione</option>
                  <option value="sedan">Sedan Premium</option>
                  <option value="suv">SUV Executivo</option>
                  <option value="van">Van VIP</option>
                  <option value="micro">Micro-ônibus</option>
                </select>
              </div>
              <div><label className={labelClass}>Passageiras</label><input type="number" min={1} placeholder="Nº" required className="silk-input" /></div>
            </div>
            <div><label className={labelClass}>Embarque</label><input placeholder="Endereço" required className="silk-input" /></div>
            <div><label className={labelClass}>Destino</label><input placeholder="Endereço" required className="silk-input" /></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>Data/Hora Ida</label><input type="datetime-local" required className="silk-input" /></div>
              <div><label className={labelClass}>Data/Hora Retorno</label><input type="datetime-local" className="silk-input" /></div>
            </div>
            <div><label className={labelClass}>Detalhes</label><textarea placeholder="Preferências, mimos, necessidades especiais..." rows={3} className="silk-input resize-none" /></div>
            <div className="pt-2"><button type="button" onClick={() => setStep(2)} className="silk-btn w-full">Próximo →</button></div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>Nome</label><input placeholder="Nome" required className="silk-input" /></div>
              <div><label className={labelClass}>E-mail</label><input type="email" placeholder="email" required className="silk-input" /></div>
              <div><label className={labelClass}>WhatsApp</label><input placeholder="(00) 00000-0000" required className="silk-input" /></div>
              <div><label className={labelClass}>Empresa</label><input placeholder="Opcional" className="silk-input" /></div>
            </div>
            <div className="pt-2 flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="silk-btn-outline flex-1">← Voltar</button>
              <button type="submit" className="silk-btn flex-1">Solicitar</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
