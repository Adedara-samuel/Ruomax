import Link from 'next/link'

export default function SitemapPage() {
  const siteStructure = [
    {
      category: 'Main Pages',
      links: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/contact', label: 'Contact' },
      ],
    },
    {
      category: 'Properties',
      links: [
        { href: '/properties', label: 'All Properties' },
        { href: '/properties?category=buy', label: 'Buy Properties' },
        { href: '/properties?category=rent', label: 'Rent Properties' },
        { href: '/properties?category=lease', label: 'Lease Properties' },
      ],
    },
    {
      category: 'User Account',
      links: [
        { href: '/admin/login', label: 'Admin Login' },
        { href: '/admin/dashboard', label: 'Dashboard' },
      ],
    },
    {
      category: 'Legal',
      links: [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
      ],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Explore all pages and sections available on the Ruomax website.
      </p>

      <div className="grid gap-8">
        {siteStructure.map((section) => (
          <div key={section.category}>
            <h2 className="text-2xl font-bold text-primary mb-4">{section.category}</h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-lg text-primary hover:underline hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-secondary rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Property Details</h3>
        <p className="text-foreground mb-4">
          Each property has its own detail page. Browse our properties listing to view individual
          property pages.
        </p>
        <Link href="/properties" className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          View All Properties
        </Link>
      </div>
    </div>
  )
}
