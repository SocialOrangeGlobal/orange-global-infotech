import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms and Conditions | Orange Global Infotech',
  description: 'Terms and Conditions for Orange Global Infotech services and products.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 font-medium mb-10 transition-colors">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="bg-white rounded-[32px] p-8 md:p-14 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="mb-12">
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-[#111111] mb-4 tracking-tight">
              Terms and Conditions
            </h1>
            <p className="text-gray-500 text-base">
              Last Updated: July 2026
            </p>
          </div>

          <div className="space-y-10 text-gray-600 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing our website and utilizing our services, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials on Orange Global Infotech's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose or for any public display;</li>
                <li>attempt to reverse engineer any software contained on Orange Global Infotech's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-4">3. Services and Deliverables</h2>
              <p>
                Orange Global Infotech provides digital transformation, software development, web development, and cloud computing solutions. The specific scope, timelines, and deliverables for any project will be outlined in a separate written agreement or Statement of Work (SOW) mutually agreed upon by both parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-4">4. Limitations</h2>
              <p>
                In no event shall Orange Global Infotech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Orange Global Infotech's website or services provided.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-4">5. Revisions and Errata</h2>
              <p>
                The materials appearing on our website may include technical, typographical, or photographic errors. Orange Global Infotech does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-4">6. Governing Law</h2>
              <p>
                Any claim relating to Orange Global Infotech's website or services shall be governed by the laws of India without regard to its conflict of law provisions.
              </p>
            </section>
          </div>
        </div>

      </div>
    </main>
  );
}
