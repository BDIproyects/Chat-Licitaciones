import { motion } from "framer-motion";
import { 
  Bell, 
  Filter, 
  Zap, 
  Mail, 
  MessageSquare, 
  BarChart3 
} from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Alertas Instantáneas",
    description:
      "Recibe notificaciones en tiempo real cuando se publique una licitación que coincida con tus criterios.",
  },
  {
    icon: Filter,
    title: "Filtros Inteligentes",
    description:
      "Configura filtros por sector, ubicación, presupuesto mínimo y máximo, y tipo de contrato.",
  },
  {
    icon: Zap,
    title: "Procesamiento IA",
    description:
      "Nuestra IA analiza y categoriza automáticamente las licitaciones para mayor precisión.",
  },
  {
    icon: Mail,
    title: "Resumen Diario",
    description:
      "Recibe un email cada mañana con todas las oportunidades del día anterior.",
  },
  {
    icon: MessageSquare,
    title: "Telegram & WhatsApp",
    description:
      "Conecta tu canal favorito para recibir alertas donde más te convenga.",
  },
  {
    icon: BarChart3,
    title: "Análisis de Mercado",
    description:
      "Estadísticas de tu sector: competencia, presupuestos medios y tendencias.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
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
            Todo lo que necesitas para{" "}
            <span className="text-gradient">ganar más licitaciones</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Herramientas diseñadas para que no pierdas ninguna oportunidad de negocio.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;