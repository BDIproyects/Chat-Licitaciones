import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button"; // Asegúrate que la ruta sea correcta según tu proyecto
import { Bell, ArrowRight, Zap, ExternalLink, Timer, CheckCircle2 } from "lucide-react";

// 1. Definimos la estructura de los datos que vienen de Render
// AJUSTA ESTOS NOMBRES si tu JSON tiene claves diferentes (ej. "service_name" en vez de "nombre")
interface Licitacion {
  id?: string | number; // Un identificador único si lo hay, si no usaremos el índice
  nombre: string;       // Nombre del servicio
  tiempo: string;       // Tiempo restante
  link: string;         // Link de la licitación
  estado: string;       // Estado (ej: Vigente)
  monto?: string;       // Opcional: si tienes el monto
}

const Hero = () => {
  // --- ESTADOS ---
  const [licitaciones, setLicitaciones] = useState<Licitacion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // --- CONSTANTES ---
  const RENDER_API_URL = import.meta.env.VITE_API_URL || "http://localhost:10000/api/licitaciones";
  const FETCH_INTERVAL = 12 * 60 * 1000; 
  const CAROUSEL_INTERVAL = 5000;

  // --- LÓGICA DE DATOS Y KEEP-ALIVE ---
  useEffect(() => {
    const fetchLicitaciones = async () => {
      try {
        console.log("Haciendo ping a Render...");
        const response = await fetch(RENDER_API_URL);
        const data = await response.json();

        // Aseguramos que sea un array y tomamos solo los primeros 4
        if (Array.isArray(data) && data.length > 0) {
          setLicitaciones(data.slice(0, 4));
          setLoading(false);
        }
      } catch (error) {
        console.error("Error obteniendo licitaciones:", error);
        // Opcional: Dejar loading en false para mostrar un estado vacío o mantener las anteriores
      }
    };

    // 1. Llamada inicial
    fetchLicitaciones();

    // 2. Intervalo de 12 minutos (Keep-Alive para Render)
    const keepAliveInterval = setInterval(fetchLicitaciones, FETCH_INTERVAL);

    // Limpieza al desmontar
    return () => clearInterval(keepAliveInterval);
  }, []);

  // --- LÓGICA DEL CARRUSEL ---
  useEffect(() => {
    if (licitaciones.length <= 1) return; // No rotar si hay 0 o 1 elemento

    const rotateInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % licitaciones.length);
    }, CAROUSEL_INTERVAL);

    return () => clearInterval(rotateInterval);
  }, [licitaciones]);

  // Datos de la tarjeta actual (o fallback si está cargando)
  const currentItem = licitaciones[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-subtle">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-8 shadow-card"
          >
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              +500 empresas ya reciben alertas
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            Nunca pierdas una{" "}
            <span className="text-gradient">licitación</span> importante
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Recibe alertas instantáneas de licitaciones públicas filtradas por tu 
            industria, ubicación y presupuesto. Directamente en tu correo o Telegram.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="default" size="lg" className="h-12 px-8 text-lg"> {/* Ajusté variantes por si 'hero' no existe */}
              Comenzar gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
              Ver demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: "10K+", label: "Licitaciones/mes" },
              { value: "98%", label: "Precisión" },
              { value: "< 1min", label: "Tiempo de alerta" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- TARJETA FLOTANTE DINÁMICA (CARRUSEL) --- */}
        <div className="mt-16 h-32 relative max-w-lg mx-auto"> {/* Contenedor con altura fija para evitar saltos */}
          <AnimatePresence mode="wait">
            {loading ? (
              // ESTADO DE CARGA (Skeleton o tarjeta placeholder)
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
              >
                <div className="bg-card border border-border rounded-2xl p-6 shadow-card animate-float opacity-70">
                    <div className="flex items-center justify-center h-full gap-3">
                        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-muted-foreground">Buscando licitaciones en tiempo real...</span>
                    </div>
                </div>
              </motion.div>
            ) : (
              // TARJETA DE DATOS REALES
              <motion.a
                key={currentIndex} // La clave cambia, forzando la animación
                href={currentItem?.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }} // Entra desde la derecha suavemente
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}   // Sale hacia la izquierda
                transition={{ duration: 0.5 }}
                className="absolute inset-0 block cursor-pointer group" // block para que el enlace ocupe todo
              >
                {/* NOTA: 'animate-float' es la clase CSS que hace el rebote constante.
                   La combinamos con motion para las transiciones de entrada/salida.
                */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-card animate-float group-hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    {/* Icono */}
                    <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Bell className="w-6 h-6 text-accent-foreground" />
                    </div>
                    
                    {/* Contenido Texto */}
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">Nueva Licitación</span>
                            {currentItem?.estado && (
                                <span className="text-xs bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                                    <CheckCircle2 className="w-3 h-3" /> {currentItem.estado}
                                </span>
                            )}
                        </div>
                        {currentItem?.tiempo && (
                            <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                                <Timer className="w-3 h-3" /> {currentItem.tiempo}
                            </span>
                        )}
                      </div>
                      
                      <p className="text-sm text-muted-foreground truncate pr-2">
                        {currentItem?.nombre || "Cargando información..."}
                      </p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-sm font-semibold text-primary">
                          {currentItem?.monto || "Ver detalles"} 
                        </p>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;