import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <div className="py-16 md:py-24 px-4 max-w-4xl mx-auto">
          <h1 className="serif-title text-primary mb-8">Terms & Conditions</h1>

          <div className="prose prose-sm max-w-none text-foreground space-y-6">
            <section>
              <h2 className="serif-section text-primary mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="serif-section text-primary mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or software) on our
                website for personal, non-commercial transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on our site</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="serif-section text-primary mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on our website are provided on an 'as is' basis. Kings & Queens makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties including, without
                limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="serif-section text-primary mb-4">4. Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Kings & Queens or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on the site, even if we or our authorized representative has been
                notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="serif-section text-primary mb-4">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on our website could include technical, typographical, or photographic errors.
                Kings & Queens does not warrant that any of the materials on the website are accurate, complete, or
                current. We may make changes to the materials contained on the website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="serif-section text-primary mb-4">6. Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kings & Queens has not reviewed all of the sites linked to its website and is not responsible for the
                contents of any such linked site. The inclusion of any link does not imply endorsement by us of the
                site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="serif-section text-primary mb-4">7. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kings & Queens may revise these terms of service for its website at any time without notice. By using
                this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="serif-section text-primary mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction
                in which Kings & Queens is located, and you irrevocably submit to the exclusive jurisdiction of the
                courts in that location.
              </p>
            </section>

            <section>
              <h2 className="serif-section text-primary mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us at:
                <br />
                <strong>Email:</strong> legal@kingsqueens.com
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
