import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy & Policy"
        description="Read our privacy policy and data protection guidelines. Learn how BYLART protects your information."
      />

      <div className="pt-24 pb-12 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Privacy & Policy
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              How we handle your data and protect your privacy
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-emerald lg:prose-xl">
            <h2 className="text-2xl font-bold mb-4">1. Information Collection</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We collect information you provide directly to us, such as when
              you contact us via email, sign up for our newsletter, or book a
              session with a therapist. This may include your name, email
              address, and any other information you choose to provide.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Use of Information</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We use the information we collect to operate and maintain our
              website, to communicate with you, and to provide the services you
              request. We do not sell or rent your personal information to third
              parties.
            </p>

            <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We take reasonable measures to help protect information about you
              from loss, theft, misuse, and unauthorized access, disclosure,
              alteration, and destruction.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We use cookies to improve your experience on our website. You can
              disable cookies in your browser settings, but please note that some
              parts of the website may not function properly as a result.
            </p>

            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact
              us at <a href="mailto:getintouch@bylart.com" className="text-emerald-600 hover:underline">getintouch@bylart.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
