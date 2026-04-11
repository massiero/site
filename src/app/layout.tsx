import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export const viewport = {
    width: 'device-width',
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://edutic.com.br'),
    title: 'EduTIC - Gestão Escolar e Gerador de Horários',
    description: 'Solução completa para gestão escolar e geração de horários com mais de 20 anos de excelência no mercado educacional.',
    keywords: ['gestão escolar', 'gerador de horários', 'horário escolar', 'sistema para escolas', 'EduTIC', 'gestão pedagógica', 'secretaria escolar'],
    authors: [{ name: 'EduTIC' }],
    robots: 'index, follow',
    openGraph: {
        title: 'EduTIC - Gestão Escolar e Gerador de Horários',
        description: 'Gestão escolar completa e gerador de horários sem janelas ou conflitos.',
        url: 'https://edutic.com.br',
        siteName: 'EduTIC',
        locale: 'pt_BR',
        type: 'website',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'EduTIC Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'EduTIC - Gestão Escolar',
        description: 'Transforme a gestão da sua escola com a EduTIC.',
        images: ['/logo.png'],
    },
    icons: {
        icon: '/favicon.png',
        apple: '/favicon.png',
    },
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
