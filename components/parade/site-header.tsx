import { Star } from './star'

const links = [
  { href: '#countdown', label: 'Countdown' },
  { href: '#experience', label: 'Experience' },
  { href: '#balloons', label: 'Balloons' },
  { href: '#scrapbook', label: 'Scrapbook' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
          <Star className="size-5" />
          <span>Balloon Handler</span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 text-sm font-semibold md:gap-8">
            {links.map((link) => (
              <li key={link.href} className={link.href === '#countdown' ? 'hidden sm:block' : undefined}>
                <a href={link.href} className="underline-offset-4 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
