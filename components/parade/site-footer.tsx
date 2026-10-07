import { Star } from './star'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-12 text-center md:px-6">
        <div className="flex items-center gap-2" aria-hidden="true">
          <Star className="size-4 text-gold" />
          <Star className="size-6" />
          <Star className="size-4 text-gold" />
        </div>
        <p className="font-display text-2xl font-extrabold text-balance md:text-3xl">See you on the lines this Thanksgiving.</p>
        <p className="max-w-2xl text-sm text-primary-foreground/80 text-pretty">
          {
            "A personal volunteer showcase. Not affiliated with or endorsed by Macy's, Inc. All character names are trademarks of their respective owners."
          }
        </p>
      </div>
    </footer>
  )
}
