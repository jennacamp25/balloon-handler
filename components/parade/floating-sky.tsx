import type { CSSProperties } from 'react'
import { Star } from './star'

type FloatingBalloon = {
  left: string
  size: number
  color: string
  duration: number
  delay: number
  sway: number
}

type TwinkleStar = {
  left: string
  top: string
  size: number
  delay: number
  duration: number
}

const BALLOONS: FloatingBalloon[] = [
  { left: '6%', size: 46, color: 'var(--primary)', duration: 17, delay: -2, sway: 5 },
  { left: '18%', size: 32, color: 'var(--gold)', duration: 21, delay: -11, sway: 6 },
  { left: '33%', size: 40, color: 'var(--night-foreground)', duration: 19, delay: -6, sway: 4.5 },
  { left: '52%', size: 28, color: 'var(--primary)', duration: 23, delay: -15, sway: 7 },
  { left: '67%', size: 50, color: 'var(--gold)', duration: 18, delay: -4, sway: 5.5 },
  { left: '80%', size: 34, color: 'var(--primary)', duration: 22, delay: -9, sway: 6.5 },
  { left: '92%', size: 42, color: 'var(--night-foreground)', duration: 20, delay: -13, sway: 5 },
]

const STARS: TwinkleStar[] = [
  { left: '10%', top: '14%', size: 14, delay: 0, duration: 2.6 },
  { left: '24%', top: '30%', size: 10, delay: 1.1, duration: 3.2 },
  { left: '41%', top: '12%', size: 18, delay: 0.5, duration: 2.8 },
  { left: '57%', top: '26%', size: 11, delay: 1.8, duration: 3.4 },
  { left: '72%', top: '10%', size: 16, delay: 0.9, duration: 2.4 },
  { left: '86%', top: '22%', size: 12, delay: 2.2, duration: 3 },
  { left: '95%', top: '40%', size: 10, delay: 1.4, duration: 2.7 },
  { left: '4%', top: '44%', size: 12, delay: 2.6, duration: 3.1 },
  { left: '63%', top: '46%', size: 9, delay: 0.3, duration: 2.5 },
]

function Balloon({ balloon }: { balloon: FloatingBalloon }) {
  const style = {
    left: balloon.left,
    animationDuration: `${balloon.duration}s`,
    animationDelay: `${balloon.delay}s`,
  } as CSSProperties

  return (
    <div className="absolute bottom-0 animate-rise" style={style}>
      <div
        className="flex flex-col items-center animate-sway"
        style={{ animationDuration: `${balloon.sway}s` } as CSSProperties}
      >
        <div
          className="relative rounded-[50%_50%_48%_52%/42%_42%_58%_58%] opacity-90 shadow-lg"
          style={{
            width: balloon.size,
            height: balloon.size * 1.2,
            backgroundColor: balloon.color,
          }}
        >
          <span className="absolute left-[22%] top-[16%] h-[22%] w-[16%] rotate-[-25deg] rounded-full bg-white/50" />
        </div>
        <span
          className="-mt-0.5 size-0 border-x-4 border-b-[6px] border-x-transparent"
          style={{ borderBottomColor: balloon.color }}
        />
        <span className="h-16 w-px bg-night-foreground/40" />
      </div>
    </div>
  )
}

export function FloatingSky() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {STARS.map((star) => (
        <span
          key={`${star.left}-${star.top}`}
          className="absolute animate-twinkle text-gold"
          style={
            {
              left: star.left,
              top: star.top,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            } as CSSProperties
          }
        >
          <Star
            className="drop-shadow-[0_0_6px_rgba(245,184,46,0.8)]"
            style={{ width: star.size, height: star.size }}
          />
        </span>
      ))}
      {BALLOONS.map((balloon) => (
        <Balloon key={balloon.left} balloon={balloon} />
      ))}
    </div>
  )
}
