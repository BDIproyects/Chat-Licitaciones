import { motion } from "framer-motion";
import { UserPlus, Settings, Bell, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Crea tu cuenta",
    description: "Regístrate en menos de 2 minutos. Sin tarjeta de crédito.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Configura tus filtros",
    description: "Define tu sector, ubicación y rango de presupuestos de interés.",
  },
  {
    icon: Bell,
    number: "03",
    title: "Recibe alertas",
    description: "Te notificamos al instante cuando hay una licitación para ti.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Gana contratos",
    description: "Presenta tu oferta antes que la competencia y aumenta tus ventas.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Cómo funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empieza a recibir oportunidades en 4 sencillos pasos
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[60%] w-full h-0.5 bg-border" />
              )}

              <div className="bg-card border border-border rounded-2xl p-8 relative z-10">
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 gradient-accent rounded-full flex items-center justify-center text-accent-foreground font-bold shadow-accent">
                  {step.number}
                </div>

                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;