"use client";

import { motion } from 'framer-motion';
import { FileText, ArrowLeft, CheckCircle2, ShieldCheck, Scale, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function Termos() {
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
                    <div className="w-16 h-16 rounded-3xl bg-indigo-600 text-white flex items-center justify-center mb-8 shadow-xl shadow-indigo-600/20">
                        <FileText className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">Termos de Uso</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        As diretrizes para o uso seguro e eficiente do nosso ecossistema educacional.
                    </p>
                </motion.div>

                <div className="space-y-12 text-slate-700 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <ShieldCheck className="w-6 h-6 text-indigo-600" /> 1. Licença de Uso
                        </h2>
                        <p>
                            A EduTIC concede à sua instituição uma licença limitada, não exclusiva e intransferível para acessar e utilizar nossa plataforma de gestão escolar conforme os serviços contratados. Este é um software como serviço (SaaS), e o uso do sistema pressupõe a aceitação das regras aqui descritas.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <CheckCircle2 className="w-6 h-6 text-indigo-600" /> 2. Responsabilidades do Usuário
                        </h2>
                        <ul className="list-disc pl-6 space-y-3 font-medium">
                            <li><strong>Veracidade:</strong> A instituição é a única responsável pela veracidade e precisão dos dados inseridos (alunos, notas, frequências).</li>
                            <li><strong>Segurança:</strong> A guarda e sigilo das senhas de acesso são de responsabilidade exclusiva dos usuários autorizados pela escola.</li>
                            <li><strong>Uso Ético:</strong> O sistema deve ser utilizado estritamente para fins de gestão acadêmica e administrativa escolar.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <Scale className="w-6 h-6 text-indigo-600" /> 3. Pagamento e Assinatura
                        </h2>
                        <p className="mb-4">
                            O acesso aos serviços é condicionado ao pagamento recorrente (mensal ou anual) conforme o plano escolhido.
                        </p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Atrasos:</strong> O atraso no pagamento poderá resultar na suspensão temporária do acesso após o prazo de tolerância.</li>
                            <li><strong>Cancelamento:</strong> Pode ser solicitado a qualquer momento, sem multas rescisórias, mediante aviso prévio de 30 dias.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Disponibilidade e Suporte</h2>
                        <p>
                            Buscamos garantir uma disponibilidade de 99,8% do sistema. Manutenções programadas serão comunicadas com antecedência e realizadas fora do horário comercial sempre que possível. O suporte técnico é oferecido via WhatsApp e canais digitais das 08:30 às 18:00 (horário de Brasília).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <HelpCircle className="w-6 h-6 text-indigo-600" /> 5. Alterações dos Termos
                        </h2>
                        <p>
                            Reservamo-nos o direito de atualizar estes termos para refletir melhorias no sistema ou mudanças regulatórias. Mudanças significativas serão notificadas diretamente no painel administrativo do sistema.
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
