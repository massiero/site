"use client";

import { motion } from 'framer-motion';
import { Shield, ArrowLeft, Lock, Eye, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Privacidade() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-700">
            {/* Simple Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="container mx-auto max-w-4xl px-6 py-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-bold transition-colors">
                        <ArrowLeft className="w-5 h-5" /> Voltar ao Início
                    </Link>
                    <div className="text-blue-600 font-black tracking-tighter text-xl">EduTIC</div>
                </div>
            </header>

            <article className="container mx-auto max-w-4xl px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="w-16 h-16 rounded-3xl bg-blue-600 text-white flex items-center justify-center mb-8 shadow-xl shadow-blue-600/20">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">Política de Privacidade</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Entenda como cuidamos dos seus dados e garantimos a segurança da sua instituição.
                    </p>
                </motion.div>

                <div className="space-y-12 text-slate-700 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <Lock className="w-6 h-6 text-blue-600" /> 1. Compromisso com a Segurança
                        </h2>
                        <p>
                            Na EduTIC, a privacidade e a segurança das informações são prioridades absolutas. Nosso ecossistema de gestão escolar foi desenvolvido seguindo as melhores práticas de proteção de dados e está em total conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD)</strong>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <Eye className="w-6 h-6 text-blue-600" /> 2. Coleta e Uso de Dados
                        </h2>
                        <p className="mb-4">
                            Coletamos apenas as informações estritamente necessárias para a prestação dos nossos serviços de gestão educacional:
                        </p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Dados de Operadores:</strong> Nome e e-mail para identificação e login no sistema.</li>
                            <li><strong>Dados Educacionais:</strong> Informações de alunos, notas e frequências inseridas pela instituição (atuamos como Operadores destes dados).</li>
                            <li><strong>Logs de Acesso:</strong> Para monitoramento de segurança e melhoria contínua da plataforma.</li>
                        </ul>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <FileText className="w-6 h-6 text-blue-600" /> 3. Direitos do Titular
                        </h2>
                        <p className="mb-4">
                            Você, como titular dos dados, possui direitos garantidos pela LGPD, incluindo:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 font-medium">
                            <li>Acesso facilitado às informações sobre como seus dados são tratados.</li>
                            <li>Correção de dados incompletos ou inexatos.</li>
                            <li>Eliminação de dados pessoais tratados com o seu consentimento.</li>
                            <li>Revogação do consentimento a qualquer momento.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Compartilhamento</h2>
                        <p>
                            Não comercializamos nem compartilhamos dados com terceiros para fins publicitários. O compartilhamento ocorre exclusivamente com parceiros tecnológicos essenciais (como serviços de hospedagem em nuvem) que garantem o funcionamento seguro do sistema.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contato</h2>
                        <p>
                            Para qualquer dúvida sobre nossa política de privacidade ou para exercer seus direitos como titular, entre em contato através do nosso canal de suporte oficial.
                        </p>
                    </section>
                </div>

                <footer className="mt-20 pt-10 border-t border-slate-200 text-slate-500 text-sm">
                    Última atualização: Março de 2026 • EduTIC Inteligência Educacional
                </footer>
            </article>
        </main>
    );
}
