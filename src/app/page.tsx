"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, School, Clock, CheckCircle2, Users, LayoutDashboard, Shield, ChevronRight, BarChart3, GraduationCap, Zap, LayoutGrid, Building2, Medal, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Home() {
    const [gestaoLink, setGestaoLink] = useState('https://admin.edutic.com.br');
    const [isGestaoModalOpen, setIsGestaoModalOpen] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hostname = window.location.hostname;
            if (hostname.includes('sistema-edu.com.br')) {
                setGestaoLink('https://admin.sistema-edu.com.br');
            }
        }
    }, []);

    return (
        <main className="min-h-screen relative pt-24">
            <div className="bg-mesh" />

            {/* HEADER - OPTION 1: Top-pinned for maximum reliability */}
            <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="glass rounded-b-3xl px-5 lg:px-8 h-16 lg:h-32 flex items-center justify-between shadow-xl relative backdrop-blur-md border-x border-b border-white/40">
                        <Link href="/" className="flex items-center gap-2 min-w-0 max-w-[40%] lg:max-w-[55%]">
                            <Image
                                src="/logo.png"
                                alt="EduTIC Logo"
                                width={480}
                                height={130}
                                className="h-16 sm:h-24 lg:h-32 w-auto object-contain"
                                priority
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-8">
                            <a href="#solucoes" className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
                                <LayoutGrid className="w-4 h-4" /> Soluções
                            </a>
                            <a href="#empresa" className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
                                <Building2 className="w-4 h-4" /> A Empresa
                            </a>
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a href={gestaoLink} className="btn-premium py-3 px-6 text-sm flex items-center gap-2">
                                <LayoutDashboard className="w-4 h-4" /> Adm / Prof
                            </a>
                            <a href="https://aluno.edutic.com.br" target="_blank" rel="noopener noreferrer" className="btn-premium bg-slate-100 text-slate-900 hover:bg-slate-200 py-3 px-6 text-sm flex items-center gap-2">
                                <GraduationCap className="w-4 h-4" /> Aluno
                            </a>
                        </div>

                        {/* Mobile Actions (Direct Access) */}
                        <div className="lg:hidden flex items-center gap-1 sm:gap-2">
                            <a href={gestaoLink} className="p-2 text-blue-600 active:bg-blue-100 rounded-full transition-colors" title="Adm / Prof">
                                <LayoutDashboard className="w-6 h-6" />
                            </a>
                            <a href="https://aluno.edutic.com.br" target="_blank" rel="noopener noreferrer" className="p-2 text-blue-600 active:bg-blue-100 rounded-full transition-colors" title="Aluno">
                                <GraduationCap className="w-6 h-6" />
                            </a>
                        </div>

                    </nav>
                </div>
            </header>

            {/* HERO SECTION */}
            <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-24 px-6 overflow-x-hidden">
                <div className="blob -top-20 -left-20" />
                <div className="blob top-40 -right-20 animate-[float_25s_infinite_reverse]" />

                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100/50 text-blue-700 text-sm font-bold mb-8">
                                <Zap className="w-4 h-4 fill-current" />
                                On-line desde 2003
                            </div>
                            <motion.h1
                                animate={{ opacity: 1, y: 0 }}
                                className="text-2xl lg:text-4xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8"
                            >
                                Sua escola não precisa pagar caro por <span className="text-blue-600 relative inline-block">tecnologia de ponta.<div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-100/50 -z-10 rounded-full" /></span>
                            </motion.h1>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                                A EduTIC produz sistemas robustos, de fácil uso, totalmente on-line e de baixo custo para Redes de escolas públicas e privadas.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <a href="https://wa.me/5546984007968" target="_blank" rel="noopener noreferrer" className="btn-premium-primary text-lg flex items-center justify-center gap-2">
                                    Começar agora <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>

                            <div className="mt-12 flex items-center gap-6">
                                <div className="flex -space-x-3">
                                    {[
                                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
                                        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
                                    ].map((url, i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm bg-slate-100">
                                            <img src={url} alt={`User ${i + 1} `} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm font-bold text-slate-500">
                                    <span className="text-slate-900">+20 anos</span> de excelência contínua
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full" />
                            <div className="relative glass rounded-[3rem] p-4 overflow-hidden border-white/40 shadow-2xl">
                                <Image
                                    src="/dashboard-mockup.png"
                                    alt="EduTIC Dashboard"
                                    width={800}
                                    height={600}
                                    className="rounded-[2.2rem] shadow-lg w-full h-auto"
                                />
                            </div>
                            {/* Floating elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="hidden lg:flex absolute -top-10 -right-10 glass px-6 py-4 rounded-3xl shadow-xl items-center gap-4 border-white/20"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Retenção</div>
                                    <div className="text-xl font-black text-slate-900">+24%</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* STATS STRIP */}
            <section className="pb-16 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="glass rounded-[3rem] py-12 px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center border-white/30">
                        <div>
                            <div className="text-2xl font-black text-blue-600 mb-2">20+</div>
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Anos no Mercado</div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-blue-600 mb-2">99.9%</div>
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Disponibilidade</div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-blue-600 mb-2">100%</div>
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Cloud-Native</div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-blue-600 mb-2">24/7</div>
                            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Suporte Vitalício</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENTO SOLUTIONS GRID */}
            <section id="solucoes" className="section-padding px-6 bg-slate-50/50 scroll-mt-48">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-12">

                        <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                            Soluções
                        </h3>
                    </div>

                    <div className="bento-grid">
                        {/* Feature 1: Gestão Escolar */}
                        <div
                            onClick={() => setIsGestaoModalOpen(true)}
                            className="bento-item col-span-12 lg:col-span-4 flex flex-col group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                        >
                            <div className="relative z-10 flex-1 flex flex-col">
                                <div className="w-16 h-16 rounded-3xl bg-blue-600 text-white flex items-center justify-center mb-8 shadow-xl shadow-blue-600/20">
                                    <LayoutDashboard className="w-8 h-8" />
                                </div>
                                <h4 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Gestão escolar</h4>
                                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                    Gestão Escolar completa para sua escola.
                                </p>

                                <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold">
                                    Ver detalhes <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                            <div className="absolute top-10 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 group-hover:scale-125 transition-transform duration-700" />
                        </div>


                        {/* Feature 2: Gerador de Horários */}
                        <Link href="https://gerahorario.com.br" target="_blank" rel="noopener noreferrer" className="bento-item col-span-12 lg:col-span-4 flex flex-col group relative overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                            <div className="relative z-10 flex-1 flex flex-col text-left">
                                <div className="w-16 h-16 rounded-3xl bg-indigo-600 text-white flex items-center justify-center mb-8 shadow-xl shadow-indigo-600/20">
                                    <Calendar className="w-8 h-8" />
                                </div>
                                <h4 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Gerador de Horários</h4>
                                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                    Gerador de horários/grades escolares.
                                </p>

                                <div className="mt-auto flex items-center gap-2 text-indigo-600 font-bold">
                                    Conhecer mais <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                            <div className="absolute top-10 -right-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-50 group-hover:scale-125 transition-transform duration-700" />
                        </Link>



                    </div>
                </div>
            </section>

            {/* MISSION / ABOUT SECTION */}
            <section id="empresa" className="section-padding bg-slate-900 text-white overflow-hidden relative scroll-mt-48">
                <div className="container mx-auto max-w-7xl px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 blur-[100px]" />
                            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-6">Sobre a Empresa</h2>
                            <h3 className="text-4xl lg:text-5xl font-black mb-10 tracking-tight leading-[1.1]">
                                Tecnologia que nasce da <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 bg-[length:200%_auto] animate-gradient">
                                    realidade da escola
                                </span>
                            </h3>

                            <div className="space-y-6 text-lg text-slate-400 mb-12 leading-relaxed">
                                <p>
                                    Nossa história começou em 2003, dentro da rede estadual de São Paulo, a partir de uma necessidade real: reduzir o retrabalho e a burocracia que consumiam o tempo dos educadores. Naquele cenário, onde processos eram manuais, surgiu a oportunidade de transformar a gestão escolar por meio da tecnologia.
                                </p>
                                <p>
                                    Movidos por esse propósito, desenvolvemos o <strong>Frames</strong>, o primeiro sistema totalmente online voltado para escolas públicas no Brasil — um desafio significativo para a época. A proposta inovadora rapidamente ganhou adesão, alcançando mais de 350 escolas estaduais e consolidando-se como uma solução confiável e acessível.
                                </p>
                                <p>
                                    Ao longo dessa trajetória, enfrentamos desafios importantes para entregar um sistema de baixo custo, com alta usabilidade e, principalmente, com rigor na segurança dos dados — pilares fundamentais para o ambiente educacional.
                                </p>
                                <p>
                                    Hoje, essa evolução se materializa no <strong>EduTIC</strong>, uma plataforma que incorpora as novas possibilidades da inteligência artificial para apoiar ainda mais a gestão e o processo pedagógico. Entramos em uma nova fase, com desafios mais complexos e oportunidades ainda maiores de impacto na educação.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        <GraduationCap className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold mb-1 text-white">Foco Pedagógico</h5>
                                        <p className="text-slate-500 text-xs leading-relaxed">Ferramentas que acompanham cada detalhe do aprendizado.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold mb-1 text-white">Experiência Real</h5>
                                        <p className="text-slate-500 text-xs leading-relaxed">Duas décadas refinando cada funcionalidade com uso prático.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
                            <div className="relative glass-dark p-12 rounded-[3.5rem] border border-white/10">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
                                    <Users className="w-4 h-4" />
                                    Fale Conosco
                                </div>
                                <p className="text-slate-400 mb-8 text-lg">
                                    Descubra por que centenas de instituições confiam no ecossistema EduTIC para crescer com segurança.
                                </p>

                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 mb-10">
                                    <p className="text-sm text-slate-300 leading-relaxed italic">
                                        "Tem dúvidas ou precisa de orientação sobre como começar? Nossa equipe de especialistas está pronta para ajudar você a encontrar o caminho ideal para sua instituição."
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <a href="https://wa.me/5546984007968" target="_blank" rel="noopener noreferrer" className="btn-premium-primary text-xl w-full flex items-center justify-center gap-3">
                                        Agendar Consultoria <ArrowRight className="w-6 h-6" />
                                    </a>
                                    <p className="text-center text-sm text-slate-500 font-bold uppercase tracking-widest mt-6">
                                        Média de resposta: 10 minutos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-white py-8 px-6 border-t border-slate-100">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
                        <p>&copy; EduTIC. Todos os direitos reservados.</p>
                        <div className="flex gap-8 text-[10px]">
                            <Link href="/privacidade" className="hover:text-blue-600 transition-colors">Privacidade</Link>
                            <Link href="/termos" className="hover:text-blue-600 transition-colors">Termos</Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* GESTÃO ESCOLAR MODAL */}
            {isGestaoModalOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 lg:p-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsGestaoModalOpen(false)}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="relative w-full max-w-4xl glass rounded-[3rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                    >
                        <div className="p-8 lg:p-12 overflow-y-auto">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-16 h-16 rounded-3xl bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-600/20">
                                    <LayoutDashboard className="w-8 h-8" />
                                </div>
                                <button
                                    onClick={() => setIsGestaoModalOpen(false)}
                                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                >
                                    <Zap className="w-6 h-6 text-slate-400 rotate-45" />
                                </button>
                            </div>

                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                                EduTIC Gestão Escolar
                            </h2>
                            <p className="text-xl text-blue-600 font-bold mb-10">
                                A solução definitiva para organização escolar
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 mb-12">
                                <div className="space-y-3">
                                    <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 w-fit">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-black text-slate-900">Gestão Unificada</h3>
                                    <p className="text-sm text-slate-500">Controle total da escola, ou rede de escolas</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 w-fit">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-black text-slate-900">Fácil Uso</h3>
                                    <p className="text-sm text-slate-500">Interface simples e intuitiva</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 w-fit">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-black text-slate-900">Segurança</h3>
                                    <p className="text-sm text-slate-500">E atendimento rápido</p>
                                </div>
                            </div>

                            <div className="bg-slate-50 rounded-[2rem] p-8 mb-10 border border-slate-100">
                                <p className="text-lg text-slate-600 leading-relaxed italic mb-8">
                                    "A espinha dorsal da sua escola. Das matrículas automatizadas ao controle financeiro rigoroso, tudo em um só lugar."
                                </p>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {['Diário Digital', 'Financeiro', 'Secretaria', 'Pedagógico', 'Frequência', 'Portal Aluno'].map(tag => (
                                        <div key={tag} className="flex items-center gap-2 text-slate-900 font-bold text-xs bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 rounded-[2rem] bg-blue-600 text-white shadow-xl shadow-blue-600/20">
                                <div className="space-y-2 text-center lg:text-left">
                                    <div className="text-blue-100 text-sm font-bold uppercase tracking-widest">Oferta exclusiva</div>
                                    <div className="text-3xl font-black">R$ 60,00/mensal</div>
                                    <p className="text-blue-100 text-sm font-medium">Sem limites de turmas ou professores.</p>
                                </div>
                                <div className="flex flex-col gap-3 w-full lg:w-auto">
                                    <a href="https://wa.me/5546984007968" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-center transition-transform hover:scale-105 active:scale-95 shadow-lg">
                                        Adquirir Agora
                                    </a>
                                    <p className="text-[10px] text-center text-blue-100 font-bold uppercase tracking-widest">
                                        Teste por 7 dias ou seu dinheiro de volta
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </main>
    );
}
