import './globals.css';
import { EditModeProvider } from '@/contexts/EditModeContext';
import EditModeIndicator from '@/components/edit/EditModeIndicator';

export const metadata = {
  title: 'Jak prezentovat ANT',
  description: 'Interní prezentace agentury (ant)',
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  other: {
    'X-UA-Compatible': 'IE=edge',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <head />
      <body className="font-sans antialiased">
        <EditModeProvider>
          {children}
          <EditModeIndicator />
        </EditModeProvider>
      </body>
    </html>
  );
}
