'use client'

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'Agency', href: '#services' },
      { label: 'Ad Library', href: '#tool' },
      { label: 'Advisory', href: '#contact' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'How We Work', href: '#process' },
      { label: 'Results', href: '#testimonials' },
      { label: 'Industries', href: '#industries' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Ad Library', href: 'https://www.chatgptadlibrary.com/', external: true },
      { label: 'Blog', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Newsletter', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 py-16">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 font-extrabold text-base mb-4">
              <span className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center text-white text-sm">G</span>
              GPT Ads Media
            </a>
            <p className="text-sm text-stone-500 leading-relaxed max-w-xs">
              The first agency built to design, launch, and scale ad campaigns inside AI conversations.
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-widest text-stone-400 mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8 border-t border-stone-200 text-xs text-stone-400">
          <p>&copy; 2024 GPT Ads Media. All rights reserved.</p>
          <p>hello@gptadsmedia.com</p>
        </div>
      </div>
    </footer>
  )
}
