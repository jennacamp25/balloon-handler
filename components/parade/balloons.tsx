import Image from 'next/image'
import { Star } from './star'

const balloons = [
  {
    name: 'Curious George',
    from: 'Curious George',
    color: '#b5652b',
    image: '/images/balloons/curious-george.jpg',
    alt: 'Curious George balloon in his red and yellow cap floating between Manhattan buildings',
    position: 'object-center',
    note: 'The ever-curious little monkey and his famous sense of adventure.',
  },
  {
    name: 'Super Grover',
    from: 'Sesame Street',
    color: '#1f6fd1',
    image: '/images/balloons/super-grover.jpg',
    alt: 'Super Grover balloon soaring above a team of handlers in blue on a red parade route',
    position: 'object-top',
    note: 'The caped, furry blue hero soaring high above the avenue.',
  },
  {
    name: 'Dora the Explorer',
    from: 'Dora the Explorer',
    color: '#c2318f',
    image: '/images/balloons/dora.jpg',
    alt: 'Dora the Explorer balloon being inflated the night before the parade',
    position: 'object-center',
    note: 'The intrepid explorer leading the way down the parade route.',
  },
  {
    name: 'Kermit the Frog',
    from: 'The Muppets',
    color: '#3f9b3a',
    image: '/images/balloons/kermit.jpg',
    alt: 'Kermit the Frog balloon flying along Central Park West above handlers dressed in green',
    position: 'object-top',
    note: 'Everyone’s favorite frog, bringing a classic grin to the city.',
  },
  {
    name: 'Hello Kitty',
    from: 'Sanrio',
    color: '#e23b4a',
    image: '/images/balloons/hello-kitty.jpg',
    alt: 'Balloon handler in a blue hat with the balloon captain in front of the netted Hello Kitty balloon',
    position: 'object-bottom',
    note: 'The iconic kitty with her signature bow, a crowd favorite.',
  },
  {
    name: 'Boss Baby',
    from: 'The Boss Baby',
    color: '#0f1640',
    image: '/images/balloons/boss-baby.jpg',
    alt: 'Two balloon handlers in black and white uniforms in front of the Boss Baby balloon',
    position: 'object-center',
    note: 'The suit-wearing baby in charge — at least for the day.',
  },
  {
    name: 'SpongeBob SquarePants',
    from: 'SpongeBob SquarePants',
    color: '#e0a800',
    image: '/images/balloons/spongebob.jpg',
    alt: 'Balloon handler in a yellow hat with the balloon captain in front of the SpongeBob balloon',
    position: 'object-center',
    note: 'The cheerful sponge bringing Bikini Bottom to Manhattan.',
  },
]

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
          {balloons.map((balloon) => (
            <li
              key={balloon.name}
              className="group flex w-full flex-col overflow-hidden rounded-3xl bg-night-foreground text-foreground shadow-xl sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={balloon.image}
                  alt={balloon.alt}
                  fill
                  sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover ${balloon.position} transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-x-0 bottom-0 h-1.5" style={{ backgroundColor: balloon.color }} aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1 p-5">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: balloon.color }}>
                  {balloon.from}
                </span>
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
