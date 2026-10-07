import { Star } from './star'

const balloons = [
  { name: 'Curious George', from: 'Curious George', color: '#b5652b', text: '#ffffff', note: 'The ever-curious little monkey and his famous sense of adventure.' },
  { name: 'Super Grover', from: 'Sesame Street', color: '#1f6fd1', text: '#ffffff', note: 'The caped, furry blue hero soaring high above the avenue.' },
  { name: 'Dora the Explorer', from: 'Dora the Explorer', color: '#c2318f', text: '#ffffff', note: 'The intrepid explorer leading the way down the parade route.' },
  { name: 'Kermit the Frog', from: 'The Muppets', color: '#3f9b3a', text: '#ffffff', note: 'Everyone’s favorite frog, bringing a classic grin to the city.' },
  { name: 'Hello Kitty', from: 'Sanrio', color: '#f5b82e', text: '#14183a', note: 'The iconic kitty with her signature bow, a crowd favorite.' },
  { name: 'Boss Baby', from: 'The Boss Baby', color: '#0f1640', text: '#fff8ee', note: 'The suit-wearing baby in charge — at least for the day.' },
  { name: 'SpongeBob SquarePants', from: 'SpongeBob SquarePants', color: '#ffd93b', text: '#14183a', note: 'The cheerful sponge bringing Bikini Bottom to Manhattan.' },
]

function initials(name: string) {
  return name
    .split(' ')
    .filter((w) => w !== 'the')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

export function Balloons() {
  return (
    <section id="balloons" aria-labelledby="balloons-heading" className="relative overflow-hidden bg-night py-20 text-night-foreground md:py-28">
      <Star className="pointer-events-none absolute right-10 top-12 size-6 text-gold" />
      <Star className="pointer-events-none absolute left-[12%] top-24 size-4 text-primary" />
      <Star className="pointer-events-none absolute bottom-20 left-8 size-5 text-gold" />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-gold">Past balloons</p>
          <h2 id="balloons-heading" className="font-display text-4xl font-extrabold tracking-tight text-balance md:text-6xl">
            Balloons I&apos;ve helped guide
          </h2>
          <p className="max-w-2xl text-lg text-night-foreground/80 text-pretty">
            From Herald Square to the heart of Manhattan, these giant favorites made the trip with me at the lines.
          </p>
        </div>

        <ul className="mt-14 flex flex-wrap justify-center gap-6">
          {balloons.map((balloon, i) => (
            <li
              key={balloon.name}
              className="flex w-full flex-col items-center gap-5 rounded-3xl bg-night-foreground p-6 pt-8 text-foreground shadow-xl sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
            >
              <div
                className="flex flex-col items-center animate-float"
                style={{ animationDelay: `${i * -0.8}s` }}
                aria-hidden="true"
              >
                <div
                  className="flex size-28 items-center justify-center rounded-[50%_50%_48%_48%/58%_58%_42%_42%] font-display text-3xl font-extrabold shadow-[inset_-10px_-12px_0_rgba(0,0,0,0.12)]"
                  style={{ backgroundColor: balloon.color, color: balloon.text }}
                >
                  {initials(balloon.name)}
                </div>
                <div className="h-3 w-4 rounded-b-md" style={{ backgroundColor: balloon.color }} />
                <svg viewBox="0 0 40 40" className="h-10 w-10 text-foreground/40">
                  <path d="M20 0 C 10 10, 30 20, 20 40" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{balloon.from}</span>
                <h3 className="font-display text-2xl font-extrabold leading-tight text-balance">{balloon.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{balloon.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
