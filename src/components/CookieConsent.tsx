"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, X } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100]"
                >
                    <div className="glass rounded-3xl p-6 shadow-2xl border border-white/20 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-600" />

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                <Shield className="w-5 h-5" />
                            </div>

                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-slate-900 mb-1">Privacidade & Cookies</h4>
                                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                    Este site utiliza cookies para garantir que você tenha a melhor experiência em nossa plataforma. Ao continuar navegando, você concorda com nossa <Link href="/privacidade" className="text-blue-600 hover:underline font-bold">Política de Privacidade</Link>.
                                </p>

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={acceptCookies}
                                        className="bg-slate-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-slate-800 transition-all active:scale-95"
                                    >
                                        Aceitar tudo
                                    </button>
                                    <Link
                                        href="/privacidade"
                                        className="text-slate-500 hover:text-slate-900 text-xs font-bold transition-colors"
                                    >
                                        Saiba mais
                                    </Link>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-slate-400 hover:text-slate-900 transition-colors p-1"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
