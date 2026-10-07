'use client'

import { useEffect, useState } from 'react'
import { Star } from './star'

// Parade steps off at 8:30 AM Eastern on Thanksgiving Day.
const PARADE_START = new Date('2026-11-26T08:30:00-05:00').getTime()

function getRemaining(now: number) {
  const diff = Math.max(0, PARADE_START - now)
  return {
    done: diff === 0,
    units: [
      { label: 'Days', value: Math.floor(diff / 86_400_000) },
      { label: 'Hours', value: Math.floor((diff / 3_600_000) % 24) },
      { label: 'Minutes', value: Math.floor((diff / 60_000) % 60) },
      { label: 'Seconds', value: Math.floor((diff / 1000) % 60) },
    ],
  }
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const remaining = now === null ? null : getRemaining(now)

  return (
    <section id="countdown" aria-labelledby="countdown-heading" className="relative overflow-hidden bg-primary text-primary-foreground">
      <Star className="pointer-events-none absolute -left-10 -top-10 size-48 text-white/10" />
      <Star className="pointer-events-none absolute -bottom-16 -right-8 size-64 text-white/10" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-16 text-center md:px-6 md:py-20">
        <div className="flex flex-col items-center gap-3">
          <p className="font-bold uppercase tracking-[0.2em] text-gold">Thursday, November 26, 2026</p>
          <h2 id="countdown-heading" className="font-display text-4xl font-extrabold tracking-tight text-balance md:text-6xl">
            Countdown to the 100th Parade
          </h2>
          <p className="max-w-xl text-primary-foreground/90 text-pretty">
            A century of giant balloons, marching bands, and Thanksgiving morning magic on the streets of New York City.
          </p>
        </div>

        {remaining?.done ? (
          <p className="font-display text-3xl font-extrabold md:text-5xl">{"It's parade day!"}</p>
        ) : (
          <ul className="grid w-full max-w-3xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4" aria-live="off">
            {(remaining?.units ?? [
              { label: 'Days', value: null },
              { label: 'Hours', value: null },
              { label: 'Minutes', value: null },
              { label: 'Seconds', value: null },
            ]).map((unit) => (
              <li key={unit.label} className="flex flex-col items-center gap-1 rounded-2xl bg-night px-4 py-6 shadow-lg">
                <span className="font-display text-5xl font-extrabold tabular-nums text-gold md:text-6xl">
                  {unit.value === null ? '--' : String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-sm font-semibold uppercase tracking-widest text-night-foreground/80">{unit.label}</span>
              </li>
            ))}
          </ul>
        )}

        {remaining && !remaining.done && (
          <p className="sr-only">
            {`${remaining.units[0].value} days, ${remaining.units[1].value} hours until the 100th parade.`}
          </p>
        )}
      </div>
    </section>
  )
}
