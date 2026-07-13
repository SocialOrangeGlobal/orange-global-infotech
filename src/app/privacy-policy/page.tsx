import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Orange Global Infotech',
  description: 'Privacy Policy for Orange Global Infotech services and products.',
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-base">
              Last Updated: July 2026
            </p>
          </div>

          <div className="space-y-10 text-gray-600 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-4">1. Introduction</h2>
              <p>
                At Orange Global Infotech, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Orange Global Infotech and how we use it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
              </p>
              <p className="mb-4">
                If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect in various ways, including to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our website and services;</li>
                <li>Improve, personalize, and expand our website;</li>
                <li>Understand and analyze how you use our website;</li>
                <li>Develop new products, services, features, and functionality;</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes;</li>
                <li>Send you emails;</li>
                <li>Find and prevent fraud.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-4">4. Log Files</h2>
              <p>
                Orange Global Infotech follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-4">5. Cookies and Web Beacons</h2>
              <p>
                Like any other website, Orange Global Infotech uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-4">6. Security of Your Data</h2>
              <p>
                We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-4">7. Contact Us</h2>
              <p>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@orangeglobal.com.
              </p>
            </section>
          </div>
        </div>

      </div>
    </main>
  );
}
