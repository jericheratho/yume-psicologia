import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2, MessageSquare } from "lucide-react";
import { Link } from "wouter";

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  benefits: string[];
  image: string;
  whatsappLink: string;
  whatsappLabel: string;
}

export default function ServiceDetail({
  title,
  subtitle,
  description,
  longDescription,
  benefits,
  image,
  whatsappLink,
  whatsappLabel
}: ServiceDetailProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container">
          {/* Back button */}
          <Link href="/" className="inline-flex items-center gap-2 text-[#699169] hover:text-[#7BA87B] transition-colors mb-12 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-body text-sm font-medium">Voltar para a página inicial</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side: Content */}
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-[#8FBF8F]" />
                  <span className="font-body text-xs font-bold tracking-[0.3em] uppercase text-[#8FBF8F]">
                    {subtitle}
                  </span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#2C2A26] leading-tight">
                  {title}
                </h1>
                <p className="font-body text-lg text-[#4A4640] leading-relaxed italic">
                  "{description}"
                </p>
              </div>

              <div className="prose prose-slate max-w-none">
                <p className="font-body text-base text-[#4A4640] leading-relaxed whitespace-pre-line">
                  {longDescription}
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-2xl font-light text-[#2C2A26]">O que você pode esperar:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#8FBF8F] mt-0.5 shrink-0" />
                      <span className="font-body text-sm text-[#4A4640]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-[#8FBF8F] text-white font-body text-sm font-bold tracking-wide rounded-sm hover:bg-[#7BA87B] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <MessageSquare size={18} />
                  {whatsappLabel}
                </a>
              </div>
            </div>

            {/* Right side: Image & Card */}
            <div className="space-y-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={image} alt={title} className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2A26]/20 to-transparent" />
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-[#E8F0E8] shadow-sm space-y-6">
                <h4 className="font-display text-xl font-light text-[#2C2A26]">Por que escolher a Yume?</h4>
                <p className="font-body text-sm text-[#4A4640] leading-relaxed">
                  Na Yume, acreditamos que a psicologia deve ser próxima, ética e humana. Nosso compromisso é com a sua transformação e bem-estar, oferecendo um ambiente seguro para que você possa ser quem você é.
                </p>
                <div className="h-px w-full bg-[#E8F0E8]" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center">
                    <span className="text-[#8FBF8F] font-display text-xl">Y</span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-bold text-[#2C2A26]">Yume Psicologia</p>
                    <p className="font-body text-xs text-[#8FBF8F]">Cuidado que transforma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
