import Image from 'next/image'
import { Star } from './star'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-night text-night-foreground">
      <Image
        src="/images/parade-hero.png"
        alt="Giant parade balloons floating above a crowded New York City avenue on Thanksgiving morning"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/75 to-night/30" />

      <div className="mx-auto flex min-h-[78svh] max-w-6xl flex-col justify-end gap-6 px-4 pb-16 pt-28 md:px-6 md:pb-24">
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-accent-foreground">
          <Star className="size-4 text-primary" />
          {"Macy's Thanksgiving Day Parade Volunteer"}
        </p>
        <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-8xl">
          Holding the lines.{' '}
          <span className="text-gold">Lifting the magic.</span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-night-foreground/90 md:text-xl text-pretty">
          {
            "I'm an experienced volunteer balloon handler who has helped guide some of the parade's most beloved giant balloons through the streets of New York City — teamwork in action, one city block at a time."
          }
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#balloons"
            className="rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            See the balloons
          </a>
          <a
            href="#countdown"
            className="rounded-full border-2 border-night-foreground px-6 py-3 font-bold transition-colors hover:bg-night-foreground hover:text-night"
          >
            Countdown to the 100th
          </a>
        </div>
      </div>
    </section>
  )
}
