import Navbar from '../Navbar';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function NavbarExample() {
  return (
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  );
}
