import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Globe, Clock, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  Marker,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const highlightedCountries = [
  { name: "Canadá", coordinates: [-106.3468, 56.1304] as [number, number], id: "124" },
  { name: "Irlanda", coordinates: [-8.2439, 53.4129] as [number, number], id: "372" },
  { name: "Japão", coordinates: [138.2529, 36.2048] as [number, number], id: "392" },
  { name: "Austrália", coordinates: [133.7751, -25.2744] as [number, number], id: "036" },
  { name: "Argentina", coordinates: [-63.6167, -38.4161] as [number, number], id: "032" },
];

export default function InternationalTherapyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-[#699169] hover:text-[#7BA87B] transition-colors mb-12 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-body text-sm font-medium">Voltar para a página inicial</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-[#8FBF8F]" />
                  <span className="font-body text-xs font-bold tracking-[0.3em] uppercase text-[#8FBF8F]">
                    Yume pelo mundo
                  </span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#2C2A26] leading-tight">
                  Terapia para Brasileiros no <em className="italic text-[#8FBF8F]">Exterior</em>
                </h1>
              </div>

              <p className="font-body text-lg text-[#4A4640] leading-relaxed">
                Morar fora do Brasil é um desafio que vai além da distância física. É lidar com a saudade, a adaptação cultural e a busca por um novo lugar no mundo. Na Yume, oferecemos o acolhimento que você precisa, na sua língua nativa e com a compreensão da sua cultura.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Globe, title: "Atendimento Global", text: "Online de qualquer lugar." },
                  { icon: Clock, title: "Fuso Horário", text: "Agenda flexível ao seu local." },
                  { icon: MessageSquare, title: "Língua Nativa", text: "Português para nuances profundas." },
                  { icon: ShieldCheck, title: "Ética CFP", text: "Seguindo normas do Brasil." }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <item.icon size={24} className="text-[#8FBF8F]" />
                    <h4 className="font-display text-lg font-medium text-[#2C2A26]">{item.title}</h4>
                    <p className="font-body text-sm text-[#6A6660]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#E8F0E8] shadow-xl relative overflow-hidden">
               <div className="absolute top-6 left-8 z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-sm border border-[#8FBF8F]/20 rounded-full text-[10px] font-medium tracking-wider uppercase text-[#699169]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8FBF8F] animate-pulse" />
                  Países com pacientes ativos
                </span>
              </div>
              <div className="w-full aspect-square cursor-move">
                <ComposableMap projectionConfig={{ scale: 140 }}>
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
                              }}
                            />
                          );
                        })
                      }
                    </Geographies>
                    {highlightedCountries.map(({ name, coordinates }) => (
                      <Marker key={name} coordinates={coordinates}>
                        <circle r={3} fill="#2C2A26" />
                        <text textAnchor="middle" y={-10} style={{ fontFamily: "var(--font-body)", fontSize: "8px", fill: "#2C2A26", fontWeight: 500 }}>
                          {name}
                        </text>
                      </Marker>
                    ))}
                  </ZoomableGroup>
                </ComposableMap>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-white p-10 rounded-2xl border border-[#E8F0E8] shadow-sm space-y-8">
              <h2 className="font-display text-3xl font-light text-[#2C2A26]">Por que fazer terapia com um psicólogo brasileiro?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-display text-xl text-[#8FBF8F]">Identidade Cultural</h3>
                  <p className="font-body text-sm text-[#4A4640] leading-relaxed">Expressões, gírias e o modo de sentir do brasileiro são únicos. Na terapia, você não precisa explicar "o que significa ser brasileiro", o foco fica no seu processo.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-display text-xl text-[#8FBF8F]">Contexto Migratório</h3>
                  <p className="font-body text-sm text-[#4A4640] leading-relaxed">Entendemos as dores específicas de quem migra: o luto da partida, a solidão da chegada e a pressão pela adaptação.</p>
                </div>
              </div>
              <div className="pt-6 border-t border-[#E8F0E8] flex justify-center">
                <a
                  href="https://wa.me/message/YJ74EWIKNVCGA1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-12 py-4 bg-[#8FBF8F] text-white font-body text-sm font-bold tracking-wide rounded-sm hover:bg-[#7BA87B] transition-all duration-300"
                >
                  <MessageSquare size={18} />
                  Agendar consulta internacional
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
