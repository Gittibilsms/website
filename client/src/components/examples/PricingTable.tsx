import PricingTable from '../PricingTable';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function PricingTableExample() {
  return (
    <LanguageProvider>
      <PricingTable />
    </LanguageProvider>
  );
}
