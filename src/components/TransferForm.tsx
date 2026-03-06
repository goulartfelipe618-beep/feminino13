import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type TripType = "ida" | "ida-volta" | "hora";

export const TransferForm = () => {
  const [step, setStep] = useState(1);
  const [tripType, setTripType] = useState<TripType>("ida");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "♡ Solicitação enviada", description: "Entraremos em contato com todo carinho." });
    setStep(1);
  };

  const labelClass = "text-xs text-muted-foreground mb-2 block font-medium";

  return (
    <div className="silk-card p-8 md:p-12">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Cotação</span>
      </div>
      <h3 className="text-2xl text-foreground mb-8 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
        Solicitar Transfer
      </h3>

      <div className="flex gap-1 mb-8 p-1 silk-input" style={{ padding: '4px', borderRadius: '2rem' }}>
        {([["ida", "Ida"], ["ida-volta", "Ida/Volta"], ["hora", "Por Hora"]] as const).map(
          ([val, label]) => (
            <button
              key={val}
              type="button"
              onClick={() => setTripType(val)}
              className={`flex-1 py-2.5 text-xs font-medium rounded-2xl transition-all ${
                tripType === val
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div><label className={labelClass}>Passageiras</label><input type="number" min={1} placeholder="Nº" required className="silk-input" /></div>
              <div><label className={labelClass}>Data</label><input type="date" required className="silk-input" /></div>
              <div><label className={labelClass}>Hora</label><input type="time" required className="silk-input" /></div>
            </div>
            {tripType === "hora" && (
              <div><label className={labelClass}>Horas</label><input type="number" min={1} placeholder="Qtd" required className="silk-input" /></div>
            )}
            <div><label className={labelClass}>Embarque</label><input placeholder="Endereço de origem" required className="silk-input" /></div>
            <div><label className={labelClass}>Destino</label><input placeholder="Endereço de destino" required className="silk-input" /></div>
            {tripType === "ida-volta" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className={labelClass}>Data Retorno</label><input type="date" className="silk-input" /></div>
                <div><label className={labelClass}>Hora Retorno</label><input type="time" className="silk-input" /></div>
              </div>
            )}
            <div><label className={labelClass}>Observações</label><textarea placeholder="Preferências especiais, mimos a bordo..." rows={2} className="silk-input resize-none" /></div>
            <div className="pt-2"><button type="button" onClick={() => setStep(2)} className="silk-btn w-full">Próximo →</button></div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className={labelClass}>Nome</label><input placeholder="Seu nome" required className="silk-input" /></div>
              <div><label className={labelClass}>E-mail</label><input type="email" placeholder="seu@email.com" required className="silk-input" /></div>
              <div><label className={labelClass}>WhatsApp</label><input placeholder="(00) 00000-0000" required className="silk-input" /></div>
              <div><label className={labelClass}>Empresa</label><input placeholder="Opcional" className="silk-input" /></div>
            </div>
            <div className="pt-2 flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="silk-btn-outline flex-1">← Voltar</button>
              <button type="submit" className="silk-btn flex-1">Confirmar</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};
