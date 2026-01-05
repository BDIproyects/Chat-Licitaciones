import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "14 días de prueba gratis",
  "Sin tarjeta de crédito",
  "Cancela cuando quieras",
];

const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Card */}
          <div className="gradient-hero rounded-3xl p-12 md:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
                Empieza a ganar más licitaciones hoy
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Únete a más de 500 empresas que ya reciben alertas personalizadas 
                y aumentan sus oportunidades de negocio.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-primary-foreground"
                  >
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                variant="accent"
                size="xl"
                className="text-lg"
              >
                Comenzar prueba gratuita
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;