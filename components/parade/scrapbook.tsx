import Image from 'next/image'
import { Star } from './star'

const moments = [
  'Suiting up in costume before step-off',
  'Holding the lines along the route',
  'Teaming up with fellow handlers and captains',
  'Posing with the balloons at inflation',
]

export function Scrapbook() {
  return (
    <section id="scrapbook" aria-labelledby="scrapbook-heading" className="bg-background py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:px-6 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col gap-5">
          <p className="font-bold uppercase tracking-[0.2em] text-primary">Scrapbook</p>
          <h2 id="scrapbook-heading" className="font-display text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
            Memories from the parade route
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Every parade brings a new costume, a new crew, and a new giant friend overhead. Here are a few favorite
            moments from my years on the lines.
          </p>
          <ul className="flex flex-col gap-3">
            {moments.map((moment) => (
              <li key={moment} className="flex items-center gap-3 font-semibold">
                <Star className="size-4 shrink-0 text-primary" />
                <span>{moment}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="w-full max-w-xl flex-1">
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl ring-8 ring-gold/40">
            <Image
              src="/images/collage.jpg"
              alt="Collage of parade memories: handlers in green, blue, and Dora costumes, the Super Grover balloon, and a group photo in front of a Macy's parade sign"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 text-center text-sm text-muted-foreground">
            A few of my parade days, in costume and on the lines.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
