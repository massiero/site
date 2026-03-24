import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'EduTIC - Gestão Escolar',
    description: 'Solução completa para gestão escolar com mais de 20 anos de excelência.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <body className={inter.className}>
                {children}
                <CookieConsent />
            </body>
        </html>
    );
}
