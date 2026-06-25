/* ============================================================
   International Therapy Section — Yume Psicologia
   Features: Interactive World Map highlighting countries
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import { Globe, Clock, MessageSquare, ShieldCheck } from "lucide-react";

// URL for the world map topology
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const highlightedCountries = [
  { name: "Canadá", coordinates: [-106.3468, 56.1304] as [number, number], id: "124" },
  { name: "Irlanda", coordinates: [-8.2439, 53.4129] as [number, number], id: "372" },
  { name: "Japão", coordinates: [138.2529, 36.2048] as [number, number], id: "392" },
  { name: "Austrália", coordinates: [133.7751, -25.2744] as [number, number], id: "036" },
  { name: "Argentina", coordinates: [-63.6167, -38.4161] as [number, number], id: "032" },
];

const features = [
  {
    icon: Globe,
    title: "Atendimento Global",
    description: "Psicoterapia online para brasileiros em qualquer lugar do mundo, rompendo barreiras geográficas."
  },
  {
    icon: Clock,
    title: "Flexibilidade de Horário",
    description: "Ajustamos nossa agenda para conciliar com o seu fuso horário local."
  },
  {
    icon: MessageSquare,
    title: "Sua Língua Nativa",
    description: "Expressar sentimentos e nuances culturais é muito mais profundo em português."
  },
  {
    icon: ShieldCheck,
    title: "Ética e Sigilo",
    description: "Atendimento seguindo todas as normas do Conselho Federal de Psicologia do Brasil."
  }
];

export default function InternationalTherapy() {
  const headingRef = useScrollReveal(0.15) as React.RefObject<HTMLDivElement>;
  const mapRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;
  const contentRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;

  return (
    <section id="exterior" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container">
        {/* Section header */}
        <div ref={headingRef} className="fade-up mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#8FBF8F]" />
            <span className="font-body text-xs font-light tracking-[0.3em] uppercase text-[#8FBF8F]">
              Yume pelo mundo
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#2C2A26] max-w-2xl leading-tight">
              Terapia para brasileiros no <em className="italic text-[#8FBF8F]">exterior</em>
            </h2>
            <p className="font-body text-base font-light text-[#4A4640] max-w-xs leading-relaxed">
              Não importa a distância, o acolhimento da Yume chega até você.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interactive Map - Left Side (8 columns) */}
          <div 
            ref={mapRef} 
            className="lg:col-span-7 bg-[#F9FBF9] rounded-3xl p-4 md:p-8 border border-[#E8F0E8] relative transition-all duration-1000 transform opacity-0 scale-90 [&.visible]:opacity-100 [&.visible]:scale-100 shadow-sm [&.visible]:shadow-xl"
          >
            <div className="absolute top-6 left-8 z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-sm border border-[#8FBF8F]/20 rounded-full text-[10px] font-medium tracking-wider uppercase text-[#699169]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8FBF8F] animate-pulse" />
                Países com pacientes ativos
              </span>
            </div>
            
            <div className="w-full aspect-video md:aspect-[16/10] cursor-move">
              <ComposableMap
                projectionConfig={{
                  scale: 140,
                }}
                className="w-full h-full"
              >
                <ZoomableGroup zoom={1}>
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const isHighlighted = highlightedCountries.some(c => c.id === geo.id);
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={isHighlighted ? "#8FBF8F" : "#E2E8E2"}
                            stroke="#FFFFFF"
                            strokeWidth={0.5}
                            style={{
                              default: { outline: "none" },
                              hover: { fill: isHighlighted ? "#7BA87B" : "#D1D9D1", outline: "none" },
                              pressed: { outline: "none" },
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                  {highlightedCountries.map(({ name, coordinates }) => (
                    <Marker key={name} coordinates={coordinates}>
                      <circle r={3} fill="#2C2A26" />
                      <text
                        textAnchor="middle"
                        y={-10}
                        style={{ 
                          fontFamily: "var(--font-body)", 
                          fontSize: "8px", 
                          fill: "#2C2A26",
                          fontWeight: 500
                        }}
                      >
                        {name}
                      </text>
                    </Marker>
                  ))}
                </ZoomableGroup>
              </ComposableMap>
            </div>
          </div>

          {/* Features - Right Side (5 columns) */}
          <div 
            ref={contentRef} 
            className="lg:col-span-5 space-y-8 transition-all duration-1000 delay-300 transform translate-x-10 opacity-0 [&.visible]:opacity-100 [&.visible]:translate-x-0"
          >
            <div className="space-y-4">
              <h3 className="font-display text-2xl md:text-3xl font-light text-[#2C2A26]">
                Sua cultura, sua língua, <br />
                <span className="italic text-[#8FBF8F]">seu lugar de fala.</span>
              </h3>
              <p className="font-body text-base font-light text-[#4A4640] leading-relaxed">
                Morar fora traz desafios únicos: a saudade, a adaptação e a busca por identidade em um novo país. Ter um psicólogo que entende o seu contexto cultural faz toda a diferença no processo terapêutico.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F0F7F0] flex items-center justify-center">
                    <feature.icon size={16} className="text-[#8FBF8F]" />
                  </div>
                  <h4 className="font-display text-sm font-medium text-[#2C2A26]">
                    {feature.title}
                  </h4>
                  <p className="font-body text-xs font-light text-[#6A6660] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/message/YJ74EWIKNVCGA1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#8FBF8F] text-white font-body text-sm font-medium tracking-wide rounded-sm hover:bg-[#7BA87B] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Agendar consulta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
