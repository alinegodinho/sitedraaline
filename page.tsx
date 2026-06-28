import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Phone, MapPin, Calendar, BookOpen, Shield, Award } from 'lucide-react';

// Variantes de animação sutil (Quiet Luxury style)
const fadeInSutle = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

export default function Home() {
  return (
    <div className="bg-medical-bgLight text-medical-slate font-sans antialiased min-h-screen selection:bg-medical-cream selection:text-medical-dark">
      
      {/* 1. HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 bg-medical-bgLight/90 backdrop-blur-md z-50 border-b border-medical-cream/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-luxury text-medical-dark uppercase">Aline Godinho</span>
            <span className="text-[10px] tracking-widest text-medical-bronze uppercase">Médica Tricologista</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-xs tracking-luxury uppercase font-medium">
            <a href="#home" className="hover:text-medical-bronze transition-colors">Início</a>
            <a href="#sobre" className="hover:text-medical-bronze transition-colors">Sobre</a>
            <a href="#atuacao" className="hover:text-medical-bronze transition-colors">Áreas de Atuação</a>
            <a href="#consulta" className="hover:text-medical-bronze transition-colors">A Consulta</a>
            <a href="#procedimentos" className="hover:text-medical-bronze transition-colors">Procedimentos</a>
            <a href="#faq" className="hover:text-medical-bronze transition-colors">FAQ</a>
            <a href="#contato" className="hover:text-medical-bronze transition-colors">Contato</a>
          </nav>

          <a 
            href="https://wa.me/5531999442277" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-medical-slate text-medical-slate hover:bg-medical-dark hover:text-white transition-all duration-300 px-5 py-2.5 text-xs tracking-luxury uppercase rounded-sm flex items-center gap-2"
          >
            <Phone size={12} />
            <span>Agendar Consulta</span>
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInSutle}
          className="md:col-span-7 space-y-6"
        >
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-medical-bronze font-medium">Atendimento Especializado</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-medical-dark leading-tight">
              Dra. Aline Godinho
            </h1>
            <p className="text-sm tracking-widest text-medical-slate/
