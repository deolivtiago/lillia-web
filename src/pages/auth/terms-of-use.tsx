import { Footer } from "@/layouts/footer"
import { Navbar } from "@/layouts/navbar"

export function TermsOfUse() {
  return (
    <div className="bg-background flex min-h-screen w-screen flex-col items-center">
      <header className="bg-sidebar sticky top-0 z-10 container shadow">
        <Navbar />
      </header>
      <main className="container px-4 py-8 text-center lg:px-48">
        <h1 className="text-2xl font-bold">Terms of Use</h1>
        <p className="mt-4">
          Welcome to our website! These terms of use outline the rules and
          regulations for the use of our website.
        </p>
        <p className="mt-4">
          By accessing this website, you agree to be bound by these terms of
          service. If you do not agree to these terms, please do not use our
          website.
        </p>
        <p className="mt-4">
          The content on this website is for informational purposes only. We do
          not guarantee the accuracy, completeness, or usefulness of any
          information on this website.
        </p>
        <p className="mt-4">
          We reserve the right to make changes to these terms of service at any
          time without notice. By continuing to use our website after any
          changes have been made, you agree to be bound by the updated terms of
          service.
        </p>

        <p className="mt-4">
          We do not collect any personal information from users of our website.
          However, we may use cookies to track user behavior on our website.
        </p>

        <p className="mt-4">
          We do not endorse any products or services mentioned on our website.
          Any links to other websites are provided as a convenience and do not
          imply any endorsement or approval of the content on those websites.
        </p>

        <p className="mt-4">
          We do not guarantee the security of any information transmitted to or
          from our website. Any use of our website is at your own risk.
        </p>

        <p className="mt-4">
          We do not guarantee the availability or reliability of our website. We
          may experience technical difficulties or downtime from time to time.
        </p>
      </main>
      <Footer />
    </div>
  )
}
