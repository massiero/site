"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, School, Clock, CheckCircle2, Users, LayoutDashboard, Shield, ChevronRight, BarChart3, GraduationCap, Zap, LayoutGrid, Building2, Medal, ExternalLink } from 'lucide-react';
import { useState } from 'react';
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


    return (
        <main className="min-h-screen relative pt-24">
            <div className="bg-mesh" />

            {/* HEADER - OPTION 1: Top-pinned for maximum reliability */}
            <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="glass rounded-b-3xl px-5 lg:px-8 h-16 lg:h-32 flex items-center justify-between shadow-xl relative backdrop-blur-md border-x border-b border-white/40">
                        <Link href="/" className="flex items-center gap-2 min-w-0 max-w-[40%] lg:max-w-[55%]">
                            <Image
                                src="logo.png"
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
                            <a href="https://admin.edutic.com.br" className="btn-premium py-3 px-6 text-sm flex items-center gap-2">
                                <LayoutDashboard className="w-4 h-4" /> Gestão
                            </a>
                            <a href="https://horario.edutic.com.br" target="_blank" rel="noopener noreferrer" className="btn-premium-primary py-3 px-6 text-sm flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> Horário
                            </a>
                            <button className="btn-premium bg-slate-100 text-slate-900 hover:bg-slate-200 py-3 px-6 text-sm flex items-center gap-2">
                                <GraduationCap className="w-4 h-4" /> Aluno
                            </button>
                        </div>

                        {/* Mobile Actions (Direct Access) */}
                        <div className="lg:hidden flex items-center gap-1 sm:gap-2">
                            <a href="https://admin.edutic.com.br" className="p-2 text-blue-600 active:bg-blue-100 rounded-full transition-colors" title="Gestão">
                                <LayoutDashboard className="w-6 h-6" />
                            </a>
                            <a href="https://horario.edutic.com.br" target="_blank" rel="noopener noreferrer" className="p-2 text-blue-600 active:bg-blue-100 rounded-full transition-colors" title="Horário">
                                <Calendar className="w-6 h-6" />
                            </a>
                            <button className="p-2 text-blue-600 active:bg-blue-100 rounded-full transition-colors" title="Aluno">
                                <GraduationCap className="w-6 h-6" />
                            </button>
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
                                    src="dashboard-mockup.png"
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
                        {/* Feature 1: Main Admin */}
                        <div className="bento-item col-span-12 lg:col-span-6 flex flex-col group relative overflow-hidden">
                            <div className="relative z-10 flex-1 flex flex-col">
                                <div className="w-16 h-16 rounded-3xl bg-blue-600 text-white flex items-center justify-center mb-8 shadow-xl shadow-blue-600/20">
                                    <LayoutDashboard className="w-8 h-8" />
                                </div>
                                <h4 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Gestão Escolar</h4>
                                <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
                                    A espinha dorsal da sua escola. Das matrículas automatizadas ao controle financeiro rigoroso, tudo em um só lugar.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {['Diário Digital', 'Financeiro', 'Secretaria', 'Pedagógico', 'Frequência', 'Portal Aluno'].map(tag => (
                                        <div key={tag} className="flex items-center gap-3 text-slate-900 font-bold text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> {tag}
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-4 mb-10">
                                    {[
                                        "Sem limites de turmas ou professores.",
                                        "Investimento: 60,00/mensal.",
                                        "Faça um teste por 7 dias. Não gostou, devolvemos seu dinheiro."
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-10 group/img relative max-w-3xl">
                                    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 group-hover/img:shadow-xl group-hover/img:scale-[1.01] w-full aspect-video relative">
                                        <Image
                                            src="screenshot-gestao.png"
                                            alt="Interface da Gestão Escolar"
                                            fill
                                            className="object-cover"
                                        />
                                        <a
                                            href="/screenshot-gestao.png"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute inset-0 bg-blue-600/0 group-hover/img:bg-blue-600/10 flex items-center justify-center transition-all duration-300"
                                        >
                                            <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-blue-600 shadow-lg opacity-0 group-hover/img:opacity-100 transition-opacity transform translate-y-4 group-hover/img:translate-y-0">
                                                Clique para ampliar visão do sistema
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-auto">
                                    <a href="https://wa.me/5546984007968" target="_blank" rel="noopener noreferrer" className="btn-premium-primary flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 whitespace-nowrap">
                                        Adquira aqui <ArrowRight className="w-5 h-5" />
                                    </a>
                                    <a href="https://admin.edutic.com.br" target="_blank" rel="noopener noreferrer" className="btn-premium flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 text-slate-900 hover:bg-slate-200 shadow-md whitespace-nowrap">
                                        Acessar <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            <div className="absolute top-10 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50 group-hover:scale-125 transition-transform duration-700" />
                        </div>

                        {/* Feature 2: Timetable Generator (Adquira aqui) */}
                        <div className="bento-item col-span-12 lg:col-span-6 flex flex-col group relative overflow-hidden">
                            <div className="relative z-10 flex-1 flex flex-col text-left">
                                <div className="w-16 h-16 rounded-3xl bg-indigo-600 text-white flex items-center justify-center mb-8 shadow-xl shadow-indigo-600/20">
                                    <Calendar className="w-8 h-8" />
                                </div>
                                <h4 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Gerador de Horários</h4>

                                <div className="space-y-4 mb-8">
                                    {[
                                        "Nossos Algoritmos processam milhares de combinações para entregar a grade horária perfeita sem janelas ou conflitos.",
                                        "Todo processamento é feito em nossos servidores, por isso funciona em qualquer computador.",
                                        "Sem limites de turmas ou professores.",
                                        "Investimento: 129,00/ano em 10x sem juros.",
                                        "Faça um teste por 7 dias. Não gostou, devolvemos seu dinheiro."
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-10 group/img relative">
                                    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 group-hover/img:shadow-xl group-hover/img:scale-[1.02]">
                                        <Image
                                            src="screenshot-horario.png"
                                            alt="Interface do Gerador de Horários"
                                            width={600}
                                            height={300}
                                            className="w-full h-auto"
                                        />
                                        <a
                                            href="/screenshot-horario.png"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute inset-0 bg-indigo-600/0 group-hover/img:bg-indigo-600/10 flex items-center justify-center transition-all duration-300"
                                        >
                                            <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-indigo-600 shadow-lg opacity-0 group-hover/img:opacity-100 transition-opacity transform translate-y-4 group-hover/img:translate-y-0">
                                                Clique para ampliar visão do sistema
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-auto pt-6">
                                    <a href="https://horario.edutic.com.br/register" target="_blank" rel="noopener noreferrer" className="btn-premium flex-1 bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 inline-flex items-center justify-center gap-2 px-8 py-4 whitespace-nowrap">
                                        Adquira aqui <ArrowRight className="w-5 h-5" />
                                    </a>
                                    <a href="https://horario.edutic.com.br" target="_blank" rel="noopener noreferrer" className="btn-premium flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 text-slate-900 hover:bg-slate-200 shadow-md whitespace-nowrap">
                                        Acessar <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            <div className="absolute top-10 -right-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-50 group-hover:scale-125 transition-transform duration-700" />
                        </div>

                        {/* Feature 3: Modern Tech */}
                        <div className="bento-item col-span-12 lg:col-span-4 bg-white">
                            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                                <Zap className="w-7 h-7" />
                            </div>
                            <h5 className="text-xl font-bold text-slate-900 mb-4">Alta Performance</h5>
                            <p className="text-slate-500 text-sm leading-relaxed">Infraestrutura em nuvem redundante para garantir acesso instantâneo de qualquer lugar.</p>
                        </div>

                        {/* Feature 4: Security */}
                        <div className="bento-item col-span-12 lg:col-span-4 bg-white">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6">
                                <Shield className="w-7 h-7" />
                            </div>
                            <h5 className="text-xl font-bold text-slate-900 mb-4">Segurança</h5>
                            <p className="text-slate-500 text-sm leading-relaxed">Seus dados e de seus alunos protegidos sob os mais rigorosos padrões de criptografia.</p>
                        </div>

                        {/* Feature 5: Support */}
                        <div className="bento-item col-span-12 lg:col-span-4 bg-white">
                            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-6">
                                <Users className="w-7 h-7" />
                            </div>
                            <h5 className="text-xl font-bold text-slate-900 mb-4">Suporte</h5>
                            <p className="text-slate-500 text-sm leading-relaxed">Especialistas prontos para te ajudar em tempo real, sem tickets ou burocracia.</p>
                        </div>
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
        </main>
    );
}
