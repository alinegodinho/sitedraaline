'use client';

import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('queda');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const areasAtuacion = {
    queda: {
      title: "Queda de Cabelo & Eflúvio Telógeno",
      explicacao: "A queda difusa dos fios pode decorrer de múltiplos fatores biológicos e sistêmicos, afetando o ciclo natural de crescimento capilar.",
      causas: "Desequilíbrios hormonais, estresse metabólico ou emocional agudo, deficiências nutricionais, pós-parto e quadros infecciosos.",
      diagnostico: "Tricotoscopia digital especializada, anamnese clínica detalhada e triagem laboratorial personalizada.",
      tratamento: "Correção de fatores causais, terapia tópica dirigida e suporte terapêutico focado na estabilização do ciclo capilar.",
      quando: "Quando notar um aumento significativo de fios perdidos diariamente ou diminuição global do volume capilar."
    },
    alopecias: {
      title: "Alopecia Androgenética (Calvície)",
      explicacao: "Condição de base genética e hormonal caracterizada pela miniaturização progressiva dos fios, tornando-os gradualmente mais finos e curtos.",
      causas: "Predisposição genética e sensibilidade dos folículos pilosos aos hormônios androgênicos.",
      diagnostico: "Mapeamento tricotoscópico computadorizado e correlação com padrão clínico de distribuição.",
      tratamento: "Protocolos medicamentosos tópicos e orais para bloquear a progressão e estimular o espessamento folicular.",
      quando: "Ao perceber afinamento capilar localizado na região superior, coroa ou recessões frontais ('entradas')."
    },
    areata: {
      title: "Alopecia Areata",
      explicacao: "Doença autoimune em que o sistema imunológico direciona uma resposta inflamatória contra os próprios folículos pilosos.",
      causas: "Desencadeamento imunológico complexo, frequentemente associado a fatores predisponentes e estresse severo.",
      diagnostico: "Identificação microscópica de sinais de atividade inflamatória folicular na tricotoscopia.",
      tratamento: "Imunomoduladores dirigidos, infiltrações intralesionais e terapias regenerativas sob indicação clínica.",
      quando: "Surgimento repentino de áreas arredondadas ou ovais completamente sem cabelos ou pelos corpóreos."
    },
    cicatriciais: {
      title: "Alopecias Cicatriciais & Inflamações",
      explicacao: "Grupo de patologias raras onde a inflamação folicular crônica destrói permanentemente as células-tronco do folículo, substituindo-as por tecido cicatricial.",
      causas: "Líquen plano pilar, alopecia frontal fibrosante e outras desordens inflamatórias crônicas do couro cabeludo.",
      diagnostico: "Tricotoscopia de alta resolução combinada com biópsia cutânea e análise histopatológica quando indicado.",
      tratamento: "Intervenção precoce e agressiva com anti-inflamatórios potentes para preservar os folículos remanescentes.",
      quando: "Presença de coceira persistentente, dor, queimação, vermelhidão ou perda capilar acompanhada de alteração na textura da pele."
    },
    dermatites: {
      title: "Dermatites, Caspa e Descamações",
      explicacao: "Alterações na superfície do couro cabeludo que comprometem a barreira cutânea e geram quadros inflamatórios incômodos.",
      causas: "Hiperatividade das glândulas sebáceas, proliferação fúngica local, psoríase e fatores emocionais associados.",
      diagnostico: "Exame clínico dermatológico e análise tricotoscópica da descamação e do eritema perifolicular.",
      tratamento: "Shampoos terapêuticos específicos, loções calmantes e fototerapia ou tratamentos sistêmicos se clinicamente necessário.",
      quando: "Descamação persistentente, coceira intensa, crostas ou oleosidade excessiva refratária aos cuidados habituais."
    }
  };

  const faqs = [
    { q: "Queda de cabelo tem tratamento?", a: "Sim. Praticamente todas as formas de queda e alopecia dispõem de abordagens terapêuticas modernas baseadas em evidências científicas que visam paralisar a evolução e recuperar a densidade possível, respeitando a individualidade de cada quadro clínico." },
    { q: "Toda queda de cabelo precisa de suplementação de vitaminas?", a: "Não. A suplementação indiscriminada sem comprovação laboratorial de deficiência pode ser ineficaz e, em alguns casos, prejudicial à saúde. O tratamento deve focar na causa real diagnosticada pelo exame clínico." },
    { q: "O estresse emocional realmente pode fazer o cabelo cair?", a: "Sim. O estresse agudo eleva os níveis corporais de cortisol e pode antecipar a transição dos fios da fase de crescimento para a fase de queda, resultando em um eflúvio telógeno semanas ou meses após o evento gerador." },
    { q: "Lavar o cabelo diariamente piora ou acelera a queda?", a: "Mito. A lavagem higieniza o couro cabeludo, removendo o excesso de sebo e resíduos que podem favorecer inflamações. Os fios que se soltam durante o banho já estavam em fase de desprendimento natural." },
    { q: "Homens e mulheres podem desenvolver quadros de alopecia?", a: "Sim. A alopecia androgenética e outras condições inflamatórias afetam ambos os sexos, apresentando padrões de distribuição clínica e dinâmicas hormonais distintas, exigindo linhas de cuidado personalizadas." },
    { q: "Quanto tempo costuma levar para observar os resultados iniciais?", a: "O ciclo de crescimento capilar é naturalmente lento. Em média, as primeiras respostas clínicas e estabilizações começam a ser visíveis microscopicamente entre 3 e 6 meses após o início do plano terapêutico individualizado." }
  ];

  return (
    <div className="bg-[#FBFBFA] text-[#0D1828] font-sans antialiased selection:bg-[#E4DBD5] selection:text-[#0D1828]">
      
      {/* HEADER / NAVEGAÇÃO PREMIUM */}
      <header className="fixed top-0 left-0 right-0 bg-[#FBFBFA]/90 backdrop-blur-md z-50 border-b border-[#E4DBD5]/40 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
          
          {/* LOGOMARCA OFICIAL INTEGRADA NO INÍCIO */}
          <div className="flex items-center">
            <a href="#home" className="block focus:outline-none">
              <img 
                src="/logo.png" 
                alt="Dra. Aline Godinho - Médica Tricologista" 
                className="h-10 md:h-12 w-auto object-contain transition-opacity duration-300 hover:opacity-90"
                onError={(e) => {
                  // Fallback elegante caso a imagem ainda não esteja na pasta public
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.parentElement) {
                    const txtFallback = document.getElementById('brand-text-fallback');
                    if (txtFallback) txtFallback.style.display = 'flex';
                  }
                }}
              />
              <div id="brand-text-fallback" className="hidden flex-col">
                <span className="font-serif text-xl tracking-[0.15em] text-[#0D1828] uppercase font-light">Aline Godinho</span>
                <span className="text-[9px] tracking-[0.2em] text-[#A47F67] uppercase font-medium mt-0.5">Médica Tricologista</span>
              </div>
            </a>
          </div>
          
          {/* MENU QUIET LUXURY */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs tracking-[0.15em] uppercase font-medium">
            <a href="#sobre" className="text-[#23374B] hover:text-[#A47F67] transition-colors duration-300">Sobre</a>
            <a href="#atuacao" className="text-[#23374B] hover:text-[#A47F67] transition-colors duration-300">Áreas de Atuação</a>
            <a href="#consulta" className="text-[#23374B] hover:text-[#A47F67] transition-colors duration-300">A Consulta</a>
            <a href="#procedimentos" className="text-[#23374B] hover:text-[#A47F67] transition-colors duration-300">Procedimentos</a>
            <a href="#faq" className="text-[#23374B] hover:text-[#A47F67] transition-colors duration-300">FAQ</a>
            <a href="#contato" className="text-[#23374B] hover:text-[#A47F67] transition-colors duration-300">Contato</a>
          </nav>

          <a 
            href="https://wa.me/5531999442277" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-[#A47F67] text-[#0D1828] bg-transparent hover:bg-[#0D1828] hover:text-white hover:border-[#0D1828] transition-all duration-500 px-6 py-3 text-xs tracking-[0.15em] uppercase rounded-[2px] font-medium"
          >
            Agendar Consulta
          </a>
        </div>
      </header>

      {/* HERO SECTION - APRESENTAÇÃO HARMONIZADA */}
      <section id="home" className="pt-40 pb-20 md:pt-48 md:pb-28 bg-gradient-to-b from-[#FBFBFA] via-[#E4DBD5]/20 to-[#FBFBFA] border-b border-[#E4DBD5]/30 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* TEXTO INSTITUCIONAL */}
          <div className="md:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A47F67] font-semibold block">Atendimento Dedicado</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0D1828] leading-[1.15] font-light">
                Dra. Aline Godinho
              </h1>
              <p className="text-xs tracking-[0.15em] text-[#23374B] font-medium uppercase">
                Médica | CRM-MG 69493
              </p>
            </div>
            
            <div className="w-16 h-[1px] bg-[#A47F67]/60"></div>
            
            <p className="text-base md:text-lg text-[#23374B]/90 font-light leading-relaxed max-w-xl">
              Atendimento técnico e individualizado voltado ao diagnóstico minucioso, estudo de base científica e tratamento integral das doenças do couro cabeludo e das diversas manifestações de queda de cabelo.
            </p>
            
            <div className="pt-2">
              <a 
                href="https://wa.me/5531999442277" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#0D1828] text-white hover:bg-[#A47F67] transition-all duration-500 px-8 py-4 text-xs tracking-[0.15em] uppercase rounded-[2px] shadow-sm font-medium"
              >
                Agendar Avaliação Clínica
              </a>
            </div>
          </div>

          {/* FOTO DA MÉDICA INTEGRADA COM MOLDURA QUIET LUXURY */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative p-3 bg-white border border-[#E4DBD5] rounded-[2px] shadow-sm max-w-sm md:max-w-full">
              <div className="absolute top-0 right-0 w-8 h-8 -mr-2 -mt-2 opacity-20">
                <img src="/icone.png" alt="" className="w-full h-full object-contain" />
              </div>
              <img 
                src="/dra-aline.jpg" 
                alt="Dra. Aline Godinho no consultório" 
                className="rounded-[1px] w-full h-auto object-cover max-h-[460px]"
                onError={(e) => {
                  // Caso a imagem profissional ainda não esteja na pasta, exibe um espaço cinza elegante
                  e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600";
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* SOBRE - MESCLADO E EDUCATIVO */}
      <section id="sobre" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A47F67] font-bold block">Fundamentação de Carreira</span>
            <h2 className="font-serif text-3xl text-[#0D1828] font-light">Corpo Clínico & Compromisso</h2>
            <div className="w-12 h-[1px] bg-[#E4DBD5] pt-1"></div>
          </div>
          <div className="md:col-span-8 text-sm md:text-base text-[#23374B]/90 font-light leading-relaxed space-y-6">
            <p>
              A atuação profissional da Dra. Aline Godinho é estritamente pautada pelo rigor da evidência científica e pela busca contínua por atualizações no cenário da dermatologia voltada à saúde capilar. Com foco na condução ética e transparente da medicina, cada atendimento é estruturado para oferecer clareza diagnóstica absoluta.
            </p>
            <p>
              Sua prática diária alia o acolhimento ao paciente ao uso de métodos propedêuticos avançados. A participação ativa e constantee em congressos nacionais, simpósios científicos e fóruns de discussão internacional garante a integração de inovações terapêuticas devidamente validadas pelas autoridades competentes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs tracking-wider uppercase font-medium text-[#0D1828]">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#A47F67] rounded-full"></span>
                Atualização Científica Constantee
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#A47F67] rounded-full"></span>
                Conduta Pró-Evidência Clínica
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS DE ATUACÃO - INTERATIVIDADE SUAVE */}
      <section id="atuacao" className="py-24 bg-gradient-to-b from-white via-[#E4DBD5]/10 to-[#FBFBFA] border-t border-b border-[#E4DBD5]/30 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A47F67] font-bold block">Investigação Avançada</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0D1828] font-light">Patologias e Abordagens Clínicas</h2>
            <p className="text-xs text-[#23374B]/70 max-w-md mx-auto font-light">Selecione uma categoria para compreender a fundamentação diagnóstica de forma educativa.</p>
          </div>

          {/* ABAS COM DESIGN DE LINHAS FINAS */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
            {Object.keys(areasAtuacion).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-3 text-xs uppercase tracking-wider font-medium rounded-[2px] transition-all duration-500 border ${
                  activeTab === key 
                    ? 'bg-[#0D1828] text-white border-[#0D1828]' 
                    : 'bg-white/60 text-[#23374B] border-[#E4DBD5] hover:border-[#A47F67]'
                }`}
              >
                {areasAtuacion[key as keyof typeof areasAtuacion].title.split(' & ')[0]}
              </button>
            ))}
          </div>

          {/* DETALHE DO CARD EDUCATIVO */}
          <div className="bg-white border border-[#E4DBD5]/60 p-8 md:p-12 rounded-[2px] shadow-sm max-w-4xl mx-auto transition-all duration-300">
            <h3 className="font-serif text-2xl text-[#0D1828] mb-6 font-light">{areasAtuacion[activeTab as keyof typeof areasAtuacion].title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs md:text-sm">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[11px] text-[#A47F67] uppercase tracking-wider mb-1">O que é</h4>
                  <p className="font-light text-[#23374B]/90 leading-relaxed">{areasAtuacion[activeTab as keyof typeof areasAtuacion].explicacao}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[11px] text-[#A47F67] uppercase tracking-wider mb-1">Prováveis Causas</h4>
                  <p className="font-light text-[#23374B]/90 leading-relaxed">{areasAtuacion[activeTab as keyof typeof areasAtuacion].causas}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[11px] text-[#A47F67] uppercase tracking-wider mb-1">Diagnóstico Médico</h4>
                  <p className="font-light text-[#23374B]/90 leading-relaxed">{areasAtuacion[activeTab as keyof typeof areasAtuacion].diagnostico}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[11px] text-[#A47F67] uppercase tracking-wider mb-1">Tratamento Clínico</h4>
                  <p className="font-light text-[#23374B]/90 leading-relaxed">{areasAtuacion[activeTab as keyof typeof areasAtuacion].tratamento}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#E4DBD5]/40 text-xs text-[#A47F67] italic font-light">
              <strong>Quando buscar avaliação médica:</strong> {areasAtuacion[activeTab as keyof typeof areasAtuacion].quando}
            </div>
          </div>
        </div>
      </section>

      {/* A CONSULTA - TRANSIÇÃO SUAVE PARA FRENTE ESCURA INTEGRADA */}
      <section id="consulta" className="py-24 bg-gradient-to-br from-[#0D1828] to-[#23374B] text-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A47F67] font-bold block">Acolhimento & Detalhe</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight text-[#FBFBFA]">A Linha de Cuidado na Consulta</h2>
            <p className="text-xs md:text-sm font-light text-[#E4DBD5]/70 leading-relaxed">
              O agendamento assegura um tempo expandido e exclusivo, focado na completa individualização do mapeamento clínico capilar.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { t: "Anamnese Detalhada", d: "Investigação minuciosa do histórico de saúde, rotinas capilares, predisposição genética e marcadores biológicos sistêmicos." },
              { t: "Exame Clínico Físico", d: "Avaliação macroscópica direta da densidade cutânea, identificação de padrões distribucionais e integridade das hastes." },
              { t: "Tricotoscopia Digital", d: "Análise microscópica de alta resolução para mapear sinais inflamatórios perifoliculares, variação de diâmetro e viabilidade folicular." },
              { t: "Plano Terapêutico Customizado", d: "Desenvolvimento de uma estratégia customizada unindo suporte tópico, sistêmico e orientações personalizadas de acompanhamento." }
            ].map((item, index) => (
              <div key={index} className="border border-[#E4DBD5]/10 p-6 rounded-[2px] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
                <h3 className="font-serif text-lg mb-2 text-[#E4DBD5] font-light">{item.t}</h3>
                <p className="text-xs font-light text-white/70 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCEDIMENTOS - ÉTICO E CIENTÍFICO */}
      <section id="procedimentos" className="py-24 bg-[#FBFBFA] px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#A47F67] font-bold block">Critério Técnico Regulamentado</span>
          <h2 className="font-serif text-3xl text-[#0D1828] font-light">Procedimentos Clínicos Complementares</h2>
          <p className="text-xs text-[#23374B]/70 max-w-lg mx-auto font-light">Todas as intervenções são descritas de forma científica e pautadas exclusivamente pelas resoluções normativas vigentes do CFM.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm max-w-5xl mx-auto">
          {[
            { t: "Microinfusão de Medicamentos", d: "Abordagem de entrega ativa voltada a otimizar o aporte de substâncias reguladoras na barreira cutânea folicular, quando houver indicação médica." },
            { t: "Infiltrações Intralesionais", d: "Aplicação focal e controlada de ativos moduladores ou anti-inflamatórios diretamente na derme profunda, quando houver indicação médica." },
            { t: "Laserterapia / Fotobiomodulação", d: "Uso de comprimentos de onda de luz específicos voltados para atuar positivamente no metabolismo celular da microcirculação, quando houver indicação médica." }
          ].map((item, index) => (
            <div key={index} className="border border-[#E4DBD5] p-6 rounded-[2px] bg-white flex flex-col justify-between shadow-sm hover:border-[#A47F67]/60 transition-colors duration-500">
              <div className="space-y-3">
                <h3 className="font-serif text-lg text-[#0D1828] font-light">{item.t}</h3>
                <p className="font-light text-[#23374B]/80 leading-relaxed text-xs">{item.d}</p>
              </div>
              <div className="text-[10px] tracking-wider uppercase text-[#A47F67] font-semibold pt-4 mt-4 border-t border-[#E4DBD5]/40">
                Conduta Ética Estrita
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PERGUNTAS FREQUENTES (FAQ) */}
      <section id="faq" className="py-24 bg-gradient-to-b from-[#FBFBFA] via-[#E4DBD5]/10 to-[#FBFBFA] border-t border-b border-[#E4DBD5]/30 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A47F67] font-bold block">Esclarecimento ao Paciente</span>
            <h2 className="font-serif text-3xl text-[#0D1828] font-light">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#E4DBD5]/60 pb-4">
                <button
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="w-full flex justify-between items-center text-left py-2 font-serif text-base text-[#0D1828] hover:text-[#A47F67] transition-colors focus:outline-none"
                >
                  <span className="font-light">{faq.q}</span>
                  <span className="text-xs text-[#A47F67] ml-4 font-mono">{faqOpen === index ? '—' : '+'}</span>
                </button>
                {faqOpen === index && (
                  <p className="text-xs md:text-sm font-light text-[#23374B]/80 leading-relaxed pt-2 pl-1 transition-opacity duration-300">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO & LOCALIZAÇÃO */}
      <section id="contato" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A47F67] font-bold block">Canais de Atendimento</span>
              <h2 className="font-serif text-3xl text-[#0D1828] font-light">Informações de Contato</h2>
            </div>
            
            <div className="space-y-4 text-xs md:text-sm font-light text-[#23374B]/90">
              <div className="flex items-start gap-3">
                <span className="text-[#A47F67] font-semibold uppercase tracking-wider text-[11px] pt-0.5">Endereço:</span>
                <p className="leading-relaxed text-[#0D1828]">Avenida do Contorno, 7069 - Sala 410<br />Bairro Lourdes - Belo Horizonte - MG</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#A47F67] font-semibold uppercase tracking-wider text-[11px]">WhatsApp:</span>
                <a href="https://wa.me/5531999442277" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#0D1828]">(31) 99944-2277</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#A47F67] font-semibold uppercase tracking-wider text-[11px]">Digital:</span>
                <a href="https://instagram.com/dra.alinegodinho" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#0D1828]">@dra.alinegodinho</a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 bg-white border border-[#E4DBD5] p-8 rounded-[2px] shadow-sm">
            <form className="space-y-4 text-xs" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="uppercase tracking-wider text-[#23374B]/80 font-medium">Nome Completo</label>
                  <input type="text" className="w-full bg-[#FBFBFA] border border-[#E4DBD5] p-3 rounded-[2px] focus:outline-none focus:border-[#A47F67]" />
                </div>
                <div className="space-y-1">
                  <label className="uppercase tracking-wider text-[#23374B]/80 font-medium">WhatsApp corporativo</label>
                  <input type="tel" className="w-full bg-[#FBFBFA] border border-[#E4DBD5] p-3 rounded-[2px] focus:outline-none focus:border-[#A47F67]" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="uppercase tracking-wider text-[#23374B]/80 font-medium">Sua Mensagem ou Dúvida</label>
                <textarea rows={4} className="w-full bg-[#FBFBFA] border border-[#E4DBD5] p-3 rounded-[2px] focus:outline-none focus:border-[#A47F67]"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#0D1828] text-white hover:bg-[#A47F67] transition-colors duration-500 py-3.5 uppercase tracking-widest font-medium rounded-[2px]">
                Enviar Mensagem Informativa
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* RODAPÉ MESTRE */}
      <footer className="bg-[#0D1828] text-white/50 text-[11px] font-light py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1">
            <p className="text-white tracking-wider font-serif text-sm">Dra. Aline Godinho</p>
            <p>Médica Responsável | CRM-MG 69493</p>
            <p className="text-[10px] text-white/30 pt-1">Este material possui caráter estritamente educativo e formativo em saúde. Proibida a reprodução sem autorização.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 tracking-wider uppercase text-[10px]">
            <span className="hover:text-white cursor-pointer transition-colors">Política de Privacidade</span>
            <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
            <span className="hover:text-white cursor-pointer transition-colors">LGPD</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
