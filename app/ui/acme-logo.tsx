import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <DocumentTextIcon className="h-10 w-10" />
      <p className="ml-2 text-[36px]">InvoiceFlow</p>
    </div>
  );
}