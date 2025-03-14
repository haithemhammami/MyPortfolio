import '../styles/globals.css';

export const metadata = {
    title: {
        template: 'portfoli',
        default: 'myporfolio',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-grid-pattern sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        
                        <div className="grow">{children}</div>
                 
                    </div>
                </div>
            </body>
        </html>
    );
}
