export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-sm max-w-none space-y-6 text-foreground">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Ruomax Property Consult ("we", "our", or "us") operates the Ruomax website. This page
            informs you of our policies regarding the collection, use, and disclosure of personal
            data when you use our Service and the choices you have associated with that data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information Collection and Use</h2>
          <p>
            We collect several different types of information for various purposes to provide and
            improve our Service to you.
          </p>
          <h3 className="text-lg font-semibold mt-4 mb-2">Types of Data Collected:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Personal Data: Name, email address, phone number, address</li>
            <li>Usage Data: Pages visited, time spent, clicks, and interaction patterns</li>
            <li>Device Data: Browser type, IP address, device type</li>
            <li>Cookies: Information about your preferences and activities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Use of Data</h2>
          <p>Ruomax uses the collected data for various purposes:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features of our website</li>
            <li>To provide customer care and support</li>
            <li>To gather analysis or valuable information to improve our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Security of Data</h2>
          <p>
            The security of your data is important to us, but remember that no method of
            transmission over the Internet or method of electronic storage is 100% secure. While we
            strive to use commercially acceptable means to protect your Personal Data, we cannot
            guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the "Last Updated" date at
            the top of this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-2">
            Email: <a href="mailto:privacy@ruomax.com" className="text-primary hover:underline">privacy@ruomax.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}
