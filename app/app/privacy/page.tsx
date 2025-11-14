import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <div className="py-16 md:py-24 px-4 max-w-4xl mx-auto">
          <h1 className="serif-title text-primary mb-8">Privacy Policy</h1>

          <div className="prose prose-sm max-w-none text-foreground space-y-6">
            <section>
              <h2 className="serif-section text-primary mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kings & Queens Restaurant ("we," "our," or "us") operates with a strong commitment to protecting your
                privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when
                you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="serif-section text-primary mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may collect information about you in a variety of ways. The information we may collect on the site
                includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Personal Data: name, email address, phone number, reservation details</li>
                <li>Payment Information: processed securely through third-party providers</li>
                <li>Usage Data: pages visited, time spent, device information</li>
                <li>Location Data: if you grant permission for delivery services</li>
              </ul>
            </section>

            <section>
              <h2 className="serif-section text-primary mb-4">3. Use of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized
                experience. Specifically, we may use information collected about you via the site to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Process your reservations and orders</li>
                <li>Email you regarding your reservation or order status</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions</li>
                <li>Generate a personal profile about you</li>
                <li>Increase the efficiency and operation of the site</li>
              </ul>
            </section>

            <section>
              <h2 className="serif-section text-primary mb-4">4. Disclosure of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may share information we have collected about you in certain situations:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>
                  <strong>By Law or to Protect Rights:</strong> If required by law or to protect our legal rights
                </li>
                <li>
                  <strong>Third-Party Service Providers:</strong> We may share your information with vendors,
                  consultants, and service providers
                </li>
                <li>
                  <strong>Business Transfers:</strong> Your information may be transferred as part of any merger, sale,
                  or acquisition
                </li>
              </ul>
            </section>

            <section>
              <h2 className="serif-section text-primary mb-4">5. Security of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use administrative, technical, and physical security measures to protect your personal information.
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we
                strive to use commercially acceptable means to protect your personal information, we cannot guarantee
                its absolute security.
              </p>
            </section>

            <section>
              <h2 className="serif-section text-primary mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions or comments about this Privacy Policy, please contact us at:
                <br />
                <strong>Email:</strong> privacy@kingsqueens.com
                <br />
                <strong>Phone:</strong> (123) 456-7890
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
